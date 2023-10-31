"use strict";
/* ########## Var Blocks ######### */
/* Added blocks to manage variables */

module.exports = {
  blocks: JSON.stringify([
    {
      type: "block_var_save",
      message0: "%{BKY_BLOCK_VAR_SAVE}",
      args0: [
        {
          type: "input_value",
          name: "INPUT",
        },
        {
          type: "field_input",
          name: "NAME",
          text: "MyVariable",
        },
        {
          type: "field_dropdown",
          name: "TYPE",
          options: [
            ["%{BKY_STRING}", "String"],
            ["%{BKY_NUMBER}", "Number"],
            ["%{BKY_BOOLEAN}", "Boolean"],
            ["%{BKY_ARRAY}", "Array"],
            ["%{BKY_COLOUR}", "Colour"],
            ["%{BKY_MESSAGE}", "Message"],
            ["%{BKY_TEXT_CHANNEL}", "Channel"],
            ["%{BKY_VOICE_CHANNEL}", "VoiceChannel"],
            ["%{BKY_THREAD_CHANNEL}", "ThreadChannel"],
            ["%{BKY_CATEGORY}", "Category"],
            ["%{BKY_USER}", "User"],
            ["%{BKY_ROLE}", "Rank"],
            ["%{BKY_EMBED_MESSAGE}", "Embed"],
          ],
        },
      ],
      inputsInline: true,
      previousStatement: "block",
      nextStatement: "block",
      colour: 225,
      tooltip: "%{BKY_BLOCK_VAR_SAVE_TOOLTIP}",
      helpUrl: "",
    },
    {
      type: "block_var_get",
      message0: "%{BKY_BLOCK_VAR_GET}",
      args0: [
        {
          type: "field_input",
          name: "NAME",
          text: "MyVariable",
        },
      ],
      inputsInline: true,
      output: null,
      colour: 225,
      tooltip: "%{BKY_BLOCK_VAR_GET_TOOLTIP}",
      helpUrl: "",
    },
  ]),
};
