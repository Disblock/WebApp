/* eslint no-undef: "off" */
//We disable that, as this file is used in front AND back ends, and variable names differs
"use strict";
const definedRegexes = require("../../../utils/regex.js");

/* File used to define extensions for block.
See https://developers.google.com/blockly/guides/create-custom-blocks/extensions#extensions */

module.exports = (Blockly) => {
  //For example, this extension is used to add a validator on a field : https://developers.google.com/blockly/guides/create-custom-blocks/fields/validators?hl=en
  Blockly.Extensions.register("block_slash_command_block_input_name_extension", function () {
    // this refers to the block that the extension is being run on
    const thisBlock = this;
    const field = thisBlock.getField("NAME");
    field.setValidator((value) => {
      //slashCommandNameRegex is only defined client side; definedRegexes.* is only defined server side
      let valid = undefined;
      if (typeof definedRegexes !== "undefined") {
        //Server side
        valid = definedRegexes.slashCommandName(value);
      } else {
        //Client side
        valid = slashCommandNameRegex(value);
      }

      if (valid) return value;
      else return null;
    });
  });
  Blockly.Extensions.register("block_slash_command_block_input_desc_extension", function () {
    // this refers to the block that the extension is being run on
    const thisBlock = this;
    const field = thisBlock.getField("DESC");
    field.setValidator((value) => {
      //slashCommandNameRegex is only defined client side; definedRegexes.* is only defined server side
      let valid = undefined;
      if (typeof definedRegexes !== "undefined") {
        //Server side
        valid = definedRegexes.slashCommandDescription(value);
      } else {
        //Client side
        valid = slashCommandDescriptionRegex(value);
      }

      if (valid) return value;
      else return null;
    });
  });

  Blockly.Extensions.register("block_slash_command_form_input_name_extension", function () {
    // this refers to the block that the extension is being run on
    const thisBlock = this;
    const field = thisBlock.getField("NAME");
    field.setValidator((value) => {
      //slashCommandNameRegex is only defined client side; definedRegexes.* is only defined server side
      let valid = undefined;
      if (typeof definedRegexes !== "undefined") {
        //Server side
        valid = definedRegexes.formName(value);
      } else {
        //Client side
        valid = formName(value);
      }

      if (valid) return value;
      else return null;
    });
  });
  Blockly.Extensions.register("block_slash_command_form_input_placeholder_extension", function () {
    // this refers to the block that the extension is being run on
    const thisBlock = this;
    const field = thisBlock.getField("PLACEHOLDER");
    field.setValidator((value) => {
      //slashCommandNameRegex is only defined client side; definedRegexes.* is only defined server side
      let valid = undefined;
      if (typeof definedRegexes !== "undefined") {
        //Server side
        valid = definedRegexes.formPlaceholder(value);
      } else {
        //Client side
        valid = formPlaceholder(value);
      }

      if (valid) return value;
      else return null;
    });
  });
};
