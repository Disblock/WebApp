/* eslint no-unused-vars: "off"*/
/* eslint camelcase: "off"*/
"use strict";
/* TEST File for access control */

const logger = {
  debug: jest.fn(),
  info: jest.fn(),
  error: jest.fn(),
  warn: jest.fn(),
};

describe("Check_access_to_guild function", () => {
  const checkAccessToGuild = require("../../modules/check_access_to_guild.js");
  const guilds = [
    { id: "458756" },
    { id: "74668712" },
    { id: "412587" },
    { id: "021478" },
    { id: "99999" },
    { id: "741265" },
  ];

  test("Valid access", () => {
    expect(checkAccessToGuild(guilds, "99999")).toEqual({ id: "99999" });
  });

  test("No access", () => {
    expect(checkAccessToGuild(guilds, "88888")).toBeNull();
  });
});

describe("discord_get_servers function", () => {
  /* Importing the tested file */
  const discordGetServers = require("../../modules/discord_get_servers.js");

  /* Mocked function args */
  const mockReq = {
    session: {
      discord_id: "mocked_discord_id",
      token: "mocked_token",
      save: jest.fn(),
      destroy: jest.fn(),
    },
  };
  const mockDatabasePool = {
    query: jest.fn().mockResolvedValue({ rows: [] }),
  };
  const mockRedisClient = {
    get: jest.fn(),
    set: jest.fn(),
  };

  /* Mocked user guilds */
  const guilds1 =
    '[{\
        "id":"99999",\
        "permissions_new":"562949953421311"\
      }]'; //User is admin on it

  /* Implementing the mock function to replace Redis database */
  jest.mock("util", () => ({
    //We mock the promisify function, so we can directly pass a mock as generated async function
    promisify: jest.fn((fn) => jest.fn().mockReturnValueOnce(guilds1).mockReturnValue(undefined)),
  }));

  test("Cached from Redis", async () => {
    //If the guild is saved in Redis, the user is admin on it
    await expect(discordGetServers(mockReq, mockDatabasePool, logger, mockRedisClient)).resolves.toEqual([
      {
        id: "99999",
        permissions_new: "562949953421311",
      },
    ]);
  });
});
