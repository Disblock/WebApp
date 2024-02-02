"use strict";
const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));
const discordRegen = require("./discord_token_regen.js");
const bigInt = require("big-integer"); //Used to check permissions on a server
const { askRedisForGuilds, saveGuildsInRedis } = require("./redis/redis.js");

module.exports = async function (req, databasePool, logger, redisClient) {
  /* This module is used to get the guilds where an user has an Admin permission. We get all guilds from Discord API, then return only guilds with an Admin access. */

  //If guilds are cached, get them from Redis and return them.
  //That's one less request to Discord API
  const cachedGuilds = await askRedisForGuilds(redisClient, logger, req.session.discord_id);
  if (cachedGuilds) {
    return cachedGuilds;
  }

  /* ==================================== */

  async function askDiscordForGuilds(token) {
    if (token == undefined) {
      return undefined;
    }

    try {
      logger.debug("Sending a request to Discord to get guilds of user " + req.session.discord_id);

      const response = await (
        await fetch("https://discord.com/api/users/@me/guilds", {
          headers: {
            authorization: "Bearer " + req.session.token,
          },
        })
      ).json();

      if (response.message == "You are being rate limited.") {
        logger.debug(req.session.discord_id + " was rate limited by Discord.");
        return undefined;
      } else if (response.error == undefined && response.message == undefined) {
        //OK
        logger.debug("Sent a request to Discord to get guilds of user " + req.session.discord_id);
        return response;
      } else {
        //Error
        logger.warn(
          "Error from the Discord API : " +
            req.session.discord_id +
            " may had removed our access. Error : " +
            response.error +
            ", message : " +
            response.message
        );
        return "Token not set";
      }
    } catch (err) {
      logger.error("Error while getting user " + req.session.discord_id + " 's guilds : " + err);
      return undefined;
    }
  }

  function getGuildsWhereAdmin(guildsJson) {
    //Final function, it will return servers where the user is admin
    const channels = [];
    for (let i = 0; i < guildsJson.length; i++) {
      if (bigInt(guildsJson[i].permissions_new).and(0x8) == 0x8) {
        //AND operation on bits to check if user is admin
        channels.push(guildsJson[i]);
      }
    }

    return channels;
  }

  /* ==================================== */

  const maxTries = 2; //2, so we can try to get servers, and regen the token is neccessary

  let counter = 0;
  do {
    counter++;

    const discordResponse = await askDiscordForGuilds(req.session.token);
    if (discordResponse != undefined && discordResponse != "Token not set") {
      //OK
      const guilds = getGuildsWhereAdmin(discordResponse);
      await saveGuildsInRedis(redisClient, logger, req.session.discord_id, guilds);
      return guilds;
    } else if (discordResponse == "Token not set") {
      //NOT OK, must regen the token

      logger.debug(req.session.discord_id + " 's token may have expired, we're trying now to regenerate it.");

      const newToken = await discordRegen(databasePool, logger, req.session.discord_id);
      if (newToken == undefined) {
        //Error, the user has removed the application's access ?
        logger.warn("Error while getting " + req.session.discord_id + " 's guilds, destroying the session...");
        req.session.destroy();
        return [];
      } else {
        //OK, let's try again
        req.session.token = newToken;
        req.session.save(); //Must save to ensure everything is saved

        continue;
      }
    } else {
      //NOT OK, was an error
      logger.warn(
        "Error while getting " + req.session.discord_id + " 's guilds from Discord, destroying the session..."
      );
      req.session.destroy();
      return [];
    }
  } while (counter < maxTries);

  //If we arrive here, without a return statement being used, we can assume the token wasn't correctly regenerated
  //Maybe the user removed our access to his tokens

  logger.info(
    "Error while getting " +
      req.session.discord_id +
      " 's guilds, token regenerated but seems useless, destroying the session..."
  );
  req.session.destroy();
  return [];
};
