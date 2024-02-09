"use strict";

//File used to init Blockly
//Here, we define every blocks, translations and generator functions

const blocklyGenerator = require("./generator/generator.js"); //Blockly's generator, blocks to Discord.js
const initLogsblocklyLocalizationEn = require("./localization/en.js"); //Add localization to the generator - EN
let Blockly = require("blockly"); //Blockly

module.exports = {
  blocklyBlocks: [
    require("./blocks/channel_blocks.js").blocks,
    require("./blocks/embed_blocks.js").blocks,
    require("./blocks/event_blocks.js").blocks,
    require("./blocks/guild_blocks.js").blocks,
    require("./blocks/message_blocks.js").blocks,
    require("./blocks/rank_blocks.js").blocks,
    require("./blocks/user_blocks.js").blocks,
    require("./blocks/color_blocks.js").blocks,
    require("./blocks/var_blocks.js").blocks,
    require("./blocks/emoji_blocks.js").blocks,
    require("./blocks/miscellaneous_blocks.js").blocks,
    require("./blocks/slash_commands_blocks.js").blocks,
    require("./blocks/data_storage_blocks.js").blocks,
  ],
  blocklyExtensions: [
    require("./blocks/extensions/slash_commands_blocks.js"), //Refers immediately to a function
    require("./blocks/extensions/var_blocks.js"),
    require("./blocks/extensions/storage_blocks.js"),
  ],
  blocklyInit: function () {
    //Blocks definition
    module.exports.blocklyBlocks.forEach((element) => {
      Blockly.defineBlocksWithJsonArray(JSON.parse(element));
    });
    //Extensions definition
    //Mostly used to Regex check values entered in direct inputs, in Front end
    module.exports.blocklyExtensions.forEach((element) => {
      element(Blockly); //Runs the function with Blockly, which defines the extensions used for the blocks
    });

    //Text definition
    Blockly = initLogsblocklyLocalizationEn(Blockly);
    Blockly = blocklyGenerator.initializeGenerator(Blockly); //Initialize generator

    return Blockly; //At this point, Blockly is ready to be used
  },
};
