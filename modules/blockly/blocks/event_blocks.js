/* ########## Event Blocks ######### */
/* Used to trigger events. They come sometimes with var blocks, defined under event blocks */
module.exports = {
  blocks: JSON.stringify([{
  "type": "event_message_sent",
  "message0": "%{BKY_EVENT_MESSAGE_SENT}",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "statements"
    }
  ],
  "colour": 30,
  "tooltip": "%{BKY_EVENT_MESSAGE_SENT_TOOLTIP}",
  "helpUrl": ""
},

{
  "type": "event_message_deleted",
  "message0": "%{BKY_EVENT_MESSAGE_DELETED}",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "statements"
    }
  ],
  "colour": 30,
  "tooltip": "%{BKY_EVENT_MESSAGE_DELETED_TOOLTIP}",
  "helpUrl": ""
},

{
  "type": "event_message_updated",
  "message0": "%{BKY_EVENT_MESSAGE_UPDATED}",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "statements"
    }
  ],
  "colour": 30,
  "tooltip": "%{BKY_EVENT_MESSAGE_UPDATED_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "event_user_join",
  "message0": "%{BKY_EVENT_USER_JOIN}",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "statements"
    }
  ],
  "colour": 30,
  "tooltip": "%{BKY_EVENT_USER_JOIN_TOOLTIP}",
  "helpUrl": ""
},

{
  "type": "event_user_left",
  "message0": "%{BKY_EVENT_USER_LEFT}",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "statements"
    }
  ],
  "colour": 30,
  "tooltip": "%{BKY_EVENT_USER_LEFT_TOOLTIP}",
  "helpUrl": ""
},

{
  "type": "event_user_updated",
  "message0": "%{BKY_EVENT_USER_UPDATED}",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "statements"
    }
  ],
  "colour": 30,
  "tooltip": "%{BKY_EVENT_USER_UPDATED_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "event_role_created",
  "message0": "%{BKY_EVENT_ROLE_CREATED}",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "statements"
    }
  ],
  "colour": 30,
  "tooltip": "%{BKY_EVENT_ROLE_CREATED_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "event_role_deleted",
  "message0": "%{BKY_EVENT_ROLE_DELETED}",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "statements"
    }
  ],
  "colour": 30,
  "tooltip": "%{BKY_EVENT_ROLE_DELETED_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "event_role_edited",
  "message0": "%{BKY_EVENT_ROLE_EDITED}",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "statements"
    }
  ],
  "colour": 30,
  "tooltip": "%{BKY_EVENT_ROLE_EDITED_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "event_user_banned",
  "message0": "%{BKY_EVENT_USER_BANNED}",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "statements"
    }
  ],
  "colour": 30,
  "tooltip": "%{BKY_EVENT_USER_BANNED_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "event_user_unbanned",
  "message0": "%{BKY_EVENT_USER_UNBANNED}",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "statements"
    }
  ],
  "colour": 30,
  "tooltip": "%{BKY_EVENT_USER_UNBANNED_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "event_pinned_updated",
  "message0": "%{BKY_EVENT_PINNED_UPDATED}",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "statements"
    }
  ],
  "colour": 30,
  "tooltip": "%{BKY_EVENT_PINNED_UPDATED_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "event_user_voice_update",
  "message0": "%{BKY_EVENT_USER_VOICE_UPDATE}",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "statements"
    }
  ],
  "colour": 30,
  "tooltip": "%{BKY_EVENT_USER_VOICE_UPDATE_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "event_user_start_writting",
  "message0": "%{BKY_EVENT_USER_START_WRITTING}",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "statements"
    }
  ],
  "colour": 30,
  "tooltip": "%{BKY_EVENT_USER_START_WRITTING_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "event_text_channel_created",
  "message0": "%{BKY_EVENT_TEXT_CHANNEL_CREATED}",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "statements"
    }
  ],
  "colour": 30,
  "tooltip": "%{BKY_EVENT_TEXT_CHANNEL_CREATED_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "event_text_channel_deleted",
  "message0": "%{BKY_EVENT_TEXT_CHANNEL_DELETED}",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "statements"
    }
  ],
  "colour": 30,
  "tooltip": "%{BKY_EVENT_TEXT_CHANNEL_DELETED_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "event_text_channel_edited",
  "message0": "%{BKY_EVENT_TEXT_CHANNEL_EDITED}",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "statements"
    }
  ],
  "colour": 30,
  "tooltip": "%{BKY_EVENT_TEXT_CHANNEL_EDITED_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "event_voice_channel_created",
  "message0": "%{BKY_EVENT_VOICE_CHANNEL_CREATED}",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "statements"
    }
  ],
  "colour": 30,
  "tooltip": "%{BKY_EVENT_VOICE_CHANNEL_CREATED_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "event_voice_channel_deleted",
  "message0": "%{BKY_EVENT_VOICE_CHANNEL_DELETED}",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "statements"
    }
  ],
  "colour": 30,
  "tooltip": "%{BKY_EVENT_VOICE_CHANNEL_DELETED_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "event_voice_channel_edited",
  "message0": "%{BKY_EVENT_VOICE_CHANNEL_EDITED}",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "statements"
    }
  ],
  "colour": 30,
  "tooltip": "%{BKY_EVENT_VOICE_CHANNEL_EDITED_TOOLTIP}",
  "helpUrl": ""
},

{
  "type": "event_reaction_added",
  "message0": "%{BKY_EVENT_REACTION_ADDED}",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "statements"
    }
  ],
  "colour": 30,
  "tooltip": "%{BKY_EVENT_REACTION_ADDED_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "event_reaction_removed",
  "message0": "%{BKY_EVENT_REACTION_REMOVED}",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "statements"
    }
  ],
  "colour": 30,
  "tooltip": "%{BKY_EVENT_REACTION_REMOVED_TOOLIP}",
  "helpUrl": ""
},

/* ########## Event Var Blocks ######### */
/* Used to represent event variables */

{
  "type": "event_var_message",
  "message0": "%{BKY_EVENT_VAR_MESSAGE}",
  "output": "Message",
  "colour": 30,
  "tooltip": "%{BKY_EVENT_VAR_MESSAGE_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "event_var_message_old",
  "message0": "%{BKY_EVENT_VAR_OLD_MESSAGE}",
  "output": "Message",
  "colour": 30,
  "tooltip": "%{BKY_EVENT_VAR_OLD_MESSAGE_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "event_var_message_new",
  "message0": "%{BKY_EVENT_VAR_NEW_MESSAGE}",
  "output": "Message",
  "colour": 30,
  "tooltip": "%{BKY_EVENT_VAR_NEW_MESSAGE_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "event_var_user",
  "message0": "%{BKY_EVENT_VAR_USER}",
  "output": "User",
  "colour": 30,
  "tooltip": "%{BKY_EVENT_VAR_USER_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "event_var_old_user",
  "message0": "%{BKY_EVENT_VAR_OLD_USER}",
  "output": "User",
  "colour": 30,
  "tooltip": "%{BKY_EVENT_VAR_OLD_USER_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "event_var_new_user",
  "message0": "%{BKY_EVENT_VAR_NEW_USER}",
  "output": "User",
  "colour": 30,
  "tooltip": "%{BKY_EVENT_VAR_NEW_USER_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "event_var_rank",
  "message0": "%{BKY_EVENT_VAR_RANK}",
  "output": "Rank",
  "colour": 30,
  "tooltip": "%{BKY_EVENT_VAR_RANK_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "event_var_old_rank",
  "message0": "%{BKY_EVENT_VAR_OLD_RANK}",
  "output": "Rank",
  "colour": 30,
  "tooltip": "%{BKY_EVENT_VAR_OLD_RANK_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "event_var_new_rank",
  "message0": "%{BKY_EVENT_VAR_NEW_RANK}",
  "output": "Rank",
  "colour": 30,
  "tooltip": "%{BKY_EVENT_VAR_NEW_RANK_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "event_var_old_voice_channel",
  "message0": "%{BKY_EVENT_VAR_OLD_VOICE_CHANNEL}",
  "output": "VoiceChannel",
  "colour": 30,
  "tooltip": "%{BKY_EVENT_VAR_OLD_VOICE_CHANNEL_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "event_var_new_voice_channel",
  "message0": "%{BKY_EVENT_VAR_NEW_VOICE_CHANNEL}",
  "output": "VoiceChannel",
  "colour": 30,
  "tooltip": "%{BKY_EVENT_VAR_NEW_VOICE_CHANNEL_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "event_var_text_channel",
  "message0": "%{BKY_EVENT_VAR_TEXT_CHANNEL}",
  "output": "Channel",
  "colour": 30,
  "tooltip": "%{BKY_EVENT_VAR_TEXT_CHANNEL_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "event_var_old_text_channel",
  "message0": "%{BKY_EVENT_VAR_OLD_TEXT_CHANNEL}",
  "output": "Channel",
  "colour": 30,
  "tooltip": "%{BKY_EVENT_VAR_OLD_TEXT_CHANNEL_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "event_var_new_text_channel",
  "message0": "%{BKY_EVENT_VAR_NEW_TEXT_CHANNEL}",
  "output": "Channel",
  "colour": 30,
  "tooltip": "%{BKY_EVENT_VAR_NEW_TEXT_CHANNEL_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "event_var_voice_channel",
  "message0": "%{BKY_EVENT_VAR_VOICE_CHANNEL}",
  "output": "VoiceChannel",
  "colour": 30,
  "tooltip": "%{BKY_EVENT_VAR_VOICE_CHANNEL_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "event_var_reaction",
  "message0": "%{BKY_EVENT_VAR_REACTION}",
  "output": "Reaction",
  "colour": 30,
  "tooltip": "%{BKY_EVENT_VAR_REACTION_TOOLTIP}",
  "helpUrl": ""
}
])
};
