"use strict";
const url = require("url"); //Enable access to query string parameters
const crypto = require("crypto"); //Generate random strings
const discordLogin = require("../discord_login.js"); //Used to login with Discord

module.exports = async function (req, res, databasePool, logger) {
  if (req.session.discord_id == undefined) {
    //If the user is logged in, his Discord Id is stored, and is not undefined
    if (url.parse(req.url, true).query.state === req.session.state) {
      //State is the same as the registered one

      req.session.state = crypto.randomBytes(4).toString("hex"); //State is regenered; to avoid some security issues

      if (url.parse(req.url, true).query.code != undefined) {
        discordLogin.login(
          url.parse(req.url, true).query.code,
          databasePool,
          req,
          res,
          logger,
          "identify guilds",
          process.env.REDIRECT_URL
        );
      }
      //User denied access, we can redirect him to the home page
      else {
        res.redirect("/");
      }
    }
    //User may be clickjacked, cancelling connection
    else {
      res
        .status(403)
        .end(
          "Security error ! Go back to the home page, reload and try again. You may also have disabled your cookies."
        );
    }
  }
  //User is already logged in
  else {
    res.redirect("/");
  }
};
