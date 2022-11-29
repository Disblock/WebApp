'use-strict';
let Blockly = require('blockly');

module.exports = {
  /* Check if a workspace has the correct amount of blocks.
  Args : workspace - A Blockly Workspace
         premium - Is this server Premium or not ? Boolean
  */
  checkNumberOfBlocks:function(workspace, premium){
    if(premium){
      if(workspace.getAllBlocks(false).length > process.env.P_WORKSPACE_MAX_BLOCKS)return false;
    }else{
      if(workspace.getAllBlocks(false).length > process.env.NP_WORKSPACE_MAX_BLOCKS)return false;
    }
    return true;
  },

  /* Check if a workspace has only enabled blocks.
  Args : workspace - A Blockly Workspace
         premium - Is this server Premium or not ? Boolean
  Will return false if no disabled blocks used
  */
  checkIfDisabledBlocksUsed:function(workspace, premium){
    let disabledBlocks = [];//Will store the types of disabled blocks
    if(premium){
      if(process.env.P_DISABLED_BLOCKS=='none')return false;//No disabled blocks, we can stop here

      process.env.P_DISABLED_BLOCKS.split(',').forEach((item, i) => {
        disabledBlocks.push(item);
      });
    }else{
      if(process.env.NP_DISABLED_BLOCKS=='none')return false;

      process.env.NP_DISABLED_BLOCKS.split(',').forEach((item, i) => {
        disabledBlocks.push(item);
      });
    }

    //We have every disabled blocks in disabledBlocks, we can now loop through every blocks to check the types
    const blocks = workspace.getAllBlocks(false);
    for(let i=0;i<blocks.length;i++){
      if(disabledBlocks.includes(blocks[i].type))return true;
    }

    return false;
  },

  /* Check that slash command args and reply blocks are used only in command_creator block
     Args : workspace - A Blockly Workspace
     Will return true if everything correct
  */
  checkIfCommandArgBlocksCorrectlyPlaced: function(workspace){
    const blocks = workspace.getAllBlocks(false);
    for(let i=0;i<blocks.length;i++){
      if(blocks[i].type.startsWith("block_slash_command") && blocks[i].type!=="block_slash_command_creator"){
        //We found a slash command block. We will check if the block is in a creator or don't have a top block
        if(blocks[i].getRootBlock().type.startsWith("event_")){//If block is placed in an event block
          //This block isn't correctly placed
          return false;
        }
      }
    }
    return true;
  }
}
