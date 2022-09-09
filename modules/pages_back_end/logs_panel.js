'use strict';
const discord_get_servers = require('../discord_get_servers.js');//Used to get user's Discord guilds ( Where has an admin access )
const guilds_database = require('../database/guilds.js');//Used to check in database if a server exist and if this server is premium
const panel_localization_fr = require('../localization/panel_fr.js');
const panel_localization_en = require('../localization/panel_en.js');

module.exports = async function(req, res, database_pool, logger){

  if(req.session.discord_id!=undefined){

    //Check if server is in database ( = if the bot was added in the server )
    guilds_database.checkIfServerExist(database_pool, req.params.id, true)
    .then(async(data)=>{
      if(data.exist){
        //Server is registered in database
        const premium = data.premium;//Will store if the server is premium or not

        //Check if user is admin on selected server
        discord_get_servers.servers(req, database_pool, logger, (guilds)=>{//Get all guilds where user has an admin permission
          let guild = undefined;
          for(let i=0; i<guilds.length; i++){//Iterate throught all user's admin guilds, and compare them to the ID of the selected guilds
            if(guilds[i].id===String(req.params.id)){//If one guild match this ID, the user is admin in this guild. If none match with, user isn't admin on it
              guild = guilds[i];
            }
          }

          if(guild!=undefined){
            logger.info("User "+ req.session.discord_id +" got logs access to guild "+guild.id);
            //User is admin on the selected server

            //Get saved logs for this guild :
            database_pool.query('SELECT actions.action, action_date, staff_action, users.username, users.avatar, users.user_id FROM audit_log INNER JOIN audit_log_actions AS actions ON actions.audit_action_id=audit_log.action INNER JOIN users ON audit_log.user_id=users.user_id WHERE server_id=$1 ORDER BY action_date DESC LIMIT $2;', [String(req.params.id), process.env.P_MAX_LOGS])
            .then(async(logs)=>{
              //Successfully got saved logs

              let locale;
              //Select right language
              if(req.session.locale=='fr'){
                locale=panel_localization_fr;
              }else{
                locale=panel_localization_en;
              }

              //Everything seems good, rendering page
              res.render('panel.ejs', {session: req.session, locale: locale, guilds:guilds, guild: guild, premium:premium, page:3, logs:logs.rows});
            })
            .catch(async(err)=>{//If there is an error
              logger.error("Error while getting guild's saved workspaces : "+err);
              res.status(500).end("Error 500");
            });

          }else{
            //User isn't admin on the selected server

            //The discord_get_servers.servers() function can log out an user if error while getting his guilds ( rate limits, ... ). We should suppose that req.session isn't defined here
            res.redirect('/');
          }
        });

      }else{
        //Server isn't registered in database
        res.redirect('/panel?message=1');
      }

    })
    .catch(async(err)=>{//If there is an error while checking if server exist in database
      logger.error("Error while checking if guild is registered in database : "+err);
      res.status(500).end("Error 500");
    });

  }else{
    //Not logged in
    res.redirect('/panel');
  }

}
