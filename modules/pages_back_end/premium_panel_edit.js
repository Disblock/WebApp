'use-strict';
const serverLogs = require('../database/logs.js');
const guildsDatabase = require('../database/guilds.js');//Used to check in database if a server exist and if this server is premium
const crypto = require('crypto');//Generate random strings

module.exports = async function(req, res, database_pool, logger){
  //Checking if user is logged in and workingOnServer is defined
  if(!req.session.discord_id || req.session.workingOnServer==undefined ){
    //Not logged in
    res.redirect('/');
    return;
  }
  //Security token must be defined and valid, workingOnServer must be an array containing IDs of guilds where user has admin access
  if(req.session.securityToken===req.query.token && req.session.securityToken!=undefined && Array.isArray(req.session.workingOnServer)){
    //We generate a security token to avoid some security problems
    req.session.securityToken = crypto.randomBytes(16).toString('hex');

    guildsDatabase.checkIfServerExist(database_pool, String(req.query.server_id), true)
    .then(async(result)=>{

      if(!result.exist || result.premium){
        //This server don't exist in database or is already Premium !
        logger.debug(req.session.discord_id + " tried to give Premium to an unregistered or already Premium server");
        res.redirect('/panel?message=1');
        return;
      }

      //Check if user is admin on selected server
      //req.session.workingOnServer is defined as an Array of guild IDs where user is admin
      let guild = undefined;
      for(let i=0; i<req.session.workingOnServer.length; i++){//Iterate throught all user's admin guilds, and compare them to the ID of the selected guilds
        if(req.session.workingOnServer[i]===String(req.query.server_id)){//If one guild match this ID, the user is admin in this guild. If none match with, user isn't admin on it
          guild = req.session.workingOnServer[i];
          break;
        }
      }

      if(guild!=undefined){
        //User is admin on the selected server

        //We will register this event in logs of the old and new guilds
        try{
          const currentPremium = await database_pool.query('SELECT premium_id, server_id FROM premium WHERE premium_id=$1 AND user_id=$2 AND (end_date > NOW() OR end_date IS NULL);', [req.query.premium_id, req.session.discord_id]);
          if(currentPremium.rows.length==1){
            if(currentPremium.rows[0].server_id){
              //There is an old guild for this premium slot
              const temp = await serverLogs.addEventToLogs(database_pool, currentPremium.rows[0].server_id, req.session.discord_id, serverLogs.eventType.removedPremium, true, false)
              if(!temp.correct)throw(temp.message);
              //Disable active server code..
              await database_pool.query("UPDATE server_code SET active = FALSE WHERE server_id = $1;", [currentPremium.rows[0].server_id]);
              logger.info(req.session.discord_id+" removed premium for guild "+currentPremium.rows[0].server_id+". Guild code was disabled");
            }
          }else{
            //The given premium ID don't seems to be correct
            logger.debug("User gave an incorrect Premium ID, aborting...");
            res.status(500).end("Error ! Please, try again later or report this to an administrator");
            return;
          }

          await serverLogs.addEventToLogs(database_pool, guild, req.session.discord_id, serverLogs.eventType.addedPremium, true, false)
        }catch(err){
          logger.error("Error while getting old server for premium slot : "+err);
          res.status(500).end("Error ! Please, try again later or report this to an administrator");
          return;
        }

        //We can now change server_id for this premium slot
        database_pool.query("UPDATE premium SET server_id = $1 WHERE premium_id = $2 AND user_id = $3 AND (end_date > NOW() OR end_date IS NULL);", [guild, req.query.premium_id, req.session.discord_id])
        .then(async()=>{
          logger.info("User "+ req.session.discord_id +" gave a premium to guild "+guild);
          res.redirect('/panel/premium?message=4');
        })
        .catch((err)=>{
          logger.error("Error while updating the server_id for premium slot : "+err);
          res.status(500).end("Error ! Please, try again later or report this to an administrator");
        });



      }else{
        //User isn't admin on the selected server
        res.redirect('/');
      }

    })
    .catch((err)=>{
      logger.error('Error while checking if guild is premium from database : '+err);
      res.status(500).end("Error ! Please, try again later or report this to an administrator");
    });

  }else{
    res.status(401).end("Error ! Please, try to reload the premium page and try again");
  }

}
