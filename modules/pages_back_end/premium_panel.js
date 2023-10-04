"use strict";
const panelLocalizationFr = require("../localization/panel_fr.js");
const panelLocalizationEn = require("../localization/panel_en.js");
const discordGetServers = require("../discord_get_servers.js"); //Used to get user's Discord guilds ( Where has an admin access )
const crypto = require("crypto"); //Generate random strings
const pagesEnums = require("../enums/pages.js"); //Enums for pages to render

module.exports = async function (req, res, databasePool, logger, redisClient) {
  if (req.session.discord_id != undefined) {
    //If the user is logged in, his Discord Id is stored, and is not undefined
    //User logged in
    const guilds = await discordGetServers(req, databasePool, logger, redisClient);
    //guilds represent the guilds that user is admin on ( Array )
    //This function can destroy the session if user is rate limited
    if (req.session) {
      //If there is a problem ( Like a rate limit ), the session is destroyed so we send invalids sessions on index

      let locale;
      //Select right language
      if (req.session.locale == "fr") {
        locale = panelLocalizationFr;
      } else {
        locale = panelLocalizationEn;
      }

      logger.debug("Checking premiums slots for user " + req.session.discord_id);
      databasePool
        .query(
          "SELECT premium_id, start_date, end_date, p.server_id, premium_code, s.name FROM premium p LEFT JOIN servers s ON p.server_id=s.server_id WHERE user_id=$1 AND (end_date > NOW() OR end_date IS NULL) ORDER BY premium_id;",
          [req.session.discord_id]
        )
        .then(async (result) => {
          //We generate a security token to avoid some security problems
          req.session.securityToken = crypto.randomBytes(16).toString("hex");

          //We also save all guilds that user can access, that will allow us to don't re-ask them to discord ( which would throw a rate limit error )
          req.session.workingOnServer = [];
          for (const guild of guilds) {
            req.session.workingOnServer.push(guild.id);
          }

          res.render("panel.ejs", {
            session: req.session,
            locale: locale,
            guilds: guilds,
            guild: undefined,
            page: pagesEnums.premiumPanel,
            premiumSlots: result.rows,
          });
        })
        .catch(async (error) => {
          logger.error("Error while getting premiums slots for user : " + error);
          res.status(500).end("Error ! Please, try again later or report this to an administrator");
        });
    } else {
      res.redirect("/");
    }
  }
  //User not logged in
  else {
    res.redirect("/");
  }
};
