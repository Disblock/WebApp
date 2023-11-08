"use strict";
/* ########## Data storage Blocks ######### */
/* Added blocks to manage stored vars */

module.exports = {
  blocks: JSON.stringify([
    {
      type: "block_data_storage_create_int",
      message0: "%{BKY_BLOCK_DATA_STORAGE_CREATE_INT}",
      args0: [
        {
          type: "field_input",
          name: "DATANAME",
          text: "default",
        },
      ],
      colour: 225,
      tooltip: "%{BKY_BLOCK_DATA_STORAGE_CREATE_INT_TOOLTIP}",
      helpUrl: "",
      extensions: ["block_storage_input_dataname_extension"],
    },
    {
      type: "block_data_storage_create_string",
      message0: "%{BKY_BLOCK_DATA_STORAGE_CREATE_STRING}",
      args0: [
        {
          type: "field_input",
          name: "DATANAME",
          text: "default",
        },
      ],
      colour: 130,
      tooltip: "%{BKY_BLOCK_DATA_STORAGE_CREATE_STRING_TOOLTIP}",
      helpUrl: "",
      extensions: ["block_storage_input_dataname_extension"],
    },
    {
      type: "block_data_storage_save_int",
      message0: "%{BKY_BLOCK_DATA_STORAGE_SAVE_INT}",
      args0: [
        {
          type: "field_input",
          name: "DATANAME",
          text: "default",
        },
        {
          type: "input_dummy",
        },
        {
          type: "input_value",
          name: "VARNAME",
          check: "String",
        },
        {
          type: "input_value",
          name: "VARCONTENT",
          check: "Number",
        },
      ],
      inputsInline: true,
      previousStatement: "block",
      nextStatement: "block",
      colour: 225,
      tooltip: "%{BKY_BLOCK_DATA_STORAGE_SAVE_INT_TOOLTIP}",
      helpUrl: "",
      extensions: ["block_storage_input_dataname_extension"],
    },
    {
      type: "block_data_storage_save_string",
      message0: "%{BKY_BLOCK_DATA_STORAGE_SAVE_STRING}",
      args0: [
        {
          type: "field_input",
          name: "DATANAME",
          text: "default",
        },
        {
          type: "input_dummy",
        },
        {
          type: "input_value",
          name: "VARNAME",
          check: "String",
        },
        {
          type: "input_value",
          name: "VARCONTENT",
          check: "String",
        },
      ],
      inputsInline: true,
      previousStatement: "block",
      nextStatement: "block",
      colour: 130,
      tooltip: "%{BKY_BLOCK_DATA_STORAGE_SAVE_STRING_TOOLTIP}",
      helpUrl: "",
      extensions: ["block_storage_input_dataname_extension"],
    },
    {
      type: "block_data_storage_get_int",
      message0: "%{BKY_BLOCK_DATA_STORAGE_GET_INT}",
      args0: [
        {
          type: "field_input",
          name: "DATANAME",
          text: "default",
        },
        {
          type: "input_dummy",
        },
        {
          type: "input_value",
          name: "VARNAME",
          check: "String",
        },
      ],
      inputsInline: true,
      output: "Number",
      colour: 225,
      tooltip: "%{BKY_BLOCK_DATA_STORAGE_GET_INT_TOOLTIP}",
      helpUrl: "",
      extensions: ["block_storage_input_dataname_extension"],
    },
    {
      type: "block_data_storage_get_string",
      message0: "%{BKY_BLOCK_DATA_STORAGE_GET_STRING}",
      args0: [
        {
          type: "field_input",
          name: "DATANAME",
          text: "default",
        },
        {
          type: "input_dummy",
        },
        {
          type: "input_value",
          name: "VARNAME",
          check: "String",
        },
      ],
      inputsInline: true,
      output: "String",
      colour: 130,
      tooltip: "%{BKY_BLOCK_DATA_STORAGE_GET_STRING_TOOLTIP}",
      helpUrl: "",
      extensions: ["block_storage_input_dataname_extension"],
    },
    {
      type: "block_data_storage_delete_int",
      message0: "%{BKY_BLOCK_DATA_STORAGE_DELETE_INT}",
      args0: [
        {
          type: "field_input",
          name: "DATANAME",
          text: "default",
        },
        {
          type: "input_dummy",
        },
        {
          type: "input_value",
          name: "VARNAME",
          check: "String",
        },
      ],
      inputsInline: true,
      previousStatement: "block",
      nextStatement: "block",
      colour: 225,
      tooltip: "%{BKY_BLOCK_DATA_STORAGE_DELETE_INT_TOOLTIP}",
      helpUrl: "",
      extensions: ["block_storage_input_dataname_extension"],
    },
    {
      type: "block_data_storage_delete_string",
      message0: "%{BKY_BLOCK_DATA_STORAGE_DELETE_STRING}",
      args0: [
        {
          type: "field_input",
          name: "DATANAME",
          text: "default",
        },
        {
          type: "input_dummy",
        },
        {
          type: "input_value",
          name: "VARNAME",
          check: "String",
        },
      ],
      inputsInline: true,
      previousStatement: "block",
      nextStatement: "block",
      colour: 130,
      tooltip: "%{BKY_BLOCK_DATA_STORAGE_DELETE_STRING_TOOLTIP}",
      helpUrl: "",
      extensions: ["block_storage_input_dataname_extension"],
    },
  ]),
};
