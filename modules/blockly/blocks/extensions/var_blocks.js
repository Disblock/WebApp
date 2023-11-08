/* eslint no-undef: "off" */
//We disable that, as this file is used in front AND back ends, and variable names differs
"use strict";
const definedRegexes = require("../../../utils/regex.js");

/* File used to define extensions for block.
See https://developers.google.com/blockly/guides/create-custom-blocks/extensions#extensions */

module.exports = (Blockly) => {
  //For example, this extension is used to add a validator on a field : https://developers.google.com/blockly/guides/create-custom-blocks/fields/validators?hl=en
  Blockly.Extensions.register("block_var_input_name_extension", function () {
    // this refers to the block that the extension is being run on
    const thisBlock = this;
    const field = thisBlock.getField("NAME");
    field.setValidator((value) => {
      //slashCommandNameRegex is only defined client side; definedRegexes.* is only defined server side
      let valid = undefined;
      if (typeof definedRegexes !== "undefined") {
        //Server side
        valid = definedRegexes.variableName(value);
      } else {
        //Client side
        valid = variableNameRegex(value);
      }

      if (valid) return value;
      else return null;
    });
  });
};
