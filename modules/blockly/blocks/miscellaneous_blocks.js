"use strict";
/* ########## Miscellaneous Blocks ######### */
/* Added blocks to manage action flow and others things */

module.exports = {
  blocks: JSON.stringify([
    {
      type: "block_miscellaneous_return",
      message0: "%{BKY_BLOCK_MISCELLANEOUS_RETURN}",
      previousStatement: "block",
      colour: 210,
      tooltip: "%{BKY_BLOCK_MISCELLANEOUS_RETURN_TOOLTIP}",
      helpUrl: "",
    },
    {
      type: "block_miscellaneous_str_to_int",
      message0: "%{BKY_BLOCK_MISCELLANEOUS_STR_TO_INT}",
      args0: [
        {
          type: "input_value",
          name: "STRING",
          check: "String",
        },
      ],
      output: "Number",
      colour: 225,
      tooltip: "%{BKY_BLOCK_MISCELLANEOUS_STR_TO_INT_TOOLTIP}",
      helpUrl: "",
    },
  ]),
};
