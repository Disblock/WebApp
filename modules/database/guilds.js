"use strict";

module.exports = {
  /* Function used to check if a server exist in database.
    Args : alsoPremium : Boolean - Check if this server is premium ?
           serverId : String - ID of the server to check
           databasePool / Client - Needed to reach database

    Return : Object {exist:Boolean, premium:None|Boolean}*/
  checkIfServerExist: async function (databasePool, serverId, alsoPremium = true) {
    let result;
    if (alsoPremium) {
      //Does this server exist and is premium ?
      result = await databasePool.query(
        "SELECT EXISTS(SELECT 1 FROM servers WHERE server_id=$1) AS server, EXISTS(SELECT 1 FROM premium WHERE server_id=$1 AND (end_date > NOW() OR end_date IS NULL) ) AS premium, EXISTS(SELECT 1 FROM server_ban WHERE server_id=$1 AND active=TRUE) AS banned;",
        [serverId]
      );
      return { exist: !!result.rows[0].server, premium: !!result.rows[0].premium, banned: !!result.rows[0].banned };
    } else {
      //Does this server exist ?
      result = await databasePool.query(
        "SELECT EXISTS(SELECT 1 FROM servers WHERE server_id=$1) AS server, EXISTS(SELECT 1 FROM server_ban WHERE server_id=$1 AND active=TRUE) AS banned;",
        [serverId]
      );
      return { exist: !!result.rows[0].server, premium: undefined, banned: !!result.rows[0].banned }; //!! : From Int to Boolean
    }
  },
};
