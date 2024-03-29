"use strict";

module.exports = {
  /* Check if a workspace has the correct amount of blocks.
  Args : workspace - A Blockly Workspace
         premium - Is this server Premium or not ? Boolean
  */
  checkNumberOfBlocks: function (workspace, premium) {
    if (premium) {
      if (workspace.getAllBlocks(false).length > process.env.P_WORKSPACE_MAX_BLOCKS) {
        return false;
      }
    } else if (workspace.getAllBlocks(false).length > process.env.NP_WORKSPACE_MAX_BLOCKS) {
      return false;
    }

    return true;
  },

  /* Check if a workspace contain the right number of blocks per blocks
  Args : workspace - A Blockly Workspace
         premium - Is this server Premium or not ? Boolean
  Will return false if there is a problem with blocks amount */
  checkIfRightNumberOfBlocksPerBlockUsed: function (workspace, premium) {
    const maxBlocks = {}; //Will store blocks types and max amount
    const blocksCount = {}; //Will save how many blocks was seen, per type

    if (premium) {
      //Premium server
      if (process.env.P_MAX_BLOCKS_BY_TYPE != "none") {
        process.env.P_MAX_BLOCKS_BY_TYPE.split(",").forEach((item) => {
          const block = item.split(":"); // block = [block_type, max_amount]
          maxBlocks[block[0]] = parseInt(block[1]);
        });
      } else {
        return true;
      }
    } //No limited blocks
    //Not premium server
    else if (process.env.NP_MAX_BLOCKS_BY_TYPE != "none") {
      process.env.NP_MAX_BLOCKS_BY_TYPE.split(",").forEach((item) => {
        const block = item.split(":");
        maxBlocks[block[0]] = parseInt(block[1]);
      });
    } else {
      return true;
    } //No limited blocks

    //maxBlocks defined
    const blocks = workspace.getAllBlocks(false);
    for (let i = 0; i < blocks.length; i++) {
      if (!Object.keys(maxBlocks).includes(blocks[i].type)) {
        continue;
      }
      //Block type not in keys of maxBlocks

      if (!Object.keys(blocksCount).includes(blocks[i].type)) {
        blocksCount[blocks[i].type] = 0;
      }
      //Type not in blockCount, we add it here
      blocksCount[blocks[i].type]++;

      if (maxBlocks[blocks[i].type] < blocksCount[blocks[i].type]) {
        return false;
      }
      //More blocks used than allowed
    }

    return true;
  },

  /* Check that slash command args and reply blocks are used only in command_creator block
     We also check if at least one reply block is used
     Args : workspace - A Blockly Workspace
     Will return true if everything correct
  */
  checkIfCommandBlockCorrectlyDefined: function (workspace) {
    const blocks = workspace.getAllBlocks(false);
    for (let i = 0; i < blocks.length; i++) {
      if (blocks[i].type.startsWith("block_slash_command") && blocks[i].type !== "block_slash_command_creator") {
        //We found a slash command block. We will check if the block is in a creator or don't have a top block
        if (blocks[i].getRootBlock().type.startsWith("event_")) {
          //If block is placed in an event block
          //This block isn't correctly placed
          return false;
        }
      } else if (blocks[i].type == "block_slash_command_creator") {
        //We check if this block contain a command reply block or a form block
        const commandBlocks = blocks[i].getDescendants(false); //All blocks in the command creator block
        let replyOrFormBlockused = false;
        for (let j = 0; j < commandBlocks.length; j++) {
          if (
            commandBlocks[j].type === "block_slash_command_reply" ||
            commandBlocks[j].type === "block_slash_command_form_creator"
          ) {
            replyOrFormBlockused = true;
          }
          if (commandBlocks[j].type === "block_slash_command_form_creator" && j > 1) {
            //j>1, as the first block is always the creator/root block from .getDescendants()
            //NO OK, there is more than just a form_creator defined. User must directly use a form block, not add something else
            return false;
          }
        }

        if (!replyOrFormBlockused) {
          return false;
        }
      }
    }

    return true;
  },

  /*
  Function used to check that data storage are correctly defined
  Args : workspace - Al Blockly workspace
  Will return true if everything correct
  */
  checkIfDataStorageCorrectlyDefined: function (workspace) {
    const blocks = workspace.getAllBlocks(false);

    const definedStorages = []; //Save create storage names
    const usedStorages = []; //Save used storage names

    for (let i = 0; i < blocks.length; i++) {
      if (blocks[i].type.startsWith("block_data_storage_create")) {
        //This block define a new storage
        if (blocks[i].type == "block_data_storage_create_int") {
          definedStorages.push("I" + blocks[i].getFieldValue("DATANAME"));
        } else {
          definedStorages.push("S" + blocks[i].getFieldValue("DATANAME"));
        }
      } else if (blocks[i].type.startsWith("block_data_storage_")) {
        //Save or get data from storage blocks
        if (blocks[i].type.includes("int")) {
          usedStorages.push("I" + blocks[i].getFieldValue("DATANAME"));
        } else {
          usedStorages.push("S" + blocks[i].getFieldValue("DATANAME"));
        }
      }
    }

    for (
      let i = 0;
      i < usedStorages.length;
      i++ //We check that used storages are correctly defined
    ) {
      if (!definedStorages.includes(usedStorages[i])) {
        return false;
      }
    }

    return true;
  },
  /*
  Function used to check that forms are correctly defined
  Args : Blockly & formBlock ( the block_slash_command_form_creator block )
  Will return true if everything correct
  */
  checkIfFormCorrectlyDefined: function (Blockly, formBlock) {
    //This function takes the form block, and will return true if valid, false if not.
    //Regex already checked in generator

    //Checking if at least one field defined
    if (formBlock.getInputTargetBlock("INPUTS")) {
      //There is a block attached here, must be an input
      if (!formBlock.getInputTargetBlock("INPUTS").type.startsWith("block_slash_command_form_input_")) return false;
    } else {
      //No block here, so no inputs on this form
      return false;
    }

    //Same, but this time we check that there is a least one action block
    if (!formBlock.getInputTargetBlock("STATEMENTS")) {
      //No action block
      return false;
    }

    //block_slash_command_reply is forbiden in forms, as receiving the form is not handled the same as commands
    //We will also check that users didn't used more inputs than allowed
    let count = 0; //Number of input blocks

    const blocks = formBlock.getDescendants(true);
    const definedInputsNames = []; //Used to remember the names of inputs. Names must be unique
    for (let i = 0; i < blocks.length; i++) {
      if (blocks[i].type === "block_slash_command_reply") return false;

      if (blocks[i].type.startsWith("block_slash_command_form_input_")) {
        count++;

        if (definedInputsNames.includes(blocks[i].getFieldValue("NAME"))) {
          //NOT OK, duplicated name
          return false;
        } else {
          definedInputsNames.push(blocks[i].getFieldValue("NAME")); //Adding this name to the list of already used names
        }
      } else if (blocks[i].type.startsWith("block_slash_command_form_get_input_")) {
        //Get input block. Before using this block, users must have defined it, so the name should be already in definedInputsNames
        if (!definedInputsNames.includes(blocks[i].getFieldValue("NAME"))) return false; //NOT OK, this input is undefined
      }

      if (count > process.env.COMMAND_FORM_MAX_INPUTS) return false; //Too many input blocks :
    }
    if (count == 0) return false; //NOT OK, at least one input block must be defined

    return true;
  },
};
