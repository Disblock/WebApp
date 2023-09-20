"use strict";
/* ########## Var Blocks ######### */
/* Added blocks to manage variables */

module.exports = {
  blocks: JSON.stringify([
    {
      type: "block_slash_command_creator",
      message0: "%{BKY_BLOCK_SLASH_COMMAND_CREATOR}",
      args0: [
        {
          type: "field_input",
          name: "NAME",
          text: "name",
        },
        {
          type: "input_dummy",
        },
        {
          type: "field_input",
          name: "DESC",
          text: "My command",
        },
        {
          type: "input_dummy",
        },
        {
          type: "field_checkbox",
          name: "EPHEMERAL",
          checked: true,
        },
        {
          type: "input_dummy",
        },
        {
          type: "input_statement",
          name: "ARGS",
          check: "SlashCommandOption",
        },
        {
          type: "input_statement",
          name: "STATEMENTS",
          check: ["block", "FormCreatorBlock"],
        },
      ],
      colour: 30,
      tooltip: "%{BKY_BLOCK_SLASH_COMMAND_CREATOR_TOOLTIP}",
      helpUrl: "",
    },
    {
      type: "block_slash_command_arg_boolean",
      message0: "%{BKY_BLOCK_SLASH_COMMAND_ARG_BOOLEAN}",
      args0: [
        {
          type: "field_input",
          name: "NAME",
          text: "boolean",
        },
        {
          type: "input_dummy",
        },
        {
          type: "field_input",
          name: "DESC",
          text: "May be true or false",
        },
        {
          type: "input_dummy",
        },
        {
          type: "field_checkbox",
          name: "REQUIRED",
          checked: true,
        },
      ],
      previousStatement: "SlashCommandOption",
      nextStatement: "SlashCommandOption",
      colour: 15,
      tooltip: "%{BKY_BLOCK_SLASH_COMMAND_ARG_BOOLEAN_TOOLTIP}",
      helpUrl: "",
    },
    {
      type: "block_slash_command_arg_text_channel",
      message0: "%{BKY_BLOCK_SLASH_COMMAND_ARG_TEXT_CHANNEL}",
      args0: [
        {
          type: "field_input",
          name: "NAME",
          text: "textchannel",
        },
        {
          type: "input_dummy",
        },
        {
          type: "field_input",
          name: "DESC",
          text: "A text channel",
        },
        {
          type: "input_dummy",
        },
        {
          type: "field_checkbox",
          name: "REQUIRED",
          checked: true,
        },
      ],
      previousStatement: "SlashCommandOption",
      nextStatement: "SlashCommandOption",
      colour: 15,
      tooltip: "%{BKY_BLOCK_SLASH_COMMAND_ARG_TEXT_CHANNEL_TOOLTIP}",
      helpUrl: "",
    },
    {
      type: "block_slash_command_arg_int",
      message0: "%{BKY_BLOCK_SLASH_COMMAND_ARG_INT}",
      args0: [
        {
          type: "field_input",
          name: "NAME",
          text: "number",
        },
        {
          type: "input_dummy",
        },
        {
          type: "field_input",
          name: "DESC",
          text: "An integer",
        },
        {
          type: "input_dummy",
        },
        {
          type: "field_checkbox",
          name: "REQUIRED",
          checked: true,
        },
      ],
      previousStatement: "SlashCommandOption",
      nextStatement: "SlashCommandOption",
      colour: 15,
      tooltip: "%{BKY_BLOCK_SLASH_COMMAND_ARG_INT_TOOLTIP}",
      helpUrl: "",
    },
    {
      type: "block_slash_command_arg_role",
      message0: "%{BKY_BLOCK_SLASH_COMMAND_ARG_ROLE}",
      args0: [
        {
          type: "field_input",
          name: "NAME",
          text: "role",
        },
        {
          type: "input_dummy",
        },
        {
          type: "field_input",
          name: "DESC",
          text: "A Role",
        },
        {
          type: "input_dummy",
        },
        {
          type: "field_checkbox",
          name: "REQUIRED",
          checked: true,
        },
      ],
      previousStatement: "SlashCommandOption",
      nextStatement: "SlashCommandOption",
      colour: 15,
      tooltip: "%{BKY_BLOCK_SLASH_COMMAND_ARG_ROLE_TOOLTIP}",
      helpUrl: "",
    },
    {
      type: "block_slash_command_arg_string",
      message0: "%{BKY_BLOCK_SLASH_COMMAND_ARG_STRING}",
      args0: [
        {
          type: "field_input",
          name: "NAME",
          text: "text",
        },
        {
          type: "input_dummy",
        },
        {
          type: "field_input",
          name: "DESC",
          text: "A text",
        },
        {
          type: "input_dummy",
        },
        {
          type: "field_checkbox",
          name: "REQUIRED",
          checked: true,
        },
      ],
      previousStatement: "SlashCommandOption",
      nextStatement: "SlashCommandOption",
      colour: 15,
      tooltip: "%{BKY_BLOCK_SLASH_COMMAND_ARG_STRING_TOOLTIP}",
      helpUrl: "",
    },
    {
      type: "block_slash_command_arg_user",
      message0: "%{BKY_BLOCK_SLASH_COMMAND_ARG_USER}",
      args0: [
        {
          type: "field_input",
          name: "NAME",
          text: "user",
        },
        {
          type: "input_dummy",
        },
        {
          type: "field_input",
          name: "DESC",
          text: "A server member",
        },
        {
          type: "input_dummy",
        },
        {
          type: "field_checkbox",
          name: "REQUIRED",
          checked: true,
        },
      ],
      previousStatement: "SlashCommandOption",
      nextStatement: "SlashCommandOption",
      colour: 15,
      tooltip: "%{BKY_BLOCK_SLASH_COMMAND_ARG_USER_TOOLTIP}",
      helpUrl: "",
    },
    {
      type: "block_slash_command_reply",
      message0: "%{BKY_BLOCK_SLASH_COMMAND_REPLY}",
      args0: [
        {
          type: "input_value",
          name: "TEXT",
          check: "String",
        },
      ],
      inputsInline: false,
      previousStatement: "block",
      nextStatement: "block",
      colour: 180,
      tooltip: "%{BKY_BLOCK_SLASH_COMMAND_REPLY_TOOLTIP}",
      helpUrl: "",
    },
    {
      type: "block_slash_command_get_boolean",
      message0: "%{BKY_BLOCK_SLASH_COMMAND_GET_BOOLEAN}",
      args0: [
        {
          type: "field_input",
          name: "NAME",
          text: "boolean",
        },
      ],
      output: "Boolean",
      colour: 15,
      tooltip: "%{BKY_BLOCK_SLASH_COMMAND_GET_BOOLEAN_TOOLTIP}",
      helpUrl: "",
    },
    {
      type: "block_slash_command_get_int",
      message0: "%{BKY_BLOCK_SLASH_COMMAND_GET_INT}",
      args0: [
        {
          type: "field_input",
          name: "NAME",
          text: "number",
        },
      ],
      output: "Number",
      colour: 15,
      tooltip: "%{BKY_BLOCK_SLASH_COMMAND_GET_INT_TOOLTIP}",
      helpUrl: "",
    },
    {
      type: "block_slash_command_get_role",
      message0: "%{BKY_BLOCK_SLASH_COMMAND_GET_ROLE}",
      args0: [
        {
          type: "field_input",
          name: "NAME",
          text: "role",
        },
      ],
      output: "Rank",
      colour: 15,
      tooltip: "%{BKY_BLOCK_SLASH_COMMAND_GET_ROLE_TOOLTIP}",
      helpUrl: "",
    },
    {
      type: "block_slash_command_get_string",
      message0: "%{BKY_BLOCK_SLASH_COMMAND_GET_STRING}",
      args0: [
        {
          type: "field_input",
          name: "NAME",
          text: "text",
        },
      ],
      output: "String",
      colour: 15,
      tooltip: "%{BKY_BLOCK_SLASH_COMMAND_GET_STRING_TOOLTIP}",
      helpUrl: "",
    },
    {
      type: "block_slash_command_get_user",
      message0: "%{BKY_BLOCK_SLASH_COMMAND_GET_USER}",
      args0: [
        {
          type: "field_input",
          name: "NAME",
          text: "user",
        },
      ],
      output: "User",
      colour: 15,
      tooltip: "%{BKY_BLOCK_SLASH_COMMAND_GET_USER_TOOLTIP}",
      helpUrl: "",
    },
    {
      type: "block_slash_command_get_text_channel",
      message0: "%{BKY_BLOCK_SLASH_COMMAND_GET_TEXT_CHANNEL}",
      args0: [
        {
          type: "field_input",
          name: "NAME",
          text: "textchannel",
        },
      ],
      output: "Channel",
      colour: 15,
      tooltip: "%{BKY_BLOCK_SLASH_COMMAND_GET_TEXT_CHANNEL_TOOLTIP}",
      helpUrl: "",
    },
    {
      type: "block_slash_command_data_channel",
      message0: "%{BKY_BLOCK_SLASH_COMMAND_DATA_CHANNEL}",
      output: "Channel",
      colour: 15,
      tooltip: "%{BKY_BLOCK_SLASH_COMMAND_DATA_CHANNEL_TOOLTIP}",
      helpUrl: "",
    },
    {
      type: "block_slash_command_data_user",
      message0: "%{BKY_BLOCK_SLASH_COMMAND_DATA_USER}",
      output: "User",
      colour: 15,
      tooltip: "%{BKY_BLOCK_SLASH_COMMAND_DATA_USER_TOOLTIP}",
      helpUrl: "",
    },
    {
      type: "block_slash_command_form_creator",
      message0: "%{BKY_BLOCK_SLASH_COMMAND_FORM_CREATOR}",
      args0: [
        {
          type: "field_input",
          name: "NAME",
          text: "default",
        },
        {
          type: "input_dummy",
        },
        {
          type: "input_statement",
          name: "INPUTS",
          check: "FormInputBlock",
        },
        {
          type: "input_statement",
          name: "STATEMENTS",
          check: "block",
        },
      ],
      previousStatement: "FormCreatorBlock",
      nextStatement: "block",
      colour: 60,
      tooltip: "%{BKY_BLOCK_SLASH_COMMAND_FORM_CREATOR_TOOLTIP}",
      helpUrl: "",
    },
    {
      type: "block_slash_command_form_input_text",
      message0: "%{BKY_BLOCK_SLASH_COMMAND_FORM_INPUT_TEXT}",
      args0: [
        {
          type: "field_dropdown",
          name: "STYLE",
          options: [
            ["%{BKY_SHORT}", "SHORT"],
            ["%{BKY_LONG}", "LONG"],
          ],
        },
        {
          type: "field_input",
          name: "NAME",
          text: "default",
        },
        {
          type: "input_dummy",
        },
        {
          type: "field_number",
          name: "MINSIZE",
          value: 0,
          min: 0,
          max: 3999,
          precision: 1,
        },
        {
          type: "field_number",
          name: "MAXSIZE",
          value: 4000,
          min: 1,
          max: 4000,
          precision: 1,
        },
        {
          type: "input_dummy",
        },
        {
          type: "field_input",
          name: "PLACEHOLDER",
          text: "Type something here..",
        },
        {
          type: "input_dummy",
        },
        {
          type: "field_checkbox",
          name: "REQUIRED",
          checked: true,
        },
      ],
      previousStatement: "FormInputBlock",
      nextStatement: "FormInputBlock",
      colour: 45,
      tooltip: "%{BKY_BLOCK_SLASH_COMMAND_FORM_INPUT_TEXT_TOOLTIP}",
      helpUrl: "",
    },
  ]),
};
