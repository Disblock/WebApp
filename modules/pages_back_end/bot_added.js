"use strict";
const url = require("url"); //Enable access to query string parameters
const crypto = require("crypto"); //Generate random strings
const discordLogin = require("../discord_login.js"); //Used to login with Discord

module.exports = async function (req, res, databasePool, logger) {
  if (req.session.discord_id == undefined) {
    //If the user is logged in, his Discord Id is stored, and is not undefined

    logger.debug("Someone added Disblock on a Discord server, we will log this user in");

    req.session.state = crypto.randomBytes(4).toString("hex"); //State is regenered; to avoid some security issues

    if (url.parse(req.url, true).query.code != undefined) {
      discordLogin.login(
        url.parse(req.url, true).query.code,
        databasePool,
        req,
        res,
        logger,
        "identify guilds applications.commands bot",
        process.env.REDIRECT_URL_BOT_ADDED
      );
    }
    //User denied access, we can redirect him to the home page
    else {
      res.redirect("/");
    }
  }
  //User is already logged in
  else {
    res.redirect("/panel");
  }
};
