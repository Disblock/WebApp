/* eslint no-unused-vars: "off"*/
"use strict";
/* TEST File for access control */

const logger = {
  debug: jest.fn(),
  info: jest.fn(),
  error: jest.fn(),
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
  const discordGetServers = require("../../modules/discord_get_servers.js");
  const mockReq = {
    session: {
      discord_id: "mocked_discord_id", // eslint-disable-line camelcase
      token: "mocked_token",
      save: jest.fn(),
      destroy: jest.fn(),
    },
  };
  const mockDatabasePool = {
    query: jest.fn().mockResolvedValue({ rows: [] }),
  };
  const redisClient = {
    get: jest.fn(),
    set: jest.fn(),
  };

  /*test("Valid token, from Discord API", () => {
    expect(discordGetServers(req, databasePool, logger, redisClient)
      .toEqual( {id:"99999"}
    );
  });*/
});
