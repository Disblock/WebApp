'use strict';
module.exports = {
  /* Thos module is used to save and get server logs from database.*/

  //Enum to store event type. The number is the row ID of the event in database.
  eventType: {
    updatedWorkspace:1,
    rollbackedWorkspace:2
  },

  /* This function will add an event to the audit log. If there is too much saved logs, we will delete some of them.
    args :
    databasePool - PgPool or Client to connect to the database
    guildId - String
    userId - String
    eventType - Int
    premium - Boolean
    staff - Boolean

    Return : Object*/
  addEventToLogs: async function(databasePool, guildId, userId, eventType, premium, staff=false){
    try{
      let result = await databasePool.query('INSERT INTO audit_log (server_id, user_id, action, action_date, staff_action) VALUES ($1, $2, $3, NOW(), $4);', [guildId, userId, eventType, staff]);

      let maxLogs;
      if(premium){
        maxLogs = process.env.P_MAX_LOGS;
      }else{
        maxLogs = process.env.NP_MAX_LOGS;
      }

      //Delete older logs entries if needed
      let result2 = await databasePool.query('DELETE FROM audit_log WHERE audit_id IN (SELECT audit_id FROM audit_log WHERE server_id = $1 ORDER BY audit_id DESC OFFSET $2);', [guildId, maxLogs]);
      return {correct: true, message:''};
    }catch(err){
      return {correct:false, message:err};
    }
  }
}
