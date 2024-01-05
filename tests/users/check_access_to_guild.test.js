/* eslint no-unused-vars: "off"*/
/* eslint camelcase: "off"*/
"use strict";

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
