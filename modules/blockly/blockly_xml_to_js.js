let Blockly = require('blockly');
//const fs = require('fs');
//const crypto = require('crypto');//Generate random strings

module.exports = {
  xml_to_js: async function(server_id, xml, Blockly, token, database_pool, logger){

    // Create a headless workspace.
     const workspace = new Blockly.Workspace();
     Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(xml), workspace);
     const code = Blockly.JavaScript.workspaceToCode(workspace);

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
       if(splittedCode[i]==undefined || splittedCode[i+1]==undefined){return(1)}//Event and actions must be defined
       if(splittedCode[i].includes("event_") && splittedCode[i]!='' && splittedCode[i+1].replace(/(\r\n|\n|\r)/gm, '')!=''){//If trigger isn't event block, do nothing; If user added an action block without instruction, it will be removed
         //Trigger event defined, code defined, and not just some \n
         splittedCodeToSend.push(splittedCode[i], splittedCode[i+1]);
       }
     }

     for(var i=0; i<splittedCodeToSend.length; i=i+2){

       args.push(splittedCodeToSend[i], splittedCodeToSend[i+1]);
       sql = sql + ( (sqlCompleted) ? ',':'' ) + '($1, $'+(i+2)+', $'+(i+3)+')';
       sqlCompleted=true;//At least one tuple was added

     }

     if(!sqlCompleted){
       logger.debug("There isn't any code to add in the database for the guild "+server_id+", aborting...");
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
    });



    return(1);
    //TODO : Generating code https://github.com/google/blockly/blob/master/demos/headless/index.html
  }
}
