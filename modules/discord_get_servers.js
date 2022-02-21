const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const secrets = require('./secrets.js');
const discord_regen = require('./discord_token_regen.js');
const bigInt = require("big-integer");//Used to check permissions on a server

module.exports = {
  servers: async function(req, database_pool, callback){

    function getGuilds(token, callback){
      if(token==undefined){return(callback(undefined));}
      try{

        fetch('https://discord.com/api/users/@me/guilds', {
          headers: {
            authorization: 'Bearer '+req.session.token,
          }
        }).then(result => result.json()).then(response => {
          if(response.message=="You are being rate limited."){
            //Rate limited, rip ( User has spammed )
            return(callback(undefined));
          }else if(response.error==undefined && response.message==undefined){
            //OK
            return(callback(response));
          }else{
            //Error
            return(callback('Token not set'));
          }
        });

      }catch(err){
        console.log(err);
        return(callback(undefined));
      }
    }

    function getChannelsWhereAdmin(channels_json){
      //Final function, it will return servers where the user is admin
      let channels = [];
      for(var i=0;i<channels_json.length;i++){
        if(bigInt(channels_json[i].permissions_new).and(0x8) == 0x8){
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

        discord_regen.regen(req, database_pool, function(new_token){
                if(new_token==undefined){
                  //Error, the user has removed the application's access ?
                  console.log('ERROR, '+req.session.discord_id+' may have removed app access');
                  req.session.destroy();
                }else{
                  //OK, let's try again, no need to use new_token, req.session is updated in regen function
                  getGuilds(req.session.token, function(result){
                    if(result!=undefined && result!='Token not set'){
                      getChannelsWhereAdmin(result);
                    }else{
                      //Fatal error : user may have removed access to the application
                      console.log('USER\'S FATAL ERROR, '+req.session.discord_id+' may have removed app access');
                      req.session.destroy();
                    }
                  })

                }
              });

      }else{
        //NOT OK, was an error
        console.log('ERROR : Unable to get guilds of an user. He may have removed app\'s access or triggered a rate limit');
        req.session.destroy();
        return(callback([]));
      }
    });
  }
}
