/* eslint no-unused-vars: "off"*/
/* eslint camelcase: "off"*/
"use strict";
/* TEST File for getting the servers related to an user */

describe("Getting saved users from Redis", () => {
  /* Importing the tested file */
  const discordGetServers = require("../../modules/discord_get_servers.js");

  /* Mocked function args */
  const logger = {
        debug: jest.fn(),
        info: jest.fn(),
        error: jest.fn(),
        warn: jest.fn(),
      };
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
