"use strict";
const checkGuildAccess = require("../check_access_to_guild.js"); //Used to check if an user has an admin permission on a guild
const discordGetServers = require("../discord_get_servers.js"); //Used to get user's Discord guilds ( Where has an admin access )
const guildsDatabase = require("../database/guilds.js"); //Used to check in database if a server exist and if this server is premium
const panelLocalizationFr = require("../localization/panel_fr.js");
const panelLocalizationEn = require("../localization/panel_en.js");
const crypto = require("crypto"); //Generate random strings
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
          const premium = data.premium; //will store if the server is premium or not

          //Check if user is admin on selected server
          const guilds = await discordGetServers(req, databasePool, logger, redisClient); //Get all guilds where user has an admin permission
          const guild = checkGuildAccess(guilds, req.params.id);
          if (!guild) {
            //Not admin
            res.redirect("/panel");
            return;
          }

          logger.info("User " + req.session.discord_id + " got rollback access to guild " + guild.id);
          //User is admin on the selected server

          //Get saved workspaces for this guild :
          databasePool
            .query(
              "SELECT workspace_id, creation_date FROM server_workspace WHERE server_id=$1 ORDER BY creation_date DESC LIMIT $2 OFFSET 1",
              [String(req.params.id), process.env.P_MAX_ROLLBACKS]
            )
            .then(async (savedWorkspaces) => {
              //Successfully got saved workspaces

              //If a rollback is done, we will use a security token to be sure that users can rollback only after visited this page
              req.session.securityToken = crypto.randomBytes(4).toString("hex");

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
                page: pagesEnums.rollbackPanel,
                savedWorkspaces: savedWorkspaces.rows,
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
