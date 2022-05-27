/* ########## Lists Blocks ######### */
/* Used to save and get lists in an event
   This is only to save a list and get it in an event. Saved lists aren't kept after the event
*/

module.exports = {
  blocks: JSON.stringify([
    {
  "type": "block_list_save",
  "message0": "%{BKY_BLOCK_LIST_SAVE}",
  "args0": [
    {
      "type": "field_input",
      "name": "NAME",
      "text": "ListName"
    },
    {
      "type": "input_value",
      "name": "array",
      "check": "Array"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 225,
  "tooltip": "%{BKY_BLOCK_LIST_SAVE_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "block_list_get",
  "message0": "%{BKY_BLOCK_LIST_GET}",
  "args0": [
    {
      "type": "field_input",
      "name": "NAME",
      "text": "ListName"
    }
  ],
  "output": "Array",
  "colour": 225,
  "tooltip": "%{BKY_BLOCK_LIST_GET_TOOLTIP}",
  "helpUrl": ""
}
])};
