"use strict";
const checkGuildAccess = require("../check_access_to_guild.js"); //Used to check if an user has an admin permission on a guild
const discordGetServers = require("../discord_get_servers.js"); //Used to get user's Discord guilds ( Where has an admin access )
const blocklyXmlToJs = require("../blockly/blockly_xml_to_js.js"); //Convert Blockly's XML into JS
const serverLogs = require("../database/logs.js");
const guildsDatabase = require("../database/guilds.js"); //Used to check in database if a server exist and if this server is premium
const workspaceErrorsEnum = require("../enums/workspace_errors.js"); //Enum that refer to possible errors while working on code sent by a server

module.exports = async function (socket, serverId, data, callback, databasePool, logger, redisClient, Blockly) {
  if (socket.request.session.discord_id != undefined) {
    //Session must be defined
    logger.debug(socket.request.session.discord_id + " is sending a workspace");
    const guilds = await discordGetServers(socket.request, databasePool, logger, redisClient); //Get a list of user's servers where has admin access
    const guild = checkGuildAccess(guilds, String(serverId));
    if (!guild) {
      //User hasn't access to this server
      logger.debug("Someone tried to edit a workspace via socket.io without access to the guild");
      callback({ status: "NOT OK", errorCode: workspaceErrorsEnum.notLoggedIn });
      return;
    }

    //Check if the bot is on this server and if premium
    let premium;
    try {
      const data = await guildsDatabase.checkIfServerExist(databasePool, serverId, true);
      if (data.banned) {
        //Server banned
        logger.debug("Someone tried to send a new workspace for a banned server");
        callback({ status: "NOT OK", errorCode: workspaceErrorsEnum.banned });
        return;
      }
      if (!data.exist) {
        callback({ status: "NOT OK", errorCode: workspaceErrorsEnum.notFound });
        return; //This server don't exist in database
      }
      premium = data.premium;
    } catch (err) {
      logger.error("Error while checking if a guild is premium : " + err);
      callback({ status: "NOT OK", errorCode: workspaceErrorsEnum.error });
      return;
    }

    logger.info(socket.request.session.discord_id + " sent a new workspace via socket.io for the guild " + guild.id);
    blocklyXmlToJs
      .xmlToJs(serverId, data, Blockly, databasePool, logger, premium)
      .then(async (result) => {
        //Save this modification in logs
        const resultLog = await serverLogs.addEventToLogs(
          databasePool,
          serverId,
          socket.request.session.discord_id,
          serverLogs.eventType.updatedWorkspace,
          premium
        );
        if (!resultLog.correct) {
          //error
          logger.error(
            "Error while saving workspace modification in logs for guild " + serverId + " : " + resultLog.message
          );
        }

        if (result == 0) {
          callback({ status: "OK" });
        } else {
          callback({ status: "NOT OK", errorCode: result });
        }
      })
      .catch((err) => {
        logger.error("Error while working with workspace sent by server " + serverId + " : " + err);
        callback({ status: "NOT OK", errorCode: workspaceErrorsEnum.error });
      });
  }
  //Not logged in
  else {
    callback({ status: "NOT OK", errorCode: workspaceErrorsEnum.notLoggedIn });
  }
};
