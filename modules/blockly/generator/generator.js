'use strict';

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
    All variables here must be declared when starting to execute code

    The const CURRENT_GUILD represent the Guild object that triggered an event, this const is defined in the bot when executing the code.

    embedMessage represents the embed message created

    createdTextChannel represents the created Text Channel with create text channel block
    createdVoiceChannel represents the created voice channel with create voice channel block

    sentMessage is a message sent with reply block or send message block
    createdThreadOnMessage represents the created Thread on created thread on message block

    createdRank Represent the rank created with a create rank block

    Don't delare these, or you will overwrite the Discord vars

    eventMessage
    eventOldMessage
    eventNewMessage

    eventUser
    eventOldUser
    eventNewUser

    eventRole
    eventOldRole
    eventNewRole

    eventOldVoiceChannel
    eventNewVoiceChannel
    eventVoiceChannel

    eventTextChannel
    eventOldTextChannel
    eventNewTextChannel

    eventReaction All of these are variables are used in events
    */
    Blockly.JavaScript.addReservedWords('loopCount,CURRENT_GUILD,embedMessage,createdTextChannel,createdVoiceChannel,sentMessage,createdThreadOnMessage,createdRank,eventMessage,eventOldMessage,eventNewMessage,eventUser,eventOldUser,eventNewUser,eventRole,eventOldRole,eventNewRole,eventOldVoiceChannel,eventNewVoiceChannel,eventVoiceChannel,eventTextChannel,eventOldTextChannel,eventNewTextChannel,eventReaction');
    Blockly.JavaScript.INFINITE_LOOP_TRAP = "if(loopCount > 1000){throw 'Reached the limit of iterations !'}\nloopCount++;\n";

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

    Blockly.JavaScript['event_var_rank'] = function(block) {
      const code="eventRole";
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript['event_var_old_rank'] = function(block) {
      const code="eventOldRole";
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript['event_var_new_rank'] = function(block) {
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

    /*  This event is disabled : Discord don't send the updated message, so we have to found it ourselves.
        This feature is planned, but require more development
    Blockly.JavaScript['event_pinned_updated'] = function(block) {
      const statements = Blockly.JavaScript.statementToCode(block, 'statements');
      const code = "\n<<"+token+">>event_pinned_updated<<"+token+">>"+statements;
      return code;
    };*/

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


    /* ##### MESSAGES blocks ##### */

    Blockly.JavaScript['block_message_reply'] = function(block) {
      const value_message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_ATOMIC);
      const value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_message!=='' && value_text!==''){
        const code = 'sentMessage = await '+value_message+".reply("+value_text+");\n";
        return code;
      }else{
        return '';
      }
    };

    Blockly.JavaScript['block_message_send'] = function(block) {
      const value_channel = Blockly.JavaScript.valueToCode(block, 'channel', Blockly.JavaScript.ORDER_ATOMIC);
      const value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_channel!=='' && value_text!==''){
        const code = 'sentMessage = await '+value_channel+'.send('+value_text+');\n';
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
      const value_name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_message!=='' && value_name!==''){
        const code = 'createdThreadOnMessage = await '+value_message+'.startThread({name: '+value_name+'});\n';
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
        const code = value_message+'.content || \'\'';
        return [code, Blockly.JavaScript.ORDER_NONE];
      }else{
        return ['', Blockly.JavaScript.ORDER_NONE];
      }
    };

    Blockly.JavaScript['block_message_get_id'] = function(block) {
      const value_message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_message!==''){
        const code = value_message+'.id || \'\'';
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

    Blockly.JavaScript['block_message_does_mention_channel'] = function(block) {
      const value_message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_message!==''){
        const code = value_message+'.mentions.channels.size>0';
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

    Blockly.JavaScript['block_message_var_created_thread'] = function(block) {
      var code = 'createdThreadOnMessage';
      return [code, Blockly.JavaScript.ORDER_NONE];
};


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
        const code = 'CURRENT_GUILD.bans.remove('+value_user+', '+value_reason+');\n';
        return code;
      }else{
        return '';
      }
    };

    Blockly.JavaScript['block_user_send_private_message'] = function(block) {
      const value_message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_ATOMIC);
      const value_user = Blockly.JavaScript.valueToCode(block, 'user', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_user!=='' && value_message!==''){
        const code = value_user+'.send('+value_message+'+"\\nCustom message sent from the server *"+CURRENT_GUILD.name+"*");\n';
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
        const code = 'await CURRENT_GUILD.members.fetch('+value_id+')';
        return [code, Blockly.JavaScript.ORDER_NONE];
      }else{
        return ['', Blockly.JavaScript.ORDER_NONE];
      }
    };

    Blockly.JavaScript['block_user_get_server_username'] = function(block) {
      const value_user = Blockly.JavaScript.valueToCode(block, 'user', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_user!==''){
        const code = value_user+'.displayName || \'\'';
        return [code, Blockly.JavaScript.ORDER_NONE];
      }else{
        return ['', Blockly.JavaScript.ORDER_NONE];
      }
    };

    Blockly.JavaScript['block_user_get_username'] = function(block) {
      const value_user = Blockly.JavaScript.valueToCode(block, 'user', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_user!==''){
        const code = value_user+'.user.username || \'\'';
        return [code, Blockly.JavaScript.ORDER_NONE];
      }else{
        return ['', Blockly.JavaScript.ORDER_NONE];
      }
    };

    Blockly.JavaScript['block_user_get_tag'] = function(block) {
      const value_user = Blockly.JavaScript.valueToCode(block, 'user', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_user!==''){
        const code = value_user+'.user.tag || \'\'';
        return [code, Blockly.JavaScript.ORDER_NONE];
      }else{
        return ['', Blockly.JavaScript.ORDER_NONE];
      }
    };

    Blockly.JavaScript['block_user_get_id'] = function(block) {
      const value_user = Blockly.JavaScript.valueToCode(block, 'user', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_user!==''){
        const code = value_user+'.id || \'\'';
        return [code, Blockly.JavaScript.ORDER_NONE];
      }else{
        return ['', Blockly.JavaScript.ORDER_NONE];
      }
    };

    Blockly.JavaScript['block_user_get_picture'] = function(block) {
      const value_user = Blockly.JavaScript.valueToCode(block, 'user', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_user!==''){
        const code = value_user+'.avatarURL({dynamic:true}) || '+value_user+'.user.avatarURL({dynamic:true}) || \'\'';//Users can have a per guild avatar or a global avatar
        return [code, Blockly.JavaScript.ORDER_NONE];
      }else{
        return ['', Blockly.JavaScript.ORDER_NONE];
      }
    };

    Blockly.JavaScript['block_user_is_bot'] = function(block) {
      const value_user = Blockly.JavaScript.valueToCode(block, 'user', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_user!==''){
        const code = value_user+'.user.bot';
        return [code, Blockly.JavaScript.ORDER_NONE];
      }else{
        return ['', Blockly.JavaScript.ORDER_NONE];
      }
    };

    Blockly.JavaScript['block_user_mute'] = function(block) {
      const value_user = Blockly.JavaScript.valueToCode(block, 'user', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_user!==''){
        const code = 'if('+value_user+'.voice.channel){'+value_user+'.voice.setMute(true);}\n';
        return code;
      }else{
        return '';
      }
    };

    Blockly.JavaScript['block_user_unmute'] = function(block) {
      const value_user = Blockly.JavaScript.valueToCode(block, 'user', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_user!==''){
        const code = 'if('+value_user+'.voice.channel){'+value_user+'.voice.setMute(false);}\n';
        return code;
      }else{
        return '';
      }
    };

    Blockly.JavaScript['block_user_deaf'] = function(block) {
      const value_user = Blockly.JavaScript.valueToCode(block, 'user', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_user!==''){
        const code = 'if('+value_user+'.voice.channel){'+value_user+'.voice.setDeaf(true);}\n';
        return code;
      }else{
        return '';
      }
    };

    Blockly.JavaScript['block_user_undeaf'] = function(block) {
      const value_user = Blockly.JavaScript.valueToCode(block, 'user', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_user!==''){
        const code = 'if('+value_user+'.voice.channel){'+value_user+'.voice.setDeaf(false);}\n';
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
            code = code + '.timeout(60000, '+value_reason+');\n';
            break;
          case '5min':
            code = code + '.timeout(300000, '+value_reason+');\n';
            break;
          case '10min':
            code = code + '.timeout(600000, '+value_reason+');\n';
            break;
          case '1h':
            code = code + '.timeout(3600000, '+value_reason+');\n';
            break;
          case '1d':
            code = code + '.timeout(86400000, '+value_reason+');\n';
            break;
          case '1w':
            code = code + '.timeout(604800000, '+value_reason+');\n';
            break;
          default:
            code = code + '.timeout(60000, '+value_reason+');\n';
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
        const code = value_user + '.timeout('+value_duration*1000+', '+value_reason+');\n';
        return code;
      }else{
        return '';
      }
    };

    Blockly.JavaScript['block_user_remove_timeout'] = function(block) {
      const value_user = Blockly.JavaScript.valueToCode(block, 'user', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_user!==''){
        const code = value_user + '.timeout(null);\n';//Giving null as argument remove the timeout
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

    /* ##### CHANNELS blocks ##### */

    Blockly.JavaScript['block_channel_create_text_channel'] = function(block) {
      const value_name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);
      const value_topic = Blockly.JavaScript.valueToCode(block, 'topic', Blockly.JavaScript.ORDER_ATOMIC);
      const value_category = Blockly.JavaScript.valueToCode(block, 'category', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_name!=='' && value_category!==''){
        let code = 'createdTextChannel = await CURRENT_GUILD.channels.create('+value_name+', {type: \'GUILD_TEXT\', parent: '+value_category;//value_category should be a string with the ID or Category object
        code = code + ((value_topic!=='') ? ', topic: '+value_topic+'});\n' : '});\n');
        return code;
      }else{
        return '';
      }
    };

    Blockly.JavaScript['block_channel_create_voice_channel'] = function(block) {
      const value_name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);
      const value_category = Blockly.JavaScript.valueToCode(block, 'category', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_name!=='' && value_category!==''){
        const code = 'createdVoiceChannel = await CURRENT_GUILD.channels.create('+value_name+', {type: \'GUILD_VOICE\', parent: '+value_category+'});\n';
        return code;
      }else{
        return '';
      }
    };

    Blockly.JavaScript['block_channel_var_voice_channel'] = function(block) {
      const code = 'createdVoiceChannel';
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript['block_channel_var_text_channel'] = function(block) {
      const code = 'createdTextChannel';
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript['block_channel_delete'] = function(block) {
      const value_channel = Blockly.JavaScript.valueToCode(block, 'channel', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_channel!==''){
        const code = value_channel+'.delete();\n';
        return code;
      }else{
        return '';
      }
    };

    Blockly.JavaScript['block_channel_renamme'] = function(block) {
      const value_channel = Blockly.JavaScript.valueToCode(block, 'channel', Blockly.JavaScript.ORDER_ATOMIC);
      const value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_channel!=='' && value_text!==''){
        const code = value_channel+'.setName('+value_text+');\n';
        return code;
      }else{
        return '';
      }
    };

    Blockly.JavaScript['block_channel_get_category_of_channel'] = function(block) {
      const value_channel = Blockly.JavaScript.valueToCode(block, 'channel', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_channel!==''){
        const code = value_channel+'.parent';
        return [code, Blockly.JavaScript.ORDER_NONE];
      }else{
        return ['', Blockly.JavaScript.ORDER_NONE];
      }
    };

    Blockly.JavaScript['block_channel_get_channel_name'] = function(block) {
      const value_channel = Blockly.JavaScript.valueToCode(block, 'channel', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_channel!==''){
        const code = value_channel+'.name || \'\'';
        return [code, Blockly.JavaScript.ORDER_NONE];
      }else{
        return ['', Blockly.JavaScript.ORDER_NONE];
      }
    };

    Blockly.JavaScript['block_channel_get_channel_topic'] = function(block) {
      const value_channel = Blockly.JavaScript.valueToCode(block, 'channel', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_channel!==''){
        const code = value_channel+'.topic || \'\'';
        return [code, Blockly.JavaScript.ORDER_NONE];
      }else{
        return ['', Blockly.JavaScript.ORDER_NONE];
      }
    };

    Blockly.JavaScript['block_channel_get_channel_id'] = function(block) {
      const value_channel = Blockly.JavaScript.valueToCode(block, 'channel', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_channel!==''){
        const code = value_channel+'.id || \'\'';
        return [code, Blockly.JavaScript.ORDER_NONE];
      }else{
        return ['', Blockly.JavaScript.ORDER_NONE];
      }
    };

    Blockly.JavaScript['block_channel_get_channel_with_id'] = function(block) {
      const value_channel_id = Blockly.JavaScript.valueToCode(block, 'channel_id', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_channel_id!==''){
        const code = 'CURRENT_GUILD.channels.resolve('+value_channel_id+')';
        return [code, Blockly.JavaScript.ORDER_NONE];
      }else{
        return ['', Blockly.JavaScript.ORDER_NONE];
      }
    };

    Blockly.JavaScript['block_channel_get_permission'] = function(block) {
      const value_userorrank = Blockly.JavaScript.valueToCode(block, 'userOrRank', Blockly.JavaScript.ORDER_ATOMIC);
      const dropdown_permission = block.getFieldValue('permission');
      const value_channel = Blockly.JavaScript.valueToCode(block, 'channel', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_userorrank!=='' && dropdown_permission!=='' && value_channel!==''){
        let code = value_channel+'.permissionsFor('+value_userorrank+', true).has(';

        switch(dropdown_permission){
          case 'SEE_CHANNEL':
            code = code + '\'VIEW_CHANNEL\', true)';
            break;
          case 'MANAGE_CHANNEL':
            code = code + '\'MANAGE_CHANNELS\', true)';
            break;
          case 'MANAGE_CHANNEL_PERMISSIONS':
            code = code + '\'MANAGE_ROLES\', true)';
            break;
          case 'MANAGE_CHANNEL_WEBHOOKS':
            code = code + '\'MANAGE_WEBHOOKS\', true)';
            break;
          case 'CREATE_INVITE':
            code = code + '\'CREATE_INSTANT_INVITE\', true)';
            break;
          case 'SEND_MESSAGES':
            code = code + '\'SEND_MESSAGES\', true)';
            break;
          case 'SEND_MESSAGES_IN_THREADS':
            code = code + '\'SEND_MESSAGES_IN_THREADS\', true)';
            break;
          case 'CREATE_PUBLIC_THREADS':
            code = code + '\'CREATE_PUBLIC_THREADS\', true)';
            break;
          case 'CREATE_PRIVATE_THREADS':
            code = code + '\'CREATE_PRIVATE_THREADS\', true)';
            break;
          case 'EMBED_LINKS':
            code = code + '\'EMBED_LINKS\', true)';
            break;
          case 'ADD_FILES':
            code = code + '\'ATTACH_FILES\', true)';
            break;
          case 'ADD_REACTIONS':
            code = code + '\'ADD_REACTIONS\', true)';
            break;
          case 'USE_EXTERNAL_EMOJIS':
            code = code + '\'USE_EXTERNAL_EMOJIS\', true)';
            break;
          case 'USE_EXTERNAL_STICKERS':
            code = code + '\'USE_EXTERNAL_STICKERS\', true)';
            break;
          case 'PING_EVERYONE':
            code = code + '\'MENTION_EVERYONE\', true)';
            break;
          case 'MANAGE_MESSAGES':
            code = code + '\'MANAGE_MESSAGES\', true)';
            break;
          case 'MANAGE_THREADS':
            code = code + '\'MANAGE_THREADS\', true)';
            break;
          case 'SEE_OLD_MESSAGES':
            code = code + '\'READ_MESSAGE_HISTORY\', true)';
            break;
          case 'SEND_VOICE_MESSAGE':
            code = code + '\'SEND_TTS_MESSAGES\', true)';
            break;
          case 'USE_APP_COMMANDS':
            code = code + '\'USE_APPLICATION_COMMANDS\', true)';
            break;
          case 'CONNECT_TO_VOICE_CHANNEL':
            code = code + '\'CONNECT\', true)';
            break;
          case 'SPEAK':
            code = code + '\'SPEAK\', true)';
            break;
          case 'USE_VIDEO':
            code = code + '\'STREAM\', true)';
            break;
          case 'START_ACTIVITY':
            code = code + '\'START_EMBEDDED_ACTIVITIES\', true)';
            break;
          case 'USE_VOICE_DETECTOR':
            code = code + '\'USE_VAD\', true)';
            break;
          case 'PRIORITY_SPEAKER':
            code = code + '\'PRIORITY_SPEAKER\', true)';
            break;
          case 'MUTE_MEMBER':
            code = code + '\'MUTE_MEMBERS\', true)';
            break;
          case 'DEAF_MEMBER':
            code = code + '\'DEAFEN_MEMBERS\', true)';
            break;
          case 'MOOVE_MEMBER':
            code = code + '\'MOVE_MEMBERS\', true)';
            break;
          case 'MANAGE_VOICE_CHANNEL_EVENTS':
            code = code + '\'MANAGE_EVENTS\', true)';
            break;
          default:
            code = code + '\'VIEW_CHANNEL\', true)';
            break;
        }

        return [code, Blockly.JavaScript.ORDER_NONE];
      }else{
        return ['', Blockly.JavaScript.ORDER_NONE];
      }
    };

    Blockly.JavaScript['block_channel_set_permission'] = function(block) {
      const value_userorrank = Blockly.JavaScript.valueToCode(block, 'userOrRank', Blockly.JavaScript.ORDER_ATOMIC);
      const dropdown_permission = block.getFieldValue('permission');
      let dropdown_isgranted = block.getFieldValue('isGranted');
      const value_channel = Blockly.JavaScript.valueToCode(block, 'channel', Blockly.JavaScript.ORDER_ATOMIC);
      let permissionToEdit = '\'SEE_CHANNEL\'';//Used to store the permission to edit
      let code = '';

      if(value_userorrank!=='' && dropdown_permission!=='' && dropdown_isgranted!=='' && value_channel!==''){

        switch(dropdown_permission){
          case 'SEE_CHANNEL':
            permissionToEdit = '\'VIEW_CHANNEL\'';
            break;
          case 'MANAGE_CHANNEL':
            permissionToEdit = '\'MANAGE_CHANNELS\'';
            break;
          case 'MANAGE_CHANNEL_PERMISSIONS':
            permissionToEdit = '\'MANAGE_ROLES\'';
            break;
          case 'MANAGE_CHANNEL_WEBHOOKS':
            permissionToEdit = '\'MANAGE_WEBHOOKS\'';
            break;
          case 'CREATE_INVITE':
            permissionToEdit = '\'CREATE_INSTANT_INVITE\'';
            break;
          case 'SEND_MESSAGES':
            permissionToEdit = '\'SEND_MESSAGES\'';
            break;
          case 'SEND_MESSAGES_IN_THREADS':
            permissionToEdit = '\'SEND_MESSAGES_IN_THREADS\'';
            break;
          case 'CREATE_PUBLIC_THREADS':
            permissionToEdit = '\'CREATE_PUBLIC_THREADS\'';
            break;
          case 'CREATE_PRIVATE_THREADS':
            permissionToEdit = '\'CREATE_PRIVATE_THREADS\'';
            break;
          case 'EMBED_LINKS':
            permissionToEdit = '\'EMBED_LINKS\'';
            break;
          case 'ADD_FILES':
            permissionToEdit = '\'ATTACH_FILES\'';
            break;
          case 'ADD_REACTIONS':
            permissionToEdit = '\'ADD_REACTIONS\'';
            break;
          case 'USE_EXTERNAL_EMOJIS':
            permissionToEdit = '\'USE_EXTERNAL_EMOJIS\'';
            break;
          case 'USE_EXTERNAL_STICKERS':
            permissionToEdit = '\'USE_EXTERNAL_STICKERS\'';
            break;
          case 'PING_EVERYONE':
            permissionToEdit = '\'MENTION_EVERYONE\'';
            break;
          case 'MANAGE_MESSAGES':
            permissionToEdit = '\'MANAGE_MESSAGES\'';
            break;
          case 'MANAGE_THREADS':
            permissionToEdit = '\'MANAGE_THREADS\'';
            break;
          case 'SEE_OLD_MESSAGES':
            permissionToEdit = '\'READ_MESSAGE_HISTORY\'';
            break;
          case 'SEND_VOICE_MESSAGE':
            permissionToEdit = '\'SEND_TTS_MESSAGES\'';
            break;
          case 'USE_APP_COMMANDS':
            permissionToEdit = '\'USE_APPLICATION_COMMANDS\'';
            break;
          case 'CONNECT_TO_VOICE_CHANNEL':
            permissionToEdit = '\'CONNECT\'';
            break;
          case 'SPEAK':
            permissionToEdit = '\'SPEAK\'';
            break;
          case 'USE_VIDEO':
            permissionToEdit = '\'STREAM\'';
            break;
          case 'START_ACTIVITY':
            permissionToEdit = '\'START_EMBEDDED_ACTIVITIES\'';
            break;
          case 'USE_VOICE_DETECTOR':
            permissionToEdit = '\'USE_VAD\'';
            break;
          case 'PRIORITY_SPEAKER':
            permissionToEdit = '\'PRIORITY_SPEAKER\'';
            break;
          case 'MUTE_MEMBER':
            permissionToEdit = '\'MUTE_MEMBERS\'';
            break;
          case 'DEAF_MEMBER':
            permissionToEdit = '\'DEAFEN_MEMBERS\'';
            break;
          case 'MOOVE_MEMBER':
            permissionToEdit = '\'MOVE_MEMBERS\'';
            break;
          case 'MANAGE_VOICE_CHANNEL_EVENTS':
            permissionToEdit = '\'MANAGE_EVENTS\'';
            break;
          default:
            permissionToEdit = '\'VIEW_CHANNEL\'';
            break;
        }
        switch(dropdown_isgranted){
          case 'GRANT':
            code = 'await '+value_channel+'.permissionOverwrites.edit('+value_userorrank+', {'+permissionToEdit+': true});\n';//If two modifications are made at the same time, that's will be very buggy
            break;
          case 'DENY':
            code = 'await '+value_channel+'.permissionOverwrites.edit('+value_userorrank+', {'+permissionToEdit+': false});\n';
            break;
          default://UNDEFINED is sent here
            code = 'await '+value_channel+'.permissionOverwrites.edit('+value_userorrank+', {'+permissionToEdit+': null});\n';
            break;
        }
        return code;
      }else{
        return '';
      }
    };

    Blockly.JavaScript['block_channel_list'] = function(block) {
      //const code = 'await CURRENT_GUILD.channels.fetch()';
      const code = '';//This block is disabled
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    /* ##### RANKS blocks ##### */

    Blockly.JavaScript['block_rank_create'] = function(block) {
      const value_name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);
      const colour_color = block.getFieldValue('color');
      const checkbox_is_pingeable = block.getFieldValue('is_pingeable') === 'TRUE';
      const checkbox_are_members_shown = block.getFieldValue('are_members_shown') === 'TRUE';
      const value_position = Blockly.JavaScript.valueToCode(block, 'position', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_name!=='' && colour_color!=='' && value_position!==''){
        const code = 'createdRank = await CURRENT_GUILD.roles.create({name:'+value_name+', color:\''+colour_color+'\', position: '+value_position+', hoist: '+checkbox_are_members_shown+', mentionable: '+checkbox_is_pingeable+'});\n';
        return code;
      }else{
        return '';
      }
    };

    Blockly.JavaScript['block_rank_var_created_rank'] = function(block) {
      const code = 'createdRank';
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript['block_rank_delete'] = function(block) {
      const value_rank = Blockly.JavaScript.valueToCode(block, 'rank', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_rank!==''){
        const code = value_rank+'.delete();\n';
        return code;
      }else{
        return '';
      }
    };

    Blockly.JavaScript['block_rank_edit_name'] = function(block) {
      const value_rank = Blockly.JavaScript.valueToCode(block, 'rank', Blockly.JavaScript.ORDER_ATOMIC);
      const value_name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_rank!=='' && value_name!==''){
        const code = value_rank+'.setName('+value_name+');\n';
        return code;
      }else{
        return '';
      }
    };

    Blockly.JavaScript['block_rank_edit_color'] = function(block) {
      const value_rank = Blockly.JavaScript.valueToCode(block, 'rank', Blockly.JavaScript.ORDER_ATOMIC);
      const colour_color = block.getFieldValue('color');

      if(value_rank!=='' && colour_color!==''){
        const code = value_rank+'.setColor(\''+colour_color+'\');\n';
        return code;
      }else{
        return '';
      }
    };

    Blockly.JavaScript['block_rank_edit_pingeable'] = function(block) {
      const value_rank = Blockly.JavaScript.valueToCode(block, 'rank', Blockly.JavaScript.ORDER_ATOMIC);
      const dropdown_is_pingeable = block.getFieldValue('IS_PINGEABLE');

      if(value_rank!==''){
        const code = value_rank+'.setMentionable('+( (dropdown_is_pingeable==='PINGEABLE') ? 'true' : 'false' )+');\n';
        return code;
      }else{
        return '';
      }
    };

    Blockly.JavaScript['block_rank_edit_members_shown'] = function(block) {
      const value_rank = Blockly.JavaScript.valueToCode(block, 'rank', Blockly.JavaScript.ORDER_ATOMIC);
      const dropdown_are_member_shown = block.getFieldValue('ARE_MEMBER_SHOWN');

      if(value_rank!==''){
        const code = value_rank+'.setHoist('+( (dropdown_are_member_shown==='SHOWN') ? 'true' : 'false' )+');\n';
        return code;
      }else{
        return '';
      }
    };

    Blockly.JavaScript['block_rank_edit_position'] = function(block) {
      const value_rank = Blockly.JavaScript.valueToCode(block, 'rank', Blockly.JavaScript.ORDER_ATOMIC);
      const value_position = Blockly.JavaScript.valueToCode(block, 'position', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_rank!=='' && value_position!==''){
        const code = value_rank+'.setPosition('+value_position+');\n';
        return code;
      }else{
        return '';
      }
    };

    Blockly.JavaScript['block_rank_get_rank_with_id'] = function(block) {
      const value_id = Blockly.JavaScript.valueToCode(block, 'id', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_id!==''){
        const code = 'CURRENT_GUILD.roles.resolve('+value_id+')';
        return [code, Blockly.JavaScript.ORDER_NONE];
      }else{
        return ['', Blockly.JavaScript.ORDER_NONE];
      }
    };

    Blockly.JavaScript['block_rank_edit_permissions'] = function(block) {
      const dropdown_permission = block.getFieldValue('permission');
      const value_rank = Blockly.JavaScript.valueToCode(block, 'rank', Blockly.JavaScript.ORDER_ATOMIC);
      const dropdown_isgranted = block.getFieldValue('isGranted');

      if(dropdown_permission!=='' && value_rank!=='' && dropdown_isgranted!==''){

        let currentPermission = '\'VIEW_CHANNEL\'';
        let code = '';
        switch(dropdown_permission){
          case 'SEE_CHANNEL':
            currentPermission = '\'VIEW_CHANNEL\'';
            break;
          case 'MANAGE_CHANNEL':
            currentPermission = '\'MANAGE_CHANNELS\'';
            break;
          case 'MANAGE_RANKS':
            currentPermission = '\'MANAGE_ROLES\'';
            break;
          case 'MANAGE_EMOJIS':
            currentPermission = '\'MANAGE_EMOJIS_AND_STICKERS\'';
            break;
          case 'SEE_SERVER_LOGS':
            currentPermission = '\'VIEW_AUDIT_LOG\'';
            break;
          case 'MANAGE_WEBHOOKS':
            currentPermission = '\'MANAGE_WEBHOOKS\'';
            break;
          case 'MANAGE_SERVER':
            currentPermission = '\'MANAGE_GUILD\'';
            break;
          case 'CREATE_INVITE':
            currentPermission = '\'CREATE_INSTANT_INVITE\'';
            break;
          case 'EDIT_USERNAME':
            currentPermission = '\'CHANGE_NICKNAME\'';
            break;
          case 'EDIT_OTHERS_USERNAME':
            currentPermission = '\'MANAGE_NICKNAMES\'';
            break;
          case 'KICK':
            currentPermission = '\'KICK_MEMBERS\'';
            break;
          case 'BAN':
            currentPermission = '\'BAN_MEMBERS\'';
            break;
          case 'TIMEOUT':
            currentPermission = '\'MODERATE_MEMBERS\'';
            break;
          case 'SEND_MESSAGES':
            currentPermission = '\'SEND_MESSAGES\'';
            break;
          case 'SEND_MESSAGES_IN_THREADS':
            currentPermission = '\'SEND_MESSAGES_IN_THREADS\'';
            break;
          case 'CREATE_PUBLIC_THREADS':
            currentPermission = '\'CREATE_PUBLIC_THREADS\'';
            break;
          case 'CREATE_PRIVATE_THREADS':
            currentPermission = '\'CREATE_PRIVATE_THREADS\'';
            break;
          case 'EMBED_LINKS':
            currentPermission = '\'EMBED_LINKS\'';
            break;
          case 'ADD_FILES':
            currentPermission = '\'ATTACH_FILES\'';
            break;
          case 'ADD_REACTIONS':
            currentPermission = '\'ADD_REACTIONS\'';
            break;
          case 'USE_EXTERNAL_EMOJIS':
            currentPermission = '\'USE_EXTERNAL_EMOJIS\'';
            break;
          case 'USE_EXTERNAL_STICKERS':
            currentPermission = '\'USE_EXTERNAL_STICKERS\'';
            break;
          case 'PING_EVERYONE':
            currentPermission = '\'MENTION_EVERYONE\'';
            break;
          case 'MANAGE_MESSAGES':
            currentPermission = '\'MANAGE_MESSAGES\'';
            break;
          case 'MANAGE_THREADS':
            currentPermission = '\'MANAGE_THREADS\'';
            break;
          case 'SEE_OLD_MESSAGES':
            currentPermission = '\'READ_MESSAGE_HISTORY\'';
            break;
          case 'SEND_VOICE_MESSAGE':
            currentPermission = '\'SEND_TTS_MESSAGES\'';
            break;
          case 'USE_APP_COMMANDS':
            currentPermission = '\'USE_APPLICATION_COMMANDS\'';
            break;
          case 'CONNECT_TO_VOICE_CHANNEL':
            currentPermission = '\'CONNECT\'';
            break;
          case 'SPEAK':
            currentPermission = '\'SPEAK\'';
            break;
          case 'USE_VIDEO':
            currentPermission = '\'STREAM\'';
            break;
          case 'START_ACTIVITY':
            currentPermission = '\'START_EMBEDDED_ACTIVITIES\'';
            break;
          case 'VOICE_DETECTION':
            currentPermission = '\'USE_VAD\'';
            break;
          case 'PRIORITY_SPEAKER':
            currentPermission = '\'PRIORITY_SPEAKER\'';
            break;
          case 'MUTE_MEMBER':
            currentPermission = '\'MUTE_MEMBERS\'';
            break;
          case 'DEAF_MEMBER':
            currentPermission = '\'DEAFEN_MEMBERS\'';
            break;
          case 'MOOVE_MEMBER':
            currentPermission = '\'MOVE_MEMBERS\'';
            break;
          case 'MANAGE_EVENTS':
            currentPermission = '\'MANAGE_EVENTS\'';
            break;
          case 'ADMINISTRATOR':
            currentPermission = '\'ADMINISTRATOR\'';
            break;
          default:
            currentPermission = '\'VIEW_CHANNEL\'';
            break;
        }

        if(dropdown_isgranted==='GRANT'){
          code = 'await '+value_rank+'.edit({permissions:'+value_rank+'.permissions.add('+currentPermission+')});\n';//We get the permission bits, remove the bits of the selected permission and send these bits to discord
        }else if(dropdown_isgranted==='DENY'){
          code = 'await '+value_rank+'.edit({permissions:'+value_rank+'.permissions.remove('+currentPermission+')});\n';
        }

        return code;

      }else{
        return '';
      }
    };

    Blockly.JavaScript['block_rank_get_name'] = function(block) {
      const value_rank = Blockly.JavaScript.valueToCode(block, 'rank', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_rank!==''){
        const code = value_rank+'.name || \'\'';
        return [code, Blockly.JavaScript.ORDER_NONE];
      }else{
        return ['', Blockly.JavaScript.ORDER_NONE];
      }
    };

    Blockly.JavaScript['block_rank_get_position'] = function(block) {
      const value_rank = Blockly.JavaScript.valueToCode(block, 'rank', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_rank!==''){
        const code = value_rank+'.position';
        return [code, Blockly.JavaScript.ORDER_NONE];
      }else{
        return ['', Blockly.JavaScript.ORDER_NONE];
      }
    };

    Blockly.JavaScript['block_rank_get_color'] = function(block) {
      const value_rank = Blockly.JavaScript.valueToCode(block, 'rank', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_rank!==''){
        const code = value_rank+'.color || \'#000000\'';
        return [code, Blockly.JavaScript.ORDER_NONE];
      }else{
        return ['', Blockly.JavaScript.ORDER_NONE];
      }
    };

    Blockly.JavaScript['block_rank_get_id'] = function(block) {
      const value_rank = Blockly.JavaScript.valueToCode(block, 'rank', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_rank!==''){
        const code = value_rank+'.id || \'\'';
        return [code, Blockly.JavaScript.ORDER_NONE];
      }else{
        return ['', Blockly.JavaScript.ORDER_NONE];
      }
    };

    Blockly.JavaScript['block_rank_has_permission'] = function(block) {
      const value_rank = Blockly.JavaScript.valueToCode(block, 'rank', Blockly.JavaScript.ORDER_ATOMIC);
      const dropdown_permission = block.getFieldValue('permission');

      if(value_rank!=='' && dropdown_permission!==''){
        let currentPermission = '\'VIEW_CHANNEL\'';
        switch(dropdown_permission){
          case 'SEE_CHANNEL':
            currentPermission = '\'VIEW_CHANNEL\'';
            break;
          case 'MANAGE_CHANNEL':
            currentPermission = '\'MANAGE_CHANNELS\'';
            break;
          case 'MANAGE_RANKS':
            currentPermission = '\'MANAGE_ROLES\'';
            break;
          case 'MANAGE_EMOJIS':
            currentPermission = '\'MANAGE_EMOJIS_AND_STICKERS\'';
            break;
          case 'SEE_SERVER_LOGS':
            currentPermission = '\'VIEW_AUDIT_LOG\'';
            break;
          case 'MANAGE_WEBHOOKS':
            currentPermission = '\'MANAGE_WEBHOOKS\'';
            break;
          case 'MANAGE_SERVER':
            currentPermission = '\'MANAGE_GUILD\'';
            break;
          case 'CREATE_INVITE':
            currentPermission = '\'CREATE_INSTANT_INVITE\'';
            break;
          case 'EDIT_USERNAME':
            currentPermission = '\'CHANGE_NICKNAME\'';
            break;
          case 'EDIT_OTHERS_USERNAME':
            currentPermission = '\'MANAGE_NICKNAMES\'';
            break;
          case 'KICK':
            currentPermission = '\'KICK_MEMBERS\'';
            break;
          case 'BAN':
            currentPermission = '\'BAN_MEMBERS\'';
            break;
          case 'TIMEOUT':
            currentPermission = '\'MODERATE_MEMBERS\'';
            break;
          case 'SEND_MESSAGES':
            currentPermission = '\'SEND_MESSAGES\'';
            break;
          case 'SEND_MESSAGES_IN_THREADS':
            currentPermission = '\'SEND_MESSAGES_IN_THREADS\'';
            break;
          case 'CREATE_PUBLIC_THREADS':
            currentPermission = '\'CREATE_PUBLIC_THREADS\'';
            break;
          case 'CREATE_PRIVATE_THREADS':
            currentPermission = '\'CREATE_PRIVATE_THREADS\'';
            break;
          case 'EMBED_LINKS':
            currentPermission = '\'EMBED_LINKS\'';
            break;
          case 'ADD_FILES':
            currentPermission = '\'ATTACH_FILES\'';
            break;
          case 'ADD_REACTIONS':
            currentPermission = '\'ADD_REACTIONS\'';
            break;
          case 'USE_EXTERNAL_EMOJIS':
            currentPermission = '\'USE_EXTERNAL_EMOJIS\'';
            break;
          case 'USE_EXTERNAL_STICKERS':
            currentPermission = '\'USE_EXTERNAL_STICKERS\'';
            break;
          case 'PING_EVERYONE':
            currentPermission = '\'MENTION_EVERYONE\'';
            break;
          case 'MANAGE_MESSAGES':
            currentPermission = '\'MANAGE_MESSAGES\'';
            break;
          case 'MANAGE_THREADS':
            currentPermission = '\'MANAGE_THREADS\'';
            break;
          case 'SEE_OLD_MESSAGES':
            currentPermission = '\'READ_MESSAGE_HISTORY\'';
            break;
          case 'SEND_VOICE_MESSAGE':
            currentPermission = '\'SEND_TTS_MESSAGES\'';
            break;
          case 'USE_APP_COMMANDS':
            currentPermission = '\'USE_APPLICATION_COMMANDS\'';
            break;
          case 'CONNECT_TO_VOICE_CHANNEL':
            currentPermission = '\'CONNECT\'';
            break;
          case 'SPEAK':
            currentPermission = '\'SPEAK\'';
            break;
          case 'USE_VIDEO':
            currentPermission = '\'STREAM\'';
            break;
          case 'START_ACTIVITY':
            currentPermission = '\'START_EMBEDDED_ACTIVITIES\'';
            break;
          case 'VOICE_DETECTION':
            currentPermission = '\'USE_VAD\'';
            break;
          case 'PRIORITY_SPEAKER':
            currentPermission = '\'PRIORITY_SPEAKER\'';
            break;
          case 'MUTE_MEMBER':
            currentPermission = '\'MUTE_MEMBERS\'';
            break;
          case 'DEAF_MEMBER':
            currentPermission = '\'DEAFEN_MEMBERS\'';
            break;
          case 'MOOVE_MEMBER':
            currentPermission = '\'MOVE_MEMBERS\'';
            break;
          case 'MANAGE_EVENTS':
            currentPermission = '\'MANAGE_EVENTS\'';
            break;
          case 'ADMINISTRATOR':
            currentPermission = '\'ADMINISTRATOR\'';
            break;
          default:
            currentPermission = '\'VIEW_CHANNEL\'';
            break;
        }

        const code = value_rank+'.permissions.has('+currentPermission+', true)';
        return [code, Blockly.JavaScript.ORDER_NONE];
      }else{
        return ['', Blockly.JavaScript.ORDER_NONE];
      }
    };

    /* ##### EMBEDS blocks ##### */

    Blockly.JavaScript['block_embed_create'] = function(block) {
      const value_name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);
      const colour_color = block.getFieldValue('color');
      const statements_options = Blockly.JavaScript.statementToCode(block, 'options');
      const value_description = Blockly.JavaScript.valueToCode(block, 'description', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_name!=='' && colour_color!==''){
        const code = 'embedMessage = new Discord.MessageEmbed().setTitle('+value_name+').setDescription('+value_description+').setColor(\''+colour_color+'\')'+statements_options.trim()+';\n';
        return code;
      }else{
        return '';
      }
    };

    Blockly.JavaScript['block_embed_option_set_image'] = function(block) {
      const value_image_url = Blockly.JavaScript.valueToCode(block, 'image_url', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_image_url!=='' && (value_image_url.substr(1, 7)==='http://' || value_image_url.substr(1, 8)==='https://') ){//First caracter is ', so I start verification at index 1
        const code = '.setImage('+value_image_url+')';
        return code;
      }else{
        return '';
      }
    };

    Blockly.JavaScript['block_embed_option_set_thumbnail'] = function(block) {
      const value_thumbnail_url = Blockly.JavaScript.valueToCode(block, 'thumbnail_url', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_thumbnail_url!=='' && (value_thumbnail_url.substr(1, 7)==='http://' || value_thumbnail_url.substr(1, 8)==='https://') ){//First caracter is ', so I start verification at index 1
        const code = '.setThumbnail('+value_thumbnail_url+')';
        return code;
      }else{
        return '';
      }
    };

    Blockly.JavaScript['block_embed_option_add_field'] = function(block) {
      const value_name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);
      const value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
      const checkbox_inline = block.getFieldValue('inline') === 'TRUE';

      if(value_name!=='' && value_text!==''){
        const code = '.addField('+value_name+', '+value_text+', '+( checkbox_inline ? 'true':'false' )+')';
        return code;
      }else{
        return '';
      }
    };

    Blockly.JavaScript['block_embed_option_set_author'] = function(block) {
      const value_name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);
      let value_url = Blockly.JavaScript.valueToCode(block, 'URL', Blockly.JavaScript.ORDER_ATOMIC);
      let value_icon_url = Blockly.JavaScript.valueToCode(block, 'icon_URL', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_name!==''){

        if(!(value_url!=='' && (value_url.substr(1, 7)==='http://' || value_url.substr(1, 8)==='https://'))){
          //value_url is invalid
          value_url = '';
        }
        if(!(value_icon_url!=='' && (value_icon_url.substr(1, 7)==='http://' || value_icon_url.substr(1, 8)==='https://'))){
          //value_icon_url is invalid
          value_icon_url = '';
        }

        const code = '.setAuthor({name:'+value_name+' '+( (value_url!=='') ? ', url: '+value_url : '')+' '+ ( (value_icon_url!=='') ? ', iconURL: '+value_icon_url : '') +'})';
        return code;
      }else{
        return '';
      }
    };

    Blockly.JavaScript['block_embed_option_set_footer'] = function(block) {
      const value_name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);
      let value_icon_url = Blockly.JavaScript.valueToCode(block, 'icon_URL', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_name!==''){

        if(!(value_icon_url!=='' && (value_icon_url.substr(1, 7)==='http://' || value_icon_url.substr(1, 8)==='https://'))){
          //value_icon_url is invalid
          value_icon_url = '';
        }

        const code = '.setFooter({text: '+value_name+' '+ ( (value_icon_url!=='') ? ', iconURL: '+value_icon_url : '' ) +'})';
        return code;
      }else{
        return '';
      }
    };

    Blockly.JavaScript['block_embed_option_set_timestamp'] = function(block) {
      // TODO: Assemble JavaScript into code variable.
      const code = '.setTimestamp()';
      return code;
    };

    Blockly.JavaScript['block_embed_send'] = function(block) {
      const value_embed = Blockly.JavaScript.valueToCode(block, 'embed', Blockly.JavaScript.ORDER_ATOMIC);
      const value_channel = Blockly.JavaScript.valueToCode(block, 'channel', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_embed!=='' && value_channel!==''){
        const code = value_channel+'.send({ embeds: ['+value_embed+'] });\n'
        return code;
      }else{
        return '';
      }
    };

    Blockly.JavaScript['block_embed_var_embed'] = function(block) {
      const code = 'embedMessage';
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    /* ##### GUILD blocks ##### */

    Blockly.JavaScript['block_guild_get_id'] = function(block) {
      const code = 'CURRENT_GUILD.id || \'\'';
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript['block_guild_get_boosts_count'] = function(block) {
      const code = 'CURRENT_GUILD.premiumSubscriptionCount';
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript['block_guild_get_members_count'] = function(block) {
      const code = 'CURRENT_GUILD.memberCount';
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript['block_guild_create_invite'] = function(block) {
      const dropdown_duration = block.getFieldValue('duration');
      const dropdown_uses = block.getFieldValue('uses');
      const value_channel = Blockly.JavaScript.valueToCode(block, 'channel', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_channel===''){return ''}

      let duration = 0;
      let maxUses = 0;

      switch(dropdown_duration){
        case '30MIN':
          duration = 1800;//In seconds
          break;
        case '1H':
          duration = 3600;
          break;
        case '6H':
          duration = 21600;
          break;
        case '12H':
          duration = 43200;
          break;
        case '1D':
          duration = 86400;
          break;
        case '1W':
          duration = 604800;
          break;
        case 'NEVER':
          duration = 0;
          break;
        default:
          duration = 1800;
          break;
      }

      switch(dropdown_uses){
        case '1':
          maxUses = 1;
          break;
        case '5':
          maxUses = 5;
          break;
        case '10':
          maxUses = 10;
          break;
        case '25':
          maxUses = 25;
          break;
        case '50':
          maxUses = 50;
          break;
        case '100':
          maxUses = 100;
          break;
        default:
          maxUses = 0;//Infinity
          break;
      }

      const code = '(await CURRENT_GUILD.invites.create('+value_channel+', {maxAge: '+duration+', maxUses: '+maxUses+'})).toString()';
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript['block_guild_get_name'] = function(block) {
      const code = 'CURRENT_GUILD.name || \'\'';
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    return(Blockly);
  }
}
