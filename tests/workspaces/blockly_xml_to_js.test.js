/* eslint no-unused-vars: "off"*/
/* eslint camelcase: "off"*/
"use strict";

describe("XML to JS functions", () => {
  // Global preparation for tests
  const { blocklyInit } = require("../../modules/blockly/init.js");
  const Blockly = blocklyInit(); //Blockly initialisation

  /* Mocked logger and database */
  const logger = {
    debug: jest.fn(),
    info: jest.fn(),
    error: jest.fn(),
    warn: jest.fn(),
  };

  const mockDatabasePool = {
    query: jest.fn().mockResolvedValue({ rows: [] }),
    connect: jest.fn().mockResolvedValue({
      query: jest.fn(),
      release: jest.fn(),
    }),
  };

  process.env.P_MAX_BLOCKS_BY_TYPE = "none";
  process.env.NP_MAX_BLOCKS_BY_TYPE = "none";

  const { xmlToJs } = require("../../modules/blockly/blockly_xml_to_js.js");

  test("Empty workspace", async () => {
    //No blocks in workspace
    await expect(
      xmlToJs(
        "1234",
        '<xml xmlns="https://developers.google.com/blockly/xml"></xml>',
        Blockly,
        mockDatabasePool,
        logger,
        false
      )
    ).resolves.toBe(0);
  });
});
