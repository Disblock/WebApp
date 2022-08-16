/* ########## Emoji Blocks ######### */
/* Added blocks to manage emojis */

module.exports = {
  blocks: JSON.stringify([
    {
      "type": "block_emoji_get_name",
      "message0": "%{BKY_BLOCK_EMOJI_GET_NAME}",
      "args0": [
        {
          "type": "input_value",
          "name": "EMOJI",
          "check": "Emoji"
        }
      ],
      "output": "String",
      "colour": 120,
      "tooltip": "%{BKY_BLOCK_EMOJI_GET_NAME_TOOLTIP}",
      "helpUrl": ""
    }
])};
