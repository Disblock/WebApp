"use strict";
const checkGuildAccess = require("../check_access_to_guild.js"); //Used to check if an user has an admin permission on a guild
const discordGetServers = require("../discord_get_servers.js"); //Used to get user's Discord guilds ( Where has an admin access )
const crypto = require("crypto"); //Generate random strings
const serverLogs = require("../database/logs.js"); //Save modifications on servers to logs
const blocklyXmlToJs = require("../blockly/blockly_xml_to_js.js"); //Convert Blockly's XML into JS
const guildsDatabase = require("../database/guilds.js"); //Used to check in database if a server exist and if this server is premium

module.exports = async function (req, res, databasePool, logger, redisClient, Blockly) {
  if (req.session.discord_id != undefined) {
    //Check if user is admin on selected server
    const guilds = await discordGetServers(req, databasePool, logger, redisClient); //Get all guilds where user has an admin permission
    const guild = checkGuildAccess(guilds, req.params.id);

    if (guild && req.session.securityToken === req.query.token && req.session.securityToken != undefined) {
      //User is admin on the selected server and visited the rollback panel before trying to rollback
      req.session.securityToken = crypto.randomBytes(4).toString("hex");

      let premium; //Store if the server is premium or not
      try {
        premium = (await guildsDatabase.checkIfServerExist(databasePool, req.params.id, true)).premium;
      } catch (err) {
        logger.error("Error while checking if a guild is premium : " + err);
        return 1;
      }

      databasePool
        .query("SELECT xml FROM server_workspace WHERE server_id=$1 AND workspace_id=$2;", [
          req.params.id,
          req.params.workspaceId,
        ])
        .then(async (data) => {
          if (data.rows.length > 0) {
            //Found xml for this workspace

            //This function will regenerate codes for this workspace and save it as the newest workspace existing
            blocklyXmlToJs
              .xmlToJs(String(req.params.id), data.rows[0].xml, Blockly, databasePool, logger, premium)
              .then(async (result) => {
                if (result == 0) {
                  //OK
                  logger.info("User " + req.session.discord_id + " rollbacked workspace for guild " + req.params.id);

                  //Adding this event to server's logs. Action = 2 represent a rollback.
                  const resultLog = await serverLogs.addEventToLogs(
                    databasePool,
                    req.params.id,
                    req.session.discord_id,
                    serverLogs.eventType.rollbackedWorkspace,
                    premium
                  );
                  if (resultLog.correct) {
                    //OK
                    logger.debug("Logged rollbacked workspace for guild " + String(req.params.id));
                    res.redirect("/panel/" + String(req.params.id) + "?message=2");
                  } else {
                    //Error while logging
                    logger.error(
                      "Error while saving rollback in logs for guild " +
                        String(req.params.id) +
                        " : " +
                        resultLog.message
                    );
                    res.redirect("/panel/" + String(req.params.id) + "?message=2"); //We don't need to send an alert to users, the workspace was successfully rollbacked, but not logged.
                  }
                } else {
                  //Error with xml
                  logger.error(
                    "Failed to rollback guild " +
                      String(req.params.id) +
                      " : xml_to_js function returned an error :" +
                      result
                  );
                  res.redirect("/panel?message=3");
                }
              })
              .catch(async (err) => {
                //Error while executing function
                logger.error(
                  "Failed to rollback guild " +
                    String(req.params.id) +
                    " : error was thrown in xml_to_js function : " +
                    err
                );
                res.redirect("/panel?message=3");
              });
          } else {
            //Didn't found xml
            logger.error("Failed to rollback guild " + String(req.params.id) + " : xml not found in database !");
            res.redirect("/panel?message=3");
          }
        })
        .catch(async (err) => {
          //Error in database

          logger.error("Error while getting xml for rollback : " + err);
          res.status(500).end("Error 500");
        });
    }
    //User hadn't visited rollback page, so he may not be an admin on this server

    //The discordGetServers.servers() function can log out an user if error while getting his guilds ( rate limits, ... ). We should suppose that req.session isn't defined here
    else {
      res.redirect("/");
    }
  }
  //Not logged in
  else {
    res.redirect("/panel");
  }
};
