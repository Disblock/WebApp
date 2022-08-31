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
  }
}
