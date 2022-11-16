/* ########## User Blocks ######### */
/* Used to interact with Users methods. */

module.exports = {
  blocks: JSON.stringify(
[{
  "type": "block_user_ban",
  "message0": "%{BKY_BLOCK_USER_BAN}",
  "args0": [
    {
      "type": "input_value",
      "name": "user",
      "check": "User"
    },
    {
      "type": "input_value",
      "name": "reason",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "previousStatement": "block",
  "nextStatement": "block",
  "colour": 300,
  "tooltip": "%{BKY_BLOCK_USER_BAN_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "block_user_unban",
  "message0": "%{BKY_BLOCK_USER_UNBAN}",
  "args0": [
    {
      "type": "input_value",
      "name": "user",
      "check": [
        "String",
        "User"
      ]
    },
    {
      "type": "input_value",
      "name": "reason",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "previousStatement": "block",
  "nextStatement": "block",
  "colour": 300,
  "tooltip": "%{BKY_BLOCK_USER_UNBAN_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "block_user_send_private_message",
  "message0": "%{BKY_BLOCK_USER_SEND_PRIVATE_MESSAGE}",
  "args0": [
    {
      "type": "input_value",
      "name": "message",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "user",
      "check": "User"
    }
  ],
  "previousStatement": "block",
  "nextStatement": "block",
  "colour": 300,
  "tooltip": "%{BKY_BLOCK_USER_SEND_PRIVATE_MESSAGE_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "block_user_kick",
  "message0": "%{BKY_BLOCK_USER_KICK}",
  "args0": [
    {
      "type": "input_value",
      "name": "user",
      "check": "User"
    },
    {
      "type": "input_value",
      "name": "reason",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "previousStatement": "block",
  "nextStatement": "block",
  "colour": 300,
  "tooltip": "%{BKY_BLOCK_USER_KICK_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "block_user_get_with_id",
  "message0": "%{BKY_BLOCK_USER_GET_WITH_ID}",
  "args0": [
    {
      "type": "input_value",
      "name": "id",
      "check": "String"
    }
  ],
  "output": "User",
  "colour": 285,
  "tooltip": "%{BKY_BLOCK_USER_GET_WITH_ID_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "block_user_get_server_username",
  "message0": "%{BKY_BLOCK_USER_GET_SERVER_USERNAME}",
  "args0": [
    {
      "type": "input_value",
      "name": "user",
      "check": "User"
    }
  ],
  "output": "String",
  "colour": 285,
  "tooltip": "%{BKY_BLOCK_USER_GET_SERVER_USERNAME_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "block_user_get_username",
  "message0": "%{BKY_BLOCK_USER_GET_USERNAME}",
  "args0": [
    {
      "type": "input_value",
      "name": "user",
      "check": "User"
    }
  ],
  "output": "String",
  "colour": 285,
  "tooltip": "%{BKY_BLOCK_USER_GET_USERNAME_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "block_user_get_tag",
  "message0": "%{BKY_BLOCK_USER_GET_TAG}",
  "args0": [
    {
      "type": "input_value",
      "name": "user",
      "check": "User"
    }
  ],
  "output": "String",
  "colour": 285,
  "tooltip": "%{BKY_BLOCK_USER_GET_TAG_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "block_user_get_id",
  "message0": "%{BKY_BLOCK_USER_GET_ID}",
  "args0": [
    {
      "type": "input_value",
      "name": "user",
      "check": "User"
    }
  ],
  "output": "String",
  "colour": 285,
  "tooltip": "%{BKY_BLOCK_USER_GET_ID_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "block_user_get_picture",
  "message0": "%{BKY_BLOCK_USER_GET_PICTURE}",
  "args0": [
    {
      "type": "input_value",
      "name": "user",
      "check": "User"
    }
  ],
  "output": "String",
  "colour": 285,
  "tooltip": "%{BKY_BLOCK_USER_GET_PICTURE_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "block_user_is_bot",
  "message0": "%{BKY_BLOCK_USER_IS_BOT}",
  "args0": [
    {
      "type": "input_value",
      "name": "user",
      "check": "User"
    }
  ],
  "output": "Boolean",
  "colour": 285,
  "tooltip": "%{BKY_BLOCK_USER_IS_BOT_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "block_user_mute",
  "message0": "%{BKY_BLOCK_USER_MUTE}",
  "args0": [
    {
      "type": "input_value",
      "name": "user",
      "check": "User"
    }
  ],
  "previousStatement": "block",
  "nextStatement": "block",
  "colour": 300,
  "tooltip": "%{BKY_BLOCK_USER_MUTE_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "block_user_unmute",
  "message0": "%{BKY_BLOCK_USER_UNMUTE}",
  "args0": [
    {
      "type": "input_value",
      "name": "user",
      "check": "User"
    }
  ],
  "previousStatement": "block",
  "nextStatement": "block",
  "colour": 300,
  "tooltip": "%{BKY_BLOCK_USER_UNMUTE_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "block_user_deaf",
  "message0": "%{BKY_BLOCK_USER_DEAF}",
  "args0": [
    {
      "type": "input_value",
      "name": "user",
      "check": "User"
    }
  ],
  "previousStatement": "block",
  "nextStatement": "block",
  "colour": 300,
  "tooltip": "%{BKY_BLOCK_USER_DEAF_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "block_user_undeaf",
  "message0": "%{BKY_BLOCK_USER_UNDEAF}",
  "args0": [
    {
      "type": "input_value",
      "name": "user",
      "check": "User"
    }
  ],
  "previousStatement": "block",
  "nextStatement": "block",
  "colour": 300,
  "tooltip": "%{BKY_BLOCK_USER_UNDEAF_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "block_user_is_timeout",
  "message0": "%{BKY_BLOCK_USER_IS_TIMEOUT}",
  "args0": [
    {
      "type": "input_value",
      "name": "user",
      "check": "User"
    }
  ],
  "output": "Boolean",
  "colour": 285,
  "tooltip": "%{BKY_BLOCK_USER_IS_TIMEOUT_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "block_user_timeout",
  "message0": "%{BKY_BLOCK_USER_TIMEOUT}",
  "args0": [
    {
      "type": "input_value",
      "name": "user",
      "check": "User"
    },
    {
      "type": "field_dropdown",
      "name": "duration",
      "options": [
        [
          "%{BKY_DURATION_1MIN}",
          "1min"
        ],
        [
          "%{BKY_DURATION_5MIN}",
          "5min"
        ],
        [
          "%{BKY_DURATION_10MIN}",
          "10min"
        ],
        [
          "%{BKY_DURATION_1H}",
          "1h"
        ],
        [
          "%{BKY_DURATION_1D}",
          "1d"
        ],
        [
          "%{BKY_DURATION_1W}",
          "1w"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "reason",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "previousStatement": "block",
  "nextStatement": "block",
  "colour": 300,
  "tooltip": "%{BKY_BLOCK_USER_TIMEOUT_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "block_user_custom_timeout",
  "message0": "%{BKY_BLOCK_USER_CUSTOM_TIMEOUT}",
  "args0": [
    {
      "type": "input_value",
      "name": "user",
      "check": "User"
    },
    {
      "type": "input_value",
      "name": "duration",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "reason",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "previousStatement": "block",
  "nextStatement": "block",
  "colour": 300,
  "tooltip": "%{BKY_BLOCK_USER_CUSTOM_TIMEOUT_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "block_user_remove_timeout",
  "message0": "%{BKY_BLOCK_USER_REMOVE_TIMEOUT}",
  "args0": [
    {
      "type": "input_value",
      "name": "user",
      "check": "User"
    }
  ],
  "previousStatement": "block",
  "nextStatement": "block",
  "colour": 300,
  "tooltip": "%{BKY_BLOCK_USER_REMOVE_TIMEOUT_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "block_user_has_permission",
  "message0": "%{BKY_BLOCK_USER_HAS_PERMISSION}",
  "args0": [
    {
      "type": "input_value",
      "name": "user",
      "check": "User"
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
  "inputsInline": true,
  "output": "Boolean",
  "colour": 285,
  "tooltip": "%{BKY_BLOCK_USER_HAS_PERMISSION_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "block_user_has_rank",
  "message0": "%{BKY_BLOCK_USER_HAS_RANK}",
  "args0": [
    {
      "type": "input_value",
      "name": "user",
      "check": "User"
    },
    {
      "type": "input_value",
      "name": "rank",
      "check": "Rank"
    }
  ],
  "inputsInline": true,
  "output": "Boolean",
  "colour": 285,
  "tooltip": "%{BKY_BLOCK_USER_HAS_RANK_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "block_user_is_in_voice_channel",
  "message0": "%{BKY_BLOCK_USER_IS_IN_VOICE_CHANNEL}",
  "args0": [
    {
      "type": "input_value",
      "name": "user",
      "check": "User"
    }
  ],
  "inputsInline": true,
  "output": "Boolean",
  "colour": 285,
  "tooltip": "%{BKY_BLOCK_USER_IS_IN_VOICE_CHANNEL_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "block_user_get_voice_channel",
  "message0": "%{BKY_BLOCK_USER_GET_VOICE_CHANNEL}",
  "args0": [
    {
      "type": "input_value",
      "name": "user",
      "check": "User"
    }
  ],
  "output": "VoiceChannel",
  "colour": 285,
  "tooltip": "%{BKY_BLOCK_USER_GET_VOICE_CHANNEL_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "block_user_move_to_voice_channel",
  "message0": "%{BKY_BLOCK_USER_MOVE_TO_VOICE_CHANNEL}",
  "args0": [
    {
      "type": "input_value",
      "name": "user",
      "check": "User"
    },
    {
      "type": "input_value",
      "name": "channel",
      "check": "VoiceChannel"
    }
  ],
  "inputsInline": true,
  "previousStatement": "block",
  "nextStatement": "block",
  "colour": 300,
  "tooltip": "%{BKY_BLOCK_USER_MOVE_TO_VOICE_CHANNEL_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "block_user_give_rank",
  "message0": "%{BKY_BLOCK_USER_GIVE_RANK}",
  "args0": [
    {
      "type": "input_value",
      "name": "user",
      "check": "User"
    },
    {
      "type": "input_value",
      "name": "rank",
      "check": "Rank"
    }
  ],
  "inputsInline": true,
  "previousStatement": "block",
  "nextStatement": "block",
  "colour": 300,
  "tooltip": "%{BKY_BLOCK_USER_GIVE_RANK_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "block_user_remove_rank",
  "message0": "%{BKY_BLOCK_USER_REMOVE_RANK}",
  "args0": [
    {
      "type": "input_value",
      "name": "user",
      "check": "User"
    },
    {
      "type": "input_value",
      "name": "rank",
      "check": "Rank"
    }
  ],
  "inputsInline": true,
  "previousStatement": "block",
  "nextStatement": "block",
  "colour": 300,
  "tooltip": "%{BKY_BLOCK_USER_REMOVE_RANK_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "block_user_rename",
  "message0": "%{BKY_BLOCK_USER_RENAME}",
  "args0": [
    {
      "type": "input_value",
      "name": "user",
      "check": "User"
    },
    {
      "type": "input_value",
      "name": "name",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "previousStatement": "block",
  "nextStatement": "block",
  "colour": 300,
  "tooltip": "%{BKY_BLOCK_USER_RENAME_TOOLTIP}",
  "helpUrl": ""
}])};
