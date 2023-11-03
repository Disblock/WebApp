"use strict";

module.exports = {
  getEventCodes: async (Blockly, workspace) => {
    const topBlocks = workspace.getTopBlocks(false); //https://developers.google.com/blockly/reference/js/blockly.workspace_class.gettopblocks_1_method.md
    const eventCodes = []; //Will store the events names and codes to run when an event is triggered. [ ['event_...', code], ... ]

    for (let i = 0; i < topBlocks.length; i++) {
      if (topBlocks[i].type.startsWith("event_")) {
        //Event block
        const code = Blockly.JavaScript.blockToCode(topBlocks[i], false);
        if (code.replaceAll(/(\r\n|\n|\r)/gm, "") == "") {
          continue; //Nothing in this event, useless to add it
        }
        eventCodes.push([topBlocks[i].type, code]);
        //https://developers.google.com/blockly/reference/js/blockly.codegenerator_class.blocktocode_1_method.md
      }
    }

    return eventCodes;
  },

  getCommandsBlocks: async (workspace) => {
    const topBlocks = workspace.getTopBlocks(false);
    const slashCommandBlocks = [];

    for (let i = 0; i < topBlocks.length; i++) {
      if (topBlocks[i].type === "block_slash_command_creator") {
        slashCommandBlocks.push(topBlocks[i]);
      }
    }

    return slashCommandBlocks;
  },

  getStorageCreatorBlocks: async (workspace) => {
    const topBlocks = workspace.getTopBlocks(false);
    const storageCreatorBlocks = [];

    for (let i = 0; i < topBlocks.length; i++) {
      if (topBlocks[i].type.startsWith("block_data_storage_create_")) {
        storageCreatorBlocks.push(topBlocks[i]);
      }
    }

    return storageCreatorBlocks;
  },
};
