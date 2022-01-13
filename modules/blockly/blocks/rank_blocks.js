/* ########## Ranks Blocks ######### */
/* Used to perform actions and get data about ranks */

module.exports = {
  blocks: JSON.stringify(
  [{
    "type": "block_rank_create",
    "message0": "%{BKY_BLOCK_RANK_CREATE}",
    "args0": [
      {
        "type": "input_value",
        "name": "name",
        "check": "String"
      },
      {
        "type": "field_colour",
        "name": "color",
        "colour": "#ffffff"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_checkbox",
        "name": "is_pingeable",
        "checked": true
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_checkbox",
        "name": "are_members_shown",
        "checked": true
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "position",
        "check": "Number"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 0,
    "tooltip": "%{BKY_BLOCK_RANK_CREATE_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "block_rank_created_rank",
    "message0": "%{BKY_BLOCK_RANK_CREATED_RANK}",
    "output": "Rank",
    "colour": 15,
    "tooltip": "%{BKY_BLOCK_RANK_CREATED_RANK_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "block_rank_delete",
    "message0": "%{BKY_BLOCK_RANK_DELETE}",
    "args0": [
      {
        "type": "input_value",
        "name": "rank",
        "check": "Rank"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 0,
    "tooltip": "%{BKY_BLOCK_RANK_DELETE_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "block_rank_edit_name",
    "message0": "%{BKY_BLOCK_RANK_EDIT_NAME}",
    "args0": [
      {
        "type": "input_value",
        "name": "rank",
        "check": "Rank"
      },
      {
        "type": "input_value",
        "name": "name",
        "check": "String"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 0,
    "tooltip": "%{BKY_BLOCK_RANK_EDIT_NAME_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "block_rank_edit_color",
    "message0": "%{BKY_BLOCK_RANK_EDIT_COLOR}",
    "args0": [
      {
        "type": "input_value",
        "name": "rank",
        "check": "Rank"
      },
      {
        "type": "field_colour",
        "name": "color",
        "colour": "#ffffff"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 0,
    "tooltip": "%{BKY_BLOCK_RANK_EDIT_COLOR_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "block_rank_edit_pingeable",
    "message0": "%{BKY_BLOCK_RANK_EDIT_PINGEABLE}",
    "args0": [
      {
        "type": "input_value",
        "name": "rank",
        "check": "Rank"
      },
      {
        "type": "field_dropdown",
        "name": "IS_PINGEABLE",
        "options": [
          [
            "%{BKY_YES}",
            "PINGEABLE"
          ],
          [
            "%{BKY_NO}",
            "NOT_PINGEABLE"
          ]
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 0,
    "tooltip": "%{BKY_BLOCK_RANK_EDIT_PINGEABLE_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "block_rank_edit_members_shown",
    "message0": "%{BKY_BLOCK_RANK_EDIT_MEMBERS_SHOWN}",
    "args0": [
      {
        "type": "input_value",
        "name": "rank",
        "check": "Rank"
      },
      {
        "type": "field_dropdown",
        "name": "ARE_MEMBER_SHOWN",
        "options": [
          [
            "%{BKY_YES}",
            "SHOWN"
          ],
          [
            "%{BKY_NO}",
            "NOT_SHOWN"
          ]
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 0,
    "tooltip": "%{BKY_BLOCK_RANK_EDIT_MEMBERS_SHOWN_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "block_rank_edit_position",
    "message0": "%{BKY_BLOCK_RANK_EDIT_POSITION}",
    "args0": [
      {
        "type": "input_value",
        "name": "rank",
        "check": "Rank"
      },
      {
        "type": "input_value",
        "name": "position",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 0,
    "tooltip": "%{BKY_BLOCK_RANK_EDIT_POSITION_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "block_rank_get_rank_with_id",
    "message0": "%{BKY_BLOCK_RANK_GET_RANK_WITH_ID}",
    "args0": [
      {
        "type": "input_value",
        "name": "id",
        "check": "String"
      }
    ],
    "output": "Rank",
    "colour": 15,
    "tooltip": "%{BKY_BLOCK_RANK_GET_RANK_WITH_ID_TOOLTIP}",
    "helpUrl": ""
  },
  {
  "type": "block_rank_edit_permissions",
  "message0": "%{BKY_BLOCK_RANK_EDIT_PERMISSIONS}",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "permission",
      "options": [
        [
          "%{BKY_PERMISSION_SEE_CHANNEL}",
          "SEE_CHANNEL"
        ],
        [
          "%{BKY_PERMISSION_MANAGE_CHANNEL}",
          "MANAGE_CHANNEL"
        ],
        [
          "%{BKY_PERMISSION_MANAGE_RANKS}",
          "MANAGE_RANKS"
        ],
        [
          "%{BKY_PERMISSION_MANAGE_EMOJIS}",
          "MANAGE_EMOJIS"
        ],
        [
          "%{BKY_PERMISSION_SEE_SERVER_LOGS}",
          "SEE_SERVER_LOGS"
        ],
        [
          "%{BKY_PERMISSION_MANAGE_WEBHOOKS}",
          "MANAGE_WEBHOOKS"
        ],
        [
          "%{BKY_PERMISSION_MANAGE_SERVER}",
          "MANAGE_SERVER"
        ],
        [
          "%{BKY_PERMISSION_CREATE_INVITE}",
          "CREATE_INVITE"
        ],
        [
          "%{BKY_PERMISSION_EDIT_USERNAME}",
          "EDIT_USERNAME"
        ],
        [
          "%{BKY_PERMISSION_EDIT_OTHERS_USERNAME}",
          "EDIT_OTHERS_USERNAME"
        ],
        [
          "%{BKY_PERMISSION_KICK}",
          "KICK"
        ],
        [
          "%{BKY_PERMISSION_BAN}",
          "BAN"
        ],
        [
          "%{BKY_PERMISSION_TIMEOUT}",
          "TIMEOUT"
        ],
        [
          "%{BKY_PERMISSION_SEND_MESSAGES}",
          "SEND_MESSAGES"
        ],
        [
          "%{BKY_PERMISSION_SEND_MESSAGE_IN_THREADS}",
          "SEND_MESSAGES_IN_THREADS"
        ],
        [
          "%{BKY_PERMISSION_CREATE_PUBLIC_THREADS}",
          "CREATE_PUBLIC_THREADS"
        ],
        [
          "%{BKY_PERMISSION_CREATE_PRIVATE_THREADS}",
          "CREATE_PRIVATE_THREADS"
        ],
        [
          "%{BKY_PERMISSION_EMBED_LINKS}",
          "EMBED_LINKS"
        ],
        [
          "%{BKY_PERMISSION_ADD_FILES}",
          "ADD_FILES"
        ],
        [
          "%{BKY_PERMISSION_ADD_REACTIONS}",
          "ADD_REACTIONS"
        ],
        [
          "%{BKY_PERMISSION_USE_EXTERNAL_EMOJIS}",
          "USE_EXTERNAL_EMOJIS"
        ],
        [
          "%{BKY_PERMISSION_USE_EXTERNAL_STICKERS}",
          "USE_EXTERNAL_STICKERS"
        ],
        [
          "%{BKY_PERMISSION_PING_EVERYONE}",
          "PING_EVERYONE"
        ],
        [
          "%{BKY_PERMISSION_MANAGE_MESSAGES}",
          "MANAGE_MESSAGES"
        ],
        [
          "%{BKY_PERMISSION_MANAGE_THREADS}",
          "MANAGE_THREADS"
        ],
        [
          "%{BKY_PERMISSION_SEE_OLD_MESSAGES}",
          "SEE_OLD_MESSAGES"
        ],
        [
          "%{BKY_PERMISSION_SEND_VOICE_MESSAGE}",
          "SEND_VOICE_MESSAGE"
        ],
        [
          "%{BKY_PERMISSION_USE_APP_COMMANDS}",
          "USE_APP_COMMANDS"
        ],
        [
          "%{BKY_PERMISSION_CONNECT_TO_VOICE_CHANNEL}",
          "CONNECT_TO_VOICE_CHANNEL"
        ],
        [
          "%{BKY_PERMISSION_SPEAK}",
          "SPEAK"
        ],
        [
          "%{BKY_PERMISSION_USE_VIDEO}",
          "USE_VIDEO"
        ],
        [
          "%{BKY_PERMISSION_START_ACTIVITY}",
          "START_ACTIVITY"
        ],
        [
          "%{BKY_PERMISSION_USE_VOICE_DETECTION}",
          "VOICE_DETECTION"
        ],
        [
          "%{BKY_PERMISSION_PRIORITY_SPEAKER}",
          "PRIORITY_SPEAKER"
        ],
        [
          "%{BKY_PERMISSION_MUTE_MEMBER}",
          "MUTE_MEMBER"
        ],
        [
          "%{BKY_PERMISSION_DEAF_MEMBER}",
          "DEAF_MEMBER"
        ],
        [
          "%{BKY_PERMISSION_MOOVE_MEMBER}",
          "MOOVE_MEMBER"
        ],
        [
          "%{BKY_PERMISSION_MANAGE_VOICE_CHANNEL_EVENTS}",
          "MANAGE_EVENTS"
        ],
        [
          "%{BKY_PERMISSION_ADMINISTRATOR}",
          "ADMINISTRATOR"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "rank",
      "check": "Rank"
    },
    {
      "type": "field_dropdown",
      "name": "isGranted",
      "options": [
        [
          "%{BKY_PERMISSION_GRANT_PERMISSION}",
          "GRANT"
        ],
        [
          "%{BKY_PERMISSION_DENY_PERMISSION}",
          "DENY"
        ],
        [
          "%{BKY_PERMISSION_UNDEFINED_PERMISSION}",
          "UNDEFINED"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "%{BKY_BLOCK_RANK_EDIT_PERMISSIONS_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "block_rank_get_name",
  "message0": "%{BKY_BLOCK_RANK_GET_NAME}",
  "args0": [
    {
      "type": "input_value",
      "name": "rank",
      "check": "Rank"
    }
  ],
  "output": "String",
  "colour": 15,
  "tooltip": "%{BKY_BLOCK_RANK_GET_NAME_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "block_rank_get_position",
  "message0": "%{BKY_BLOCK_RANK_GET_POSITION}",
  "args0": [
    {
      "type": "input_value",
      "name": "rank",
      "check": "Rank"
    }
  ],
  "output": "Number",
  "colour": 15,
  "tooltip": "%{BKY_BLOCK_RANK_GET_POSITION_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "block_rank_get_color",
  "message0": "%{BKY_BLOCK_RANK_GET_COLOR}",
  "args0": [
    {
      "type": "input_value",
      "name": "rank",
      "check": "Rank"
    }
  ],
  "output": "String",
  "colour": 15,
  "tooltip": "%{BKY_BLOCK_RANK_GET_COLOR_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "block_rank_get_id",
  "message0": "%{BKY_BLOCK_RANK_GET_ID}",
  "args0": [
    {
      "type": "input_value",
      "name": "rank",
      "check": "Rank"
    }
  ],
  "output": "String",
  "colour": 15,
  "tooltip": "%{BKY_BLOCK_RANK_GET_ID_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "block_rank_has_permission",
  "message0": "%{BKY_BLOCK_RANK_HAS_PERMISSION}",
  "args0": [
    {
      "type": "input_value",
      "name": "rank",
      "check": "Rank"
    },
    {
      "type": "field_dropdown",
      "name": "permission",
      "options": [
        [
          "%{BKY_PERMISSION_SEE_CHANNEL}",
          "SEE_CHANNEL"
        ],
        [
          "%{BKY_PERMISSION_MANAGE_CHANNEL}",
          "MANAGE_CHANNEL"
        ],
        [
          "%{BKY_PERMISSION_MANAGE_RANKS}",
          "MANAGE_RANKS"
        ],
        [
          "%{BKY_PERMISSION_MANAGE_EMOJIS}",
          "MANAGE_EMOJIS"
        ],
        [
          "%{BKY_PERMISSION_SEE_SERVER_LOGS}",
          "SEE_SERVER_LOGS"
        ],
        [
          "%{BKY_PERMISSION_MANAGE_WEBHOOKS}",
          "MANAGE_WEBHOOKS"
        ],
        [
          "%{BKY_PERMISSION_MANAGE_SERVER}",
          "MANAGE_SERVER"
        ],
        [
          "%{BKY_PERMISSION_CREATE_INVITE}",
          "CREATE_INVITE"
        ],
        [
          "%{BKY_PERMISSION_EDIT_USERNAME}",
          "EDIT_USERNAME"
        ],
        [
          "%{BKY_PERMISSION_EDIT_OTHERS_USERNAME}",
          "EDIT_OTHERS_USERNAME"
        ],
        [
          "%{BKY_PERMISSION_KICK}",
          "KICK"
        ],
        [
          "%{BKY_PERMISSION_BAN}",
          "BAN"
        ],
        [
          "%{BKY_PERMISSION_TIMEOUT}",
          "TIMEOUT"
        ],
        [
          "%{BKY_PERMISSION_SEND_MESSAGES}",
          "SEND_MESSAGES"
        ],
        [
          "%{BKY_PERMISSION_SEND_MESSAGE_IN_THREADS}",
          "SEND_MESSAGES_IN_THREADS"
        ],
        [
          "%{BKY_PERMISSION_CREATE_PUBLIC_THREADS}",
          "CREATE_PUBLIC_THREADS"
        ],
        [
          "%{BKY_PERMISSION_CREATE_PRIVATE_THREADS}",
          "CREATE_PRIVATE_THREADS"
        ],
        [
          "%{BKY_PERMISSION_EMBED_LINKS}",
          "EMBED_LINKS"
        ],
        [
          "%{BKY_PERMISSION_ADD_FILES}",
          "ADD_FILES"
        ],
        [
          "%{BKY_PERMISSION_ADD_REACTIONS}",
          "ADD_REACTIONS"
        ],
        [
          "%{BKY_PERMISSION_USE_EXTERNAL_EMOJIS}",
          "USE_EXTERNAL_EMOJIS"
        ],
        [
          "%{BKY_PERMISSION_USE_EXTERNAL_STICKERS}",
          "USE_EXTERNAL_STICKERS"
        ],
        [
          "%{BKY_PERMISSION_PING_EVERYONE}",
          "PING_EVERYONE"
        ],
        [
          "%{BKY_PERMISSION_MANAGE_MESSAGES}",
          "MANAGE_MESSAGES"
        ],
        [
          "%{BKY_PERMISSION_MANAGE_THREADS}",
          "MANAGE_THREADS"
        ],
        [
          "%{BKY_PERMISSION_SEE_OLD_MESSAGES}",
          "SEE_OLD_MESSAGES"
        ],
        [
          "%{BKY_PERMISSION_SEND_VOICE_MESSAGE}",
          "SEND_VOICE_MESSAGE"
        ],
        [
          "%{BKY_PERMISSION_USE_APP_COMMANDS}",
          "USE_APP_COMMANDS"
        ],
        [
          "%{BKY_PERMISSION_CONNECT_TO_VOICE_CHANNEL}",
          "CONNECT_TO_VOICE_CHANNEL"
        ],
        [
          "%{BKY_PERMISSION_SPEAK}",
          "SPEAK"
        ],
        [
          "%{BKY_PERMISSION_USE_VIDEO}",
          "USE_VIDEO"
        ],
        [
          "%{BKY_PERMISSION_START_ACTIVITY}",
          "START_ACTIVITY"
        ],
        [
          "%{BKY_PERMISSION_USE_VOICE_DETECTION}",
          "VOICE_DETECTION"
        ],
        [
          "%{BKY_PERMISSION_PRIORITY_SPEAKER}",
          "PRIORITY_SPEAKER"
        ],
        [
          "%{BKY_PERMISSION_MUTE_MEMBER}",
          "MUTE_MEMBER"
        ],
        [
          "%{BKY_PERMISSION_DEAF_MEMBER}",
          "DEAF_MEMBER"
        ],
        [
          "%{BKY_PERMISSION_MOOVE_MEMBER}",
          "MOOVE_MEMBER"
        ],
        [
          "%{BKY_PERMISSION_MANAGE_VOICE_CHANNEL_EVENTS}",
          "MANAGE_EVENTS"
        ],
        [
          "%{BKY_PERMISSION_ADMINISTRATOR}",
          "ADMINISTRATOR"
        ]
      ]
    }
  ],
  "output": "Boolean",
  "colour": 15,
  "tooltip": "%{BKY_BLOCK_RANK_HAS_PERMISSION_TOOLTIP}",
  "helpUrl": ""
}]
)};
