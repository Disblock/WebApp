'use strict';
const crypto = require('crypto');//Generate random strings
const serverLogs = require('../database/logs.js');//Save modifications on servers to logs
const blockly_xml_to_js = require('../blockly/blockly_xml_to_js.js');//Convert Blockly's XML into JS

module.exports = async function(req, res, database_pool, logger, Blockly, blocklyToken){

  if(req.session.discord_id!=undefined){

    if(req.session.securityToken===req.query.token && req.session.securityToken!=undefined && req.session.rollbackServer === String(req.params.id)){
      //User is admin on the selected server : token generated on /rollback is correct

      req.session.securityToken = crypto.randomBytes(16).toString('hex');

      let premium;//Store if the server is premium or not
      try{
        let data;
        data = await database_pool.query("SELECT EXISTS(SELECT 1 FROM premium WHERE server_id=$1 AND (end_date > NOW() OR end_date IS NULL) ) AS premium;", [req.params.id]);
        premium = !!data.rows[0].premium;
      }catch(err){
        logger.error("Error while checking if a guild is premium : "+err);
        return(1);
      }

      database_pool.query("SELECT xml FROM server_workspace WHERE server_id=$1 AND workspace_id=$2;", [req.params.id, req.params.workspaceId])
      .then(async(data)=>{
        if(data.rows.length>0){
          //Found xml for this workspace

          //This function will regenerate codes for this workspace and save it as the newest workspace existing
          blockly_xml_to_js.xml_to_js(String(req.params.id), data.rows[0].xml, Blockly, blocklyToken, database_pool, logger).then(async(result)=>{
            if(result==0){
              //OK
              logger.info("User "+ req.session.discord_id +" rollbacked workspace for guild "+req.params.id);

              //Adding this event to server's logs. Action = 2 represent a rollback.
              let resultLog = await serverLogs.addEventToLogs(database_pool, req.params.id, req.session.discord_id, serverLogs.eventType.rollbackedWorkspace, premium);
              if(resultLog.correct){
                //OK
                logger.debug("Logged rollbacked workspace for guild "+String(req.params.id));
                res.redirect('/panel/'+String(req.params.id)+'?message=2');
              }else{
                //Error while logging
                logger.error("Error while saving rollback in logs for guild "+String(req.params.id)+" : "+resultLog.message);
                res.redirect('/panel/'+String(req.params.id)+'?message=2');//We don't need to send an alert to users, the workspace was successfully rollbacked, but not logged.
              }

            }else{
              //Error with xml
              logger.error("Failed to rollback guild "+String(req.params.id)+" : xml_to_js function returned an error :"+ result);
              res.redirect('/panel?message=3');
            }
          })
          .catch(async(err)=>{
            //Error while executing function
            logger.error("Failed to rollback guild "+String(req.params.id)+" : error was thrown in xml_to_js function : "+err);
            res.redirect('/panel?message=3');
          });
        }else{
          //Didn't found xml
          logger.error("Failed to rollback guild "+String(req.params.id)+" : xml not found in database !");
          res.redirect('/panel?message=3');
        }
      })
      .catch(async(err)=>{
        //Error in database

        logger.error("Error while getting xml for rollback : "+err);
        res.status(500).end("Error 500");
      });

    }else{
      //User hadn't visited rollback page, so he may not be an admin on this server

      //The discord_get_servers.servers() function can log out an user if error while getting his guilds ( rate limits, ... ). We should suppose that req.session isn't defined here
      res.redirect('/');
    }
  }else{
    //Not logged in
    res.redirect('/panel');
  }

}
