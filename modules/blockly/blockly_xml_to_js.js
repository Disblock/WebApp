'use-strict';
let Blockly = require('blockly');
const validateWorkspace = require('./validate_workspace.js');
const guildsWorkspaces = require('../database/workspaces.js');

module.exports = {
  /* Function used to translate BLockly's XML to executable JS.*/
  xml_to_js: async function(server_id, xml, Blockly, token, database_pool, logger, premium){

    // Create a headless workspace.
     const workspace = new Blockly.Workspace();

     let replacedXml = xml.replaceAll('token', 't0ken').replaceAll('\`', '\'').replaceAll('${', '$');//Removing dangerous char

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

         //We remove here every comments to avoid sending them to database
         let blocks = workspace.getAllBlocks(false);
         for(let i=0; i<blocks.length; i++){
           blocks[i].setCommentText(null);
         }

         if(!validateWorkspace.checkNumberOfBlocks(workspace, premium))return('TOO MANY BLOCKS !');
         if(validateWorkspace.checkIfDisabledBlocksUsed(workspace, premium))return('USED DISABLED BLOCKS !');

         const code = Blockly.JavaScript.workspaceToCode(workspace);
         return code;
       }catch(err){
         logger.error("Error while converting workspace to code for guild "+server_id+" : "+err);
         return undefined;
       }
     }
     const code = tryCodeGeneration(replacedXml, workspace);
     if(code==undefined){return(1);}//An error occured, return here
     else if(code==="TOO MANY BLOCKS !"){
       //User used too many blocks...
       logger.debug("Too many blocks error for guild "+server_id);
       return(1);
     }
     else if(code==="USED DISABLED BLOCKS !"){
       logger.debug("Disabled blocks used for guild "+server_id);
       return(1);
     }


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
         [sql+';', args]
       ];
       logger.debug("Created SQL request for code update of guild "+server_id+" : "+sql+"; args :"+args);

     }else{
       //Seem like the user sent a blank workspace, codes will be removed...
       replacedXml = '<xml xmlns="https://developers.google.com/blockly/xml"></xml>';
       logger.debug("There isn't any code to add in the database for the guild "+server_id+", deleting active server code and workspace...");

       sqlRequests = [
         ['BEGIN;', []],
         ['DELETE FROM server_code WHERE server_id = $1;', [server_id]]
       ];
     }

     //Saving to Database
     let client = await database_pool.connect();

     try{
       //Saving codes
       for(let i=0; i<sqlRequests.length; i++){
         await client.query(sqlRequests[i][0], sqlRequests[i][1]);
       }

       //Saving Workspace
       let resultWorkspace = await guildsWorkspaces.addWorkspace(client, server_id, replacedXml, premium);
       if(!resultWorkspace.correct)throw(resultWorkspace.message);

       //Commit
       await client.query('COMMIT;', []);
     }catch(err){
       logger.error("Error in transaction while saving a workspace and codes : "+err);

       try{
         await client.query("ROLLBACK;");
       }catch(err2){
         logger.error("Can't rollback transaction : "+err2);
       }finally{
         client.release(err);//Release the client with an error, this should delete this client
         return(1);
       }
     }

    logger.debug("Correctly saved new workspace for server "+server_id);

    client.release();//Release the client into pool

    return(0);
  }
}
