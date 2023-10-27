"use strict";
const discordGetServers = require("../discord_get_servers.js"); //Used to get user's Discord guilds ( Where has an admin access )
const checkGuildAccess = require("../check_access_to_guild.js"); //Used to check if an user has an admin permission on a guild
const guildsDatabase = require("../database/guilds.js"); //Used to check in database if a server exist and if this server is premium
const getUserFromId = require("../utils/get_user_from_id.js"); //Used to get user data from Discord API
const panelLocalizationFr = require("../localization/panel_fr.js");
const panelLocalizationEn = require("../localization/panel_en.js");
const pagesEnums = require("../enums/pages.js"); //Enums for pages to render

module.exports = async function (req, res, databasePool, logger, redisClient) {
  if (req.session.discord_id != undefined) {
    //Check if server is in database ( = if the bot was added in the server )
    guildsDatabase
      .checkIfServerExist(databasePool, req.params.id, true)
      .then(async (data) => {
        if (data.banned) {
          //Server banned
          res.redirect("/panel?message=7");
          logger.debug(req.session.discord_id + " tried to access banned server " + req.params.id);
          return;
        }
        if (data.exist) {
          //Server is registered in database
          const premium = data.premium; //Will store if the server is premium or not

          //Check if user is admin on selected server
          const guilds = await discordGetServers(req, databasePool, logger, redisClient); //Get all guilds where user has an admin permission
          const guild = checkGuildAccess(guilds, req.params.id);
          if (!guild) {
            //Not admin
            res.redirect("/panel");
            return;
          }

          logger.info("User " + req.session.discord_id + " got logs access to guild " + guild.id);
          //User is admin on the selected server

          //Get saved logs for this guild :
          databasePool
            .query(
              "SELECT actions.action, action_date, staff_action, users.user_id FROM audit_log INNER JOIN audit_log_actions AS actions ON actions.audit_action_id=audit_log.action INNER JOIN users ON audit_log.user_id=users.user_id WHERE server_id=$1 ORDER BY action_date DESC LIMIT $2;",
              [String(req.params.id), process.env.P_MAX_LOGS]
            )
            .then(async (logs) => {
              //Successfully got saved logs

              const users = []; //Array that will store users ID found in these logs.
              for (let i = 0; i < logs.rows.length; i++) {
                if (!users.includes(logs.rows[i].user_id)) {
                  //If user id not already found
                  users.push(logs.rows[i].user_id);
                }
              } //Added to the list

              //We will now get more info about these users from Discord
              for (let i = 0; i < users.length; i++) {
                const user = await getUserFromId(databasePool, logger, users[i]);
                if (user) {
                  //We will add properties required to render logs entries
                  for (let j = 0; j < logs.rows.length; j++) {
                    if (logs.rows[j].user_id == user.id) {
                      logs.rows[j].username = user.username;
                      logs.rows[j].avatarUrl = user.avatar
                        ? "https://cdn.discordapp.com/avatars/" + user.id + "/" + user.avatar + "?size=64"
                        : "/img/profile.svg";
                    }
                  }
                }

                //Else, we can't get data about this user.. He may have removed our access
              }

              let locale;
              //Select right language
              if (req.session.locale == "fr") {
                locale = panelLocalizationFr;
              } else {
                locale = panelLocalizationEn;
              }

              //Everything seems good, rendering page
              res.render("panel.ejs", {
                session: req.session,
                locale: locale,
                guilds: guilds,
                guild: guild,
                premium: premium,
                page: pagesEnums.logsPanel,
                logs: logs.rows,
              });
            })
            .catch(async (err) => {
              //If there is an error
              logger.error("Error while getting guild's saved workspaces : " + err);
              res.status(500).end("Error 500");
            });
        }
        //Server isn't registered in database
        else {
          res.redirect("/panel?message=1");
        }
      })
      .catch(async (err) => {
        //If there is an error while checking if server exist in database
        logger.error("Error while checking if guild is registered in database : " + err);
        res.status(500).end("Error 500");
      });
  }
  //Not logged in
  else {
    res.redirect("/panel");
  }
};
