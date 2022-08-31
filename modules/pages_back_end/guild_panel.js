'use strict';
const discord_get_servers = require('../discord_get_servers.js');//Used to get user's Discord guilds ( Where has an admin access )
const panel_localization_fr = require('../localization/panel_fr.js');
const panel_localization_en = require('../localization/panel_en.js');
const blockly_localization_fr = require('../blockly/localization/fr.js');//Add localization to the generator - FR
const blockly_localization_en = require('../blockly/localization/en.js');//Add localization to the generator - EN

module.exports = async function(req, res, database_pool, logger, blocklyBlocks){

  if(req.session.discord_id!=undefined){

    //Check if server is in database ( = if the bot was added in the server ) and if this server is premium
    database_pool.query('SELECT EXISTS(SELECT 1 FROM servers WHERE server_id=$1) AS server, EXISTS(SELECT 1 FROM premium WHERE server_id=$1 AND (end_date > NOW() OR end_date IS NULL) ) AS premium;', [String(req.params.id)])
    .then(async(data)=>{
      if(data.rows[0].server){
        //Server is registered in database
        const premium = !!data.rows[0].premium;//From Int to Bool, will store if the server is premium or not

        //Check if user is admin on selected server
        discord_get_servers.servers(req, database_pool, logger, (guilds)=>{//Get all guilds where user has an admin permission
          let guild = undefined;
          for(let i=0; i<guilds.length; i++){//Iterate throught all user's admin guilds, and compare them to the ID of the selected guilds
            if(guilds[i].id===String(req.params.id)){//If one guild match this ID, the user is admin in this guild. If none match with, user isn't admin on it
              guild = guilds[i];
            }
          }

          if(guild!=undefined){
            logger.info("User "+ req.session.discord_id +" got panel access to guild "+guild.id);
            //User is admin on the selected server

            //Getting guilds saved workspace
            database_pool.query('SELECT xml FROM server_workspace WHERE server_id = $1 ORDER BY workspace_id DESC LIMIT 1;', [guild.id])
            .then(async (data) => {

              //Check here if a previous workspace was saved
              let workspace_xml = undefined;
              if(data.rows[0]){
                workspace_xml = data.rows[0].xml;
                logger.debug("A saved workspace was found for guild "+guild.id);
              }

              //Let's render Blockly app, with custom blocks added here
              let blocklyLocale,locale;//Store the language file to use

              //Select right language
              if(req.session.locale=='fr'){
                blocklyLocale=blockly_localization_fr;
                locale=panel_localization_fr;
              }else{
                blocklyLocale=blockly_localization_en;
                locale=panel_localization_en;
              }

              res.render('panel.ejs', {session: req.session, locale: locale, guilds:guilds, guild: guild, premium:premium, blocks: blocklyBlocks, blocklyLocale: blocklyLocale, workspace_xml:workspace_xml, page:1});

            })

          .catch(async(err)=>{//If there is an error while getting server workspace
            logger.error("Error while getting saved workspace from database for guild "+guild.id+" : "+err);
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
    .catch(async(err)=>{//If there is an erro while checking if server exist in database
      logger.error("Error while checking if guild is registered in database : "+err);
      res.status(500).end("Error 500");
    });

  }else{
    //Not logged in
    res.redirect('/panel');
  }

}
