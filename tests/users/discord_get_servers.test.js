/* eslint no-unused-vars: "off"*/
/* eslint camelcase: "off"*/
"use strict";
/* TEST File for getting the servers related to an user */

const mockReq = {
  session: {
    discord_id: "mocked_discord_id",
    token: "mocked_token",
    save: jest.fn(),
    destroy: jest.fn(),
  },
};

/* Mocked function args */
const logger = {
  debug: jest.fn(),
  info: jest.fn(),
  error: jest.fn(),
  warn: jest.fn(),
};

describe("Getting guilds for an user", () => {
  /* Importing the tested file */

  //Preparing the mocked modules
  //Mock returns are defined just before executing the test
  jest.mock("../../modules/redis/redis.js");
  const { askRedisForGuilds, saveGuildsInRedis } = require("../../modules/redis/redis.js");

  jest.mock("../../modules/utils/get_guilds_from_Discord_API.js", () => {
    const originalModule = jest.requireActual("../../modules/utils/get_guilds_from_Discord_API.js");

    return {
      __esModule: true,
      ...originalModule, //Original getGuildsWhereAdmin method is kept, we don't mock this
      askDiscordForGuilds: jest.fn(), //We only mock askDiscordForGuilds, so we don't actually send an API request to Discord
    };
  });
  const { askDiscordForGuilds, getGuildsWhereAdmin } = require("../../modules/utils/get_guilds_from_Discord_API.js");

  //Ready, we can import the module, and start testing
  const discordGetServers = require("../../modules/discord_get_servers.js");

  describe("Guilds from Redis", () => {
    let guilds;
    beforeEach(() => {
      /* Mocked user guilds */
      guilds = [
        {
          id: "99999",
          permissions_new: "562949953421311",
        },
      ]; //User is admin on it
      askRedisForGuilds.mockReturnValueOnce(guilds).mockReturnValue(undefined); //First time/test, return guilds. Nexts calls/tests will return undefined
    });

    const redisClient = undefined; // Normally passed to redis.js, but that's a mocked module, so it's useless

    test("Cached from Redis", async () => {
      //If the guild is saved in Redis, the user is admin on it
      await expect(discordGetServers(mockReq, undefined /*databasePool*/, logger, redisClient)).resolves.toEqual(
        guilds
      );
    });
  });

  describe("Guilds from Discord API", () => {
    let guilds;
    beforeEach(() => {
      guilds = [
        //Same as Discord sends, user is admin on the first only
        {
          id: "99999",
          permissions_new: "562949953421311",
        },
        {
          id: "99998",
          permissions_new: "4",
        },
      ];
      askDiscordForGuilds.mockResolvedValue(guilds);
    });

    test("From Discord API, token valid", async () => {
      await expect(discordGetServers(mockReq, undefined, logger, undefined)).resolves.toEqual([guilds[0]]); //Admin perm only on the first guild, so we should only get that one
      await expect(mockReq.session.destroy.mock.calls).toHaveLength(0); //Shouldn't met errors
    });
  });
});
