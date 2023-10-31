"use strict";
module.exports = {
  /* This module is used to save and get server workspaces from database.*/

  /* This function will add a workspace to the database. If there is too much saved workspaces, we will delete some of them.
    args :
    databasePool - PgPool or Client to connect to the database
    guildId - String
    xml - String
    premium - Boolean

    Return : Object*/
  addWorkspace: async function (databasePool, guildId, xml, premium) {
    try {
      await databasePool.query("INSERT INTO server_workspace (server_id, xml) VALUES ($1, $2);", [guildId, xml]);

      let maxRollbacks;
      if (premium) {
        maxRollbacks = process.env.P_MAX_ROLLBACKS;
      } else {
        maxRollbacks = process.env.NP_MAX_ROLLBACKS;
      }

      //Delete older logs entries if needed
      await databasePool.query(
        "DELETE FROM server_workspace WHERE workspace_id IN (SELECT workspace_id FROM server_workspace WHERE server_id = $1 ORDER BY workspace_id DESC OFFSET $2);",
        [guildId, maxRollbacks]
      );
      return { correct: true, message: "" };
    } catch (err) {
      return { correct: false, message: err };
    }
  },
};
