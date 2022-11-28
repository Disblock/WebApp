/* ########## Var Blocks ######### */
/* Added blocks to manage variables */

module.exports = {
  blocks: JSON.stringify([{
  "type": "block_slash_command_creator",
  "message0": "%{BKY_BLOCK_SLASH_COMMAND_CREATOR}",
  "args0": [
    {
      "type": "field_input",
      "name": "NAME",
      "text": "name"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_input",
      "name": "DESC",
      "text": "My command"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_checkbox",
      "name": "EPHEMERAL",
      "checked": true
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "ARGS",
      "check": "SlashCommandOption"
    },
    {
      "type": "input_statement",
      "name": "STATEMENTS",
      "check": "block"
    }
  ],
  "colour": 30,
  "tooltip": "%{BKY_BLOCK_SLASH_COMMAND_CREATOR_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "block_slash_command_arg_boolean",
  "message0": "%{BKY_BLOCK_SLASH_COMMAND_ARG_BOOLEAN}",
  "args0": [
    {
      "type": "field_input",
      "name": "NAME",
      "text": "Boolean"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_input",
      "name": "DESC",
      "text": "May be true or false"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_checkbox",
      "name": "REQUIRED",
      "checked": true
    }
  ],
  "previousStatement": "SlashCommandOption",
  "nextStatement": "SlashCommandOption",
  "colour": 15,
  "tooltip": "%{BKY_BLOCK_SLASH_COMMAND_ARG_BOOLEAN_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "block_slash_command_arg_text_channel",
  "message0": "%{BKY_BLOCK_SLASH_COMMAND_ARG_TEXT_CHANNEL}",
  "args0": [
    {
      "type": "field_input",
      "name": "CHANNEL",
      "text": "textChannel"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_input",
      "name": "DESC",
      "text": "A text channel"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_checkbox",
      "name": "REQUIRED",
      "checked": true
    }
  ],
  "previousStatement": "SlashCommandOption",
  "nextStatement": "SlashCommandOption",
  "colour": 15,
  "tooltip": "%{BKY_BLOCK_SLASH_COMMAND_ARG_TEXT_CHANNEL_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "block_slash_command_arg_int",
  "message0": "%{BKY_BLOCK_SLASH_COMMAND_ARG_INT}",
  "args0": [
    {
      "type": "field_input",
      "name": "INT",
      "text": "Number"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_input",
      "name": "DESC",
      "text": "An integer"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_checkbox",
      "name": "REQUIRED",
      "checked": true
    }
  ],
  "previousStatement": "SlashCommandOption",
  "nextStatement": "SlashCommandOption",
  "colour": 15,
  "tooltip": "%{BKY_BLOCK_SLASH_COMMAND_ARG_INT_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "block_slash_command_arg_role",
  "message0": "%{BKY_BLOCK_SLASH_COMMAND_ARG_ROLE}",
  "args0": [
    {
      "type": "field_input",
      "name": "ROLE",
      "text": "Role"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_input",
      "name": "DESC",
      "text": "A Role"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_checkbox",
      "name": "REQUIRED",
      "checked": true
    }
  ],
  "previousStatement": "SlashCommandOption",
  "nextStatement": "SlashCommandOption",
  "colour": 15,
  "tooltip": "%{BKY_BLOCK_SLASH_COMMAND_ARG_ROLE_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "block_slash_command_arg_string",
  "message0": "%{BKY_BLOCK_SLASH_COMMAND_ARG_STRING}",
  "args0": [
    {
      "type": "field_input",
      "name": "TEXT",
      "text": "Text"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_input",
      "name": "DESC",
      "text": "A text"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_checkbox",
      "name": "REQUIRED",
      "checked": true
    }
  ],
  "previousStatement": "SlashCommandOption",
  "nextStatement": "SlashCommandOption",
  "colour": 15,
  "tooltip": "%{BKY_BLOCK_SLASH_COMMAND_ARG_STRING_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "block_slash_command_arg_user",
  "message0": "%{BKY_BLOCK_SLASH_COMMAND_ARG_USER}",
  "args0": [
    {
      "type": "field_input",
      "name": "USER",
      "text": "User"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_input",
      "name": "DESC",
      "text": "A server member"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_checkbox",
      "name": "REQUIRED",
      "checked": true
    }
  ],
  "previousStatement": "SlashCommandOption",
  "nextStatement": "SlashCommandOption",
  "colour": 15,
  "tooltip": "%{BKY_BLOCK_SLASH_COMMAND_ARG_USER_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "block_slash_command_reply",
  "message0": "%{BKY_BLOCK_SLASH_COMMAND_REPLY}",
  "args0": [
    {
      "type": "input_value",
      "name": "TEXT",
      "check": "String"
    }
  ],
  "inputsInline": false,
  "previousStatement": "block",
  "nextStatement": "block",
  "colour": 180,
  "tooltip": "%{BKY_BLOCK_SLASH_COMMAND_REPLY_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "block_slash_command_get_boolean",
  "message0": "%{BKY_BLOCK_SLASH_COMMAND_GET_BOOLEAN}",
  "args0": [
    {
      "type": "field_input",
      "name": "NAME",
      "text": "Boolean"
    }
  ],
  "output": "Boolean",
  "colour": 15,
  "tooltip": "%{BKY_BLOCK_SLASH_COMMAND_GET_BOOLEAN_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "block_slash_command_get_int",
  "message0": "%{BKY_BLOCK_SLASH_COMMAND_GET_INT}",
  "args0": [
    {
      "type": "field_input",
      "name": "NAME",
      "text": "Number"
    }
  ],
  "output": "Number",
  "colour": 15,
  "tooltip": "%{BKY_BLOCK_SLASH_COMMAND_GET_INT_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "block_slash_command_get_role",
  "message0": "%{BKY_BLOCK_SLASH_COMMAND_GET_ROLE}",
  "args0": [
    {
      "type": "field_input",
      "name": "NAME",
      "text": "Role"
    }
  ],
  "output": "Rank",
  "colour": 15,
  "tooltip": "%{BKY_BLOCK_SLASH_COMMAND_GET_ROLE_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "block_slash_command_get_string",
  "message0": "%{BKY_BLOCK_SLASH_COMMAND_GET_STRING}",
  "args0": [
    {
      "type": "field_input",
      "name": "NAME",
      "text": "Text"
    }
  ],
  "output": "String",
  "colour": 15,
  "tooltip": "%{BKY_BLOCK_SLASH_COMMAND_GET_STRING_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "block_slash_command_get_user",
  "message0": "%{BKY_BLOCK_SLASH_COMMAND_GET_USER}",
  "args0": [
    {
      "type": "field_input",
      "name": "NAME",
      "text": "User"
    }
  ],
  "output": "User",
  "colour": 15,
  "tooltip": "%{BKY_BLOCK_SLASH_COMMAND_GET_USER_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "block_slash_command_get_text_channel",
  "message0": "%{BKY_BLOCK_SLASH_COMMAND_GET_TEXT_CHANNEL}",
  "args0": [
    {
      "type": "field_input",
      "name": "NAME",
      "text": "textChannel"
    }
  ],
  "output": "Channel",
  "colour": 15,
  "tooltip": "%{BKY_BLOCK_SLASH_COMMAND_GET_TEXT_CHANNEL_TOOLTIP}",
  "helpUrl": ""
}]
)};
