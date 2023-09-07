"use strict";
const checkGuildAccess = require("../check_access_to_guild.js"); //Used to check if an user has an admin permission on a guild
const discordGetServers = require("../discord_get_servers.js"); //Used to get user's Discord guilds ( Where has an admin access )
const guildsDatabase = require("../database/guilds.js"); //Used to check in database if a server exist and if this server is premium
const panelLocalizationFr = require("../localization/panel_fr.js");
const panelLocalizationEn = require("../localization/panel_en.js");
const blocklyLocalizationFr = require("../blockly/localization/fr.js"); //Add localization to the generator - FR
const blocklyLocalizationEn = require("../blockly/localization/en.js"); //Add localization to the generator - EN
const defaultWorkspace = require("../blockly/default_workspace.js"); //The default workspace is none found in database
const workspaceErrors = require("../enums/workspace_errors.js"); //Enum of possibles errors when sending a workspace
const pagesEnums = require("../enums/pages.js"); //Enums for pages to render

module.exports = async function (req, res, databasePool, logger, redisClient, blocklyBlocks) {
  if (req.session.discord_id != undefined) {
    //Check if server is in database ( = if the bot was added in the server ) and if this server is premium
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
          const guilds = await discordGetServers(req, databasePool, logger, redisClient);
          const guild = checkGuildAccess(guilds, req.params.id);
          if (!guild) {
            //Not admin
            res.redirect("/panel");
            return;
          }

          //Getting guilds saved workspace
          databasePool
            .query("SELECT xml FROM server_workspace WHERE server_id = $1 ORDER BY workspace_id DESC LIMIT 1;", [
              guild.id,
            ])
            .then(async (data) => {
              //Check here if a previous workspace was saved
              let workspaceXml = defaultWorkspace; //Default workspace loaded by default, and changed if another workspace found in database
              if (data.rows[0]) {
                workspaceXml = data.rows[0].xml;
                logger.debug("A saved workspace was found for guild " + guild.id);
              }

              //Let's render Blockly app, with custom blocks added here
              let blocklyLocale, locale; //Store the language file to use

              //Select right language
              if (req.session.locale == "fr") {
                blocklyLocale = blocklyLocalizationFr;
                locale = panelLocalizationFr;
              } else {
                blocklyLocale = blocklyLocalizationEn;
                locale = panelLocalizationEn;
              }

              res.render("panel.ejs", {
                session: req.session,
                locale: locale,
                guilds: guilds,
                guild: guild,
                premium: premium,
                blocks: blocklyBlocks,
                blocklyLocale: blocklyLocale,
                workspaceXml: workspaceXml,
                errorsEnum: JSON.stringify(workspaceErrors),
                page: pagesEnums.guild_panel,
                definedRegexes: require("../utils/regex.js"),
              });
            })

            .catch(async (err) => {
              //If there is an error while getting server workspace
              logger.error("Error while getting saved workspace from database for guild " + guild.id + " : " + err);
              res.status(500).end("Error 500");
            });
        }
        //Server isn't registered in database
        else {
          res.redirect("/panel?message=1");
        }
      })
      .catch(async (err) => {
        //If there is an erro while checking if server exist in database
        logger.error("Error while checking if guild is registered in database : " + err);
        res.status(500).end("Error 500");
      });
  }
  //Not logged in
  else {
    res.redirect("/panel");
  }
};
