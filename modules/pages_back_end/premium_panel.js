'use strict';
const panel_localization_fr = require('../localization/panel_fr.js');
const panel_localization_en = require('../localization/panel_en.js');
const discord_get_servers = require('../discord_get_servers.js');//Used to get user's Discord guilds ( Where has an admin access )

module.exports = async function(req, res, database_pool, logger){

  let locale;
  //Select right language
  if(req.session.locale=='fr'){
    locale=panel_localization_fr;
  }else{
    locale=panel_localization_en;
  }

  if(req.session.discord_id != undefined){//If the user is logged in, his Discord Id is stored, and is not undefined
    //User logged in
    discord_get_servers.servers(req, database_pool, logger, (guilds)=>{
      //guilds represent the guilds that user is admin on ( Array )
      //This function can destroy the session if user is rate limited
      if(req.session){
        //If there is a problem ( Like a rate limit ), the session is destroyed so we send invalids sessions on index
        res.render('panel.ejs', {session: req.session, locale: locale, guilds: guilds, guild: undefined, page:4});
      }else{
        res.redirect('/');
      }

    });


  }else{
    //User not logged in
    res.redirect('/');
  }

}
