/* eslint no-unused-vars: "off"*/
/* eslint camelcase: "off"*/
"use strict";

describe("XML to JS functions", () => {
  // Global preparation for tests
  const workspaceErrorsEnum = require("../../modules/enums/workspace_errors.js"); //Enum that refer to possible errors while working on code sent by a server
  const { blocklyInit } = require("../../modules/blockly/init.js");
  const Blockly = blocklyInit(); //Blockly initialisation

  const emptyWorkspaceXml = '<xml xmlns="https://developers.google.com/blockly/xml"></xml>';

  function checkThatEveryDatabaseRequestWasRan(mockedDatabaseClient, serverId, workspaceXml) {
    //Checking that every SQL requests are successfully executed
    //This function is supposed to be executed at each test, as the requests are always the same.
    //Additionnal requests that are executed only in some case will be checked directly in the test
    //console.log(mockedDatabaseClient.query.mock.calls); // Trouble understanding the following ?  <--
    expect(mockedDatabaseClient.query.mock.calls[0][0]).toBe("BEGIN;"); // Starting transaction, first request must be BEGIN;

    expect(mockedDatabaseClient.query.mock.calls[1][0]).toBe("DELETE FROM server_code WHERE server_id = $1;");

    expect(mockedDatabaseClient.query.mock.calls[1][1][0]).toBe(serverId);

    expect(mockedDatabaseClient.query.mock.calls[2][0]).toBe(
      "DELETE FROM commands_args WHERE command_id IN (SELECT command_id FROM commands WHERE server_id = $1);"
    );
    expect(mockedDatabaseClient.query.mock.calls[2][1][0]).toBe(serverId);

    expect(mockedDatabaseClient.query.mock.calls[3][0]).toBe("DELETE FROM commands WHERE server_id = $1;");
    expect(mockedDatabaseClient.query.mock.calls[3][1][0]).toBe(serverId);

    if (workspaceXml == emptyWorkspaceXml) {
      //Empty workspace, we just need to delete ( previous checks ) and workspace insert
      expect(mockedDatabaseClient.query.mock.calls[4][0]).toBe("SELECT f_update_data_storages_for_guild($1);");
      expect(mockedDatabaseClient.query.mock.calls[4][1][0]).toBe(serverId);

      //The sixth command sent, second arg ( the array of sql args ), second value ( cleaned workspace xml )
      expect(mockedDatabaseClient.query.mock.calls[5][1][1]).toBe(workspaceXml);
    } else {
      //Events and slash commands
      expect(mockedDatabaseClient.query.mock.calls[4][0]).toBe(
        "INSERT INTO server_code (server_id, action_type, code) VALUES ($1, $2, $3);"
      );
      expect(mockedDatabaseClient.query.mock.calls[4][1][0]).toBe(serverId);
      //expect(mockedDatabaseClient.query.mock.calls[4][1][2]).toBe(workspaceXml);// Ready-to-run code check
    }
    const length = mockedDatabaseClient.query.mock.calls.length;
    expect(mockedDatabaseClient.query.mock.calls[length - 1][0]).toBe("COMMIT;");
  }

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
    await expect(xmlToJs("1234", emptyWorkspaceXml, Blockly, mockDatabasePool, logger, false)).resolves.toBe(0);

    checkThatEveryDatabaseRequestWasRan(mockedDatabaseClient, "1234", emptyWorkspaceXml);
  });

  test("Default workspace", async () => {
    const defaultWorkspaceXml = require("../../modules/blockly/default_workspace.js"); //Directly gives the string

    await expect(xmlToJs("1234", defaultWorkspaceXml, Blockly, mockDatabasePool, logger, false)).resolves.toBe(0);

    checkThatEveryDatabaseRequestWasRan(mockedDatabaseClient, "1234", defaultWorkspaceXml);
  });

  test("Too many blocks in workspace", async () => {
    process.env.NP_WORKSPACE_MAX_BLOCKS = 2;
    const defaultWorkspaceXml = require("../../modules/blockly/default_workspace.js"); //Directly gives the string
    await expect(xmlToJs("1234", defaultWorkspaceXml, Blockly, mockDatabasePool, logger, false)).resolves.toBe(
      workspaceErrorsEnum.tooManyBlocks
    );
    process.env.NP_WORKSPACE_MAX_BLOCKS = 200; //So the 2 blocks limits doesn't impact following tests
  });
  test("Too many blocks in premium workspace", async () => {
    process.env.P_WORKSPACE_MAX_BLOCKS = 2;
    const defaultWorkspaceXml = require("../../modules/blockly/default_workspace.js"); //Directly gives the string
    await expect(xmlToJs("1234", defaultWorkspaceXml, Blockly, mockDatabasePool, logger, true)).resolves.toBe(
      workspaceErrorsEnum.tooManyBlocks
    );
    process.env.P_WORKSPACE_MAX_BLOCKS = 200; //So the 2 blocks limits doesn't impact following tests
  });

  test("Too many blocks of a given type", async () => {
    process.env.NP_MAX_BLOCKS_BY_TYPE = "event_var_message:1";
    const workspace =
      '<xml xmlns="https://developers.google.com/blockly/xml"><block type="event_message_sent" x="-170" y="210"><statement name="statements"><block type="block_message_reply"><value name="message"><block type="event_var_message"></block></value><value name="text"><shadow type="text"><field name="TEXT">1</field></shadow></value><next><block type="block_message_reply"><value name="message"><block type="event_var_message"></block></value><value name="text"><shadow type="text"><field name="TEXT">2</field></shadow></value></block></next></block></statement></block></xml>';
    await expect(xmlToJs("1234", workspace, Blockly, mockDatabasePool, logger, false)).resolves.toBe(
      workspaceErrorsEnum.tooManyOfABlock
    );
    process.env.NP_MAX_BLOCKS_BY_TYPE = "none";
  });

  test("Invalid workspace", async () => {
    const workspace = "');DROP TABLE users;--${YIPEEE}";
    await expect(xmlToJs("1234", workspace, Blockly, mockDatabasePool, logger, false)).resolves.toBe(
      workspaceErrorsEnum.invalidWorkspace
    );
  });

  test("Undefined block", async () => {
    const workspace =
      '<xml xmlns="https://developers.google.com/blockly/xml"><block type="undefined" x="10" y="10"></block></xml>';
    await expect(xmlToJs("1234", workspace, Blockly, mockDatabasePool, logger, false)).resolves.toBe(
      workspaceErrorsEnum.invalidWorkspace
    );
  });

  test("Database error : can't get client", async () => {
    const defaultWorkspaceXml = require("../../modules/blockly/default_workspace.js");
    const mockOfflineDatabasePool = { connect: jest.fn().mockRejectedValue(new Error("Can't reach database !")) };
    await expect(xmlToJs("1234", defaultWorkspaceXml, Blockly, mockOfflineDatabasePool, logger, false)).resolves.toBe(
      workspaceErrorsEnum.error
    );
  });

  test("Database error : can't send queries", async () => {
    const defaultWorkspaceXml = require("../../modules/blockly/default_workspace.js");

    const errorSentByClient = new Error("No, lol");
    const mockDatabaseClientError = {
      query: jest.fn().mockRejectedValue(errorSentByClient),
      release: jest.fn(),
    };
    const mockDatabasePoolError = {
      connect: jest.fn().mockResolvedValue(mockDatabaseClientError),
    };

    await expect(xmlToJs("1234", defaultWorkspaceXml, Blockly, mockDatabasePoolError, logger, false)).resolves.toBe(
      workspaceErrorsEnum.error
    );
    await expect(mockDatabaseClientError.query.mock.calls[1][0]).toBe("ROLLBACK;"); //Must send command ROLLBACK;
    await expect(mockDatabaseClientError.release.mock.calls[0][0]).toBe(errorSentByClient); //Must release the client with the error, so the pool kills it
  });

  test("Invalid data storage block", async () => {
    const workspace =
      '<xml xmlns="https://developers.google.com/blockly/xml"><block type="block_data_storage_create_string" x="-210" y="130"><field name="DATANAME">aaa</field></block><block type="event_message_sent" x="-229" y="230"><statement name="statements"><block type="block_data_storage_save_string"><field name="DATANAME">aab</field><value name="VARNAME"><block type="text"><field name="TEXT">yes</field></block></value><value name="VARCONTENT"><block type="block_message_get_text"><value name="message"><block type="event_var_message"></block></value></block></value></block></statement></block></xml>';
    await expect(xmlToJs("1234", workspace, Blockly, mockDatabasePool, logger, false)).resolves.toBe(
      workspaceErrorsEnum.errorWithStorageBlocks
    );
  });

  test("Uncomplete block", async () => {
    const workspace =
      '<xml xmlns="https://developers.google.com/blockly/xml"><block type="block_data_storage_create_string" x="-210" y="130"><field name="DATANAME">aaa</field></block><block type="event_message_sent" x="-229" y="230"><statement name="statements"><block type="block_data_storage_save_string"><field name="DATANAME">aaa</field><value name="VARNAME"><block type="text"><field name="TEXT">yes</field></block></value><value name="VARCONTENT"><block type="block_message_get_text"></block></value></block></statement></block></xml>';
    await expect(xmlToJs("1234", workspace, Blockly, mockDatabasePool, logger, false)).resolves.toBe(
      workspaceErrorsEnum.uncompleteBlock
    );
  });
});
