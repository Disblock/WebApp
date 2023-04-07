"use strict";
//Used translations
const indexLocalizationFr = require("../localization/index_fr.js");
const indexLocalizationEn = require("../localization/index_en.js");

module.exports = async function (req, res) {
  let locale;
  //Select right language
  if (req.session.locale == "fr") {
    locale = indexLocalizationFr;
  } else {
    locale = indexLocalizationEn;
  }

  res.render("index.ejs", { session: req.session, locale: locale });
};
