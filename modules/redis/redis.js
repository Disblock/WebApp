"use strict";
const { promisify } = require("util");

module.exports = {
  askRedisForGuilds: async function (redisClient, logger, userId) {
    try {
      const getAsync = promisify(redisClient.get).bind(redisClient); /* https://stackoverflow.com/a/63349259/19753521 */
      const guilds = await getAsync(userId + "guilds");

      if (guilds) {
        logger.debug("Got cached servers from Redis for user " + userId);
        return JSON.parse(guilds);
      } else {
        return undefined;
      }
    } catch (err) {
      logger.error("Error while getting saved guilds for user " + userId + " in redis : " + err);
      return undefined;
    }
  },

  saveGuildsInRedis: async function (redisClient, logger, userId, guilds) {
    try {
      await redisClient.set(userId + "guilds", JSON.stringify(guilds), "EX", 120); //Stored for 2 min in Redis
      logger.debug("Cached guilds in redis for user " + userId);
    } catch (err) {
      logger.error("Failed to cache guilds for user " + userId + " in redis : " + err);
    }
  },
};
