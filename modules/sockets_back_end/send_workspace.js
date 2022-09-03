'use strict';
const discord_get_servers = require('../discord_get_servers.js');//Used to get user's Discord guilds ( Where has an admin access )
const blockly_xml_to_js = require('../blockly/blockly_xml_to_js.js');//Convert Blockly's XML into JS
const serverLogs = require('../database/logs.js');
const guildsDatabase = require('../database/guilds.js');//Used to check in database if a server exist and if this server is premium

module.exports = async function(socket, server_id, data, callback, database_pool, logger, Blockly, blocklyToken){

  if(socket.request.session.discord_id!=undefined){//Session must be defined
    logger.debug(socket.request.session.discord_id+" is sending a workspace");
    discord_get_servers.servers(socket.request, database_pool, logger, async(guilds)=>{//Get a list of user's servers where has admin access
      var guild = undefined;
      for(var i=0; i<guilds.length; i++){
        if(guilds[i].id===String(server_id)){
          guild = guilds[i];//If a server has same id than sended one, the server is registered in guild
        }
      }

      if(guild!=undefined){//If guild is defined, a server where user is admin has been found

        //Check if the bot is on this server and if premium
        let premium;
        try{
          let data;
          data = await guildsDatabase.checkIfServerExist(database_pool, server_id, true);
          if(!data.exist){
            callback({status: "NOT OK"});
            return;//This server don't exist in database
          }
          premium = data.premium;
        }catch(err){
          logger.error("Error while checking if a guild is premium : "+err);
          callback({status: "NOT OK"});
          return;
        }


        logger.info(socket.request.session.discord_id+" sent a new workspace via socket.io for the guild "+guild.id);
        let result = blockly_xml_to_js.xml_to_js(server_id, data, Blockly, blocklyToken, database_pool, logger, premium).then(async(result)=>{//blocklyToken is a random string used to split the generated code

          //Save this modification in logs
          let resultLog = await serverLogs.addEventToLogs(database_pool, server_id, socket.request.session.discord_id, serverLogs.eventType.updatedWorkspace, premium);
          if(!resultLog.correct){
            //error
            logger.error("Error while saving workspace modification in logs for guild "+server_id+" : "+resultLog.message);
          }

          if(result==0){
            callback({status: "OK"});
          }else if(result==1){
            callback({status: "NOT OK"});
          }

        });

      }else{
        //User hasn't access to this server
        logger.debug("Someone tried to edit a workspace via socket.io without access to the guild");
        callback({status: "NOT OK"});
      }
    });
  }else{
    //Not logged in
    callback({status: "NOT OK"});
  }

}
