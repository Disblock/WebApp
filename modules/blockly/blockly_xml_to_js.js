let Blockly = require('blockly');
//const fs = require('fs');
//const crypto = require('crypto');//Generate random strings

module.exports = {
  xml_to_js: async function(server_id, xml, Blockly, token, database_pool, logger){

    // Create a headless workspace.
     const workspace = new Blockly.Workspace();

     /*
     Variables and functions are disabled in user generated codes, so we check here that they wasn't used :
     <variables> ; procedures_defreturn ; procedures_defnoreturn must not be in xml
     */
     if(xml.includes("<variables>") || xml.includes("procedures_defreturn") || xml.includes("procedures_defnoreturn")){
       logger.debug(server_id+" used functions or variables in workspace, stopping here...");
       return(1);
     }

     //Function used to try/catch when generating code. If an error occured, undefined is returned
     function tryCodeGeneration(xml, workspace){
       try{
         Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(xml), workspace);
         const code = Blockly.JavaScript.workspaceToCode(workspace);
         return code;
       }catch(err){
         logger.error("Error while converting workspace to code for guild "+server_id+" : "+err);
         return undefined;
       }
     }
     const code = tryCodeGeneration(xml, workspace);
     if(code==undefined){return(1);}//An error occured, return here


     logger.debug("Working on code for the guild "+server_id+"...");
     let splittedCode = code.replace('.token', 't0ken').split('<<'+token+'>>');

     if(splittedCode[0]==''){//Remove the empty string at the first index of loop
       splittedCode.splice(0,1);
     }//splittedCode = [trigger, code, trigger, code, ...]


     //creating Sql request

     let splittedCodeToSend = [];
     let sql = 'INSERT INTO server_code (server_id, action_type, code) VALUES '
     let sqlCompleted = false;//Check if a valid tupple is added to the sql string
     let args = [server_id];

     for(var i=0; i<splittedCode.length; i=i+2){
       //Loop to check that triggers and code are correctly defined

       if(splittedCode[i]==undefined || splittedCode[i+1]==undefined){
          //Event and actions must be defined
          logger.debug("Error in code for "+server_id+" : Event or code is undefined. Cancelling...");
         return(1);
       }

       if(splittedCode[i].includes("event_") && splittedCode[i]!='' && splittedCode[i+1].replace(/(\r\n|\n|\r)/gm, '')!=''){//If trigger isn't event block, do nothing; If user added an action block without instruction, it will be removed
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

     if(!sqlCompleted){

       //Seem like the user sent a blank workspace, codes will be removed...
       logger.debug("There isn't any code to add in the database for the guild "+server_id+", aborting and deleting active server code and workspace...");
       database_pool.query('DELETE FROM server_code WHERE server_id = $1;', [server_id])
        .catch(err=>{
          logger.error("Error while deleting active codes for guild "+server_id+" : "+err);
        });
        //Workspace is updated ( The workspace is probably empty )
        database_pool.query('INSERT INTO server_workspace (server_id, xml) VALUES ($1, $2);', [server_id, xml])
         .catch(err=>{
           logger.error("Error while saving workspace for guild "+server_id+" : "+err);
         });
       return(1);
     }

     logger.debug("Created SQL request for code update of guild "+server_id+" : "+sql+"; args :"+args);

     //Saving to Database
     database_pool.connect((err, client, release) => {
      if(err){
        release(err);
        logger.error("Error when getting a client from database pool : "+err);
      }

      //TODO add logs here
      //Transaction start
      client.query('BEGIN;', (err)=>{
        if(err){
          client.query('ROLLBACK');
          release(err);
        }else{
          client.query('DELETE FROM server_code WHERE server_id = $1;', [server_id], (err,rep)=>{
            if(err){
              client.query('ROLLBACK');
              release(err);
            }else{
              //Tuples inserted
              client.query(sql+';', args, (err, rep)=>{
                if(err){
                  //Problem, let's rollback
                  client.query('ROLLBACK');
                  release(err);
                }else{
                  //Semms good, let's try to commit
                  client.query('COMMIT;', (err)=>{
                    if(err){
                      client.query('ROLLBACK');
                      release(err);
                    }else{
                      release();
                    }
                  });
                }
              });
            }
          });
        }
      });
    });

    //TODO add logs here
    //Workspace save
    logger.debug("Saving Workspace for guild "+server_id);
    database_pool.query('INSERT INTO server_workspace (server_id, xml) VALUES ($1, $2);', [server_id, xml], (err, res) => {
      if (err) {
        logger.error("Error while saving workspace for guild "+server_id+" : "+err);
      }
    });



    return(1);
    //TODO : Generating code https://github.com/google/blockly/blob/master/demos/headless/index.html
  }
}
