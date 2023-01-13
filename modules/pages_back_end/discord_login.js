'use strict';
const url = require('url');//Enable access to query string parameters
const crypto = require('crypto');//Generate random strings
const discord_login = require('../discord_login.js');//Used to login with Discord

module.exports = async function(req, res, database_pool, logger){

  if(req.session.discord_id == undefined){//If the user is logged in, his Discord Id is stored, and is not undefined
    if(url.parse(req.url,true).query.state === req.session.state){
      //State is the same as the registered one

      req.session.state = crypto.randomBytes(4).toString('hex');//State is regenered; to avoid some security issues

      if(url.parse(req.url,true).query.code!=undefined){
        discord_login.login(url.parse(req.url,true).query.code, database_pool, req, res, logger, 'identify guilds', process.env.REDIRECT_URL);
      }else{
        //User denied access, we can redirect him to the home page
        res.redirect('/');
      }

    }else{
      //User may be clickjacked, cancelling connection
      res.status(403).end("Security error ! Go back to the home page, reload and try again. You may also have disabled your cookies.");
    }
  }else{
    //User is already logged in
    res.redirect('/');
  }

}
