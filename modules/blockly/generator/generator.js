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
    Blockly.JavaScript.addReservedWords('loopCount,CURRENT_GUILD,embedMessage,createdTextChannel,createdVoiceChannel,sentMessage,createdThreadOnMessage,createdRank,eventMessage,eventOldMessage,eventNewMessage,eventUser,eventOldUser,eventNewUser,eventRole,eventOldRole,eventNewRole,eventOldVoiceChannel,eventNewVoiceChannel,eventVoiceChannel,eventTextChannel,eventOldTextChannel,eventNewTextChannel,eventReaction,temporaryStorage');
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
      /*const statements = Blockly.JavaScript.statementToCode(block, 'statements');
      const code = "\n<<"+token+">>event_role_edited<<"+token+">>"+statements;
      return code;*/
      return '';//Disabled : when a role is created, this event is sometimes triggered multiples times
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

    /*  This event is disabled : Discord send the User but we can't get a GuildMember...
        This feature is planned, but require more development

    Blockly.JavaScript['event_user_unbanned'] = function(block) {
      const statements = Blockly.JavaScript.statementToCode(block, 'statements');
      const code = "\n<<"+token+">>event_user_unbanned<<"+token+">>"+statements;
      return code;
    };*/

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
      /*const statements = Blockly.JavaScript.statementToCode(block, 'statements');
      const code = "\n<<"+token+">>event_user_start_writting<<"+token+">>"+statements;
      return code;*/
      return '';//Disabled, always triggered multiple times when a bug message is written
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
        const code = value_user+'.avatarURL({dynamic:true}) || '+value_user+'.user.avatarURL({dynamic:true}) || \'https://cdn.discordapp.com/attachments/973567795189153802/995083353663488010/unknown.png\'';//Users can have a per guild avatar or a global avatar
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
            code = code + '.has(Discord.PermissionsBitField.Flags.ViewChannel, true)';//https://discord.js.org/#/docs/discord.js/stable/class/Permissions?scrollTo=has
            break;
          case 'MANAGE_CHANNEL':
            code = code + '.has(Discord.PermissionsBitField.Flags.ManageChannels, true)';
            break;
          case 'MANAGE_RANKS':
            code = code + '.has(Discord.PermissionsBitField.Flags.ManageRoles, true)';
            break;
          case 'MANAGE_EMOJIS':
            code = code + '.has(Discord.PermissionsBitField.Flags.ManageEmojisAndStickers, true)';
            break;
          case 'SEE_SERVER_LOGS':
            code = code + '.has(Discord.PermissionsBitField.Flags.ViewAuditLog, true)';
            break;
          case 'MANAGE_WEBHOOKS':
            code = code + '.has(Discord.PermissionsBitField.Flags.ManageWebhooks, true)';
            break;
          case 'MANAGE_SERVER':
            code = code + '.has(Discord.PermissionsBitField.Flags.ManageGuild, true)';
            break;
          case 'CREATE_INVITE':
            code = code + '.has(Discord.PermissionsBitField.Flags.CreateInstantInvite, true)';
            break;
          case 'EDIT_USERNAME':
            code = code + '.has(Discord.PermissionsBitField.Flags.ChangeNickname, true)';
            break;
          case 'EDIT_OTHERS_USERNAME':
            code = code + '.has(Discord.PermissionsBitField.Flags.ManageNicknames, true)';
            break;
          case 'KICK':
            code = code + '.has(Discord.PermissionsBitField.Flags.KickMembers, true)';
            break;
          case 'BAN':
            code = code + '.has(Discord.PermissionsBitField.Flags.BanMembers, true)';
            break;
          case 'TIMEOUT':
            code = code + '.has(Discord.PermissionsBitField.Flags.ModerateMembers, true)';
            break;
          case 'SEND_MESSAGES':
            code = code + '.has(Discord.PermissionsBitField.Flags.SendMessages, true)';
            break;
          case 'SEND_MESSAGES_IN_THREADS':
            code = code + '.has(Discord.PermissionsBitField.Flags.SendMessagesInThreads, true)';
            break;
          case 'CREATE_PUBLIC_THREADS':
            code = code + '.has(Discord.PermissionsBitField.Flags.CreatePublicThreads, true)';
            break;
          case 'CREATE_PRIVATE_THREADS':
            code = code + '.has(Discord.PermissionsBitField.Flags.CreatePrivateThreads, true)';
            break;
          case 'EMBED_LINKS':
            code = code + '.has(Discord.PermissionsBitField.Flags.EmbedLinks, true)';
            break;
          case 'ADD_FILES':
            code = code + '.has(Discord.PermissionsBitField.Flags.AttachFiles, true)';
            break;
          case 'ADD_REACTIONS':
            code = code + '.has(Discord.PermissionsBitField.Flags.AddReactions, true)';
            break;
          case 'USE_EXTERNAL_EMOJIS':
            code = code + '.has(Discord.PermissionsBitField.Flags.UseExternalEmojis, true)';
            break;
          case 'USE_EXTERNAL_STICKERS':
            code = code + '.has(Discord.PermissionsBitField.Flags.UseExternalStickers, true)';
            break;
          case 'PING_EVERYONE':
            code = code + '.has(Discord.PermissionsBitField.Flags.MentionEveryone, true)';
            break;
          case 'MANAGE_MESSAGES':
            code = code + '.has(Discord.PermissionsBitField.Flags.ManageMessages, true)';
            break;
          case 'MANAGE_THREADS':
            code = code + '.has(Discord.PermissionsBitField.Flags.ManageThreads, true)';
            break;
          case 'SEE_OLD_MESSAGES':
            code = code + '.has(Discord.PermissionsBitField.Flags.ReadMessageHistory, true)';
            break;
          case 'SEND_VOICE_MESSAGE':
            code = code + '.has(Discord.PermissionsBitField.Flags.SendTTSMessages, true)';
            break;
          case 'USE_APP_COMMANDS':
            code = code + '.has(Discord.PermissionsBitField.Flags.UseApplicationCommands, true)';
            break;
          case 'CONNECT_TO_VOICE_CHANNEL':
            code = code + '.has(Discord.PermissionsBitField.Flags.Connect, true)';
            break;
          case 'SPEAK':
            code = code + '.has(Discord.PermissionsBitField.Flags.Speak, true)';
            break;
          case 'USE_VIDEO':
            code = code + '.has(Discord.PermissionsBitField.Flags.Stream, true)';
            break;
          case 'START_ACTIVITY':
            code = code + '.has(Discord.PermissionsBitField.Flags.UseEmbeddedActivities, true)';
            break;
          case 'VOICE_DETECTION':
            code = code + '.has(Discord.PermissionsBitField.Flags.UseVAD, true)';//Voice Activity Detection
            break;
          case 'PRIORITY_SPEAKER':
            code = code + '.has(Discord.PermissionsBitField.Flags.PrioritySpeaker, true)';
            break;
          case 'MUTE_MEMBER':
            code = code + '.has(Discord.PermissionsBitField.Flags.MuteMembers, true)';
            break;
          case 'DEAF_MEMBER':
            code = code + '.has(Discord.PermissionsBitField.Flags.DeafenMembers, true)';
            break;
          case 'MOOVE_MEMBER':
            code = code + '.has(Discord.PermissionsBitField.Flags.MoveMembers, true)';
            break;
          case 'MANAGE_EVENTS':
            code = code + '.has(Discord.PermissionsBitField.Flags.ManageEvents, true)';
            break;
          case 'ADMINISTRATOR':
            code = code + '.has(Discord.PermissionsBitField.Flags.Administrator, true)';
            break;
          default:
            code = code + '.has(Discord.PermissionsBitField.Flags.Administrator, true)';
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
        const code = value_user+'.roles.cache.has('+value_rank+'.id)';//value_rank should be a string with the ID, or a role object
        return [code, Blockly.JavaScript.ORDER_NONE];
      }else{
        return ['', Blockly.JavaScript.ORDER_NONE];
      }
    };

    Blockly.JavaScript['block_user_is_in_voice_channel'] = function(block) {
      const value_user = Blockly.JavaScript.valueToCode(block, 'user', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_user!==''){
        const code = '('+value_user+'.voice.channel!=undefined)';
        return [code, Blockly.JavaScript.ORDER_NONE];
      }else{
        return ['', Blockly.JavaScript.ORDER_NONE];
      }
    };

    Blockly.JavaScript['block_user_get_voice_channel'] = function(block) {
      const value_user = Blockly.JavaScript.valueToCode(block, 'user', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_user!==''){
        const code = value_user+'.voice.channel';
        return [code, Blockly.JavaScript.ORDER_NONE];
      }else{
        return ['', Blockly.JavaScript.ORDER_NONE];
      }
    };

    Blockly.JavaScript['block_user_move_to_voice_channel'] = function(block) {
      const value_user = Blockly.JavaScript.valueToCode(block, 'user', Blockly.JavaScript.ORDER_ATOMIC);
      const value_channel = Blockly.JavaScript.valueToCode(block, 'channel', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_user!=='' && value_channel!==''){
        const code = value_user+".voice.setChannel("+value_channel+");";
        return code;
      }else{
        return '';
      }
    };

    Blockly.JavaScript['block_user_give_rank'] = function(block) {
      const value_user = Blockly.JavaScript.valueToCode(block, 'user', Blockly.JavaScript.ORDER_ATOMIC);
      const value_rank = Blockly.JavaScript.valueToCode(block, 'rank', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_user!=='' && value_rank!==''){
        const code = value_user+".roles.add("+value_rank+");";
        return code;
      }else{
        return '';
      }
    };

    Blockly.JavaScript['block_user_remove_rank'] = function(block) {
      const value_user = Blockly.JavaScript.valueToCode(block, 'user', Blockly.JavaScript.ORDER_ATOMIC);
      const value_rank = Blockly.JavaScript.valueToCode(block, 'rank', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_user!=='' && value_rank!==''){
        const code = value_user+".roles.remove("+value_rank+");";
        return code;
      }else{
        return '';
      }
    };

    Blockly.JavaScript['block_user_rename'] = function(block) {
      const value_user = Blockly.JavaScript.valueToCode(block, 'user', Blockly.JavaScript.ORDER_ATOMIC);
      const value_name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_user!=='' && value_name!==''){
        const code = value_user+".setNickname("+value_name+");";
        return code;
      }else{
        return '';
      }
    };

    /* ##### CHANNELS blocks ##### */

    Blockly.JavaScript['block_channel_create_text_channel'] = function(block) {
      const value_name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);
      const value_topic = Blockly.JavaScript.valueToCode(block, 'topic', Blockly.JavaScript.ORDER_ATOMIC);
      const value_category = Blockly.JavaScript.valueToCode(block, 'category', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_name!=='' && value_category!==''){
        let code = 'createdTextChannel = await CURRENT_GUILD.channels.create({name:'+value_name+' ,type: Discord.ChannelType.GuildText, parent: '+value_category;//value_category should be a string with the ID or Category object
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
        const code = 'createdVoiceChannel = await CURRENT_GUILD.channels.create({name:'+value_name+', type: Discord.ChannelType.GuildVoice, parent: '+value_category+'});\n';
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

    Blockly.JavaScript['block_channel_get_user_count'] = function(block) {
      const value_channel = Blockly.JavaScript.valueToCode(block, 'channel', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_channel!==''){
        const code = value_channel+'.members.size || 0';
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
            code = code + 'Discord.PermissionsBitField.Flags.ViewChannel, true)';
            break;
          case 'MANAGE_CHANNEL':
            code = code + 'Discord.PermissionsBitField.Flags.ManageChannels, true)';
            break;
          case 'MANAGE_CHANNEL_PERMISSIONS':
            code = code + 'Discord.PermissionsBitField.Flags.ManageRoles, true)';
            break;
          case 'MANAGE_CHANNEL_WEBHOOKS':
            code = code + 'Discord.PermissionsBitField.Flags.ManageWebhooks, true)';
            break;
          case 'CREATE_INVITE':
            code = code + 'Discord.PermissionsBitField.Flags.CreateInstantInvite, true)';
            break;
          case 'SEND_MESSAGES':
            code = code + 'Discord.PermissionsBitField.Flags.SendMessages, true)';
            break;
          case 'SEND_MESSAGES_IN_THREADS':
            code = code + 'Discord.PermissionsBitField.Flags.SendMessagesInThreads, true)';
            break;
          case 'CREATE_PUBLIC_THREADS':
            code = code + 'Discord.PermissionsBitField.Flags.CreatePublicThreads, true)';
            break;
          case 'CREATE_PRIVATE_THREADS':
            code = code + 'Discord.PermissionsBitField.Flags.CreatePrivateThreads, true)';
            break;
          case 'EMBED_LINKS':
            code = code + 'Discord.PermissionsBitField.Flags.EmbedLinks, true)';
            break;
          case 'ADD_FILES':
            code = code + 'Discord.PermissionsBitField.Flags.AttachFiles, true)';
            break;
          case 'ADD_REACTIONS':
            code = code + 'Discord.PermissionsBitField.Flags.AddReactions, true)';
            break;
          case 'USE_EXTERNAL_EMOJIS':
            code = code + 'Discord.PermissionsBitField.Flags.UseExternalEmojis, true)';
            break;
          case 'USE_EXTERNAL_STICKERS':
            code = code + 'Discord.PermissionsBitField.Flags.UseExternalStickers, true)';
            break;
          case 'PING_EVERYONE':
            code = code + 'Discord.PermissionsBitField.Flags.MentionEveryone, true)';
            break;
          case 'MANAGE_MESSAGES':
            code = code + 'Discord.PermissionsBitField.Flags.ManageMessages, true)';
            break;
          case 'MANAGE_THREADS':
            code = code + 'Discord.PermissionsBitField.Flags.ManageThreads, true)';
            break;
          case 'SEE_OLD_MESSAGES':
            code = code + 'Discord.PermissionsBitField.Flags.ReadMessageHistory, true)';
            break;
          case 'SEND_VOICE_MESSAGE':
            code = code + 'Discord.PermissionsBitField.Flags.SendTTSMessages, true)';
            break;
          case 'USE_APP_COMMANDS':
            code = code + 'Discord.PermissionsBitField.Flags.UseApplicationCommands, true)';
            break;
          case 'CONNECT_TO_VOICE_CHANNEL':
            code = code + 'Discord.PermissionsBitField.Flags.Connect, true)';
            break;
          case 'SPEAK':
            code = code + 'Discord.PermissionsBitField.Flags.Speak, true)';
            break;
          case 'USE_VIDEO':
            code = code + 'Discord.PermissionsBitField.Flags.Stream, true)';
            break;
          case 'START_ACTIVITY':
            code = code + 'Discord.PermissionsBitField.Flags.UseEmbeddedActivities, true)';
            break;
          case 'USE_VOICE_DETECTOR':
            code = code + 'Discord.PermissionsBitField.Flags.UseVAD, true)';
            break;
          case 'PRIORITY_SPEAKER':
            code = code + 'Discord.PermissionsBitField.Flags.PrioritySpeaker, true)';
            break;
          case 'MUTE_MEMBER':
            code = code + 'Discord.PermissionsBitField.Flags.MuteMembers, true)';
            break;
          case 'DEAF_MEMBER':
            code = code + 'Discord.PermissionsBitField.Flags.DeafenMembers, true)';
            break;
          case 'MOOVE_MEMBER':
            code = code + 'Discord.PermissionsBitField.Flags.MoveMembers, true)';
            break;
          case 'MANAGE_VOICE_CHANNEL_EVENTS':
            code = code + 'Discord.PermissionsBitField.Flags.ManageEvents, true)';
            break;
          default:
            code = code + 'Discord.PermissionsBitField.Flags.ViewChannel, true)';
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
      let permissionToEdit = 'ViewChannel';//Used to store the permission to edit
      let code = '';

      if(value_userorrank!=='' && dropdown_permission!=='' && dropdown_isgranted!=='' && value_channel!==''){

        switch(dropdown_permission){
          case 'SEE_CHANNEL':
            permissionToEdit = 'ViewChannel';
            break;
          case 'MANAGE_CHANNEL':
            permissionToEdit = 'ManageChannels';
            break;
          case 'MANAGE_CHANNEL_PERMISSIONS':
            permissionToEdit = 'ManageRoles';
            break;
          case 'MANAGE_CHANNEL_WEBHOOKS':
            permissionToEdit = 'ManageWebhooks';
            break;
          case 'CREATE_INVITE':
            permissionToEdit = 'CreateInstantInvite';
            break;
          case 'SEND_MESSAGES':
            permissionToEdit = 'SendMessages';
            break;
          case 'SEND_MESSAGES_IN_THREADS':
            permissionToEdit = 'SendMessagesInThreads';
            break;
          case 'CREATE_PUBLIC_THREADS':
            permissionToEdit = 'CreatePublicThreads';
            break;
          case 'CREATE_PRIVATE_THREADS':
            permissionToEdit = 'CreatePrivateThreads';
            break;
          case 'EMBED_LINKS':
            permissionToEdit = 'EmbedLinks';
            break;
          case 'ADD_FILES':
            permissionToEdit = 'AttachFiles';
            break;
          case 'ADD_REACTIONS':
            permissionToEdit = 'AddReactions';
            break;
          case 'USE_EXTERNAL_EMOJIS':
            permissionToEdit = 'UseExternalEmojis';
            break;
          case 'USE_EXTERNAL_STICKERS':
            permissionToEdit = 'UseExternalStickers';
            break;
          case 'PING_EVERYONE':
            permissionToEdit = 'MentionEveryone';
            break;
          case 'MANAGE_MESSAGES':
            permissionToEdit = 'ManageMessages';
            break;
          case 'MANAGE_THREADS':
            permissionToEdit = 'ManageThreads';
            break;
          case 'SEE_OLD_MESSAGES':
            permissionToEdit = 'ReadMessageHistory';
            break;
          case 'SEND_VOICE_MESSAGE':
            permissionToEdit = 'SendTTSMessages';
            break;
          case 'USE_APP_COMMANDS':
            permissionToEdit = 'UseApplicationCommands';
            break;
          case 'CONNECT_TO_VOICE_CHANNEL':
            permissionToEdit = 'Connect';
            break;
          case 'SPEAK':
            permissionToEdit = 'Speak';
            break;
          case 'USE_VIDEO':
            permissionToEdit = 'Stream';
            break;
          case 'START_ACTIVITY':
            permissionToEdit = 'UseEmbeddedActivities';
            break;
          case 'USE_VOICE_DETECTOR':
            permissionToEdit = 'UseVAD';
            break;
          case 'PRIORITY_SPEAKER':
            permissionToEdit = 'PrioritySpeaker';
            break;
          case 'MUTE_MEMBER':
            permissionToEdit = 'MuteMembers';
            break;
          case 'DEAF_MEMBER':
            permissionToEdit = 'DeafenMembers';
            break;
          case 'MOOVE_MEMBER':
            permissionToEdit = 'MoveMembers';
            break;
          case 'MANAGE_VOICE_CHANNEL_EVENTS':
            permissionToEdit = 'ManageEvents';
            break;
          default:
            permissionToEdit = 'ViewChannel';
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

    Blockly.JavaScript['block_channel_get_category_with_id'] = function(block) {
      const value_category_id = Blockly.JavaScript.valueToCode(block, 'category_id', Blockly.JavaScript.ORDER_ATOMIC);
      if(value_category_id!==''){
        const code = "await CURRENT_GUILD.channels.fetch("+value_category_id+")";
        return [code, Blockly.JavaScript.ORDER_NONE];
      }else{
        return ['', Blockly.JavaScript.ORDER_NONE];
      }
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

        let currentPermission = 'Discord.PermissionsBitField.Flags.ViewChannel';
        let code = '';
        switch(dropdown_permission){
          case 'SEE_CHANNEL':
            currentPermission = 'Discord.PermissionsBitField.Flags.ViewChannel';
            break;
          case 'MANAGE_CHANNEL':
            currentPermission = 'Discord.PermissionsBitField.Flags.ManageChannels';
            break;
          case 'MANAGE_RANKS':
            currentPermission = 'Discord.PermissionsBitField.Flags.ManageRoles';
            break;
          case 'MANAGE_EMOJIS':
            currentPermission = 'Discord.PermissionsBitField.Flags.ManageEmojisAndStickers';
            break;
          case 'SEE_SERVER_LOGS':
            currentPermission = 'Discord.PermissionsBitField.Flags.ViewAuditLog';
            break;
          case 'MANAGE_WEBHOOKS':
            currentPermission = 'Discord.PermissionsBitField.Flags.ManageWebhooks';
            break;
          case 'MANAGE_SERVER':
            currentPermission = 'Discord.PermissionsBitField.Flags.ManageGuild';
            break;
          case 'CREATE_INVITE':
            currentPermission = 'Discord.PermissionsBitField.Flags.CreateInstantInvite';
            break;
          case 'EDIT_USERNAME':
            currentPermission = 'Discord.PermissionsBitField.Flags.ChangeNickname';
            break;
          case 'EDIT_OTHERS_USERNAME':
            currentPermission = 'Discord.PermissionsBitField.Flags.ManageNicknames';
            break;
          case 'KICK':
            currentPermission = 'Discord.PermissionsBitField.Flags.KickMembers';
            break;
          case 'BAN':
            currentPermission = 'Discord.PermissionsBitField.Flags.BanMembers';
            break;
          case 'TIMEOUT':
            currentPermission = 'Discord.PermissionsBitField.Flags.ModerateMembers';
            break;
          case 'SEND_MESSAGES':
            currentPermission = 'Discord.PermissionsBitField.Flags.SendMessages';
            break;
          case 'SEND_MESSAGES_IN_THREADS':
            currentPermission = 'Discord.PermissionsBitField.Flags.SendMessagesInThreads';
            break;
          case 'CREATE_PUBLIC_THREADS':
            currentPermission = 'Discord.PermissionsBitField.Flags.CreatePublicThreads';
            break;
          case 'CREATE_PRIVATE_THREADS':
            currentPermission = 'Discord.PermissionsBitField.Flags.CreatePrivateThreads';
            break;
          case 'EMBED_LINKS':
            currentPermission = 'Discord.PermissionsBitField.Flags.EmbedLinks';
            break;
          case 'ADD_FILES':
            currentPermission = 'Discord.PermissionsBitField.Flags.AttachFiles';
            break;
          case 'ADD_REACTIONS':
            currentPermission = 'Discord.PermissionsBitField.Flags.AddReactions';
            break;
          case 'USE_EXTERNAL_EMOJIS':
            currentPermission = 'Discord.PermissionsBitField.Flags.UseExternalEmojis';
            break;
          case 'USE_EXTERNAL_STICKERS':
            currentPermission = 'Discord.PermissionsBitField.Flags.UseExternalStickers';
            break;
          case 'PING_EVERYONE':
            currentPermission = 'Discord.PermissionsBitField.Flags.MentionEveryone';
            break;
          case 'MANAGE_MESSAGES':
            currentPermission = 'Discord.PermissionsBitField.Flags.ManageMessages';
            break;
          case 'MANAGE_THREADS':
            currentPermission = 'Discord.PermissionsBitField.Flags.ManageThreads';
            break;
          case 'SEE_OLD_MESSAGES':
            currentPermission = 'Discord.PermissionsBitField.Flags.ReadMessageHistory';
            break;
          case 'SEND_VOICE_MESSAGE':
            currentPermission = 'Discord.PermissionsBitField.Flags.SendTTSMessages';
            break;
          case 'USE_APP_COMMANDS':
            currentPermission = 'Discord.PermissionsBitField.Flags.UseApplicationCommands';
            break;
          case 'CONNECT_TO_VOICE_CHANNEL':
            currentPermission = 'Discord.PermissionsBitField.Flags.Connect';
            break;
          case 'SPEAK':
            currentPermission = 'Discord.PermissionsBitField.Flags.Speak';
            break;
          case 'USE_VIDEO':
            currentPermission = 'Discord.PermissionsBitField.Flags.Stream';
            break;
          case 'START_ACTIVITY':
            currentPermission = 'Discord.PermissionsBitField.Flags.UseEmbeddedActivities';
            break;
          case 'VOICE_DETECTION':
            currentPermission = 'Discord.PermissionsBitField.Flags.UseVAD';
            break;
          case 'PRIORITY_SPEAKER':
            currentPermission = 'Discord.PermissionsBitField.Flags.PrioritySpeaker';
            break;
          case 'MUTE_MEMBER':
            currentPermission = 'Discord.PermissionsBitField.Flags.MuteMembers';
            break;
          case 'DEAF_MEMBER':
            currentPermission = 'Discord.PermissionsBitField.Flags.DeafenMembers';
            break;
          case 'MOOVE_MEMBER':
            currentPermission = 'Discord.PermissionsBitField.Flags.MoveMembers';
            break;
          case 'MANAGE_EVENTS':
            currentPermission = 'Discord.PermissionsBitField.Flags.ManageEvents';
            break;
          case 'ADMINISTRATOR':
            currentPermission = 'Discord.PermissionsBitField.Flags.Administrator';
            break;
          default:
            currentPermission = 'Discord.PermissionsBitField.Flags.ViewChannel';
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
        let currentPermission = 'Discord.PermissionsBitField.Flags.ViewChannel';
        switch(dropdown_permission){
          case 'SEE_CHANNEL':
            currentPermission = 'Discord.PermissionsBitField.Flags.ViewChannel';
            break;
          case 'MANAGE_CHANNEL':
            currentPermission = 'Discord.PermissionsBitField.Flags.ManageChannels';
            break;
          case 'MANAGE_RANKS':
            currentPermission = 'Discord.PermissionsBitField.Flags.ManageRoles';
            break;
          case 'MANAGE_EMOJIS':
            currentPermission = 'Discord.PermissionsBitField.Flags.ManageEmojisAndStickers';
            break;
          case 'SEE_SERVER_LOGS':
            currentPermission = 'Discord.PermissionsBitField.Flags.ViewAuditLog';
            break;
          case 'MANAGE_WEBHOOKS':
            currentPermission = 'Discord.PermissionsBitField.Flags.ManageWebhooks';
            break;
          case 'MANAGE_SERVER':
            currentPermission = 'Discord.PermissionsBitField.Flags.ManageGuild';
            break;
          case 'CREATE_INVITE':
            currentPermission = 'Discord.PermissionsBitField.Flags.CreateInstantInvite';
            break;
          case 'EDIT_USERNAME':
            currentPermission = 'Discord.PermissionsBitField.Flags.ChangeNickname';
            break;
          case 'EDIT_OTHERS_USERNAME':
            currentPermission = 'Discord.PermissionsBitField.Flags.ManageNicknames';
            break;
          case 'KICK':
            currentPermission = 'Discord.PermissionsBitField.Flags.KickMembers';
            break;
          case 'BAN':
            currentPermission = 'Discord.PermissionsBitField.Flags.BanMembers';
            break;
          case 'TIMEOUT':
            currentPermission = 'Discord.PermissionsBitField.Flags.ModerateMembers';
            break;
          case 'SEND_MESSAGES':
            currentPermission = 'Discord.PermissionsBitField.Flags.SendMessages';
            break;
          case 'SEND_MESSAGES_IN_THREADS':
            currentPermission = 'Discord.PermissionsBitField.Flags.SendMessagesInThreads';
            break;
          case 'CREATE_PUBLIC_THREADS':
            currentPermission = 'Discord.PermissionsBitField.Flags.CreatePublicThreads';
            break;
          case 'CREATE_PRIVATE_THREADS':
            currentPermission = 'Discord.PermissionsBitField.Flags.CreatePrivateThreads';
            break;
          case 'EMBED_LINKS':
            currentPermission = 'Discord.PermissionsBitField.Flags.EmbedLinks';
            break;
          case 'ADD_FILES':
            currentPermission = 'Discord.PermissionsBitField.Flags.AttachFiles';
            break;
          case 'ADD_REACTIONS':
            currentPermission = 'Discord.PermissionsBitField.Flags.AddReactions';
            break;
          case 'USE_EXTERNAL_EMOJIS':
            currentPermission = 'Discord.PermissionsBitField.Flags.UseExternalEmojis';
            break;
          case 'USE_EXTERNAL_STICKERS':
            currentPermission = 'Discord.PermissionsBitField.Flags.UseExternalStickers';
            break;
          case 'PING_EVERYONE':
            currentPermission = 'Discord.PermissionsBitField.Flags.MentionEveryone';
            break;
          case 'MANAGE_MESSAGES':
            currentPermission = 'Discord.PermissionsBitField.Flags.ManageMessages';
            break;
          case 'MANAGE_THREADS':
            currentPermission = 'Discord.PermissionsBitField.Flags.ManageThreads';
            break;
          case 'SEE_OLD_MESSAGES':
            currentPermission = 'Discord.PermissionsBitField.Flags.ReadMessageHistory';
            break;
          case 'SEND_VOICE_MESSAGE':
            currentPermission = 'Discord.PermissionsBitField.Flags.SendTTSMessages';
            break;
          case 'USE_APP_COMMANDS':
            currentPermission = 'Discord.PermissionsBitField.Flags.UseApplicationCommands';
            break;
          case 'CONNECT_TO_VOICE_CHANNEL':
            currentPermission = 'Discord.PermissionsBitField.Flags.Connect';
            break;
          case 'SPEAK':
            currentPermission = 'Discord.PermissionsBitField.Flags.Speak';
            break;
          case 'USE_VIDEO':
            currentPermission = 'Discord.PermissionsBitField.Flags.Stream';
            break;
          case 'START_ACTIVITY':
            currentPermission = 'Discord.PermissionsBitField.Flags.UseEmbeddedActivities';
            break;
          case 'VOICE_DETECTION':
            currentPermission = 'Discord.PermissionsBitField.Flags.UseVAD';
            break;
          case 'PRIORITY_SPEAKER':
            currentPermission = 'Discord.PermissionsBitField.Flags.PrioritySpeaker';
            break;
          case 'MUTE_MEMBER':
            currentPermission = 'Discord.PermissionsBitField.Flags.MuteMembers';
            break;
          case 'DEAF_MEMBER':
            currentPermission = 'Discord.PermissionsBitField.Flags.DeafenMembers';
            break;
          case 'MOOVE_MEMBER':
            currentPermission = 'Discord.PermissionsBitField.Flags.MoveMembers';
            break;
          case 'MANAGE_EVENTS':
            currentPermission = 'Discord.PermissionsBitField.Flags.ManageEvents';
            break;
          case 'ADMINISTRATOR':
            currentPermission = 'Discord.PermissionsBitField.Flags.Administrator';
            break;
          default:
            currentPermission = 'Discord.PermissionsBitField.Flags.ViewChannel';
            break;
        }

        const code = value_rank+'.permissions.has('+currentPermission+', true)';
        return [code, Blockly.JavaScript.ORDER_NONE];
      }else{
        return ['', Blockly.JavaScript.ORDER_NONE];
      }
    };

    Blockly.JavaScript['block_rank_get_everyone'] = function(block) {
      let code = 'CURRENT_GUILD.roles.everyone';
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    /* ##### EMBEDS blocks ##### */

    Blockly.JavaScript['block_embed_create'] = function(block) {
      const value_name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);
      const value_color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC);
      const statements_options = Blockly.JavaScript.statementToCode(block, 'options');
      const value_description = Blockly.JavaScript.valueToCode(block, 'description', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_name!=='' && value_color!==''){
        const code = 'embedMessage = new Discord.EmbedBuilder().setTitle('+value_name+').setDescription('+value_description+').setColor('+value_color+')'+statements_options.trim()+';\n';
        return code;
      }else{
        return '';
      }
    };

    Blockly.JavaScript['block_embed_option_set_image'] = function(block) {
      const value_image_url = Blockly.JavaScript.valueToCode(block, 'image_url', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_image_url!==''){
        const code = '.setImage(('+value_image_url+'.substr(0, 7)==="http://" || '+value_image_url+'.substr(0, 8)==="https://")?'+value_image_url+':"https://cdn.discordapp.com/attachments/973567795189153802/986035610206744626/Sans_titre.png")';
        return code;
      }else{
        return '';
      }
    };

    Blockly.JavaScript['block_embed_option_set_thumbnail'] = function(block) {
      const value_thumbnail_url = Blockly.JavaScript.valueToCode(block, 'thumbnail_url', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_thumbnail_url!==''){
        const code = '.setThumbnail(('+value_thumbnail_url+'.substr(0, 7)==="http://" || '+value_thumbnail_url+'.substr(0, 8)==="https://")?'+value_thumbnail_url+':"https://cdn.discordapp.com/attachments/973567795189153802/986035610206744626/Sans_titre.png")';
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
        const code = '.addFields({name:'+value_name+', value:'+value_text+', inline:'+( checkbox_inline ? 'true':'false' )+'})';
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

        const code = '.setAuthor({name:'+value_name+' '+( (value_url!=='') ? ', url: ('+value_url+'.substr(0, 7)==="http://" || '+value_url+'.substr(0, 8)==="https://")?'+value_url+':"https://cdn.discordapp.com/attachments/973567795189153802/986035610206744626/Sans_titre.png"' : '')+' '+ ( (value_icon_url!=='') ? ', iconURL: ('+value_icon_url+'.substr(0, 7)==="http://" || '+value_icon_url+'.substr(0, 8)==="https://")?'+value_icon_url+':"https://cdn.discordapp.com/attachments/973567795189153802/986035610206744626/Sans_titre.png"' : '') +'})';
        return code;
      }else{
        return '';
      }
    };

    Blockly.JavaScript['block_embed_option_set_footer'] = function(block) {
      const value_name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);
      let value_icon_url = Blockly.JavaScript.valueToCode(block, 'icon_URL', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_name!==''){

        const code = '.setFooter({text: '+value_name+' '+ ( (value_icon_url!=='') ? ', iconURL: ('+value_icon_url+'.substr(0, 7)==="http://" || '+value_icon_url+'.substr(0, 8)==="https://")?'+value_icon_url+':"https://cdn.discordapp.com/attachments/973567795189153802/986035610206744626/Sans_titre.png"': '' ) +'})';
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

    /* ##### COLOR blocks ##### */
    Blockly.JavaScript['block_color_hex'] = function(block) {
      const text_color = block.getFieldValue('color');
      var code = (/^#[0-9a-f]{3,6}$/i.test(text_color))?'\''+text_color+'\'':'';//A regex check if color hex is valid
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    /* ##### Temporary VARIABLES blocks ##### */
    Blockly.JavaScript['block_var_save'] = function(block) {
      const value_input = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);
      const text_name = block.getFieldValue('NAME');
      //const dropdown_type = block.getFieldValue('TYPE');

      if(!/^[a-zA-Z0-9]{1,16}$/.test(text_name)){
        throw("User gave an incorrect name to temporary variables : "+text_name);
      }

      if(value_input=='' || value_input==undefined){
        //Error
        return 'temporaryStorage.'+text_name+' = undefined;\n';
      }else{
        //OK
        return 'temporaryStorage.'+text_name+' = '+value_input+';\n';
      }
    };

    Blockly.JavaScript['block_var_get'] = function(block) {
      const text_name = block.getFieldValue('NAME');

      if(!/^[a-zA-Z0-9]{1,16}$/.test(text_name)){
        throw("User gave an incorrect name to temporary variables : "+text_name);
      }

      const code = 'temporaryStorage.'+text_name;

      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    /* ##### Emojis blocks ##### */

    Blockly.JavaScript['block_emoji_get_name'] = function(block) {
      const value_emoji = Blockly.JavaScript.valueToCode(block, 'emoji', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_emoji!==''){
        return [value_emoji+'.name', Blockly.JavaScript.ORDER_NONE];
      }else{
        return ['', Blockly.JavaScript.ORDER_NONE];
      }
    };

    Blockly.JavaScript['block_emoji_react'] = function(block) {
      const value_emoji = Blockly.JavaScript.valueToCode(block, 'emoji', Blockly.JavaScript.ORDER_ATOMIC);
      const value_message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_emoji!=='' && value_message!==''){
        return 'await sleep(1000).then(async()=>{'+value_message+".react("+value_emoji+");});\n";
      }else{
        return '';
      }
    };

    Blockly.JavaScript['block_emoji_get_number_of_reactions'] = function(block) {
      let value_emoji = Blockly.JavaScript.valueToCode(block, 'emoji', Blockly.JavaScript.ORDER_ATOMIC);
      const value_message = Blockly.JavaScript.valueToCode(block, 'Message', Blockly.JavaScript.ORDER_ATOMIC);
      if(value_emoji!=='' && value_message!==''){

        if(value_emoji==='(eventReaction)')value_emoji="(eventReaction.id || eventReaction.name)";//Sending directly this object will cause issues, so if the user gave the object, we get the id ( for custom emojis ) or the name ( Discord emojis )
        if(value_emoji.includes(':')){
          //That's a custom emoji. We will remove everything except the ID. I don't know why, but that don't work if we don't do that...
          //We check in front-end that it's valid. If invalid data come here, an error will be thrown by node and caught in the caller context.
          value_emoji=value_emoji.split(':')[2];
          value_emoji=value_emoji.split('>')[0];
          value_emoji = "'"+value_emoji+"'";
        }

        return [value_message+'.reactions.resolve('+value_emoji+') ? '+value_message+'.reactions.resolve('+value_emoji+').count : 0', Blockly.JavaScript.ORDER_NONE];//If emoji found, return the count, else, return 0
      }else{
        return ['undefined', Blockly.JavaScript.ORDER_NONE];
      }

    };

    Blockly.JavaScript['block_emoji_remove_reaction'] = function(block) {
      let value_emoji = Blockly.JavaScript.valueToCode(block, 'emoji', Blockly.JavaScript.ORDER_ATOMIC);
      const value_user = Blockly.JavaScript.valueToCode(block, 'User', Blockly.JavaScript.ORDER_ATOMIC);
      const value_message = Blockly.JavaScript.valueToCode(block, 'Message', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_emoji!=='' && value_user!=='' && value_message!==''){

        if(value_emoji==='(eventReaction)')value_emoji="(eventReaction.id || eventReaction.name)";//Sending directly this object will cause issues, so if the user gave the object, we get the id ( for custom emojis ) or the name ( Discord emojis )
        if(value_emoji.includes(':')){
          //That's a custom emoji. We will remove everything except the ID. I don't know why, but that don't work if we don't do that...
          //We check in front-end that it's valid. If invalid data come here, an error will be thrown by node and caught in the caller context.
          value_emoji=value_emoji.split(':')[2];
          value_emoji=value_emoji.split('>')[0];
          value_emoji = "'"+value_emoji+"'";
        }

        return 'if('+value_message+'.reactions.resolve('+value_emoji+')){await sleep(1000).then(async()=>{'+value_message+'.reactions.resolve('+value_emoji+').users.remove('+value_user+');});}\n';
      }else{
        return '';
      }

    };

    Blockly.JavaScript['block_emoji_remove_all_reactions'] = function(block) {
      const value_message = Blockly.JavaScript.valueToCode(block, 'Message', Blockly.JavaScript.ORDER_ATOMIC);

      if(value_message!==''){
        return value_message+'.reactions.removeAll();\n';
      }else{
        return '';
      }
    };

    /* ##### Miscellaneous blocks ##### */

    Blockly.JavaScript['block_miscellaneous_return'] = function(block) {
      const code = 'return();\n';
      return code;
    };

    Blockly.JavaScript['block_miscellaneous_str_to_int'] = function(block) {
      const value_string = Blockly.JavaScript.valueToCode(block, 'STRING', Blockly.JavaScript.ORDER_ATOMIC);
      if(value_string!=undefined && value_string!=''){
        return ['strToInt('+value_string+')', Blockly.JavaScript.ORDER_NONE];
      }else{
        return ['-1', Blockly.JavaScript.ORDER_NONE];
      }
    };

    /* ##### DISABLED blocks ##### */
    //Blockly's default blocks that should be disabled
    //These blocks are removed / commented in toolbox.ejs

    const disabledFunction = function(block){
      return('');
    }
        //Loops
        Blockly.JavaScript['controls_repeat_ext'] = disabledFunction;
        Blockly.JavaScript['controls_whileUntil'] = disabledFunction;
        Blockly.JavaScript['controls_for'] = disabledFunction;
        Blockly.JavaScript['controls_forEach'] = disabledFunction;
        Blockly.JavaScript['controls_flow_statements'] = disabledFunction;

        //Text
        Blockly.JavaScript['text_print'] = disabledFunction;
        Blockly.JavaScript['text_append'] = disabledFunction;
        Blockly.JavaScript['text_prompt_ext'] = disabledFunction;

        //Lists
        //Blockly.JavaScript['lists_create_with'] = disabledFunction;
        Blockly.JavaScript['lists_repeat'] = disabledFunction;
        /*Blockly.JavaScript['lists_length'] = disabledFunction;
        Blockly.JavaScript['lists_isEmpty'] = disabledFunction;
        Blockly.JavaScript['lists_indexOf'] = disabledFunction;
        Blockly.JavaScript['lists_getIndex'] = disabledFunction;
        Blockly.JavaScript['lists_setIndex'] = disabledFunction;
        Blockly.JavaScript['lists_getSublist'] = disabledFunction;
        Blockly.JavaScript['lists_split'] = disabledFunction;
        Blockly.JavaScript['lists_sort'] = disabledFunction;*/

        //Colors
        Blockly.JavaScript['colour_rgb'] = disabledFunction;
        Blockly.JavaScript['colour_blend'] = disabledFunction;

    return(Blockly);
  }
}
