"use strict";
/* ########## Messages Blocks ######### */
/* Used to interact with Messages methods. */
module.exports = {
  blocks: JSON.stringify([
    {
      type: "block_message_reply",
      message0: "%{BKY_BLOCK_MESSAGE_REPLY}",
      args0: [
        {
          type: "input_value",
          name: "message",
          check: "Message",
        },
        {
          type: "input_value",
          name: "text",
          check: "String",
        },
      ],
      previousStatement: "block",
      nextStatement: "block",
      colour: 180,
      tooltip: "%{BKY_BLOCK_MESSAGE_REPLY_TOOLTIP}",
      helpUrl: "",
    },
    {
      type: "block_message_send",
      message0: "%{BKY_BLOCK_MESSAGE_SEND}",
      args0: [
        {
          type: "input_value",
          name: "channel",
          check: ["Channel", "ThreadChannel"],
        },
        {
          type: "input_value",
          name: "text",
          check: "String",
        },
      ],
      previousStatement: "block",
      nextStatement: "block",
      colour: 180,
      tooltip: "%{BKY_BLOCK_MESSAGE_SEND_TOOLTIP}",
      helpUrl: "",
    },
    {
      type: "block_message_delete",
      message0: "%{BKY_BLOCK_MESSAGE_DELETE}",
      args0: [
        {
          type: "input_value",
          name: "message",
          check: "Message",
        },
      ],
      previousStatement: "block",
      nextStatement: "block",
      colour: 180,
      tooltip: "%{BKY_BLOCK_MESSAGE_DELETE_TOOLTIP}",
      helpUrl: "",
    },
    {
      type: "block_message_delete_bulk",
      message0: "%{BKY_BLOCK_MESSAGE_DELETE_BULK}",
      args0: [
        {
          type: "field_number",
          name: "amount",
          value: 0,
          min: 1,
          max: 100,
        },
        {
          type: "input_value",
          name: "channel",
          check: ["Channel", "ThreadChannel"],
        },
      ],
      previousStatement: "block",
      nextStatement: "block",
      colour: 180,
      tooltip: "%{BKY_BLOCK_MESSAGE_DELETE_BULK_TOOLTIP}",
      helpUrl: "",
    },
    {
      type: "block_message_start_thread",
      message0: "%{BKY_BLOCK_MESSAGE_START_THREAD}",
      args0: [
        {
          type: "input_value",
          name: "name",
          check: "String",
        },
        {
          type: "input_value",
          name: "message",
          check: "Message",
        },
      ],
      previousStatement: "block",
      nextStatement: "block",
      colour: 180,
      tooltip: "%{BKY_BLOCK_MESSAGE_START_THREAD_TOOLTIP}",
      helpUrl: "",
    },
    {
      type: "block_message_pine",
      message0: "%{BKY_BLOCK_MESSAGE_PINE}",
      args0: [
        {
          type: "input_value",
          name: "message",
          check: "Message",
        },
      ],
      previousStatement: "block",
      nextStatement: "block",
      colour: 180,
      tooltip: "%{BKY_BLOCK_MESSAGE_PINE_TOOLTIP}",
      helpUrl: "",
    },
    {
      type: "block_message_unpine",
      message0: "%{BKY_BLOCK_MESSAGE_UNPINE}",
      args0: [
        {
          type: "input_value",
          name: "message",
          check: "Message",
        },
      ],
      previousStatement: "block",
      nextStatement: "block",
      colour: 180,
      tooltip: "%{BKY_BLOCK_MESSAGE_UNPINE_TOOLTIP}",
      helpUrl: "",
    },
    {
      type: "block_message_get_text",
      message0: "%{BKY_BLOCK_MESSAGE_GET_TEXT}",
      args0: [
        {
          type: "input_value",
          name: "message",
          check: "Message",
        },
      ],
      output: "String",
      colour: 190,
      tooltip: "%{BKY_BLOCK_MESSAGE_GET_TEXT}",
      helpUrl: "",
    },
    {
      type: "block_message_get_id",
      message0: "%{BKY_BLOCK_MESSAGE_GET_ID}",
      args0: [
        {
          type: "input_value",
          name: "message",
          check: "Message",
        },
      ],
      output: "String",
      colour: 190,
      tooltip: "%{BKY_BLOCK_MESSAGE_GET_ID_TOOLTIP}",
      helpUrl: "",
    },
    {
      type: "block_message_get_autor",
      message0: "%{BKY_BLOCK_MESSAGE_GET_AUTOR}",
      args0: [
        {
          type: "input_value",
          name: "message",
          check: "Message",
        },
      ],
      output: "User",
      colour: 190,
      tooltip: "%{BKY_BLOCK_MESSAGE_GET_AUTOR_TOOLTIP}",
      helpUrl: "",
    },
    {
      type: "block_message_get_channel",
      message0: "%{BKY_BLOCK_MESSAGE_GET_CHANNEL}",
      args0: [
        {
          type: "input_value",
          name: "message",
          check: "Message",
        },
      ],
      output: ["Channel", "ThreadChannel"],
      colour: 190,
      tooltip: "%{BKY_BLOCK_MESSAGE_GET_CHANNEL_TOOLTIP}",
      helpUrl: "",
    },
    {
      type: "block_message_does_mention_everyone",
      message0: "%{BKY_BLOCK_MESSAGE_DOES_MENTION_EVERYONE}",
      args0: [
        {
          type: "input_value",
          name: "message",
          check: "Message",
        },
      ],
      output: "Boolean",
      colour: 190,
      tooltip: "%{BKY_BLOCK_MESSAGE_DOES_MENTION_EVERYONE_TOOLTIP}",
      helpUrl: "",
    },
    {
      type: "block_message_does_mention_user",
      message0: "%{BKY_BLOCK_MESSAGE_DOES_MENTION_USER}",
      args0: [
        {
          type: "input_value",
          name: "message",
          check: "Message",
        },
      ],
      output: "Boolean",
      colour: 190,
      tooltip: "%{BKY_BLOCK_MESSAGE_DOES_MENTION_USER_TOOLTIP}",
      helpUrl: "",
    },
    {
      type: "block_message_does_mention_channel",
      message0: "%{BKY_BLOCK_MESSAGE_DOES_MENTION_CHANNEL}",
      args0: [
        {
          type: "input_value",
          name: "message",
          check: "Message",
        },
      ],
      output: "Boolean",
      colour: 190,
      tooltip: "%{BKY_BLOCK_MESSAGE_DOES_MENTION_CHANNEL_TOOLTIP}",
      helpUrl: "",
    },
    {
      type: "block_message_get_user_mention",
      message0: "%{BKY_BLOCK_MESSAGE_GET_USER_MENTION}",
      args0: [
        {
          type: "field_number",
          name: "mention_index",
          value: 0,
          min: 1,
          max: 30,
          precision: 1,
        },
        {
          type: "input_value",
          name: "message",
          check: "Message",
        },
      ],
      output: "User",
      colour: 190,
      tooltip: "%{BKY_BLOCK_MESSAGE_GET_USER_MENTION_TOOLTIP}",
      helpUrl: "",
    },
    {
      type: "block_message_get_channel_mention",
      message0: "%{BKY_BLOCK_MESSAGE_GET_CHANNEL_MENTION}",
      args0: [
        {
          type: "field_number",
          name: "mention_index",
          value: 0,
          min: 1,
          max: 30,
          precision: 1,
        },
        {
          type: "input_value",
          name: "message",
          check: "Message",
        },
      ],
      output: ["Channel", "ThreadChannel"],
      colour: 190,
      tooltip: "%{BKY_BLOCK_MESSAGE_GET_CHANNEL_MENTION_TOOLTIP}",
      helpUrl: "",
    },
    {
      type: "block_message_number_of_mentions_user",
      message0: "%{BKY_BLOCK_MESSAGE_NUMBER_OF_MENTIONS_USER}",
      args0: [
        {
          type: "input_value",
          name: "message",
          check: "Message",
        },
      ],
      output: "Number",
      colour: 190,
      tooltip: "%{BKY_BLOCK_MESSAGE_NUMBER_OF_MENTIONS_USER_TOOLTIP}",
      helpUrl: "",
    },
    {
      type: "block_message_number_of_mentions_channel",
      message0: "%{BKY_BLOCK_MESSAGE_NUMBER_OF_MENTIONS_CHANNEL}",
      args0: [
        {
          type: "input_value",
          name: "message",
          check: "Message",
        },
      ],
      output: "Number",
      colour: 190,
      tooltip: "%{BKY_BLOCK_MESSAGE_NUMBER_OF_MENTIONS_CHANNEL_TOOLTIP}",
      helpUrl: "",
    },

    //Var block
    {
      type: "block_message_var_sent_message",
      message0: "%{BKY_BLOCK_MESSAGE_VAR_SENT_MESSAGE}",
      output: "Message",
      colour: 190,
      tooltip: "%{BKY_BLOCK_MESSAGE_VAR_SENT_MESSAGE_TOOLTIP}",
      helpUrl: "",
    },
    {
      type: "block_message_var_created_thread",
      message0: "%{BKY_BLOCK_MESSAGE_VAR_CREATED_THREAD}",
      output: "ThreadChannel",
      colour: 190,
      tooltip: "%{BKY_BLOCK_MESSAGE_VAR_CREATED_THREAD_TOOLTIP}",
      helpUrl: "",
    },
  ]),
};
