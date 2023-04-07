"use strict";

const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));
const aesjs = require("aes-js"); //Used to encrypt tokens
const pbkdf2 = require("pbkdf2"); //Used to transform process.env.AES_PASSWORD into a valid password for aes
const regenToken = require("../discord_token_regen.js");

const { promisify } = require("util");
const pbkdf2Async = promisify(pbkdf2.pbkdf2).bind(pbkdf2);

async function getUserDataFromAPI(token, logger) {
  const AbortController = globalThis.AbortController || (await import("abort-controller")); //Used to create timeout for fetch

  const controller = new AbortController();
  const timeout = setTimeout(() => {
    controller.abort();
  }, 500); //500ms before timeout

  let result = { message: "Error" };

  try {
    result = await (
      await fetch("https://discord.com/api/users/@me", {
        headers: {
          authorization: "Bearer " + token,
        },
        signal: controller.signal, //Signal that will stop this if timeout triggered
      })
    ).json();
  } catch (err) {
    //Error : timeout or network problem
    logger.error("Timeout or network problem while getting user data from Discord");
    throw err;
  } finally {
    clearTimeout(timeout);
  }

  return result;
}

//Function used to get information about an user from Discord.
//The user must have already used Disblock
//Return undefined in case of error
module.exports = async (databasePool, logger, userId) => {
  logger.debug(
    "We will now try to get data about user " + userId + " from Discord. Preparing SQL request to get token"
  );

  let row;
  try {
    row = (
      await databasePool.query("SELECT ENCODE(token, 'hex') AS hex_token, salt FROM users WHERE user_id=$1;", [userId])
    ).rows;
  } catch (err) {
    logger.error("Error while geting user token from database : " + err);
    return undefined;
  }
  if (row.length != 1) {
    throw "User not found";
  }

  row = row[0]; //List -> Object

  //We found someone, we will now decrypt the token
  try {
    const key = await pbkdf2Async(process.env.AES_PASSWORD, row.salt, 18 /*iterations*/, 256 / 8, "sha512");
    const aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(1));
    const token = aesjs.utils.utf8.fromBytes(aesCtr.decrypt(aesjs.utils.hex.toBytes(row.hex_token))); //The encrypted hex is converted to bytes, then decrypted, then converted to String

    logger.debug("Got user from database and decrypted token. We can now ask Discord for data about this user");

    const apiResult = await getUserDataFromAPI(token, logger);
    if (apiResult.id) {
      //OK, got answer from Discord
      logger.debug("Successfully got user information from Discord");
      return apiResult;
    } else {
      //NOT OK, we will try to regen the token before trying again
      logger.debug("Error with user token, we will try to regen the token.. Message : " + apiResult.message);
      const newToken = await regenToken(databasePool, logger, userId);
      if (newToken) {
        //OK
        const apiResult2 = await getUserDataFromAPI(newToken, logger);
        if (apiResult2.id) {
          //OK
          return apiResult2;
        } else {
          //NOT OK
          logger.error("Can't get user data from Discord !");
          return undefined;
        }
      } else {
        //Not OK
        logger.debug("Can't regen token for user, and can't get info about him.. Cancelling");
        return undefined;
      }
    }
  } catch (err) {
    logger.error("Error while decrypting token or getting data from Discord : " + err);
  }
};
