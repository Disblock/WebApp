const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const secrets = require('./secrets.js');
const discord_regen = require('./discord_token_regen.js');
const bigInt = require("big-integer");//Used to check permissions on a server

module.exports = {
  servers: async function(req, database_pool, logger, callback){

    function getGuilds(token, callback){
      if(token==undefined){return(callback(undefined));}
      try{
        logger.debug("Sending a request to Discord to get guilds of user "+req.session.discord_id);

        fetch('https://discord.com/api/users/@me/guilds', {
          headers: {
            authorization: 'Bearer '+req.session.token,
          }
        }).then(result => result.json()).then(response => {

          if(response.message=="You are being rate limited."){
            logger.info(req.session.discord_id + " was rate limited by Discord ( Spammed get user's guilds )");
            return(callback(undefined));

          }else if(response.error==undefined && response.message==undefined){
            //OK
            logger.debug("Sent a request to Discord to get guilds of user "+ req.session.discord_id);
            return(callback(response));

          }else{
            //Error
            logger.info("Error from the Discord API : "+req.session.discord_id+" may had removed our access");
            return(callback('Token not set'));
          }
        });

      }catch(err){
        logger.error("Error while getting user "+req.session.discord_id+" 's guilds : "+err);
        return(callback(undefined));
      }
    }

    function getChannelsWhereAdmin(channels_json){
      //Final function, it will return servers where the user is admin
      let channels = [];
      for(var i=0;i<channels_json.length;i++){
        if(bigInt(channels_json[i].permissions_new).and(0x8) == 0x8){//AND operation on bits to check if user is admin
          channels.push(channels_json[i]);
        }
      }
      callback(channels);
    }


    getGuilds(req.session.token, async function(result){
      if(result!=undefined && result!='Token not set'){
        //OK
        getChannelsWhereAdmin(result);
      }else if(result=='Token not set'){
        //NOT OK, must regen the token
        logger.debug(req.session.discord_id+" 's token may have expired, we're trying now to regenerate it.");

        discord_regen.regen(req, database_pool, logger, function(new_token){
                if(new_token==undefined){
                  //Error, the user has removed the application's access ?
                  logger.info("Error while getting "+req.session.discord_id+" 's guilds, destroying the session...");
                  req.session.destroy();
                  return(callback([]));
                }else{
                  //OK, let's try again, no need to use new_token, req.session is updated in regen function
                  getGuilds(req.session.token, function(result){
                    if(result!=undefined && result!='Token not set'){
                      getChannelsWhereAdmin(result);
                    }else{
                      //Fatal error : user may have removed access to the application
                      logger.info("Error while getting "+req.session.discord_id+" 's guilds, token regenerated but seems useless, destroying the session...");
                      req.session.destroy();
                      return(callback([]));
                    }
                  })

                }
              });

      }else{
        //NOT OK, was an error
        logger.info("Error while getting "+req.session.discord_id+" 's guilds, destroying the session...");
        req.session.destroy();
        return(callback([]));
      }
    });
  }
}
