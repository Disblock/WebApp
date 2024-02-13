/* eslint no-unused-vars: "off"*/
/* eslint camelcase: "off"*/
"use strict";

describe("XML to JS functions", () => {
  // Global preparation for tests
  const workspaceErrorsEnum = require("../../modules/enums/workspace_errors.js"); //Enum that refer to possible errors while working on code sent by a server
  const { blocklyInit } = require("../../modules/blockly/init.js");
  const Blockly = blocklyInit(); //Blockly initialisation

  /* Mocked logger and database */
  const logger = {
    debug: jest.fn(),
    info: jest.fn(),
    error: jest.fn(),
    warn: jest.fn(),
  };

  let mockedDatabaseClient, mockDatabasePool; // Cleared before each test

  process.env.P_MAX_BLOCKS_BY_TYPE = "none";
  process.env.NP_MAX_BLOCKS_BY_TYPE = "none";

  // Things that must be cleared before each test
  beforeEach(() => {
    mockedDatabaseClient = {
      query: jest.fn().mockResolvedValue({ rows: [] }),
      release: jest.fn(),
    };
    mockDatabasePool = {
      query: jest.fn().mockResolvedValue({ rows: [] }),
      connect: jest.fn().mockResolvedValue(mockedDatabaseClient),
    };
  });

  const { xmlToJs } = require("../../modules/blockly/blockly_xml_to_js.js");

  test("Empty workspace", async () => {
    //No blocks in workspace
    const emptyWorkspaceXml = '<xml xmlns="https://developers.google.com/blockly/xml"></xml>';
    await expect(xmlToJs("1234", emptyWorkspaceXml, Blockly, mockDatabasePool, logger, false)).resolves.toBe(0);
    //Checking that the INSERT in workspaces tables request is an empty workspace
    //The sixth command sent, second arg ( the array of sql args ), second value ( cleaned workspace xml )
    expect(mockedDatabaseClient.query.mock.calls[5][1][1]).toBe(emptyWorkspaceXml);
    //console.log(mockedDatabaseClient.query.mock.calls); // Trouble understanding the following ?  <--

    //Checking that every SQL requests are successfully executed
    expect(mockedDatabaseClient.query.mock.calls[0][0]).toBe("BEGIN;"); // Starting transaction, first request must be BEGIN;

    expect(
      mockedDatabaseClient.query.mock.calls[1][0] === "DELETE FROM server_code WHERE server_id = $1;" &&
        mockedDatabaseClient.query.mock.calls[1][1][0] === "1234"
    ).toBe(true);

    expect(
      mockedDatabaseClient.query.mock.calls[2][0] ===
        "DELETE FROM commands_args WHERE command_id IN (SELECT command_id FROM commands WHERE server_id = $1)" &&
        mockedDatabaseClient.query.mock.calls[2][1][0] === "1234"
    ).toBe(true);

    expect(
      mockedDatabaseClient.query.mock.calls[3][0] === "DELETE FROM commands WHERE server_id = $1;" &&
        mockedDatabaseClient.query.mock.calls[3][1][0] === "1234"
    ).toBe(true);

    expect(
      mockedDatabaseClient.query.mock.calls[4][0] === "SELECT f_update_data_storages_for_guild($1);" &&
        mockedDatabaseClient.query.mock.calls[4][1][0] === "1234"
    ).toBe(true);
  });
});
