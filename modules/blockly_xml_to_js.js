let Blockly = require('blockly');
const blocklyBlocks = require('./blockly_generator/Initblocks.js');
const fs = require('fs');
const crypto = require('crypto');//Generate random strings
const generator = require('./blockly_generator/generator.js');

module.exports = {
  xml_to_js: function(server_id, xml){


    console.log(server_id);
    console.log(xml);

    const tempCode = crypto.randomBytes(4).toString('hex');//Used to cut the string code later

    //Adding blocks and texts on Blockly
    Blockly = blocklyBlocks.initializeBlocks(Blockly);
    Blockly = blocklyBlocks.initializeText(Blockly);
    Blockly = generator.initializeGenerator(Blockly, tempCode);

    var convertedXml = Blockly.Xml.textToDom(xml);

    Blockly.JavaScript.INFINITE_LOOP_TRAP = "if(loopCount > 10000){throw 'Infinite loop !'}\nloopCount++;\n";
    Blockly.JavaScript.addReservedWords('loopCount');
    //TODO : Check code to avoid injections

    // Create a headless workspace.
     var workspace = new Blockly.Workspace();
     Blockly.Xml.domToWorkspace(convertedXml, workspace);
     var code = Blockly.JavaScript.workspaceToCode(workspace);
     
     console.log("var time = Date.now();\n"+code);
     //TODO : Déplacer et modifier l'anti boucle infinie
     //https://developers.google.com/blockly/reference/js/Blockly.Generator



    return(2);
    //TODO : Generating code https://github.com/google/blockly/blob/master/demos/headless/index.html
  }
}
