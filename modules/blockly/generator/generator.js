const blockly = require('blockly');

module.exports = {
  initializeGenerator: function(Blockly, token){//Token is used to separe events later
    //Blockly.Generator.COMMENT_WRAP = Infinity;

    /* After that, we will cut the generated code by "<<token>>" where token is a randomly generated strings
    We will get an array like :

    [event_message_sent,
    statements,
    event_user_join,
    statements]
    */

    /*

    The const GLOBAL_GUILD represent the Guild object that triggered an event, this var is defined in the bot when executing the code.

    */

    /* ##### EVENTS blocks ##### */
    Blockly.JavaScript['event_message_sent'] = function(block) {
      const statements = Blockly.JavaScript.statementToCode(block, 'statements');
      const code = "\n<<"+token+">>event_message_sent<<"+token+">>"+statements;
      return code;
    };

    Blockly.JavaScript['event_message_deleted'] = function(block) {
      const statements = Blockly.JavaScript.statementToCode(block, 'statements');
      const code = "\n<<"+token+">>event_message_deleted<<"+token+">>"+statements;
      return code;
    };

    Blockly.JavaScript['event_message_updated'] = function(block) {
      const statements = Blockly.JavaScript.statementToCode(block, 'statements');
      const code = "\n<<"+token+">>event_message_updated<<"+token+">>"+statements;
      return code;
    };

    Blockly.JavaScript['event_user_join'] = function(block) {
      const statements = Blockly.JavaScript.statementToCode(block, 'statements');
      const code = "\n<<"+token+">>event_user_join<<"+token+">>"+statements;
      return code;
    };

    Blockly.JavaScript['event_user_left'] = function(block) {
      const statements = Blockly.JavaScript.statementToCode(block, 'statements');
      const code = "\n<<"+token+">>event_user_left<<"+token+">>"+statements;
      return code;
    };

    Blockly.JavaScript['event_user_updated'] = function(block) {
      const statements = Blockly.JavaScript.statementToCode(block, 'statements');
      const code = "\n<<"+token+">>event_user_updated<<"+token+">>"+statements;
      return code;
    };

    Blockly.JavaScript['event_var_message'] = function(block) {
      const code = "eventMessage";
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript['event_var_message_old'] = function(block) {
      const code="eventOldMessage";
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript['event_var_message_new'] = function(block) {
      const code="eventNewMessage";
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript['event_var_user'] = function(block) {
      const code="eventUser";
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript['event_var_old_user'] = function(block) {
      const code="eventOldUser";
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript['event_var_new_user'] = function(block) {
      const code="eventNewUser";
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript['event_role_created'] = function(block) {
      const statements = Blockly.JavaScript.statementToCode(block, 'statements');
      const code = "\n<<"+token+">>event_role_created<<"+token+">>"+statements;
      return code;
    };

    Blockly.JavaScript['event_role_deleted'] = function(block) {
      const statements = Blockly.JavaScript.statementToCode(block, 'statements');
      const code = "\n<<"+token+">>event_role_deleted<<"+token+">>"+statements;
      return code;
    };

    Blockly.JavaScript['event_role_edited'] = function(block) {
      const statements = Blockly.JavaScript.statementToCode(block, 'statements');
      const code = "\n<<"+token+">>event_role_edited<<"+token+">>"+statements;
      return code;
    };

    Blockly.JavaScript['event_var_role'] = function(block) {
      const code="eventRole";
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript['event_var_old_role'] = function(block) {
      const code="eventOldRole";
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript['event_var_new_role'] = function(block) {
      const code="eventNewRole";
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript['event_user_banned'] = function(block) {
      const statements = Blockly.JavaScript.statementToCode(block, 'statements');
      const code = "\n<<"+token+">>event_user_banned<<"+token+">>"+statements;
      return code;
    };

    Blockly.JavaScript['event_user_unbanned'] = function(block) {
      const statements = Blockly.JavaScript.statementToCode(block, 'statements');
      const code = "\n<<"+token+">>event_user_unbanned<<"+token+">>"+statements;
      return code;
    };

    Blockly.JavaScript['event_pinned_updated'] = function(block) {
      const statements = Blockly.JavaScript.statementToCode(block, 'statements');
      const code = "\n<<"+token+">>event_pinned_updated<<"+token+">>"+statements;
      return code;
    };

    Blockly.JavaScript['event_user_voice_update'] = function(block) {
      const statements = Blockly.JavaScript.statementToCode(block, 'statements');
      const code = "\n<<"+token+">>event_user_voice_update<<"+token+">>"+statements;
      return code;
    };

    Blockly.JavaScript['event_user_start_writting'] = function(block) {
      const statements = Blockly.JavaScript.statementToCode(block, 'statements');
      const code = "\n<<"+token+">>event_user_start_writting<<"+token+">>"+statements;
      return code;
    };

    Blockly.JavaScript['event_var_old_voice_channel'] = function(block) {
      const code="eventOldVoiceChannel";
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript['event_var_new_voice_channel'] = function(block) {
      const code="eventNewVoiceChannel";
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript['event_text_channel_created'] = function(block) {
      const statements = Blockly.JavaScript.statementToCode(block, 'statements');
      const code = "\n<<"+token+">>event_text_channel_created<<"+token+">>"+statements;
      return code;
    };

    Blockly.JavaScript['event_text_channel_deleted'] = function(block) {
      const statements = Blockly.JavaScript.statementToCode(block, 'statements');
      const code = "\n<<"+token+">>event_text_channel_deleted<<"+token+">>"+statements;
      return code;
    };

    Blockly.JavaScript['event_text_channel_edited'] = function(block) {
      const statements = Blockly.JavaScript.statementToCode(block, 'statements');
      const code = "\n<<"+token+">>event_text_channel_edited<<"+token+">>"+statements;
      return code;
    };

    Blockly.JavaScript['event_voice_channel_created'] = function(block) {
      const statements = Blockly.JavaScript.statementToCode(block, 'statements');
      const code = "\n<<"+token+">>event_voice_channel_created<<"+token+">>"+statements;
      return code;
    };

    Blockly.JavaScript['event_voice_channel_deleted'] = function(block) {
      const statements = Blockly.JavaScript.statementToCode(block, 'statements');
      const code = "\n<<"+token+">>event_voice_channel_deleted<<"+token+">>"+statements;
      return code;
    };

    Blockly.JavaScript['event_voice_channel_edited'] = function(block) {
      const statements = Blockly.JavaScript.statementToCode(block, 'statements');
      const code = "\n<<"+token+">>event_voice_channel_edited<<"+token+">>"+statements;
      return code;
    };

    Blockly.JavaScript['event_var_text_channel'] = function(block) {
      const code="eventTextChannel";
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript['event_var_old_text_channel'] = function(block) {
      const code="eventOldTextChannel";
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript['event_var_new_text_channel'] = function(block) {
      const code="eventNewTextChannel";
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript['event_var_voice_channel'] = function(block) {
      const code="eventVoiceChannel";
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript['event_reaction_added'] = function(block) {
      const statements = Blockly.JavaScript.statementToCode(block, 'statements');
      const code = "\n<<"+token+">>event_reaction_added<<"+token+">>"+statements;
      return code;
    };

    Blockly.JavaScript['event_reaction_removed'] = function(block) {
      const statements = Blockly.JavaScript.statementToCode(block, 'statements');
      const code = "\n<<"+token+">>event_reaction_removed<<"+token+">>"+statements;
      return code;
    };

    Blockly.JavaScript['event_var_reaction'] = function(block) {
      const code="eventReaction";
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript['event_user_start_writing'] = function(block) {
      const statements = Blockly.JavaScript.statementToCode(block, 'statements');
      const code = "\n<<"+token+">>event_user_start_writing<<"+token+">>"+statements;
      return code;
    };


    /* ##### MESSAGES blocks ##### */

    Blockly.JavaScript['block_message_reply'] = function(block) {
      const value_message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_ATOMIC);
      const value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_message!=='' && value_text!==''){
        const code = value_message+".reply("+value_text+");\n";
        return code;
      }else{
        return '';
      }
    };

    Blockly.JavaScript['block_message_send'] = function(block) {
      const value_channel = Blockly.JavaScript.valueToCode(block, 'channel', Blockly.JavaScript.ORDER_ATOMIC);
      const value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_channel!=='' && value_text!==''){
        const code = value_channel+'.send('+value_text+');\n';
        return code;
      }else{
        return '';
      }
    };

    Blockly.JavaScript['block_message_send_with_file'] = function(block) {
      const value_channel = Blockly.JavaScript.valueToCode(block, 'channel', Blockly.JavaScript.ORDER_ATOMIC);
      const value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
      const value_fileurl = Blockly.JavaScript.valueToCode(block, 'fileURL', Blockly.JavaScript.ORDER_ATOMIC);
      if(value_channel!=='' && value_text!=='' && value_fileurl!=='' && (value_fileurl.substr(1, 7)==='http://' || value_fileurl.substr(1, 8)==='https://') ){//Index 1, Blockly surrond with ', index 0 give 'http:/
        const code = value_channel+".send({content: "+value_text +",files: [{attachment: "+value_fileurl+",name: 'file.jpg'}]});\n";
        return code;
      }else{
        return '';
      }
    };

    Blockly.JavaScript['block_message_delete'] = function(block) {
      const value_message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_message!==''){
        const code = value_message+'.delete();\n';
        return code;
      }else{
        return '';
      }
    };

    Blockly.JavaScript['block_message_delete_bulk'] = function(block) {
      const number_amount = block.getFieldValue('amount');
      const value_channel = Blockly.JavaScript.valueToCode(block, 'channel', Blockly.JavaScript.ORDER_ATOMIC);

      if(number_amount!=='' && value_channel!==''){
        const code = value_channel+'.bulkDelete('+number_amount+');\n';
        return code;
      }else{
        return '';
      }
    };

    Blockly.JavaScript['block_message_start_thread'] = function(block) {
      const value_message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_message!==''){
        const code = value_message+'.startThread();\n';
        return code;
      }else{
        return '';
      }
    };

    Blockly.JavaScript['block_message_pine'] = function(block) {
      const value_message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_message!==''){
        const code = value_message+'.pin();\n';
        return code;
      }else{
        return '';
      }
    };

    Blockly.JavaScript['block_message_unpine'] = function(block) {
      const value_message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_message!==''){
        const code = value_message+'.unpin();\n';
        return code;
      }else{
        return '';
      }
    };

    Blockly.JavaScript['block_message_get_text'] = function(block) {
      const value_message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_message!==''){
        const code = value_message+'.content';
        return [code, Blockly.JavaScript.ORDER_NONE];
      }else{
        return ['', Blockly.JavaScript.ORDER_NONE];
      }
    };

    Blockly.JavaScript['block_message_get_id'] = function(block) {
      const value_message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_message!==''){
        const code = value_message+'.id';
        return [code, Blockly.JavaScript.ORDER_NONE];
      }else{
        return ['', Blockly.JavaScript.ORDER_NONE];
      }
    };

    Blockly.JavaScript['block_message_get_autor'] = function(block) {
      const value_message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_message!==''){
        const code = value_message+'.member';
        return [code, Blockly.JavaScript.ORDER_NONE];
      }else{
        return ['', Blockly.JavaScript.ORDER_NONE];
      }
    };

    Blockly.JavaScript['block_message_get_channel'] = function(block) {
      const value_message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_message!==''){
        const code = value_message+'.channel';
        return [code, Blockly.JavaScript.ORDER_NONE];
      }else{
        return ['', Blockly.JavaScript.ORDER_NONE];
      }
    };

    Blockly.JavaScript['block_message_does_mention_everyone'] = function(block) {
      const value_message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_message!==''){
        const code = value_message+'.mentions.everyone';
        return [code, Blockly.JavaScript.ORDER_NONE];
      }else{
        return ['', Blockly.JavaScript.ORDER_NONE];
      }
    };

    Blockly.JavaScript['block_message_does_mention_user'] = function(block) {
      const value_message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_message!==''){
        const code = value_message+'.mentions.members.size>0';
        return [code, Blockly.JavaScript.ORDER_NONE];
      }else{
        return ['', Blockly.JavaScript.ORDER_NONE];
      }
    };

    Blockly.JavaScript['block_message_get_user_mention'] = function(block) {
      const number_mention_index = block.getFieldValue('mention_index');
      const value_message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_message!=='' && number_mention_index!=='' && number_mention_index!=='NaN'){
        const code = value_message+'.mentions.members.at(('+number_mention_index+'-1) % '+value_message+'.mentions.members.size)';// For us, Collection start at index 0, for users, a collection start at index 1
        return [code, Blockly.JavaScript.ORDER_NONE];
      }else{
        return ['', Blockly.JavaScript.ORDER_NONE];
      }
    };

    Blockly.JavaScript['block_message_get_channel_mention'] = function(block) {
      const number_mention_index = block.getFieldValue('mention_index');
      const value_message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_message!=='' && number_mention_index!=='' && number_mention_index!=='NaN'){
        const code = value_message+'.mentions.channels.at(('+number_mention_index+'-1) % '+value_message+'.mentions.channels.size)';// For us, Collection start at index 0, for users, a collection start at index 1
        return [code, Blockly.JavaScript.ORDER_NONE];
      }else{
        return ['', Blockly.JavaScript.ORDER_NONE];
      }
    };

    Blockly.JavaScript['block_message_number_of_mentions_user'] = function(block) {
      const value_message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_message!==''){
        const code = value_message+'.mentions.members.size';
        return [code, Blockly.JavaScript.ORDER_NONE];
      }else{
        return ['', Blockly.JavaScript.ORDER_NONE];
      }
    };

    Blockly.JavaScript['block_message_number_of_mentions_channel'] = function(block) {
      const value_message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_message!==''){
        const code = value_message+'.mentions.channels.size';
        return [code, Blockly.JavaScript.ORDER_NONE];
      }else{
        return ['', Blockly.JavaScript.ORDER_NONE];
      }
    };

    Blockly.JavaScript['block_message_var_sent_message'] = function(block) {
      const code = "sentMessage";
      return [code, Blockly.JavaScript.ORDER_NONE];
    }


    /* ##### USERS blocks ##### */

    Blockly.JavaScript['block_user_ban'] = function(block) {
      const value_user = Blockly.JavaScript.valueToCode(block, 'user', Blockly.JavaScript.ORDER_ATOMIC);
      let value_reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_user!==''){
        if(value_reason===''){value_reason='\'Reason undefined\''}
        const code = value_user+'.ban({days:0,reason:'+value_reason+'});\n'
        return code;
      }else{
        return '';
      }
    };

    Blockly.JavaScript['block_user_unban'] = function(block) {
      const value_user = Blockly.JavaScript.valueToCode(block, 'user', Blockly.JavaScript.ORDER_ATOMIC);
      let value_reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_user!==''){
        if(value_reason===''){value_reason='\'Reason undefined\''}
        const code = 'GLOBAL_GUILD.bans.remove('+value_user+', '+value_reason+');\n';
        return code;
      }else{
        return '';
      }
    };

    Blockly.JavaScript['block_user_send_private_message'] = function(block) {
      const value_message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_ATOMIC);
      const value_user = Blockly.JavaScript.valueToCode(block, 'user', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_user!=='' && value_message!==''){
        const code = value_user+'.send('+value_message+'+"\\nCustom message sent from the server *"+GLOBAL_GUILD.name+"*");\n';
        return code;
      }else{
        return '';
      }
    };

    Blockly.JavaScript['block_user_kick'] = function(block) {
      const value_user = Blockly.JavaScript.valueToCode(block, 'user', Blockly.JavaScript.ORDER_ATOMIC);
      let value_reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_user!==''){
        if(value_reason===''){value_reason='\'Reason undefined\''}
        const code = value_user+'.kick('+value_reason+');\n'
        return code;
      }else{
        return '';
      }
    };

    Blockly.JavaScript['block_user_get_with_id'] = function(block) {
      const value_id = Blockly.JavaScript.valueToCode(block, 'id', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_id!==''){
        const code = 'await GLOBAL_GUILD.members.fetch('+value_id+')';
        return [code, Blockly.JavaScript.ORDER_NONE];
      }else{
        return ['', Blockly.JavaScript.ORDER_NONE];
      }
    };

    Blockly.JavaScript['block_user_get_server_username'] = function(block) {
      const value_user = Blockly.JavaScript.valueToCode(block, 'user', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_user!==''){
        const code = value_user+'.displayName';
        return [code, Blockly.JavaScript.ORDER_NONE];
      }else{
        return ['', Blockly.JavaScript.ORDER_NONE];
      }
    };

    Blockly.JavaScript['block_user_get_username'] = function(block) {
      const value_user = Blockly.JavaScript.valueToCode(block, 'user', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_user!==''){
        const code = value_user+'.user.username';
        return [code, Blockly.JavaScript.ORDER_NONE];
      }else{
        return ['', Blockly.JavaScript.ORDER_NONE];
      }
    };

    Blockly.JavaScript['block_user_get_tag'] = function(block) {
      const value_user = Blockly.JavaScript.valueToCode(block, 'user', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_user!==''){
        const code = value_user+'.user.tag';
        return [code, Blockly.JavaScript.ORDER_NONE];
      }else{
        return ['', Blockly.JavaScript.ORDER_NONE];
      }
    };

    Blockly.JavaScript['block_user_get_id'] = function(block) {
      const value_user = Blockly.JavaScript.valueToCode(block, 'user', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_user!==''){
        const code = value_user+'.id';
        return [code, Blockly.JavaScript.ORDER_NONE];
      }else{
        return ['', Blockly.JavaScript.ORDER_NONE];
      }
    };

    Blockly.JavaScript['block_user_get_picture'] = function(block) {
      const value_user = Blockly.JavaScript.valueToCode(block, 'user', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_user!==''){
        const code = value_user+'.avatarURL({dynamic:true}) || '+value_user+'.user.avatarURL({dynamic:true})';//Users can have a per guild avatar or a global avatar
        return [code, Blockly.JavaScript.ORDER_NONE];
      }else{
        return ['', Blockly.JavaScript.ORDER_NONE];
      }
    };

    Blockly.JavaScript['block_user_is_bot'] = function(block) {
      const value_user = Blockly.JavaScript.valueToCode(block, 'user', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_user!==''){
        const code = value_user+'.user.bot';//Users can have a per guild avatar or a global avatar
        return [code, Blockly.JavaScript.ORDER_NONE];
      }else{
        return ['', Blockly.JavaScript.ORDER_NONE];
      }
    };

    Blockly.JavaScript['block_user_mute'] = function(block) {
      const value_user = Blockly.JavaScript.valueToCode(block, 'user', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_user!==''){
        const code = value_user+'.voice.setMute(true);\n'
        return code;
      }else{
        return '';
      }
    };

    Blockly.JavaScript['block_user_unmute'] = function(block) {
      const value_user = Blockly.JavaScript.valueToCode(block, 'user', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_user!==''){
        const code = value_user+'.voice.setMute(false);\n'
        return code;
      }else{
        return '';
      }
    };

    Blockly.JavaScript['block_user_deaf'] = function(block) {
      const value_user = Blockly.JavaScript.valueToCode(block, 'user', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_user!==''){
        const code = value_user+'.voice.setDeaf(true);\n'
        return code;
      }else{
        return '';
      }
    };

    Blockly.JavaScript['block_user_undeaf'] = function(block) {
      const value_user = Blockly.JavaScript.valueToCode(block, 'user', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_user!==''){
        const code = value_user+'.voice.setDeaf(false);\n'
        return code;
      }else{
        return '';
      }
    };

    Blockly.JavaScript['block_user_is_timeout'] = function(block) {
      const value_user = Blockly.JavaScript.valueToCode(block, 'user', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_user!==''){
        const code = value_user+'.isCommunicationDisabled()';//Users can have a per guild avatar or a global avatar
        return [code, Blockly.JavaScript.ORDER_NONE];
      }else{
        return ['', Blockly.JavaScript.ORDER_NONE];
      }
    };

    Blockly.JavaScript['block_user_timeout'] = function(block) {
      const value_user = Blockly.JavaScript.valueToCode(block, 'user', Blockly.JavaScript.ORDER_ATOMIC);
      const dropdown_duration = block.getFieldValue('duration');
      let value_reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_user!=='' && dropdown_duration!==''){
        if(value_reason===''){value_reason='\'Reason undefined\''}
        let code = value_user;
        switch(dropdown_duration){
          case '1min':
            code = code + '.timeout(60000, '+value_reason+')';
            break;
          case '5min':
            code = code + '.timeout(300000, '+value_reason+')';
            break;
          case '10min':
            code = code + '.timeout(600000, '+value_reason+')';
            break;
          case '1h':
            code = code + '.timeout(3600000, '+value_reason+')';
            break;
          case '1d':
            code = code + '.timeout(86400000, '+value_reason+')';
            break;
          case '1w':
            code = code + '.timeout(604800000, '+value_reason+')';
            break;
          default:
            code = code + '.timeout(60000, '+value_reason+')';
            break;
        }
        return code;
      }else{
        return '';
      }
    };

    Blockly.JavaScript['block_user_custom_timeout'] = function(block) {
      const value_user = Blockly.JavaScript.valueToCode(block, 'user', Blockly.JavaScript.ORDER_ATOMIC);
      const value_duration = Blockly.JavaScript.valueToCode(block, 'duration', Blockly.JavaScript.ORDER_ATOMIC);
      let value_reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_user!=='' && value_duration!==''){
        if(value_reason===''){value_reason='\'Reason undefined\''}
        const code = value_user + '.timeout('+value_duration*1000+', '+value_reason+')';
        return code;
      }else{
        return '';
      }
    };

    Blockly.JavaScript['block_user_remove_timeout'] = function(block) {
      const value_user = Blockly.JavaScript.valueToCode(block, 'user', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_user!==''){
        const code = value_user + '.timeout(null)';//Giving null as argument remove the timeout
        return code;
      }else{
        return '';
      }
    };

    Blockly.JavaScript['block_user_has_permission'] = function(block) {
      const value_user = Blockly.JavaScript.valueToCode(block, 'user', Blockly.JavaScript.ORDER_ATOMIC);
      const dropdown_permission = block.getFieldValue('permission');

      if(value_user!=='' && dropdown_permission!==''){
        let code = value_user+'.permissions';
        switch(dropdown_permission){
          case 'SEE_CHANNEL':
            code = code + '.has(\'VIEW_CHANNEL\', true)';//https://discord.js.org/#/docs/discord.js/stable/class/Permissions?scrollTo=has
            break;
          case 'MANAGE_CHANNEL':
            code = code + '.has(\'MANAGE_CHANNELS\', true)';
            break;
          case 'MANAGE_RANKS':
            code = code + '.has(\'MANAGE_ROLES\', true)';
            break;
          case 'MANAGE_EMOJIS':
            code = code + '.has(\'MANAGE_EMOJIS_AND_STICKERS\', true)';
            break;
          case 'SEE_SERVER_LOGS':
            code = code + '.has(\'VIEW_AUDIT_LOG\', true)';
            break;
          case 'MANAGE_WEBHOOKS':
            code = code + '.has(\'MANAGE_WEBHOOKS\', true)';
            break;
          case 'MANAGE_SERVER':
            code = code + '.has(\'MANAGE_GUILD\', true)';
            break;
          case 'CREATE_INVITE':
            code = code + '.has(\'CREATE_INSTANT_INVITE\', true)';
            break;
          case 'EDIT_USERNAME':
            code = code + '.has(\'CHANGE_NICKNAME\', true)';
            break;
          case 'EDIT_OTHERS_USERNAME':
            code = code + '.has(\'MANAGE_NICKNAMES\', true)';
            break;
          case 'KICK':
            code = code + '.has(\'KICK_MEMBERS\', true)';
            break;
          case 'BAN':
            code = code + '.has(\'BAN_MEMBERS\', true)';
            break;
          case 'TIMEOUT':
            code = code + '.has(\'MODERATE_MEMBERS\', true)';
            break;
          case 'SEND_MESSAGES':
            code = code + '.has(\'SEND_MESSAGES\', true)';
            break;
          case 'SEND_MESSAGES_IN_THREADS':
            code = code + '.has(\'SEND_MESSAGES_IN_THREADS\', true)';
            break;
          case 'CREATE_PUBLIC_THREADS':
            code = code + '.has(\'CREATE_PUBLIC_THREADS\', true)';
            break;
          case 'CREATE_PRIVATE_THREADS':
            code = code + '.has(\'CREATE_PRIVATE_THREADS\', true)';
            break;
          case 'EMBED_LINKS':
            code = code + '.has(\'EMBED_LINKS\', true)';
            break;
          case 'ADD_FILES':
            code = code + '.has(\'ATTACH_FILES\', true)';
            break;
          case 'ADD_REACTIONS':
            code = code + '.has(\'ADD_REACTIONS\', true)';
            break;
          case 'USE_EXTERNAL_EMOJIS':
            code = code + '.has(\'USE_EXTERNAL_EMOJIS\', true)';
            break;
          case 'USE_EXTERNAL_STICKERS':
            code = code + '.has(\'USE_EXTERNAL_STICKERS\', true)';
            break;
          case 'PING_EVERYONE':
            code = code + '.has(\'MENTION_EVERYONE\', true)';
            break;
          case 'MANAGE_MESSAGES':
            code = code + '.has(\'MANAGE_MESSAGES\', true)';
            break;
          case 'MANAGE_THREADS':
            code = code + '.has(\'MANAGE_THREADS\', true)';
            break;
          case 'SEE_OLD_MESSAGES':
            code = code + '.has(\'READ_MESSAGE_HISTORY\', true)';
            break;
          case 'SEND_VOICE_MESSAGE':
            code = code + '.has(\'SEND_TTS_MESSAGES\', true)';
            break;
          case 'USE_APP_COMMANDS':
            code = code + '.has(\'USE_APPLICATION_COMMANDS\', true)';
            break;
          case 'CONNECT_TO_VOICE_CHANNEL':
            code = code + '.has(\'CONNECT\', true)';
            break;
          case 'SPEAK':
            code = code + '.has(\'SPEAK\', true)';
            break;
          case 'USE_VIDEO':
            code = code + '.has(\'STREAM\', true)';
            break;
          case 'START_ACTIVITY':
            code = code + '.has(\'START_EMBEDDED_ACTIVITIES\', true)';
            break;
          case 'VOICE_DETECTION':
            code = code + '.has(\'USE_VAD\', true)';//Voice Activity Detection
            break;
          case 'PRIORITY_SPEAKER':
            code = code + '.has(\'PRIORITY_SPEAKER\', true)';
            break;
          case 'MUTE_MEMBER':
            code = code + '.has(\'MUTE_MEMBERS\', true)';
            break;
          case 'DEAF_MEMBER':
            code = code + '.has(\'DEAFEN_MEMBERS\', true)';
            break;
          case 'MOOVE_MEMBER':
            code = code + '.has(\'MOVE_MEMBERS\', true)';
            break;
          case 'MANAGE_EVENTS':
            code = code + '.has(\'MANAGE_EVENTS\', true)';
            break;
          case 'ADMINISTRATOR':
            code = code + '.has(\'ADMINISTRATOR\', true)';
            break;
          default:
            code = code + '.has(\'ADMINISTRATOR\', true)';
            break;
        }
        return [code, Blockly.JavaScript.ORDER_NONE];
      }else{
        return ['', Blockly.JavaScript.ORDER_NONE];
      }
    };

    Blockly.JavaScript['block_user_has_rank'] = function(block) {
      const value_user = Blockly.JavaScript.valueToCode(block, 'user', Blockly.JavaScript.ORDER_ATOMIC);
      const value_rank = Blockly.JavaScript.valueToCode(block, 'rank', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_user!=='' && value_rank!==''){
        const code = value_user+'.roles.resolve('+value_rank+')';//value_rank should be a string with the ID, or a role object
        return [code, Blockly.JavaScript.ORDER_NONE];
      }else{
        return ['', Blockly.JavaScript.ORDER_NONE];
      }
    };

    return(Blockly);
  }
}
