"use strict";
/* ########## Guild Blocks ######### */
/* Used to perform actions and get data about the guild */

module.exports = {
  blocks: JSON.stringify([
    {
      type: "block_guild_get_id",
      message0: "%{BKY_BLOCK_GUILD_GET_ID}",
      output: "String",
      colour: 270,
      tooltip: "%{BKY_BLOCK_GUILD_GET_ID_TOOLTIP}",
      helpUrl: "",
    },
    {
      type: "block_guild_get_name",
      message0: "%{BKY_BLOCK_GUILD_GET_NAME}",
      output: "String",
      colour: 270,
      tooltip: "%{BKY_BLOCK_GUILD_GET_NAME_TOOLTIP}",
      helpUrl: "",
    },
    {
      type: "block_guild_get_boosts_count",
      message0: "%{BKY_BLOCK_GUILD_GET_BOOST_COUNT}",
      output: "Number",
      colour: 270,
      tooltip: "%{BKY_BLOCK_GUILD_GET_BOOST_COUNT_TOOLTIP}",
      helpUrl: "",
    },
    {
      type: "block_guild_get_members_count",
      message0: "%{BKY_BLOCK_GUILD_GET_MEMBERS_COUNT}",
      output: "Number",
      colour: 270,
      tooltip: "%{BKY_BLOCK_GUILD_GET_MEMBERS_COUNT_TOOLTIP}",
      helpUrl: "",
    },
    {
      type: "block_guild_create_invite",
      message0: "%{BKY_BLOCK_GUILD_CREATE_INVITE}",
      args0: [
        {
          type: "input_value",
          name: "channel",
          check: "Channel",
        },
        {
          type: "field_dropdown",
          name: "duration",
          options: [
            ["%{BKY_DURATION_30MIN}", "30MIN"],
            ["%{BKY_DURATION_1H}", "1H"],
            ["%{BKY_DURATION_6H}", "6H"],
            ["%{BKY_DURATION_12H}", "12H"],
            ["%{BKY_DURATION_1D}", "1D"],
            ["%{BKY_DURATION_1W}", "1W"],
            ["%{BKY_DURATION_NEVER}", "NEVER"],
          ],
        },
        {
          type: "field_dropdown",
          name: "uses",
          options: [
            ["%{BKY_UNLIMITED}", "UNLIMITED"],
            ["1", "1"],
            ["5", "5"],
            ["10", "10"],
            ["25", "25"],
            ["50", "50"],
            ["100", "100"],
          ],
        },
      ],
      output: "String",
      colour: 270,
      tooltip: "%{BKY_BLOCK_GUILD_CREATE_INVITE_TOOLTIP}",
      helpUrl: "",
    },
  ]),
};
