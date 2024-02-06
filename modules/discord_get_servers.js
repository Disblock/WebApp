"use strict";
const discordRegen = require("./discord_token_regen.js");
const { askRedisForGuilds, saveGuildsInRedis } = require("./redis/redis.js");
const { askDiscordForGuilds, getGuildsWhereAdmin } = require("./utils/get_guilds_from_Discord_API.js");

module.exports = async function (req, databasePool, logger, redisClient) {
  /* This module is used to get the guilds where an user has an Admin permission. We get all guilds from Discord API, then return only guilds with an Admin access. */

  //If guilds are cached, get them from Redis and return them.
  //That's one less request to Discord API
  const cachedGuilds = await askRedisForGuilds(redisClient, logger, req.session.discord_id);
  if (cachedGuilds) {
    return cachedGuilds;
  }

  const maxTries = 2; //2, so we can try to get servers, and regen the token is neccessary

  let counter = 0;
  do {
    counter++;

    const discordResponse = await askDiscordForGuilds(req.session.token, req, logger);
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
