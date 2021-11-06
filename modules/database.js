const mysql = require('mysql');
module.exports = {
  getConnexion: function(){
    var connection = mysql.createConnection({
      host: '127.0.0.1',
      user: 'root',
      password: '',
      database: 'discord_blockly',
      multipleStatements: false
    });
    return(connection);
  }
}
