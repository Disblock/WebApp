let Blockly = require('blockly');
const fs = require('fs');
const crypto = require('crypto');//Generate random strings

module.exports = {
  xml_to_js: function(server_id, xml, Blockly){


    console.log(server_id);
    console.log(xml);

    var convertedXml = Blockly.Xml.textToDom(xml);


    //TODO : Check code to avoid injections

    // Create a headless workspace.
     var workspace = new Blockly.Workspace();
     Blockly.Xml.domToWorkspace(convertedXml, workspace);
     var code = Blockly.JavaScript.workspaceToCode(workspace);

     console.log(code);
     //TODO : Déplacer et modifier l'anti boucle infinie
     //https://developers.google.com/blockly/reference/js/Blockly.Generator



    return(2);
    //TODO : Generating code https://github.com/google/blockly/blob/master/demos/headless/index.html
  }
}
