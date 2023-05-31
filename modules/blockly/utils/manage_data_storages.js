"use strict";
const workspaceErrorsEnum = require("../../enums/workspace_errors.js"); //Enum that refer to possible errors while working on code sent by a server

/*
This function will loop through Data storages creator blocks, and will convert them to an SQL query.
This SQL query will be used to create the storages in database
*/
module.exports = async (defineDataStorageBlocks, serverId) => {
  const newStoragesNames = [serverId]; //We pass the server ID since it's the first arg of the SQL function
  let sqlStoragesRequest = "SELECT f_update_data_storages_for_guild($1";
  for (let i = 0; i < defineDataStorageBlocks.length; i++) {
    //For every define storage block
    const storageName = defineDataStorageBlocks[i].getFieldValue("DATANAME"); //We get the name of the storage
    if (/^([A-Za-z0-9]{3,28})$/.test(storageName)) {
      //Only if name is valid
      newStoragesNames.push(
        (defineDataStorageBlocks[i].type == "block_data_storage_create_string" ? "S" : "I") + storageName
      ); //We save this name to send it to database
      sqlStoragesRequest = sqlStoragesRequest + ", $" + (i + 2); //Indexes start at 1, and since 1 is already taken, we must do 0->2
    } else {
      throw workspaceErrorsEnum.errorWithStorageBlocks;
    }
  }
  sqlStoragesRequest = sqlStoragesRequest + ");"; //We can now finish the SQL request

  return [sqlStoragesRequest, newStoragesNames];
};
