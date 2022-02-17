/* ########## Channels Blocks ######### */
/* Used to manage channels and threads */
module.exports = {
  blocks: JSON.stringify([{
    "type": "block_channel_create_text_channel",
    "message0": "%{BKY_BLOCK_CHANNEL_CREATE_TEXT_CHANNEL}",
    "args0": [
      {
        "type": "input_value",
        "name": "name",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "topic",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "category",
        "check": "Category"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 60,
    "tooltip": "%{BKY_BLOCK_CHANNEL_CREATE_TEXT_CHANNEL_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "block_channel_create_voice_channel",
    "message0": "%{BKY_BLOCK_CHANNEL_CREATE_VOICE_CHANNEL}",
    "args0": [
      {
        "type": "input_value",
        "name": "name",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "category",
        "check": "Category"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 60,
    "tooltip": "%{BKY_BLOCK_CHANNEL_CREATE_VOICE_CHANNEL_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "block_channel_var_voice_channel",
    "message0": "%{BKY_BLOCK_CHANNEL_VAR_VOICE_CHANNEL}",
    "output": "VoiceChannel",
    "colour": 75,
    "tooltip": "%{BKY_BLOCK_CHANNEL_VAR_VOICE_CHANNEL_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "block_channel_var_text_channel",
    "message0": "%{BKY_BLOCK_CHANNEL_VAR_TEXT_CHANNEL}",
    "output": "Channel",
    "colour": 75,
    "tooltip": "%{BKY_BLOCK_CHANNEL_VAR_TEXT_CHANNEL_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "block_channel_delete",
    "message0": "%{BKY_BLOCK_CHANNEL_DELETE}",
    "args0": [
      {
        "type": "input_value",
        "name": "channel",
        "check": [
          "Channel",
          "VoiceChannel",
          "ThreadChannel"
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 60,
    "tooltip": "%{BKY_BLOCK_CHANNEL_DELETE_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "block_channel_renamme",
    "message0": "%{BKY_BLOCK_CHANNEL_RENAMME}",
    "args0": [
      {
        "type": "input_value",
        "name": "channel",
        "check": [
          "Channel",
          "VoiceChannel",
          "ThreadChannel"
        ]
      },
      {
        "type": "input_value",
        "name": "text",
        "check": "String"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 60,
    "tooltip": "%{BKY_BLOCK_CHANNEL_RENAMME_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "block_channel_get_category_of_channel",
    "message0": "%{BKY_BLOCK_CHANNEL_GET_CATEGORY_OF_CHANNEL}",
    "args0": [
      {
        "type": "input_value",
        "name": "channel",
        "check": [
          "Channel",
          "VoiceChannel"
        ]
      }
    ],
    "output": "Category",
    "colour": 75,
    "tooltip": "%{BKY_BLOCK_CHANNEL_GET_CATEGORY_OF_CHANNEL_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "block_channel_get_channel_name",
    "message0": "%{BKY_BLOCK_CHANNEL_GET_CHANNEL_NAME}",
    "args0": [
      {
        "type": "input_value",
        "name": "channel",
        "check": [
          "Channel",
          "VoiceChannel"
        ]
      }
    ],
    "output": "String",
    "colour": 75,
    "tooltip": "%{BKY_BLOCK_CHANNEL_GET_CHANNEL_NAME_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "block_channel_get_channel_topic",
    "message0": "%{BKY_BLOCK_CHANNEL_GET_CHANNEL_TOPIC}",
    "args0": [
      {
        "type": "input_value",
        "name": "channel",
        "check": "Channel"
      }
    ],
    "output": "String",
    "colour": 75,
    "tooltip": "%{BKY_BLOCK_CHANNEL_GET_CHANNEL_TOPIC_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "block_channel_get_channel_id",
    "message0": "%{BKY_BLOCK_CHANNEL_GET_CHANNEL_ID}",
    "args0": [
      {
        "type": "input_value",
        "name": "channel",
        "check": [
          "Channel",
          "VoiceChannel",
          "ThreadChannel"
        ]
      }
    ],
    "output": "String",
    "colour": 75,
    "tooltip": "%{BKY_BLOCK_CHANNEL_GET_CHANNEL_ID_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "block_channel_get_channel_with_id",
    "message0": "%{BKY_BLOCK_CHANNEL_GET_CHANNEL_WITH_ID}",
    "args0": [
      {
        "type": "input_value",
        "name": "channel_id",
        "check": "String"
      }
    ],
    "output": [
      "Channel",
      "VoiceChannel",
      "ThreadChannel"
    ],
    "colour": 75,
    "tooltip": "%{BKY_BLOCK_CHANNEL_GET_CHANNEL_WITH_ID_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "block_channel_get_permission",
    "message0": "%{BKY_BLOCK_CHANNEL_GET_PERMISSION}",
    "args0": [
      {
        "type": "input_value",
        "name": "userOrRank",
        "check": [
          "User",
          "Rank"
        ]
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
            "%{BKY_PERMISSION_MANAGE_CHANNEL_PERMISSIONS}",
            "MANAGE_CHANNEL_PERMISSIONS"
          ],
          [
            "%{BKY_PERMISSION_MANAGE_WEBHOOKS}",
            "MANAGE_CHANNEL_WEBHOOKS"
          ],
          [
            "%{BKY_PERMISSION_CREATE_INVITE}",
            "CREATE_INVITE"
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
            "USE_VOICE_DETECTOR"
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
            "MANAGE_VOICE_CHANNEL_EVENTS"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "channel",
        "check": [
          "Channel",
          "VoiceChannel",
          "ThreadChannel"
        ]
      }
    ],
    "inputsInline": false,
    "output": "Boolean",
    "colour": 75,
    "tooltip": "%{BKY_BLOCK_CHANNEL_GET_PERMISSION_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "block_channel_set_permission",
    "message0": "%{BKY_BLOCK_CHANNEL_SET_PERMISSION}",
    "args0": [
      {
        "type": "input_value",
        "name": "userOrRank",
        "check": [
          "User",
          "Rank"
        ]
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
            "%{BKY_PERMISSION_MANAGE_CHANNEL_PERMISSIONS}",
            "MANAGE_CHANNEL_PERMISSIONS"
          ],
          [
            "%{BKY_PERMISSION_MANAGE_WEBHOOKS}",
            "MANAGE_CHANNEL_WEBHOOKS"
          ],
          [
            "%{BKY_PERMISSION_CREATE_INVITE}",
            "CREATE_INVITE"
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
            "USE_VOICE_DETECTOR"
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
            "MANAGE_VOICE_CHANNEL_EVENTS"
          ]
        ]
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
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "channel",
        "check": [
          "Channel",
          "VoiceChannel"
        ]
      }
    ],
    "inputsInline": false,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 60,
    "tooltip": "%{BKY_BLOCK_CHANNEL_SET_PERMISSION_TOOLTIP}",
    "helpUrl": ""
  }
  /*,
  {
    "type": "block_channel_list",
    "message0": "%{BKY_BLOCK_CHANNEL_LIST}",
    "output": "Array",
    "colour": 60,
    "tooltip": "%{BKY_BLOCK_CHANNEL_LIST_TOOLTIP}",
    "helpUrl": ""
  }*/
])
}
