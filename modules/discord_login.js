/* eslint-disable camelcase */
"use strict";
const url = require("url"); //Enable access to query string parameters
const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));
const crypto = require("crypto"); //Generate random strings
const aesjs = require("aes-js"); //Used to encrypt tokens
const pbkdf2 = require("pbkdf2"); //Used to transform process.env.AES_PASSWORD into a valid password for aes

const { promisify } = require("util");
const pbkdf2Async = promisify(pbkdf2.pbkdf2).bind(pbkdf2);
//Since pbkdf2.pbkdf2 only works with callbacks we need to do this to avoid callbacks hell

module.exports = {
  //Take the discord login code and a connection object to the database
  login: async function (code, databasePool, req, res, logger, scope, redirectUri) {
    try {
      //Sending the code to get tokens
      logger.debug("Sending authorization code to Discord to log in an user...");
      const oauthResult = await fetch("https://discord.com/api/oauth2/token", {
        method: "POST",
        body: new URLSearchParams({
          client_id: process.env.clientId,
          client_secret: process.env.clientSecret,
          code: code,
          grant_type: "authorization_code",
          redirect_uri: redirectUri, //Must be modified depending if direct login by user, or login when bot was added
          scope: scope,
        }),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      const oauthData = await oauthResult.json();

      if (oauthData.error == undefined) {
        //Successfull, check if the user is known in the database. If yes, update his tokens and last login. If no, insert tupple in database

        //Get user data
        try {
          logger.debug("Trying to get user's data from Discord API...");
          fetch("https://discord.com/api/users/@me", {
            headers: {
              authorization: "Bearer " + oauthData.access_token,
            },
          })
            .then((result) => result.json())
            .then(async (response) => {
              //Now, check if the user is already registered
              try {
                if (!response.id) {
                  logger.error("Response from Discord : " + response.message);
                  throw "Invalid user ID sent by Discord API when logging in";
                } //Throw an error if Discord didn't sent user's data

                logger.debug(
                  "Sending an SQL request to database : Checking if an user exist in database with user ID " +
                    response.id
                );
                const results = await databasePool.query(
                  "SELECT EXISTS(SELECT 1 FROM users WHERE user_id=$1) AS exist, EXISTS(SELECT 1 FROM user_ban WHERE user_id=$1 AND active = TRUE) AS banned;",
                  [response.id]
                );

                if (results.rows[0].banned) {
                  //User banned, we will redirect and stop here.
                  res.redirect("/?error=1");
                  return;
                }

                //We will encrypt the tokens and update the values in database
                //https://github.com/ricmoo/aes-js#what-is-a-key
                const salt = crypto.randomBytes(4).toString("hex"); //Salt saved in database
                const key = await pbkdf2Async(process.env.AES_PASSWORD, salt, 18 /*iterations*/, 256 / 8, "sha512");

                //https://github.com/ricmoo/aes-js#ctr---counter-recommended
                let aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(1));
                const encryptedToken = aesjs.utils.hex.fromBytes(
                  aesCtr.encrypt(aesjs.utils.utf8.toBytes(oauthData.access_token))
                ); //The String token is converted to bytes, then encrypted, then converted to hex
                aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(1)); //We need to redefine, since the counter mode of operation maintains internal state
                const encryptedRefreshToken = aesjs.utils.hex.fromBytes(
                  aesCtr.encrypt(aesjs.utils.utf8.toBytes(oauthData.refresh_token))
                );
                //We have encrypted the tokens, we can now continue and send that to database

                logger.debug("Sending an SQL request to database : registering or updating an user : " + response.id);

                if (results.rows[0].exist) {
                  await databasePool.query(
                    "UPDATE users SET token = DECODE($1, 'hex'), refresh_token = DECODE($2, 'hex'), last_login = NOW(), salt=$3 WHERE user_id = $4;",
                    [encryptedToken, encryptedRefreshToken, salt, response.id]
                  );
                  logger.info("User " + response.id + " logged in");
                } else {
                  if (process.env.ENABLE_REGISTRATION == "false") {
                    //Registrations are closed
                    res.redirect("/?error=1975664");
                    return;
                  }
                  await databasePool.query(
                    "INSERT INTO users (user_id, token, refresh_token, last_login, creation_date, salt) VALUES($1, DECODE($2, 'hex'), DECODE($3, 'hex'), NOW(), NOW(), $4);",
                    [response.id, encryptedToken, encryptedRefreshToken, salt]
                  );
                  logger.info("User " + response.id + " registered");
                }

                req.session.discord_id = response.id;
                req.session.username = response.username; //Only cached for the session
                req.session.avatar = response.avatar; //Only cached for the session
                req.session.token = oauthData.access_token;
                req.session.locale = response.locale === "fr" ? "fr" : "en"; //If discord locale is French, save it. If not, default to English
                req.session.save();

                logger.debug("Saved session's data for user " + req.session.discord_id);

                if (url.parse(req.url, true).query.guild_id) {
                  //Bot was added, we will redirect to the guild panel
                  res.redirect("/panel/" + url.parse(req.url, true).query.guild_id);
                } else {
                  res.redirect("/panel");
                }
              } catch (err) {
                logger.error("Error when saving to database an user's data : " + err);
                res.status(500).end("Error 500");
              }
            })
            .catch((err) => {
              logger.error("Error when trying to get user's data from Discord API : " + err);
              res.status(500).end("Error 500");
            });
        } catch (err) {
          logger.error("Error when trying to get user's data from Discord API : " + err);
          res.status(500).end("Error 500");
        }
      } else {
        //Code is incorect or any other problem
        logger.warn("Error when tried to log in an user : " + oauthData.error);
        res.redirect("/");
      }
    } catch (err) {
      logger.error("Error when trying to get oAuth data from Discord API : " + err);
      res.status(500).end("Error 500");
    }
  },
};
