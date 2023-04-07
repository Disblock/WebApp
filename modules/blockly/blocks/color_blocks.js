"use strict";
/* ########## Color Blocks ######### */
/* Added blocks to manage colors*/

module.exports = {
  blocks: JSON.stringify([
    {
      type: "block_color_hex",
      message0: "%{BKY_BLOCK_COLOR_HEX}",
      args0: [
        {
          type: "field_input",
          name: "color",
          text: "#CC3300",
        },
      ],
      output: "Colour",
      colour: 20,
      tooltip: "%{BKY_BLOCK_COLOR_HEX_TOOLTIP}",
      helpUrl: "",
    },
  ]),
};
