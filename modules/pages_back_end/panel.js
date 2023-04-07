"use strict";
const discordGetServers = require("../discord_get_servers.js"); //Used to get user's Discord guilds ( Where has an admin access )
const panelLocalizationFr = require("../localization/panel_fr.js");
const panelLocalizationEn = require("../localization/panel_en.js");

module.exports = async function (req, res, databasePool, logger, redisClient) {
  let locale;
  //Select right language
  if (req.session.locale == "fr") {
    locale = panelLocalizationFr;
  } else {
    locale = panelLocalizationEn;
  }

  let news;
  try {
    logger.debug("Sending a SQL request to get news from Database");
    news = (await databasePool.query("SELECT title, message, sent_date FROM news ORDER BY news_id DESC LIMIT 10;"))
      .rows;
  } catch (err) {
    logger.error("Error while getting news from Database : " + err);
    res.status(500).end("Error 500");
    return;
  }

  if (req.session.discord_id != undefined) {
    discordGetServers(req, databasePool, logger, redisClient).then(async (guilds) => {
      //guilds represent the guilds that user is admin on ( Array )
      //This function can destroy the session if user is rate limited

      if (req.session) {
        //If there is a problem ( Like a rate limit ), the session is destroyed so we send invalids sessions on index
        res.render("panel.ejs", {
          session: req.session,
          locale: locale,
          news: news,
          guilds: guilds,
          guild: undefined,
          page: 0,
        });
      } else {
        res.redirect("/");
      }
    });
  }
  //Not logged in
  else {
    res.render("panel.ejs", {
      session: req.session,
      locale: locale,
      news: news,
      guilds: [],
      guild: undefined,
      page: 0,
    });
  }
};
