'use strict';
const check_guild_access = require('../check_access_to_guild.js');//Used to check if an user has an admin permission on a guild
const discord_get_servers = require('../discord_get_servers.js');//Used to get user's Discord guilds ( Where has an admin access )
const guilds_database = require('../database/guilds.js');//Used to check in database if a server exist and if this server is premium
const panel_localization_fr = require('../localization/panel_fr.js');
const panel_localization_en = require('../localization/panel_en.js');
const blockly_localization_fr = require('../blockly/localization/fr.js');//Add localization to the generator - FR
const blockly_localization_en = require('../blockly/localization/en.js');//Add localization to the generator - EN
const default_workspace = require('../blockly/default_workspace.js');//The default workspace is none found in database

module.exports = async function(req, res, database_pool, logger, redisClient, blocklyBlocks){

  if(req.session.discord_id!=undefined){

    //Check if server is in database ( = if the bot was added in the server ) and if this server is premium
    guilds_database.checkIfServerExist(database_pool, req.params.id, true)
    .then(async(data)=>{
      if(data.banned){//Server banned
        res.redirect('/panel?message=7');
        logger.debug(req.session.discord_id+" tried to access banned server "+req.params.id);
        return;
      }
      if(data.exist){
        //Server is registered in database
        const premium = data.premium;//Will store if the server is premium or not

        //Check if user is admin on selected server
        const guilds = await discord_get_servers(req, database_pool, logger, redisClient);
        const guild = check_guild_access(guilds, req.params.id);
        if(!guild){
          //Not admin
          res.redirect('/panel');
          return;
        }

        //Getting guilds saved workspace
        database_pool.query('SELECT xml FROM server_workspace WHERE server_id = $1 ORDER BY workspace_id DESC LIMIT 1;', [guild.id])
        .then(async (data) => {

          //Check here if a previous workspace was saved
          let workspace_xml = default_workspace;//Default workspace loaded by default, and changed if another workspace found in database
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
