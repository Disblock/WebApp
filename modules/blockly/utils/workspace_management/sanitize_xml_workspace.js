"use strict";
const workspaceErrorsEnum = require("../../../enums/workspace_errors.js"); //Enum that refer to possible errors while working on code sent by a server

//Function used to sanitize xml workspace sent by client
module.exports = async (xml) => {
  const replacedXml = xml.replaceAll("token", "t0ken").replaceAll("${", "$"); //Removing dangerous char

  /*
  Blockly's Variables and functions are disabled in user generated codes, so we check here that they wasn't used :
  <variables> ; procedures_defreturn ; procedures_defnoreturn must not be in xml
  */
  if (
    replacedXml.includes("<variables>") ||
    replacedXml.includes("procedures_defreturn") ||
    replacedXml.includes("procedures_defnoreturn")
  ) {
    throw workspaceErrorsEnum.error;
  }

  return replacedXml;
};
