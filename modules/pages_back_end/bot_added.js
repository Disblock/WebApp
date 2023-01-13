'use strict';
const url = require('url');//Enable access to query string parameters
const crypto = require('crypto');//Generate random strings
const discord_login = require('../discord_login.js');//Used to login with Discord

module.exports = async function(req, res, database_pool, logger){

  if(req.session.discord_id == undefined){//If the user is logged in, his Discord Id is stored, and is not undefined

    logger.debug("Someone added Disblock on a Discord server, we will log this user in");

    req.session.state = crypto.randomBytes(4).toString('hex');//State is regenered; to avoid some security issues

    if(url.parse(req.url,true).query.code!=undefined){
      discord_login.login(url.parse(req.url,true).query.code, database_pool, req, res, logger, 'identify guilds applications.commands bot', process.env.REDIRECT_URL_BOT_ADDED);
    }else{
      //User denied access, we can redirect him to the home page
      res.redirect('/');
    }

  }else{
    //User is already logged in
    res.redirect('/panel');
  }

}
