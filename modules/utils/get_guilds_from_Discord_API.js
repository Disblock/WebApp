"use strict";

const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));
const bigInt = require("big-integer"); //Used to check permissions on a server

module.exports = {
  askDiscordForGuilds: async function (token, req, logger) {
    //This function is used to get guilds associated to an user from Discord API
    //We need a token for the user, the web request containing the session, and the log system
    //This function isn't tested for now.
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
  },

  getGuildsWhereAdmin: function (guildsJson) {
    //This function will return servers where the user is admin. This one is tested
    const channels = [];
    for (let i = 0; i < guildsJson.length; i++) {
      if (bigInt(guildsJson[i].permissions_new).and(0x8) == 0x8) {
        //AND operation on bits to check if user is admin
        channels.push(guildsJson[i]);
      }
    }

    return channels;
  },
};
