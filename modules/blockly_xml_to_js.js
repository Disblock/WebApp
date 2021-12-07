const Blockly = require('blockly');

module.exports = {
  xml_to_js: function(xml){
    console.log(xml);
    var convertedXml = Blockly.Xml.textToDom(xml);
    Blockly.JavaScript.INFINITE_LOOP_TRAP = "if(Date.now() - time > 3000){throw 'Infinite loop !'}\n";
    Blockly.JavaScript.STATEMENT_PREFIX = "";
    Blockly.JavaScript.addReservedWords('loopTimer');
    //TODO : Check code to avoid injections

    // Create a headless workspace.
     var workspace = new Blockly.Workspace();
     //workspace.addChangeListener(Blockly.Events.disableOrphans);
     Blockly.Xml.domToWorkspace(convertedXml, workspace);
     var code = Blockly.JavaScript.workspaceToCode(workspace);
     console.log("var time = Date.now();\n"+code);
     //https://developers.google.com/blockly/reference/js/Blockly.Generator



    return(2);
    //TODO : Generating code https://github.com/google/blockly/blob/master/demos/headless/index.html
  }
}
