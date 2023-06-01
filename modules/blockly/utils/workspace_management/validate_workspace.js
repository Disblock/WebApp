"use strict";
const workspaceErrorsEnum = require("../../../enums/workspace_errors.js"); //Enum that refer to possible errors while working on code sent by a server
const validateWorkspaceFunctions = require("./validate_workspace_functions.js");

module.exports = async (workspace, premium) => {
  /*
  Function used to check that workspace is valid and doesn't exceed limits
  */

  if (!validateWorkspaceFunctions.checkNumberOfBlocks(workspace, premium)) {
    throw workspaceErrorsEnum.tooManyBlocks;
  }

  if (!validateWorkspaceFunctions.checkIfCommandBlockCorrectlyDefined(workspace)) {
    throw workspaceErrorsEnum.incorrectlyPlacedBlocks;
  }

  if (!validateWorkspaceFunctions.checkIfRightNumberOfBlocksPerBlockUsed(workspace, premium)) {
    throw workspaceErrorsEnum.tooManyOfABlock;
  }

  if (!validateWorkspaceFunctions.checkIfDataStorageCorrectlyDefined(workspace)) {
    throw workspaceErrorsEnum.errorWithStorageBlocks;
  }
};
