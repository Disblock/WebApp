let Blockly = require('blockly');
//const fs = require('fs');
//const crypto = require('crypto');//Generate random strings

module.exports = {
  xml_to_js: async function(server_id, xml, Blockly, token, database_pool){

    // Create a headless workspace.
     const workspace = new Blockly.Workspace();
     Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(xml), workspace);
     const code = Blockly.JavaScript.workspaceToCode(workspace);

     let splittedCode = code.replace('.token', 't0ken').split('<<'+token+'>>');

     if(splittedCode[0]==''){//Remove the empty string at the first index of loop
       splittedCode.splice(0,1);
     }//spliitedCode = [trigger, code, trigger, code, ...]


     //creating Sql request
     let splittedCodeToSend = [];
     let sql = 'INSERT INTO server_code (server_id, action_type, code) VALUES '
     let sqlCompleted = false;//Check if a valid tupple is added to the sql string
     let args = [server_id];

     for(var i=0; i<splittedCode.length; i=i+2){
       if(splittedCode[i]!='' && splittedCode[i+1].replace(/(\r\n|\n|\r)/gm, '')!=''){//If user added an action block without instruction, it will be removed
         //Trigger event defined, code defined, and not just some \n
         splittedCodeToSend.push(splittedCode[i], splittedCode[i+1]);
       }
     }

     for(var i=0; i<splittedCodeToSend.length; i=i+2){

       args.push(splittedCodeToSend[i], splittedCodeToSend[i+1]);
       sql = sql + ( (sqlCompleted) ? ',':'' ) + '($1, $'+(i+2)+', $'+(i+3)+')';
       sqlCompleted=true;//At least one tuple was added

     }

     if(!sqlCompleted){return(1)}

     //Saving to Database
     database_pool.connect((err, client, release) => {
      if(err){
        release(err);
        console.log("ERROR while connecting a client to database");
      }

      //TODO add logs here
      //Transaction start
      client.query('BEGIN;', (err)=>{
        if(err){
          client.query('ROLLBACK');
          release(err);
        }else{

          //Tuples inserted
          client.query(sql+';', args, (err, rep)=>{
            if(err){
              //Problem, let's rollback
              client.query('ROLLBACK');
              release(err);
            }else{
              //Semms good, let's try to commit
              client.query('COMMIT;', (err)=>{
                if(err){
                  client.query('ROLLBACK');
                  release(err);
                }else{
                  release();
                }
              });
            }
          });
        }
      });
    });



    return(1);
    //TODO : Generating code https://github.com/google/blockly/blob/master/demos/headless/index.html
  }
}
