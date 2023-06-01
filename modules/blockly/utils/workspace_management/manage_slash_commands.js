"use strict";

/*
This function will loop through Slash command blocks, and will convert them to a set of SQL queries.
These SQL queries will allow to save everything in the database
*/
module.exports = async (Blockly, slashCommandBlocks, serverId) => {
  const slashCommandsNames = []; //This list is used to check that no commands share the same name
  const sqlRequests = []; //SQL queries needed to save theses commands in database

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

  return sqlRequests;
};
