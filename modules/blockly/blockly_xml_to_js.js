'use-strict';
//let Blockly = require('blockly');
const validateWorkspace = require('./validate_workspace.js');
const guildsWorkspaces = require('../database/workspaces.js');

module.exports = {
  /* Function used to translate BLockly's XML to executable JS.*/
  xml_to_js: async function(server_id, xml, Blockly, database_pool, logger, premium){

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

     let slashCommandBlocks = [];//Will store the create slash commands blocks. Defined in the function under
     //Function used to try/catch when generating code. If an error occured, undefined is returned
     //Return an array if OK, a String if error, undefined if crashed. Array : [ ['event_type', codeToRun ], ... ]
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
         if(!validateWorkspace.checkIfCommandBlockCorrectlyDefined(workspace))return('INCORRECTLY PLACED COMMANDS BLOCKS !');
         if(!validateWorkspace.checkIfRightNumberOfBlocksPerBlockUsed(workspace, premium))return('USED DISABLED BLOCKS !');

         const topBlocks = workspace.getTopBlocks(false);//https://developers.google.com/blockly/reference/js/blockly.workspace_class.gettopblocks_1_method.md
         let eventCodes = [];//Will store the events names and codes to run when an event is triggered. [ ['event_...', code], ... ]

         Blockly.JavaScript.init(workspace);

         //For each top block, if this is an event block, we get his type and generate code
         for(let i=0; i<topBlocks.length; i++){
           if(topBlocks[i].type.startsWith("event_")){
             const code = Blockly.JavaScript.blockToCode(topBlocks[i], false);
             if(code.replaceAll(/(\r\n|\n|\r)/gm, '')=='')continue;//Nothing in this event, useless to add it

             eventCodes.push([topBlocks[i].type, code]);
             //https://developers.google.com/blockly/reference/js/blockly.generator_class.blocktocode_1_method.md

           }else if(topBlocks[i].type === "block_slash_command_creator"){
             //This is a slash command creation block, we will store this block and work on it later
             slashCommandBlocks.push(topBlocks[i]);//We will generate code for this just before sending SQL requests
           }
         }

         return eventCodes;
       }catch(err){
         logger.error("Error while converting workspace to code for guild "+server_id+" : "+err);
         return undefined;
       }
     }//End of function
     const eventCodes = tryCodeGeneration(replacedXml, workspace);
     if(eventCodes==undefined){return(1);}//An error occured, return here
     else if(eventCodes==="TOO MANY BLOCKS !"){
       //User used too many blocks...
       logger.debug("Too many blocks error for guild "+server_id);
       return(1);
     }
     else if(eventCodes==="USED DISABLED BLOCKS !"){
       logger.debug("Disabled blocks used for guild "+server_id);
       return(1);
     }else if(eventCodes==="INCORRECTLY PLACED COMMANDS BLOCKS !"){
       logger.debug("Incorrectly placed commands blocks for guild "+server_id);
       return(1);
     }

     logger.debug("Working on code for the guild "+server_id+"...");

     //creating Sql request
     let sql = 'INSERT INTO server_code (server_id, action_type, code) VALUES '
     let args = [server_id];

     for(let i=0; i<eventCodes.length; i++){
       //Loop to generate SQL request for events
       args.push(eventCodes[i][0], eventCodes[i][1]);// [type, code]
       sql = sql + ( (i>0) ? ',':'' ) + '($1, $'+(args.length-1)+', $'+(args.length)+')';
     }

     let sqlRequests = []; // [ [request, args], [request, args] ]; will store requests and args to execute
     sqlRequests.push(['BEGIN;', []]);
     sqlRequests.push(['DELETE FROM server_code WHERE server_id = $1;', [server_id]]);
     sqlRequests.push(['DELETE FROM commands_args WHERE command_id IN (SELECT command_id FROM commands WHERE server_id = $1)', [server_id]]);
     sqlRequests.push(['DELETE FROM commands WHERE server_id = $1', [server_id]]);

     if(eventCodes.length>0){
       //User sent a valid workspace
       sqlRequests.push([sql+';', args]);

       logger.debug("Created SQL request for code update of guild "+server_id+" : "+sql+"; args :"+args);

     }else if(slashCommandBlocks.length>0){
       //At least one slash command, but no events
       logger.debug("Only commands to add to server "+server_id);
     }else{
       //Seem like the user sent a blank workspace, codes will be removed...
       replacedXml = '<xml xmlns="https://developers.google.com/blockly/xml"></xml>';
       logger.debug("There isn't any code to add in the database for the guild "+server_id+", deleting active server code and workspace...");
     }
     let slashCommandsNames = [];//This list is used to check that no commands share the same name

     try{
       for(let i=0; i<slashCommandBlocks.length; i++){
         //Loop to generate SQL requests for slash commands
         const name = slashCommandBlocks[i].getFieldValue('NAME');//We get name and desc for the command
         const desc = slashCommandBlocks[i].getFieldValue('DESC');
         const ephemeral = slashCommandBlocks[i].getFieldValue('EPHEMERAL') === 'TRUE';//Are the replies ephemeral or not ?

         if(!( /^([a-z0-9]{3,28})$/.test(name) && /^([A-Za-z0-9 ,éèê.]{0,100})$/.test(desc) ) || slashCommandsNames.includes(name))continue;//We check name and desc. Name must be unique
         const statements = Blockly.JavaScript.statementToCode(slashCommandBlocks[i], 'STATEMENTS');//We can now get the code to execute
         if(statements.replaceAll(/(\r\n|\n|\r)/gm, '')=='')continue;//Something to execute must be provided

         const jsonArgs = Blockly.JavaScript.statementToCode(slashCommandBlocks[i], 'ARGS').slice(0, -1);//We remove a , at the end of the generated json. We got the args for the command. If there isn't any arg, return '' anyway
         const commandArgs = JSON.parse("{\"args\": ["+jsonArgs+"]}");//Look in generator, but each arg is a JSON object
         if(commandArgs.args.length>parseInt(process.env.COMMAND_MAX_ARGS))continue;//We check that this command don't have more than n args

         logger.debug("Saving slash command "+name+" for guild "+server_id);

         sqlRequests.push(["INSERT INTO commands (server_id, name, description, code, defined, ephemeral) VALUES ($1, $2, $3, $4, FALSE, $5);", [server_id, name, desc, statements, ephemeral]]);//Added the request to create the command
         slashCommandsNames.push(name);

         commandArgs.args.forEach((arg, i) => {//For each arg in this command
           //SQL request to save this arg added
           sqlRequests.push(["INSERT INTO commands_args(command_id, name, description, required, type) VALUES( (SELECT command_id FROM commands WHERE server_id = $1 AND name=$2), $3, $4, $5, $6 )",
           [server_id, name, arg.name, arg.desc, arg.required, arg.type]]);//Type defined in enums/commands_args_types.js
         });

       }
     }catch(err){
       logger.error("Error while handling custom commands for guild : "+server_id+" : "+err);//Error in commands blocks, we can stop here and send an error to client
       return(1);
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
