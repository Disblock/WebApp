'use-strict';
module.exports = async function(database_pool, logger){
  /* Function used to run SQL requests that must be runned on startup ( to create or update the database schem ) */

  await database_pool.query("SELECT 1;");
  //logger.warn("OK");

  //TODO : Add every neccessary requests here, so we don't need to create manually the database anymore
}
