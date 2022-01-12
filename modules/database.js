const mysql = require('mysql');
module.exports = {
  getConnexion: function(){
    var connection = mysql.createConnection({
      host: 'host.docker.internal',/* CHANGE IT IN PRODUCTION !! */
      user: 'root',
      password: '',
      database: 'discord_blockly',
      multipleStatements: false
    });
    return(connection);
  }
}
