const blockly = require('blockly');

module.exports = {
  initializeGenerator: function(Blockly, tempcode){//Tempcode is used to separe events later
    //TODO : Create the generator


    Blockly.JavaScript['event_message_sent'] = function(block) {

      var statements = Blockly.JavaScript.statementToCode(block, 'statements');
      var code = "\n<<"+tempcode+":event_message_sent>>\n"+statements+"\n<</"+tempcode+":event_message_sent>>\n";
      console.log(code);

      return code;
    };



    return(Blockly);
  }
}
