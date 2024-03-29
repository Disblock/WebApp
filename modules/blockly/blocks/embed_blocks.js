"use strict";
/* ########## Embed Blocks ######### */
/* Used to create and manage embeds. */
module.exports = {
  blocks: JSON.stringify([
    {
      type: "block_embed_create",
      message0: "%{BKY_BLOCK_EMBED_CREATE}",
      args0: [
        {
          type: "input_value",
          name: "name",
          check: "String",
        },
        {
          type: "input_value",
          name: "description",
          check: "String",
        },
        {
          type: "input_value",
          name: "color",
          check: "Colour",
        },
        {
          type: "input_dummy",
        },
        {
          type: "input_statement",
          name: "options",
          check: "EmbedOptions",
        },
      ],
      inputsInline: false,
      previousStatement: "block",
      nextStatement: "block",
      colour: 345,
      tooltip: "%{BKY_BLOCK_EMBED_CREATE_TOOLTIP}",
      helpUrl: "",
    },
    {
      type: "block_embed_option_set_image",
      message0: "%{BKY_BLOCK_EMBED_OPTION_SET_IMAGE}",
      args0: [
        {
          type: "input_value",
          name: "image_url",
          check: "String",
        },
      ],
      previousStatement: "EmbedOptions",
      nextStatement: "EmbedOptions",
      colour: 330,
      tooltip: "%{BKY_BLOCK_EMBED_OPTION_SET_IMAGE_TOOLTIP}",
      helpUrl: "",
    },
    {
      type: "block_embed_option_set_thumbnail",
      message0: "%{BKY_BLOCK_EMBED_OPTION_SET_THUMBNAIL}",
      args0: [
        {
          type: "input_value",
          name: "thumbnail_url",
          check: "String",
        },
      ],
      previousStatement: "EmbedOptions",
      nextStatement: "EmbedOptions",
      colour: 330,
      tooltip: "%{BKY_BLOCK_EMBED_OPTION_SET_THUMBNAIL_TOOLTIP}",
      helpUrl: "",
    },
    {
      type: "block_embed_option_add_field",
      message0: "%{BKY_BLOCK_EMBED_OPTION_ADD_FIELD}",
      args0: [
        {
          type: "input_value",
          name: "name",
          check: "String",
        },
        {
          type: "input_value",
          name: "text",
          check: "String",
        },
        {
          type: "field_checkbox",
          name: "inline",
          checked: true,
        },
      ],
      inputsInline: false,
      previousStatement: "EmbedOptions",
      nextStatement: "EmbedOptions",
      colour: 330,
      tooltip: "%{BKY_BLOCK_EMBED_OPTION_ADD_FIELD_TOOLTIP}",
      helpUrl: "",
    },
    {
      type: "block_embed_option_set_author",
      message0: "%{BKY_BLOCK_EMBED_OPTION_SET_AUTHOR}",
      args0: [
        {
          type: "input_value",
          name: "name",
          check: "String",
        },
        {
          type: "input_value",
          name: "URL",
          check: "String",
        },
        {
          type: "input_value",
          name: "icon_URL",
          check: "String",
        },
      ],
      inputsInline: false,
      previousStatement: "EmbedOptions",
      nextStatement: "EmbedOptions",
      colour: 330,
      tooltip: "%{BKY_BLOCK_EMBED_OPTION_SET_AUTHOR_TOOLTIP}",
      helpUrl: "",
    },
    {
      type: "block_embed_option_set_footer",
      message0: "%{BKY_BLOCK_EMBED_OPTION_SET_FOOTER}",
      args0: [
        {
          type: "input_value",
          name: "name",
          check: "String",
        },
        {
          type: "input_value",
          name: "icon_URL",
          check: "String",
        },
      ],
      inputsInline: false,
      previousStatement: "EmbedOptions",
      nextStatement: "EmbedOptions",
      colour: 330,
      tooltip: "%{BKY_BLOCK_EMBED_OPTION_SET_FOOTER_TOOLTIP}",
      helpUrl: "",
    },
    {
      type: "block_embed_option_set_timestamp",
      message0: "%{BKY_BLOCK_EMBED_OPTION_SET_TIMESTAMP}",
      inputsInline: false,
      previousStatement: "EmbedOptions",
      nextStatement: "EmbedOptions",
      colour: 330,
      tooltip: "%{BKY_BLOCK_EMBED_OPTION_SET_TIMESTAMP_TOOLTIP}",
      helpUrl: "",
    },
    {
      type: "block_embed_send",
      message0: "%{BKY_BLOCK_EMBED_SEND}",
      args0: [
        {
          type: "input_value",
          name: "embed",
          check: "Embed",
        },
        {
          type: "input_value",
          name: "channel",
          check: ["Channel", "ThreadChannel", "User"],
        },
      ],
      inputsInline: false,
      previousStatement: "block",
      nextStatement: "block",
      colour: 345,
      tooltip: "%{BKY_BLOCK_EMBED_SEND_TOOLTIP}",
      helpUrl: "",
    },
    {
      type: "block_embed_var_embed",
      message0: "%{BKY_BLOCK_EMBED_VAR_EMBED}",
      inputsInline: false,
      output: "Embed",
      colour: 330,
      tooltip: "%{BKY_BLOCK_EMBED_VAR_EMBED_TOOLTIP}",
      helpUrl: "",
    },
  ]),
};
