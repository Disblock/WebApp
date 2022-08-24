let Blockly = require('blockly');
//const fs = require('fs');
//const crypto = require('crypto');//Generate random strings

module.exports = {
  xml_to_js: async function(server_id, xml, Blockly, token, database_pool, logger, user_id=undefined){//If user_id is defined, we will log that in server's logs

    // Create a headless workspace.
     const workspace = new Blockly.Workspace();

     const replacedXml = xml.replaceAll('.token', 't0ken').replaceAll('\`', '\'').replaceAll('${', '$');//Removing dangerous char

     /*
     Blockly's Variables and functions are disabled in user generated codes, so we check here that they wasn't used :
     <variables> ; procedures_defreturn ; procedures_defnoreturn must not be in xml
     */
     if(replacedXml.includes("<variables>") || replacedXml.includes("procedures_defreturn") || replacedXml.includes("procedures_defnoreturn")){
       logger.debug(server_id+" used blockly's functions or variables in workspace, stopping here...");
       return(1);
     }

     //Function used to try/catch when generating code. If an error occured, undefined is returned
     function tryCodeGeneration(replacedXml, workspace){
       try{
         Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(replacedXml), workspace);
         const code = Blockly.JavaScript.workspaceToCode(workspace);
         return code;
       }catch(err){
         logger.error("Error while converting workspace to code for guild "+server_id+" : "+err);
         return undefined;
       }
     }
     const code = tryCodeGeneration(replacedXml, workspace);
     if(code==undefined){return(1);}//An error occured, return here


     logger.debug("Working on code for the guild "+server_id+"...");

     let splittedCode = code.split('<<'+token+'>>');

    splittedCode.splice(0,1);//Remove first index ( contain only comments or empty string )
    //splittedCode = [trigger, code, trigger, code, ...]


     //creating Sql request
     let splittedCodeToSend = [];
     let sql = 'INSERT INTO server_code (server_id, action_type, code) VALUES '
     let sqlCompleted = false;//Check if at least a valid tupple is added to the sql string
     let args = [server_id];

     for(var i=0; i<splittedCode.length; i=i+2){
       //Loop to check that triggers and code are correctly defined

       if(splittedCode[i]==undefined || splittedCode[i+1]==undefined){
          //Event and actions must be defined
          logger.debug("Error in code for "+server_id+" : Event or code is undefined. Cancelling...");
         return(1);
       }

       if(splittedCode[i].includes("event_") && splittedCode[i]!='' && splittedCode[i+1].replaceAll(/(\r\n|\n|\r)/gm, '')!=''){//If trigger isn't event block, do nothing; If user added an action block without instruction, it will be removed
         //Trigger event defined, code defined, and not just some \n
         splittedCodeToSend.push(splittedCode[i], splittedCode[i+1]);
       }
     }

     for(var i=0; i<splittedCodeToSend.length; i=i+2){
       //Loop to generate SQL request

       args.push(splittedCodeToSend[i], splittedCodeToSend[i+1]);
       sql = sql + ( (sqlCompleted) ? ',':'' ) + '($1, $'+(i+2)+', $'+(i+3)+')';
       sqlCompleted=true;//At least one tuple was added

     }

     let sqlRequests; // [ [request, args], [request, args] ]; will store requests and args to execute
     if(sqlCompleted){
       //User sent a valid workspace
       sqlRequests = [
         ['BEGIN;', []],
         ['DELETE FROM server_code WHERE server_id = $1;', [server_id]],
         [sql+';', args],
         ['INSERT INTO server_workspace (server_id, xml) VALUES ($1, $2);', [server_id, replacedXml]],
         ['COMMIT;', []]
       ];
       logger.debug("Created SQL request for code update of guild "+server_id+" : "+sql+"; args :"+args);

     }else{
       //Seem like the user sent a blank workspace, codes will be removed...
       logger.debug("There isn't any code to add in the database for the guild "+server_id+", deleting active server code and workspace...");

       sqlRequests = [
         ['BEGIN;', []],
         ['DELETE FROM server_code WHERE server_id = $1;', [server_id]],
         ['INSERT INTO server_workspace (server_id, xml) VALUES ($1, $2);', [server_id, '<xml xmlns="https://developers.google.com/blockly/xml"></xml>']],
         ['COMMIT;', []]
       ];
     }

     //Saving to Database
     let client = await database_pool.connect();



    //Transactions & running sql queries
    for(let i=0; i<sqlRequests.length; i++){
      try{
        await client.query(sqlRequests[i][0], sqlRequests[i][1]);
      }catch(err){
        logger.error("Error in transaction while saving a workspace : "+err);

        try{
          await client.query("ROLLBACK;");
        }catch(err2){
          logger.error("Can't rollback transaction : "+err2);
        }finally{
          client.release(err);//Release the client with an error, this should delete this client
          return(1);
        }

      }
    }
    logger.debug("Correctly saved new workspace for server "+server_id);



    if(user_id){//If undefined, this is a rollback which is logged as a different event
      //Save this modification in logs
      client.query('INSERT INTO audit_log (server_id, user_id, action, action_date, staff_action) VALUES ($1, $2, 1, NOW(), FALSE);', [server_id, user_id], (err, res) => {
        if (err) {
          logger.error("Error while saving workspace modification in logs for guild "+server_id+" : "+err);
          client.release(err);
          return(1);
        }
      });
    }

    client.release();//Release the client into pool

    return(0);
  }
}
