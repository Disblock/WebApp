"use strict";

module.exports = {
  //We need to define function names, so we can just send that to client side with EJS, by adding functions one per one
  //Check blockly_functions.ejs in view folder
  dataStorageName: function dataStorageNameRegex(value) {
    return /^([A-Za-z0-9]{3,28})$/.test(value);
  },
  slashCommandName: function slashCommandNameRegex(value) {
    return /^([a-z0-9]{3,28})$/.test(value);
  },
  slashCommandDescription: function slashCommandDescriptionRegex(value) {
    return /^([A-Za-z0-9 ,ąćęóśżźéèê.!?;\-:()€$£%+=]{0,100})$/.test(value);
  },
  variableName: function variableNameRegex(value) {
    return /^[a-zA-Z0-9]{1,16}$/.test(value);
  },
  emptyTextBox: function emptyTextBoxRegex(value) {
    return /^\s*('|\\')*\s*$/.test(value);
  },
  mayBeCustomEmoji: function customEmojiRegex(value) {
    return /^[a-zA-Z0-9]+$/.test(value);
  },
  validCustomEmoji: function validCustomEmojiRegex(value) {
    return /^<:[a-zA-Z0-9]+:[0-9]+>$/.test(value);
  },
  formName: function formName(value) {
    return /^([A-Za-z0-9 ,ąćęóśżźéèê.!?;\-:()€$£%+=]{1,45})$/.test(value);
  },
  formPlaceholder: function formPlaceholder(value) {
    return /^([A-Za-z0-9 ,ąćęóśżźéèê.!?;\-:()€$£%+=]{0,100})$/.test(value);
  },
  isNumber: function isNumber(value) {
    return /^([0-9]{1,12})$/.test(value);
  },
  isHexColor: function isHexColor(value) {
    return /^#[0-9a-f]{3,6}$/i.test(value);
  },
};
