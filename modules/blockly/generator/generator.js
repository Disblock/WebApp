const blockly = require('blockly');

module.exports = {
  initializeGenerator: function(Blockly, token){//Token is used to separe events later

    /* After that, we will cut the generated code by "<<token>>" where token is a randomly generated strings
    We will get an array like :

    [event_message_sent,
    statements,
    event_user_join,
    statements]
    */

    /* ##### EVENTS blocks ##### */
    Blockly.JavaScript['event_message_sent'] = function(block) {
      var statements = Blockly.JavaScript.statementToCode(block, 'statements');
      var code = "\n<<"+token+">>event_message_sent<<"+token+">>"+statements;
      return code;
    };

    Blockly.JavaScript['event_message_deleted'] = function(block) {
      var statements = Blockly.JavaScript.statementToCode(block, 'statements');
      var code = "\n<<"+token+">>event_message_deleted<<"+token+">>"+statements;
      return code;
    };

    Blockly.JavaScript['event_message_updated'] = function(block) {
      var statements = Blockly.JavaScript.statementToCode(block, 'statements');
      var code = "\n<<"+token+">>event_message_updated<<"+token+">>"+statements;
      return code;
    };

    Blockly.JavaScript['event_user_join'] = function(block) {
      var statements = Blockly.JavaScript.statementToCode(block, 'statements');
      var code = "\n<<"+token+">>event_user_join<<"+token+">>"+statements;
      return code;
    };

    Blockly.JavaScript['event_user_left'] = function(block) {
      var statements = Blockly.JavaScript.statementToCode(block, 'statements');
      var code = "\n<<"+token+">>event_user_left<<"+token+">>"+statements;
      return code;
    };

    Blockly.JavaScript['event_user_updated'] = function(block) {
      var statements = Blockly.JavaScript.statementToCode(block, 'statements');
      var code = "\n<<"+token+">>event_user_updated<<"+token+">>"+statements;
      return code;
    };

    Blockly.JavaScript['event_var_message'] = function(block) {
      var code = "eventMessage";
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript['event_var_message_old'] = function(block) {
      var code="eventOldMessage";
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript['event_var_message_new'] = function(block) {
      var code="eventNewMessage";
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript['event_var_user'] = function(block) {
      var code="eventUser";
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript['event_var_old_user'] = function(block) {
      var code="eventOldUser";
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript['event_var_new_user'] = function(block) {
      var code="eventNewUser";
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript['event_role_created'] = function(block) {
      var statements = Blockly.JavaScript.statementToCode(block, 'statements');
      var code = "\n<<"+token+">>event_role_created<<"+token+">>"+statements;
      return code;
    };

    Blockly.JavaScript['event_role_deleted'] = function(block) {
      var statements = Blockly.JavaScript.statementToCode(block, 'statements');
      var code = "\n<<"+token+">>event_role_deleted<<"+token+">>"+statements;
      return code;
    };

    Blockly.JavaScript['event_role_edited'] = function(block) {
      var statements = Blockly.JavaScript.statementToCode(block, 'statements');
      var code = "\n<<"+token+">>event_role_edited<<"+token+">>"+statements;
      return code;
    };

    Blockly.JavaScript['event_var_role'] = function(block) {
      var code="eventRole";
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript['event_var_old_role'] = function(block) {
      var code="eventOldRole";
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript['event_var_new_role'] = function(block) {
      var code="eventNewRole";
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript['event_user_banned'] = function(block) {
      var statements = Blockly.JavaScript.statementToCode(block, 'statements');
      var code = "\n<<"+token+">>event_user_banned<<"+token+">>"+statements;
      return code;
    };

    Blockly.JavaScript['event_user_unbanned'] = function(block) {
      var statements = Blockly.JavaScript.statementToCode(block, 'statements');
      var code = "\n<<"+token+">>event_user_unbanned<<"+token+">>"+statements;
      return code;
    };

    Blockly.JavaScript['event_pinned_updated'] = function(block) {
      var statements = Blockly.JavaScript.statementToCode(block, 'statements');
      var code = "\n<<"+token+">>event_pinned_updated<<"+token+">>"+statements;
      return code;
    };

    Blockly.JavaScript['event_user_voice_update'] = function(block) {
      var statements = Blockly.JavaScript.statementToCode(block, 'statements');
      var code = "\n<<"+token+">>event_user_voice_update<<"+token+">>"+statements;
      return code;
    };

    Blockly.JavaScript['event_user_start_writting'] = function(block) {
      var statements = Blockly.JavaScript.statementToCode(block, 'statements');
      var code = "\n<<"+token+">>event_user_start_writting<<"+token+">>"+statements;
      return code;
    };

    Blockly.JavaScript['event_var_old_voice_channel'] = function(block) {
      var code="eventOldVoiceChannel";
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript['event_var_new_voice_channel'] = function(block) {
      var code="eventNewVoiceChannel";
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript['event_text_channel_created'] = function(block) {
      var statements = Blockly.JavaScript.statementToCode(block, 'statements');
      var code = "\n<<"+token+">>event_text_channel_created<<"+token+">>"+statements;
      return code;
    };

    Blockly.JavaScript['event_text_channel_deleted'] = function(block) {
      var statements = Blockly.JavaScript.statementToCode(block, 'statements');
      var code = "\n<<"+token+">>event_text_channel_deleted<<"+token+">>"+statements;
      return code;
    };

    Blockly.JavaScript['event_text_channel_edited'] = function(block) {
      var statements = Blockly.JavaScript.statementToCode(block, 'statements');
      var code = "\n<<"+token+">>event_text_channel_edited<<"+token+">>"+statements;
      return code;
    };

    Blockly.JavaScript['event_voice_channel_created'] = function(block) {
      var statements = Blockly.JavaScript.statementToCode(block, 'statements');
      var code = "\n<<"+token+">>event_voice_channel_created<<"+token+">>"+statements;
      return code;
    };

    Blockly.JavaScript['event_voice_channel_deleted'] = function(block) {
      var statements = Blockly.JavaScript.statementToCode(block, 'statements');
      var code = "\n<<"+token+">>event_voice_channel_deleted<<"+token+">>"+statements;
      return code;
    };

    Blockly.JavaScript['event_voice_channel_edited'] = function(block) {
      var statements = Blockly.JavaScript.statementToCode(block, 'statements');
      var code = "\n<<"+token+">>event_voice_channel_edited<<"+token+">>"+statements;
      return code;
    };

    Blockly.JavaScript['event_var_text_channel'] = function(block) {
      var code="eventTextChannel";
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript['event_var_old_text_channel'] = function(block) {
      var code="eventOldTextChannel";
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript['event_var_new_text_channel'] = function(block) {
      var code="eventNewTextChannel";
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript['event_var_voice_channel'] = function(block) {
      var code="eventVoiceChannel";
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript['event_reaction_added'] = function(block) {
      var statements = Blockly.JavaScript.statementToCode(block, 'statements');
      var code = "\n<<"+token+">>event_reaction_added<<"+token+">>"+statements;
      return code;
    };

    Blockly.JavaScript['event_reaction_removed'] = function(block) {
      var statements = Blockly.JavaScript.statementToCode(block, 'statements');
      var code = "\n<<"+token+">>event_reaction_removed<<"+token+">>"+statements;
      return code;
    };

    Blockly.JavaScript['event_var_reaction'] = function(block) {
      var code="eventReaction";
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript['event_user_start_writing'] = function(block) {
      var statements = Blockly.JavaScript.statementToCode(block, 'statements');
      var code = "\n<<"+token+">>event_user_start_writing<<"+token+">>"+statements;
      return code;
    };


    /* ##### MESSAGES blocks ##### */

    Blockly.JavaScript['block_message_reply'] = function(block) {
      var value_message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_ATOMIC);
      var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_message!='' && value_text!=''){
        var code = value_message+".reply("+value_text+");\n";
        return code;
      }else{
        return '';
      }
    };

    Blockly.JavaScript['block_message_send'] = function(block) {
      var value_channel = Blockly.JavaScript.valueToCode(block, 'channel', Blockly.JavaScript.ORDER_ATOMIC);
      var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_channel!='' && value_text!=''){
        var code = value_channel+'.send('+value_text+');\n';
        return code;
      }else{
        return '';
      }
    };

    Blockly.JavaScript['block_message_send_with_file'] = function(block) {
      var value_channel = Blockly.JavaScript.valueToCode(block, 'channel', Blockly.JavaScript.ORDER_ATOMIC);
      var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
      var value_fileurl = Blockly.JavaScript.valueToCode(block, 'fileURL', Blockly.JavaScript.ORDER_ATOMIC);
      if(value_channel!='' && value_text!='' && value_fileurl!='' && (value_fileurl.substr(1, 7)==='http://' || value_fileurl.substr(1, 8)==='https://') ){//Index 1, Blockly surrond with ', index 0 give 'http:/
        var code = value_channel+".send({content: "+value_text +",files: [{attachment: "+value_fileurl+",name: 'file.jpg'}]});\n";
        return code;
      }else{
        return '';
      }
    };

    Blockly.JavaScript['block_message_delete'] = function(block) {
      var value_message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_message!=''){
        var code = value_message+'.delete();\n';
        return code;
      }else{
        return '';
      }
    };

    Blockly.JavaScript['block_message_delete_bulk'] = function(block) {
      var number_amount = block.getFieldValue('amount');
      var value_channel = Blockly.JavaScript.valueToCode(block, 'channel', Blockly.JavaScript.ORDER_ATOMIC);

      if(number_amount!='' && value_channel!=''){
        var code = value_channel+'.bulkDelete('+number_amount+');\n';
        return code;
      }else{
        return '';
      }
    };

    Blockly.JavaScript['block_message_start_thread'] = function(block) {
      var value_message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_message!=''){
        var code = value_message+'.startThread();\n';
        return code;
      }else{
        return '';
      }
    };

    Blockly.JavaScript['block_message_pine'] = function(block) {
      var value_message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_message!=''){
        var code = value_message+'.pin();\n';
        return code;
      }else{
        return '';
      }
    };

    Blockly.JavaScript['block_message_unpine'] = function(block) {
      var value_message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_message!=''){
        var code = value_message+'.unpin();\n';
        return code;
      }else{
        return '';
      }
    };

    Blockly.JavaScript['block_message_get_text'] = function(block) {
      var value_message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_message!=''){
        var code = value_message+'.content';
        return [code, Blockly.JavaScript.ORDER_NONE];
      }else{
        return ['', Blockly.JavaScript.ORDER_NONE];
      }
    };

    Blockly.JavaScript['block_message_get_id'] = function(block) {
      var value_message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_message!=''){
        var code = value_message+'.id';
        return [code, Blockly.JavaScript.ORDER_NONE];
      }else{
        return ['', Blockly.JavaScript.ORDER_NONE];
      }
    };

    Blockly.JavaScript['block_message_get_autor'] = function(block) {
      var value_message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_message!=''){
        var code = value_message+'.member';
        return [code, Blockly.JavaScript.ORDER_NONE];
      }else{
        return ['', Blockly.JavaScript.ORDER_NONE];
      }
    };

    Blockly.JavaScript['block_message_get_channel'] = function(block) {
      var value_message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_message!=''){
        var code = value_message+'.channel';
        return [code, Blockly.JavaScript.ORDER_NONE];
      }else{
        return ['', Blockly.JavaScript.ORDER_NONE];
      }
    };

    Blockly.JavaScript['block_message_does_mention_everyone'] = function(block) {
      var value_message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_message!=''){
        var code = value_message+'.mentions.everyone';
        return [code, Blockly.JavaScript.ORDER_NONE];
      }else{
        return ['', Blockly.JavaScript.ORDER_NONE];
      }
    };

    Blockly.JavaScript['block_message_does_mention_user'] = function(block) {
      var value_message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_message!=''){
        var code = value_message+'.mentions.members.size>0';
        return [code, Blockly.JavaScript.ORDER_NONE];
      }else{
        return ['', Blockly.JavaScript.ORDER_NONE];
      }
    };

    Blockly.JavaScript['block_message_get_user_mention'] = function(block) {
      var number_mention_index = block.getFieldValue('mention_index');
      var value_message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_message!='' && number_mention_index!='' && number_mention_index!='NaN'){
        var code = value_message+'.mentions.members.at(('+number_mention_index+'-1) % '+value_message+'.mentions.members.size)';// For us, Collection start at index 0, for users, a collection start at index 1
        return [code, Blockly.JavaScript.ORDER_NONE];
      }else{
        return ['', Blockly.JavaScript.ORDER_NONE];
      }
    };

    Blockly.JavaScript['block_message_get_channel_mention'] = function(block) {
      var number_mention_index = block.getFieldValue('mention_index');
      var value_message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_message!='' && number_mention_index!='' && number_mention_index!='NaN'){
        var code = value_message+'.mentions.channels.at(('+number_mention_index+'-1) % '+value_message+'.mentions.channels.size)';// For us, Collection start at index 0, for users, a collection start at index 1
        return [code, Blockly.JavaScript.ORDER_NONE];
      }else{
        return ['', Blockly.JavaScript.ORDER_NONE];
      }
    };

    Blockly.JavaScript['block_message_number_of_mentions_user'] = function(block) {
      var value_message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_message!=''){
        var code = value_message+'.mentions.members.size';
        return [code, Blockly.JavaScript.ORDER_NONE];
      }else{
        return ['', Blockly.JavaScript.ORDER_NONE];
      }
    };

    Blockly.JavaScript['block_message_number_of_mentions_channel'] = function(block) {
      var value_message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_message!=''){
        var code = value_message+'.mentions.channels.size';
        return [code, Blockly.JavaScript.ORDER_NONE];
      }else{
        return ['', Blockly.JavaScript.ORDER_NONE];
      }
    };

    Blockly.JavaScript['block_message_var_sent_message'] = function(block) {
      var code = "sentMessage";
      return [code, Blockly.JavaScript.ORDER_NONE];
    }


    return(Blockly);
  }
}
