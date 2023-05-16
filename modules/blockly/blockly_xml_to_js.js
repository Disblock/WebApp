"use strict";
//let Blockly = require('blockly');
const guildsWorkspaces = require("../database/workspaces.js");
const workspaceErrorsEnum = require("../enums/workspace_errors.js"); //Enum that refer to possible errors while working on code sent by a server

// -- Utils --
const sanitizeXmlWorkspace = require("./utils/sanitize_xml_workspace.js");
const validateWorkspace = require("./utils/validate_workspace.js");
const manageWorkspaceBlocks = require("./utils/manage_workspace_blocks.js");

module.exports = {
  /* Function used to translate BLockly's XML to executable JS.*/
  xmlToJs: async function (serverId, xml, Blockly, databasePool, logger, premium) {
    // Create a headless workspace.
    const workspace = new Blockly.Workspace();

    let cleanXml;
    try {
      cleanXml = await sanitizeXmlWorkspace(xml);
    } catch (err) {
      logger.debug(serverId + " used blockly's functions or variables in workspace, stopping here...");
      return err; //ErrorsEnum, = 1
    }

    Blockly.Xml.domToWorkspace(Blockly.utils.xml.textToDom(cleanXml), workspace);

    //We remove here every comments to avoid sending them to database
    const blocks = workspace.getAllBlocks(false);
    for (let i = 0; i < blocks.length; i++) {
      blocks[i].setCommentText(null);
    }

    //We can now check that workspace is valid
    try {
      await validateWorkspace(workspace, premium);
    } catch (err) {
      logger.debug(serverId + " sent an invalid workspace, stopping here... Error :" + err);
      return err;
    }

    let slashCommandBlocks = []; //Will store the create slash commands blocks. Defined in the function under
    let defineDataStorageBlocks = []; //Will store the blocks used to define a new data storage
    let eventCodes = []; //Array : [ ['event_type', codeToRun ], ... ]
    try {
      Blockly.JavaScript.init(workspace);

      eventCodes = await manageWorkspaceBlocks.getEventCodes(Blockly, workspace);
      slashCommandBlocks = await manageWorkspaceBlocks.getCommandsBlocks(workspace);
      defineDataStorageBlocks = await manageWorkspaceBlocks.getStorageCreatorBlocks(workspace);
    } catch (err) {
      logger.error("Error while converting workspace to code for guild " + serverId + " : " + err);
      return workspaceErrorsEnum.error;
    }

    logger.debug("Working on code for the guild " + serverId + "...");

    //creating Sql request
    let sql = "INSERT INTO server_code (server_id, action_type, code) VALUES ";
    const args = [serverId];

    for (let i = 0; i < eventCodes.length; i++) {
      //Loop to generate SQL request for events
      args.push(eventCodes[i][0], eventCodes[i][1]); // [type, code]
      sql = sql + (i > 0 ? "," : "") + "($1, $" + (args.length - 1) + ", $" + args.length + ")";
    }

    const sqlRequests = []; // [ [request, args], [request, args] ]; will store requests and args to execute
    sqlRequests.push(["BEGIN;", []]);
    sqlRequests.push(["DELETE FROM server_code WHERE server_id = $1;", [serverId]]);
    sqlRequests.push([
      "DELETE FROM commands_args WHERE command_id IN (SELECT command_id FROM commands WHERE server_id = $1)",
      [serverId],
    ]);
    sqlRequests.push(["DELETE FROM commands WHERE server_id = $1", [serverId]]);

    if (eventCodes.length > 0) {
      //User sent a valid workspace
      sqlRequests.push([sql + ";", args]);

      logger.debug("Created SQL request for code update of guild " + serverId + " : " + sql + "; args :" + args);
    } else if (slashCommandBlocks.length > 0) {
      //At least one slash command, but no events
      logger.debug("Only commands to add to server " + serverId);
    } else {
      //Seem like the user sent a blank workspace, codes will be removed...
      cleanXml = '<xml xmlns="https://developers.google.com/blockly/xml"></xml>';
      logger.debug(
        "There isn't any code to add in the database for the guild " +
          serverId +
          ", deleting active server code and workspace..."
      );
    }
    const slashCommandsNames = []; //This list is used to check that no commands share the same name

    try {
      for (let i = 0; i < slashCommandBlocks.length; i++) {
        //Loop to generate SQL requests for slash commands
        const name = slashCommandBlocks[i].getFieldValue("NAME"); //We get name and desc for the command
        const desc = slashCommandBlocks[i].getFieldValue("DESC");
        const ephemeral = slashCommandBlocks[i].getFieldValue("EPHEMERAL") === "TRUE"; //Are the replies ephemeral or not ?

        if (
          !(/^([a-z0-9]{3,28})$/.test(name) && /^([A-Za-z0-9 ,ąćęóśżźéèê.!?;\-:()€$£%*+/]{0,100})$/.test(desc)) ||
          slashCommandsNames.includes(name)
        ) {
          continue;
        }
        //We check name and desc. Name must be unique
        const statements = Blockly.JavaScript.statementToCode(slashCommandBlocks[i], "STATEMENTS"); //We can now get the code to execute
        if (statements.replaceAll(/(\r\n|\n|\r)/gm, "") == "") {
          continue;
        }
        //Something to execute must be provided

        const jsonArgs = Blockly.JavaScript.statementToCode(slashCommandBlocks[i], "ARGS").slice(0, -1); //We remove a , at the end of the generated json. We got the args for the command. If there isn't any arg, return '' anyway
        const commandArgs = JSON.parse('{"args": [' + jsonArgs + "]}"); //Look in generator, but each arg is a JSON object
        if (commandArgs.args.length > parseInt(process.env.COMMAND_MAX_ARGS)) {
          continue;
        }
        //We check that this command don't have more than n args

        logger.debug("Saving slash command " + name + " for guild " + serverId);

        sqlRequests.push([
          "INSERT INTO commands (server_id, name, description, code, defined, ephemeral) VALUES ($1, $2, $3, $4, FALSE, $5);",
          [serverId, name, desc, statements, ephemeral],
        ]); //Added the request to create the command
        slashCommandsNames.push(name);

        commandArgs.args.forEach((arg) => {
          //For each arg in this command
          //SQL request to save this arg added
          sqlRequests.push([
            "INSERT INTO commands_args(command_id, name, description, required, type) VALUES( (SELECT command_id FROM commands WHERE server_id = $1 AND name=$2), $3, $4, $5, $6 )",
            [serverId, name, arg.name, arg.desc, arg.required, arg.type],
          ]); //Type defined in enums/commands_args_types.js
        });
      }
      //We will now work on data storages for this server
      const newStoragesNames = [serverId]; //We pass the server ID since it's the first arg of the SQL function
      let sqlStoragesRequest = "SELECT f_update_data_storages_for_guild($1";
      for (let i = 0; i < defineDataStorageBlocks.length; i++) {
        //For every define storage block
        const storageName = defineDataStorageBlocks[i].getFieldValue("DATANAME"); //We get the name of the storage
        if (/^([A-Za-z0-9]{3,28})$/.test(storageName)) {
          //Only if name is valid
          newStoragesNames.push(
            (defineDataStorageBlocks[i].type == "block_data_storage_create_string" ? "S" : "I") + storageName
          ); //We save this name to send it to database
          sqlStoragesRequest = sqlStoragesRequest + ", $" + (i + 2); //Indexes start at 1, and since 1 is already taken, we must do 0->2
        } else {
          logger.debug("Invalid storage name for guild " + serverId);
          return workspaceErrorsEnum.errorWithStorageBlocks;
        }
      }
      sqlStoragesRequest = sqlStoragesRequest + ");"; //We can now finish the SQL request
      sqlRequests.push([sqlStoragesRequest, newStoragesNames]); //And add this request to the list of requests
    } catch (err) {
      logger.error("Error while handling custom commands for guild : " + serverId + " : " + err); //Error in commands blocks, we can stop here and send an error to client
      return workspaceErrorsEnum.error;
    }

    //Saving to Database
    const client = await databasePool.connect();

    try {
      //Saving codes
      for (let i = 0; i < sqlRequests.length; i++) {
        await client.query(sqlRequests[i][0], sqlRequests[i][1]);
      }

      //Saving Workspace
      const resultWorkspace = await guildsWorkspaces.addWorkspace(client, serverId, cleanXml, premium);
      if (!resultWorkspace.correct) {
        throw resultWorkspace.message;
      }

      //Commit
      await client.query("COMMIT;", []);
    } catch (err) {
      logger.error("Error in transaction while saving a workspace and codes : " + err);

      try {
        await client.query("ROLLBACK;");
      } catch (err2) {
        logger.error("Can't rollback transaction : " + err2);
      } finally {
        client.release(err); //Release the client with an error, this should delete this client
        return workspaceErrorsEnum.error; /* eslint-disable-line no-unsafe-finally */
      }
    }

    logger.debug("Correctly saved new workspace for server " + serverId);

    client.release(); //Release the client into pool

    return 0;
  },
};
