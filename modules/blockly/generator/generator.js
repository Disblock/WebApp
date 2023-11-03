/* eslint-disable no-unused-vars */
"use strict";
const { javascriptGenerator } = require("blockly/javascript"); //JS generator for Blockly
const commandsArgsTypes = require("../../enums/commands_args_types.js");
const errorsTypes = require("../../enums/workspace_errors.js");
const definedRegexes = require("../../utils/regex.js");

module.exports = {
  initializeGenerator: function (Blockly) {
    //Blockly.Generator.COMMENT_WRAP = Infinity;

    /*
    The code of blocks inside an event are generated directly in xml_to_js, event by event.


    All variables here must be declared when starting to execute code

    The const CURRENT_GUILD represent the Guild object that triggered an event, this const is defined in the bot when executing the code.

    embedMessage represents the embed message created

    createdTextChannel represents the created Text Channel with create text channel block
    createdVoiceChannel represents the created voice channel with create voice channel block

    sentMessage is a message sent with reply block or send message block. It can also be an embed message that was sent
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
    Blockly.JavaScript = javascriptGenerator;
    Blockly.JavaScript.addReservedWords(
      "loopCount,CURRENT_GUILD,embedMessage,createdTextChannel,createdVoiceChannel,sentMessage,createdThreadOnMessage,createdRank,eventMessage,eventOldMessage,eventNewMessage,eventUser,eventOldUser,eventNewUser,eventRole,eventOldRole,eventNewRole,eventOldVoiceChannel,eventNewVoiceChannel,eventVoiceChannel,eventTextChannel,eventOldTextChannel,eventNewTextChannel,eventReaction,temporaryStorage,interaction"
    );
    Blockly.JavaScript.INFINITE_LOOP_TRAP =
      "if(loopCount > 1000){throw 'Reached the limit of iterations !'}\nloopCount++;\n";

    /* ##### EVENTS blocks ##### */
    Blockly.JavaScript["event_message_sent"] = function (block) {
      const statements = Blockly.JavaScript.statementToCode(block, "statements");
      return statements;
    };

    Blockly.JavaScript["event_message_deleted"] = function (block) {
      const statements = Blockly.JavaScript.statementToCode(block, "statements");
      return statements;
    };

    Blockly.JavaScript["event_message_updated"] = function (block) {
      const statements = Blockly.JavaScript.statementToCode(block, "statements");
      return statements;
    };

    Blockly.JavaScript["event_user_join"] = function (block) {
      const statements = Blockly.JavaScript.statementToCode(block, "statements");
      return statements;
    };

    Blockly.JavaScript["event_user_left"] = function (block) {
      const statements = Blockly.JavaScript.statementToCode(block, "statements");
      return statements;
    };

    Blockly.JavaScript["event_user_updated"] = function (block) {
      const statements = Blockly.JavaScript.statementToCode(block, "statements");
      return statements;
    };

    Blockly.JavaScript["event_var_message"] = function (block) {
      const code = "eventMessage";
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript["event_var_message_old"] = function (block) {
      const code = "eventOldMessage";
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript["event_var_message_new"] = function (block) {
      const code = "eventNewMessage";
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript["event_var_user"] = function (block) {
      const code = "eventUser";
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript["event_var_old_user"] = function (block) {
      const code = "eventOldUser";
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript["event_var_new_user"] = function (block) {
      const code = "eventNewUser";
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript["event_role_created"] = function (block) {
      const statements = Blockly.JavaScript.statementToCode(block, "statements");
      return statements;
    };

    Blockly.JavaScript["event_role_deleted"] = function (block) {
      const statements = Blockly.JavaScript.statementToCode(block, "statements");
      return statements;
    };

    Blockly.JavaScript["event_role_edited"] = function (block) {
      /*const statements = Blockly.JavaScript.statementToCode(block, 'statements');
      return statements;*/
      return ""; //Disabled : when a role is created, this event is sometimes triggered multiples times
    };

    Blockly.JavaScript["event_var_rank"] = function (block) {
      const code = "eventRole";
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript["event_var_old_rank"] = function (block) {
      const code = "eventOldRole";
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript["event_var_new_rank"] = function (block) {
      const code = "eventNewRole";
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript["event_user_banned"] = function (block) {
      const statements = Blockly.JavaScript.statementToCode(block, "statements");
      return statements;
    };

    /*  This event is disabled : Discord send the User but we can't get a GuildMember...
        This feature is planned, but require more development

    Blockly.JavaScript['event_user_unbanned'] = function(block) {
      const statements = Blockly.JavaScript.statementToCode(block, 'statements');
      return statements;
    };*/

    /*  This event is disabled : Discord don't send the updated message, so we have to found it ourselves.
        This feature is planned, but require more development
    Blockly.JavaScript['event_pinned_updated'] = function(block) {
      const statements = Blockly.JavaScript.statementToCode(block, 'statements');
      return statements;
    };*/

    Blockly.JavaScript["event_user_voice_update"] = function (block) {
      const statements = Blockly.JavaScript.statementToCode(block, "statements");
      return statements;
    };

    Blockly.JavaScript["event_user_start_writting"] = function (block) {
      /*const statements = Blockly.JavaScript.statementToCode(block, 'statements');
      return statements;*/
      return ""; //Disabled, always triggered multiple times when a bug message is written
    };

    Blockly.JavaScript["event_var_old_voice_channel"] = function (block) {
      const code = "eventOldVoiceChannel";
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript["event_var_new_voice_channel"] = function (block) {
      const code = "eventNewVoiceChannel";
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript["event_textChannel_created"] = function (block) {
      const statements = Blockly.JavaScript.statementToCode(block, "statements");
      return statements;
    };

    Blockly.JavaScript["event_textChannel_deleted"] = function (block) {
      const statements = Blockly.JavaScript.statementToCode(block, "statements");
      return statements;
    };

    Blockly.JavaScript["event_textChannel_edited"] = function (block) {
      const statements = Blockly.JavaScript.statementToCode(block, "statements");
      return statements;
    };

    Blockly.JavaScript["event_voice_channel_created"] = function (block) {
      const statements = Blockly.JavaScript.statementToCode(block, "statements");
      return statements;
    };

    Blockly.JavaScript["event_voice_channel_deleted"] = function (block) {
      const statements = Blockly.JavaScript.statementToCode(block, "statements");
      return statements;
    };

    Blockly.JavaScript["event_voice_channel_edited"] = function (block) {
      const statements = Blockly.JavaScript.statementToCode(block, "statements");
      return statements;
    };

    Blockly.JavaScript["event_var_text_channel"] = function (block) {
      const code = "eventTextChannel";
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript["event_var_old_text_channel"] = function (block) {
      const code = "eventOldTextChannel";
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript["event_var_new_text_channel"] = function (block) {
      const code = "eventNewTextChannel";
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript["event_var_voice_channel"] = function (block) {
      const code = "eventVoiceChannel";
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript["event_reaction_added"] = function (block) {
      const statements = Blockly.JavaScript.statementToCode(block, "statements");
      return statements;
    };

    Blockly.JavaScript["event_reaction_removed"] = function (block) {
      const statements = Blockly.JavaScript.statementToCode(block, "statements");
      return statements;
    };

    Blockly.JavaScript["event_var_reaction"] = function (block) {
      const code = "eventReaction";
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    /* ##### MESSAGES blocks ##### */

    Blockly.JavaScript["block_message_reply"] = function (block) {
      const valueMessage = Blockly.JavaScript.valueToCode(block, "message", Blockly.JavaScript.ORDER_ATOMIC);
      const valueText = Blockly.JavaScript.valueToCode(block, "text", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueMessage !== "" && valueText !== "") {
        const code = "sentMessage = await " + valueMessage + ".reply((" + valueText + ").replaceAll('<br>', '\\n'));\n";
        return code;
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_message_send"] = function (block) {
      const valueChannel = Blockly.JavaScript.valueToCode(block, "channel", Blockly.JavaScript.ORDER_ATOMIC);
      const valueText = Blockly.JavaScript.valueToCode(block, "text", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueChannel !== "" && valueText !== "") {
        const code = "sentMessage = await " + valueChannel + ".send((" + valueText + ").replaceAll('<br>', '\\n'));\n";
        return code;
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_message_delete"] = function (block) {
      const valueMessage = Blockly.JavaScript.valueToCode(block, "message", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueMessage !== "") {
        const code = valueMessage + ".delete();\n";
        return code;
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_message_delete_bulk"] = function (block) {
      const numberAmount = block.getFieldValue("amount");
      const valueChannel = Blockly.JavaScript.valueToCode(block, "channel", Blockly.JavaScript.ORDER_ATOMIC);

      if (definedRegexes.isNumber(numberAmount) && valueChannel !== "") {
        const code = valueChannel + ".bulkDelete(" + numberAmount + ");\n";
        return code;
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_message_start_thread"] = function (block) {
      const valueMessage = Blockly.JavaScript.valueToCode(block, "message", Blockly.JavaScript.ORDER_ATOMIC);
      const valueName = Blockly.JavaScript.valueToCode(block, "name", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueMessage !== "" && valueName !== "") {
        const code = "createdThreadOnMessage = await " + valueMessage + ".startThread({name: " + valueName + "});\n";
        return code;
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_message_pine"] = function (block) {
      const valueMessage = Blockly.JavaScript.valueToCode(block, "message", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueMessage !== "") {
        const code = valueMessage + ".pin();\n";
        return code;
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_message_unpine"] = function (block) {
      const valueMessage = Blockly.JavaScript.valueToCode(block, "message", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueMessage !== "") {
        const code = valueMessage + ".unpin();\n";
        return code;
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_message_get_text"] = function (block) {
      const valueMessage = Blockly.JavaScript.valueToCode(block, "message", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueMessage !== "") {
        const code = valueMessage + ".content || ''";
        return [code, Blockly.JavaScript.ORDER_NONE];
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_message_get_id"] = function (block) {
      const valueMessage = Blockly.JavaScript.valueToCode(block, "message", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueMessage !== "") {
        const code = valueMessage + ".id || ''";
        return [code, Blockly.JavaScript.ORDER_NONE];
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_message_get_autor"] = function (block) {
      const valueMessage = Blockly.JavaScript.valueToCode(block, "message", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueMessage !== "") {
        const code = valueMessage + ".member";
        return [code, Blockly.JavaScript.ORDER_NONE];
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_message_get_channel"] = function (block) {
      const valueMessage = Blockly.JavaScript.valueToCode(block, "message", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueMessage !== "") {
        const code = valueMessage + ".channel";
        return [code, Blockly.JavaScript.ORDER_NONE];
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_message_does_mention_everyone"] = function (block) {
      const valueMessage = Blockly.JavaScript.valueToCode(block, "message", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueMessage !== "") {
        const code = valueMessage + ".mentions.everyone";
        return [code, Blockly.JavaScript.ORDER_NONE];
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_message_does_mention_user"] = function (block) {
      const valueMessage = Blockly.JavaScript.valueToCode(block, "message", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueMessage !== "") {
        const code = valueMessage + ".mentions.members.size>0";
        return [code, Blockly.JavaScript.ORDER_NONE];
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_message_does_mention_channel"] = function (block) {
      const valueMessage = Blockly.JavaScript.valueToCode(block, "message", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueMessage !== "") {
        const code = valueMessage + ".mentions.channels.size>0";
        return [code, Blockly.JavaScript.ORDER_NONE];
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_message_get_user_mention"] = function (block) {
      const numberMentionIndex = block.getFieldValue("mention_index");
      const valueMessage = Blockly.JavaScript.valueToCode(block, "message", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueMessage !== "" && definedRegexes.isNumber(numberMentionIndex)) {
        const code =
          valueMessage +
          ".mentions.members.at((" +
          numberMentionIndex +
          "-1) % " +
          valueMessage +
          ".mentions.members.size)"; // For us, Collection start at index 0, for users, a collection start at index 1
        return [code, Blockly.JavaScript.ORDER_NONE];
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_message_get_channel_mention"] = function (block) {
      const numberMentionIndex = block.getFieldValue("mention_index");
      const valueMessage = Blockly.JavaScript.valueToCode(block, "message", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueMessage !== "" && definedRegexes.isNumber(numberMentionIndex)) {
        const code =
          valueMessage +
          ".mentions.channels.at((" +
          numberMentionIndex +
          "-1) % " +
          valueMessage +
          ".mentions.channels.size)"; // For us, Collection start at index 0, for users, a collection start at index 1
        return [code, Blockly.JavaScript.ORDER_NONE];
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_message_number_of_mentions_user"] = function (block) {
      const valueMessage = Blockly.JavaScript.valueToCode(block, "message", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueMessage !== "") {
        const code = valueMessage + ".mentions.members.size";
        return [code, Blockly.JavaScript.ORDER_NONE];
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_message_number_of_mentions_channel"] = function (block) {
      const valueMessage = Blockly.JavaScript.valueToCode(block, "message", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueMessage !== "") {
        const code = valueMessage + ".mentions.channels.size";
        return [code, Blockly.JavaScript.ORDER_NONE];
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_message_var_sent_message"] = function (block) {
      const code = "sentMessage";
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript["block_message_var_created_thread"] = function (block) {
      const code = "createdThreadOnMessage";
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    /* ##### USERS blocks ##### */

    Blockly.JavaScript["block_user_ban"] = function (block) {
      const valueUser = Blockly.JavaScript.valueToCode(block, "user", Blockly.JavaScript.ORDER_ATOMIC);
      let valueReason = Blockly.JavaScript.valueToCode(block, "reason", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueUser !== "") {
        if (valueReason === "") {
          valueReason = "'Reason undefined'";
        }

        const code = valueUser + ".ban({days:0,reason:" + valueReason + "});\n";
        return code;
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_user_unban"] = function (block) {
      const valueUser = Blockly.JavaScript.valueToCode(block, "user", Blockly.JavaScript.ORDER_ATOMIC);
      let valueReason = Blockly.JavaScript.valueToCode(block, "reason", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueUser !== "") {
        if (valueReason === "") {
          valueReason = "'Reason undefined'";
        }

        const code = "CURRENT_GUILD.bans.remove(" + valueUser + ", " + valueReason + ");\n";
        return code;
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_user_send_private_message"] = function (block) {
      const valueMessage = Blockly.JavaScript.valueToCode(block, "message", Blockly.JavaScript.ORDER_ATOMIC);
      const valueUser = Blockly.JavaScript.valueToCode(block, "user", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueUser !== "" && valueMessage !== "") {
        const code =
          valueUser +
          ".send((" +
          valueMessage +
          ").replaceAll('<br>', '\\n')+\"\\nCustom message sent from the server *\"+CURRENT_GUILD.name+\"*\");\n";
        return code;
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_user_kick"] = function (block) {
      const valueUser = Blockly.JavaScript.valueToCode(block, "user", Blockly.JavaScript.ORDER_ATOMIC);
      let valueReason = Blockly.JavaScript.valueToCode(block, "reason", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueUser !== "") {
        if (valueReason === "") {
          valueReason = "'Reason undefined'";
        }

        const code = valueUser + ".kick(" + valueReason + ");\n";
        return code;
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_user_get_with_id"] = function (block) {
      const valueId = Blockly.JavaScript.valueToCode(block, "id", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueId !== "") {
        const code = "await CURRENT_GUILD.members.fetch(" + valueId + ")";
        return [code, Blockly.JavaScript.ORDER_NONE];
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_user_get_server_username"] = function (block) {
      const valueUser = Blockly.JavaScript.valueToCode(block, "user", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueUser !== "") {
        const code = valueUser + ".displayName || ''";
        return [code, Blockly.JavaScript.ORDER_NONE];
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_user_get_username"] = function (block) {
      const valueUser = Blockly.JavaScript.valueToCode(block, "user", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueUser !== "") {
        const code = valueUser + ".user.username || ''";
        return [code, Blockly.JavaScript.ORDER_NONE];
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_user_get_id"] = function (block) {
      const valueUser = Blockly.JavaScript.valueToCode(block, "user", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueUser !== "") {
        const code = valueUser + ".id || ''";
        return [code, Blockly.JavaScript.ORDER_NONE];
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_user_get_picture"] = function (block) {
      const valueUser = Blockly.JavaScript.valueToCode(block, "user", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueUser !== "") {
        const code =
          valueUser +
          ".avatarURL({dynamic:true}) || " +
          valueUser +
          ".user.avatarURL({dynamic:true}) || 'https://cdn.discordapp.com/attachments/973567795189153802/995083353663488010/unknown.png'"; //Users can have a per guild avatar or a global avatar
        return [code, Blockly.JavaScript.ORDER_NONE];
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_user_is_bot"] = function (block) {
      const valueUser = Blockly.JavaScript.valueToCode(block, "user", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueUser !== "") {
        const code = valueUser + ".user.bot";
        return [code, Blockly.JavaScript.ORDER_NONE];
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_user_mute"] = function (block) {
      const valueUser = Blockly.JavaScript.valueToCode(block, "user", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueUser !== "") {
        const code = "if(" + valueUser + ".voice.channel){" + valueUser + ".voice.setMute(true);}\n";
        return code;
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_user_unmute"] = function (block) {
      const valueUser = Blockly.JavaScript.valueToCode(block, "user", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueUser !== "") {
        const code = "if(" + valueUser + ".voice.channel){" + valueUser + ".voice.setMute(false);}\n";
        return code;
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_user_deaf"] = function (block) {
      const valueUser = Blockly.JavaScript.valueToCode(block, "user", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueUser !== "") {
        const code = "if(" + valueUser + ".voice.channel){" + valueUser + ".voice.setDeaf(true);}\n";
        return code;
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_user_undeaf"] = function (block) {
      const valueUser = Blockly.JavaScript.valueToCode(block, "user", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueUser !== "") {
        const code = "if(" + valueUser + ".voice.channel){" + valueUser + ".voice.setDeaf(false);}\n";
        return code;
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_user_is_timeout"] = function (block) {
      const valueUser = Blockly.JavaScript.valueToCode(block, "user", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueUser !== "") {
        const code = valueUser + ".isCommunicationDisabled()"; //Users can have a per guild avatar or a global avatar
        return [code, Blockly.JavaScript.ORDER_NONE];
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_user_timeout"] = function (block) {
      const valueUser = Blockly.JavaScript.valueToCode(block, "user", Blockly.JavaScript.ORDER_ATOMIC);
      const dropdownDuration = block.getFieldValue("duration");
      let valueReason = Blockly.JavaScript.valueToCode(block, "reason", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueUser !== "" && dropdownDuration !== "") {
        //dropdownDuration isn't checked for injections, as it's only used for switch, and never executed
        if (valueReason === "") {
          valueReason = "'Reason undefined'";
        }

        let code = valueUser;
        switch (dropdownDuration) {
          case "1min":
            code = code + ".timeout(60000, " + valueReason + ");\n";
            break;
          case "5min":
            code = code + ".timeout(300000, " + valueReason + ");\n";
            break;
          case "10min":
            code = code + ".timeout(600000, " + valueReason + ");\n";
            break;
          case "1h":
            code = code + ".timeout(3600000, " + valueReason + ");\n";
            break;
          case "1d":
            code = code + ".timeout(86400000, " + valueReason + ");\n";
            break;
          case "1w":
            code = code + ".timeout(604800000, " + valueReason + ");\n";
            break;
          default:
            code = code + ".timeout(60000, " + valueReason + ");\n";
            break;
        }
        return code;
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_user_custom_timeout"] = function (block) {
      const valueUser = Blockly.JavaScript.valueToCode(block, "user", Blockly.JavaScript.ORDER_ATOMIC);
      const valueDuration = Blockly.JavaScript.valueToCode(block, "duration", Blockly.JavaScript.ORDER_ATOMIC);
      let valueReason = Blockly.JavaScript.valueToCode(block, "reason", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueUser !== "" && valueDuration !== "") {
        if (valueReason === "") {
          valueReason = "'Reason undefined'";
        }

        const code = valueUser + ".timeout(" + valueDuration + "*1000, " + valueReason + ");\n";
        return code;
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_user_remove_timeout"] = function (block) {
      const valueUser = Blockly.JavaScript.valueToCode(block, "user", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueUser !== "") {
        const code = valueUser + ".timeout(null);\n"; //Giving null as argument remove the timeout
        return code;
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_user_has_permission"] = function (block) {
      const valueUser = Blockly.JavaScript.valueToCode(block, "user", Blockly.JavaScript.ORDER_ATOMIC);
      const dropdownPermission = block.getFieldValue("permission"); //Regex not needed : only used for a switch and never executed

      if (valueUser !== "" && dropdownPermission !== "") {
        let code = valueUser + ".permissions";
        switch (dropdownPermission) {
          case "SEE_CHANNEL":
            code = code + ".has(Discord.PermissionsBitField.Flags.ViewChannel, true)"; //https://discord.js.org/#/docs/discord.js/stable/class/Permissions?scrollTo=has
            break;
          case "MANAGE_CHANNEL":
            code = code + ".has(Discord.PermissionsBitField.Flags.ManageChannels, true)";
            break;
          case "MANAGE_RANKS":
            code = code + ".has(Discord.PermissionsBitField.Flags.ManageRoles, true)";
            break;
          case "MANAGE_EMOJIS":
            code = code + ".has(Discord.PermissionsBitField.Flags.ManageEmojisAndStickers, true)";
            break;
          case "SEE_SERVER_LOGS":
            code = code + ".has(Discord.PermissionsBitField.Flags.ViewAuditLog, true)";
            break;
          case "MANAGE_WEBHOOKS":
            code = code + ".has(Discord.PermissionsBitField.Flags.ManageWebhooks, true)";
            break;
          case "MANAGE_SERVER":
            code = code + ".has(Discord.PermissionsBitField.Flags.ManageGuild, true)";
            break;
          case "CREATE_INVITE":
            code = code + ".has(Discord.PermissionsBitField.Flags.CreateInstantInvite, true)";
            break;
          case "EDIT_USERNAME":
            code = code + ".has(Discord.PermissionsBitField.Flags.ChangeNickname, true)";
            break;
          case "EDIT_OTHERS_USERNAME":
            code = code + ".has(Discord.PermissionsBitField.Flags.ManageNicknames, true)";
            break;
          case "KICK":
            code = code + ".has(Discord.PermissionsBitField.Flags.KickMembers, true)";
            break;
          case "BAN":
            code = code + ".has(Discord.PermissionsBitField.Flags.BanMembers, true)";
            break;
          case "TIMEOUT":
            code = code + ".has(Discord.PermissionsBitField.Flags.ModerateMembers, true)";
            break;
          case "SEND_MESSAGES":
            code = code + ".has(Discord.PermissionsBitField.Flags.SendMessages, true)";
            break;
          case "SEND_MESSAGES_IN_THREADS":
            code = code + ".has(Discord.PermissionsBitField.Flags.SendMessagesInThreads, true)";
            break;
          case "CREATE_PUBLIC_THREADS":
            code = code + ".has(Discord.PermissionsBitField.Flags.CreatePublicThreads, true)";
            break;
          case "CREATE_PRIVATE_THREADS":
            code = code + ".has(Discord.PermissionsBitField.Flags.CreatePrivateThreads, true)";
            break;
          case "EMBED_LINKS":
            code = code + ".has(Discord.PermissionsBitField.Flags.EmbedLinks, true)";
            break;
          case "ADD_FILES":
            code = code + ".has(Discord.PermissionsBitField.Flags.AttachFiles, true)";
            break;
          case "ADD_REACTIONS":
            code = code + ".has(Discord.PermissionsBitField.Flags.AddReactions, true)";
            break;
          case "USE_EXTERNAL_EMOJIS":
            code = code + ".has(Discord.PermissionsBitField.Flags.UseExternalEmojis, true)";
            break;
          case "USE_EXTERNAL_STICKERS":
            code = code + ".has(Discord.PermissionsBitField.Flags.UseExternalStickers, true)";
            break;
          case "PING_EVERYONE":
            code = code + ".has(Discord.PermissionsBitField.Flags.MentionEveryone, true)";
            break;
          case "MANAGE_MESSAGES":
            code = code + ".has(Discord.PermissionsBitField.Flags.ManageMessages, true)";
            break;
          case "MANAGE_THREADS":
            code = code + ".has(Discord.PermissionsBitField.Flags.ManageThreads, true)";
            break;
          case "SEE_OLD_MESSAGES":
            code = code + ".has(Discord.PermissionsBitField.Flags.ReadMessageHistory, true)";
            break;
          case "SEND_VOICE_MESSAGE":
            code = code + ".has(Discord.PermissionsBitField.Flags.SendTTSMessages, true)";
            break;
          case "USE_APP_COMMANDS":
            code = code + ".has(Discord.PermissionsBitField.Flags.UseApplicationCommands, true)";
            break;
          case "CONNECT_TO_VOICE_CHANNEL":
            code = code + ".has(Discord.PermissionsBitField.Flags.Connect, true)";
            break;
          case "SPEAK":
            code = code + ".has(Discord.PermissionsBitField.Flags.Speak, true)";
            break;
          case "USE_VIDEO":
            code = code + ".has(Discord.PermissionsBitField.Flags.Stream, true)";
            break;
          case "START_ACTIVITY":
            code = code + ".has(Discord.PermissionsBitField.Flags.UseEmbeddedActivities, true)";
            break;
          case "VOICE_DETECTION":
            code = code + ".has(Discord.PermissionsBitField.Flags.UseVAD, true)"; //Voice Activity Detection
            break;
          case "PRIORITY_SPEAKER":
            code = code + ".has(Discord.PermissionsBitField.Flags.PrioritySpeaker, true)";
            break;
          case "MUTE_MEMBER":
            code = code + ".has(Discord.PermissionsBitField.Flags.MuteMembers, true)";
            break;
          case "DEAF_MEMBER":
            code = code + ".has(Discord.PermissionsBitField.Flags.DeafenMembers, true)";
            break;
          case "MOOVE_MEMBER":
            code = code + ".has(Discord.PermissionsBitField.Flags.MoveMembers, true)";
            break;
          case "MANAGE_EVENTS":
            code = code + ".has(Discord.PermissionsBitField.Flags.ManageEvents, true)";
            break;
          case "ADMINISTRATOR":
            code = code + ".has(Discord.PermissionsBitField.Flags.Administrator, true)";
            break;
          default:
            code = code + ".has(Discord.PermissionsBitField.Flags.Administrator, true)";
            break;
        }
        return [code, Blockly.JavaScript.ORDER_NONE];
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_user_has_rank"] = function (block) {
      const valueUser = Blockly.JavaScript.valueToCode(block, "user", Blockly.JavaScript.ORDER_ATOMIC);
      const valueRank = Blockly.JavaScript.valueToCode(block, "rank", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueUser !== "" && valueRank !== "") {
        const code = valueUser + ".roles.cache.has(" + valueRank + ".id)"; //valueRank should be a string with the ID, or a role object
        return [code, Blockly.JavaScript.ORDER_NONE];
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_user_is_in_voice_channel"] = function (block) {
      const valueUser = Blockly.JavaScript.valueToCode(block, "user", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueUser !== "") {
        const code = "(" + valueUser + ".voice.channel!=undefined)";
        return [code, Blockly.JavaScript.ORDER_NONE];
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_user_get_voice_channel"] = function (block) {
      const valueUser = Blockly.JavaScript.valueToCode(block, "user", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueUser !== "") {
        const code = valueUser + ".voice.channel";
        return [code, Blockly.JavaScript.ORDER_NONE];
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_user_move_to_voice_channel"] = function (block) {
      const valueUser = Blockly.JavaScript.valueToCode(block, "user", Blockly.JavaScript.ORDER_ATOMIC);
      const valueChannel = Blockly.JavaScript.valueToCode(block, "channel", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueUser !== "" && valueChannel !== "") {
        const code = valueUser + ".voice.setChannel(" + valueChannel + ");";
        return code;
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_user_give_rank"] = function (block) {
      const valueUser = Blockly.JavaScript.valueToCode(block, "user", Blockly.JavaScript.ORDER_ATOMIC);
      const valueRank = Blockly.JavaScript.valueToCode(block, "rank", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueUser !== "" && valueRank !== "") {
        const code = valueUser + ".roles.add(" + valueRank + ");";
        return code;
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_user_remove_rank"] = function (block) {
      const valueUser = Blockly.JavaScript.valueToCode(block, "user", Blockly.JavaScript.ORDER_ATOMIC);
      const valueRank = Blockly.JavaScript.valueToCode(block, "rank", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueUser !== "" && valueRank !== "") {
        const code = valueUser + ".roles.remove(" + valueRank + ");";
        return code;
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_user_rename"] = function (block) {
      const valueUser = Blockly.JavaScript.valueToCode(block, "user", Blockly.JavaScript.ORDER_ATOMIC);
      const valueName = Blockly.JavaScript.valueToCode(block, "name", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueUser !== "" && valueName !== "") {
        const code = valueUser + ".setNickname(" + valueName + ");";
        return code;
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    /* ##### CHANNELS blocks ##### */

    Blockly.JavaScript["block_channel_create_text_channel"] = function (block) {
      const valueName = Blockly.JavaScript.valueToCode(block, "name", Blockly.JavaScript.ORDER_ATOMIC);
      const valueTopic = Blockly.JavaScript.valueToCode(block, "topic", Blockly.JavaScript.ORDER_ATOMIC);
      const valueCategory = Blockly.JavaScript.valueToCode(block, "category", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueName !== "" && valueCategory !== "") {
        let code =
          "createdTextChannel = await CURRENT_GUILD.channels.create({name:" +
          valueName +
          " ,type: Discord.ChannelType.GuildText, parent: " +
          valueCategory; //valueCategory should be a string with the ID or Category object
        code = code + (valueTopic !== "" ? ", topic: " + valueTopic + "});\n" : "});\n");
        return code;
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_channel_create_voice_channel"] = function (block) {
      const valueName = Blockly.JavaScript.valueToCode(block, "name", Blockly.JavaScript.ORDER_ATOMIC);
      const valueCategory = Blockly.JavaScript.valueToCode(block, "category", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueName !== "" && valueCategory !== "") {
        const code =
          "createdVoiceChannel = await CURRENT_GUILD.channels.create({name:" +
          valueName +
          ", type: Discord.ChannelType.GuildVoice, parent: " +
          valueCategory +
          "});\n";
        return code;
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_channel_var_voice_channel"] = function (block) {
      const code = "createdVoiceChannel";
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript["block_channel_var_text_channel"] = function (block) {
      const code = "createdTextChannel";
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript["block_channel_delete"] = function (block) {
      const valueChannel = Blockly.JavaScript.valueToCode(block, "channel", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueChannel !== "") {
        const code = valueChannel + ".delete();\n";
        return code;
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_channel_renamme"] = function (block) {
      const valueChannel = Blockly.JavaScript.valueToCode(block, "channel", Blockly.JavaScript.ORDER_ATOMIC);
      const valueText = Blockly.JavaScript.valueToCode(block, "text", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueChannel !== "" && valueText !== "") {
        const code = valueChannel + ".setName(" + valueText + ");\n";
        return code;
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_channel_get_category_of_channel"] = function (block) {
      const valueChannel = Blockly.JavaScript.valueToCode(block, "channel", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueChannel !== "") {
        const code = valueChannel + ".parent";
        return [code, Blockly.JavaScript.ORDER_NONE];
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_channel_get_channel_name"] = function (block) {
      const valueChannel = Blockly.JavaScript.valueToCode(block, "channel", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueChannel !== "") {
        const code = valueChannel + ".name || ''";
        return [code, Blockly.JavaScript.ORDER_NONE];
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_channel_get_channel_topic"] = function (block) {
      const valueChannel = Blockly.JavaScript.valueToCode(block, "channel", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueChannel !== "") {
        const code = valueChannel + ".topic || ''";
        return [code, Blockly.JavaScript.ORDER_NONE];
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_channel_get_channel_id"] = function (block) {
      const valueChannel = Blockly.JavaScript.valueToCode(block, "channel", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueChannel !== "") {
        const code = valueChannel + ".id || ''";
        return [code, Blockly.JavaScript.ORDER_NONE];
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_channel_get_user_count"] = function (block) {
      const valueChannel = Blockly.JavaScript.valueToCode(block, "channel", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueChannel !== "") {
        const code = valueChannel + ".members.size || 0";
        return [code, Blockly.JavaScript.ORDER_NONE];
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_channel_get_channel_with_id"] = function (block) {
      const valueChannelId = Blockly.JavaScript.valueToCode(block, "channel_id", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueChannelId !== "") {
        const code = "CURRENT_GUILD.channels.resolve(" + valueChannelId + ")";
        return [code, Blockly.JavaScript.ORDER_NONE];
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_channel_get_permission"] = function (block) {
      const valueUserOrRank = Blockly.JavaScript.valueToCode(block, "userOrRank", Blockly.JavaScript.ORDER_ATOMIC);
      const dropdownPermission = block.getFieldValue("permission"); //Regex not needed : only used for a switch and never executed
      const valueChannel = Blockly.JavaScript.valueToCode(block, "channel", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueUserOrRank !== "" && dropdownPermission !== "" && valueChannel !== "") {
        let code = valueChannel + ".permissionsFor(" + valueUserOrRank + ", true).has(";

        switch (dropdownPermission) {
          case "SEE_CHANNEL":
            code = code + "Discord.PermissionsBitField.Flags.ViewChannel, true)";
            break;
          case "MANAGE_CHANNEL":
            code = code + "Discord.PermissionsBitField.Flags.ManageChannels, true)";
            break;
          case "MANAGE_CHANNEL_PERMISSIONS":
            code = code + "Discord.PermissionsBitField.Flags.ManageRoles, true)";
            break;
          case "MANAGE_CHANNEL_WEBHOOKS":
            code = code + "Discord.PermissionsBitField.Flags.ManageWebhooks, true)";
            break;
          case "CREATE_INVITE":
            code = code + "Discord.PermissionsBitField.Flags.CreateInstantInvite, true)";
            break;
          case "SEND_MESSAGES":
            code = code + "Discord.PermissionsBitField.Flags.SendMessages, true)";
            break;
          case "SEND_MESSAGES_IN_THREADS":
            code = code + "Discord.PermissionsBitField.Flags.SendMessagesInThreads, true)";
            break;
          case "CREATE_PUBLIC_THREADS":
            code = code + "Discord.PermissionsBitField.Flags.CreatePublicThreads, true)";
            break;
          case "CREATE_PRIVATE_THREADS":
            code = code + "Discord.PermissionsBitField.Flags.CreatePrivateThreads, true)";
            break;
          case "EMBED_LINKS":
            code = code + "Discord.PermissionsBitField.Flags.EmbedLinks, true)";
            break;
          case "ADD_FILES":
            code = code + "Discord.PermissionsBitField.Flags.AttachFiles, true)";
            break;
          case "ADD_REACTIONS":
            code = code + "Discord.PermissionsBitField.Flags.AddReactions, true)";
            break;
          case "USE_EXTERNAL_EMOJIS":
            code = code + "Discord.PermissionsBitField.Flags.UseExternalEmojis, true)";
            break;
          case "USE_EXTERNAL_STICKERS":
            code = code + "Discord.PermissionsBitField.Flags.UseExternalStickers, true)";
            break;
          case "PING_EVERYONE":
            code = code + "Discord.PermissionsBitField.Flags.MentionEveryone, true)";
            break;
          case "MANAGE_MESSAGES":
            code = code + "Discord.PermissionsBitField.Flags.ManageMessages, true)";
            break;
          case "MANAGE_THREADS":
            code = code + "Discord.PermissionsBitField.Flags.ManageThreads, true)";
            break;
          case "SEE_OLD_MESSAGES":
            code = code + "Discord.PermissionsBitField.Flags.ReadMessageHistory, true)";
            break;
          case "SEND_VOICE_MESSAGE":
            code = code + "Discord.PermissionsBitField.Flags.SendTTSMessages, true)";
            break;
          case "USE_APP_COMMANDS":
            code = code + "Discord.PermissionsBitField.Flags.UseApplicationCommands, true)";
            break;
          case "CONNECT_TO_VOICE_CHANNEL":
            code = code + "Discord.PermissionsBitField.Flags.Connect, true)";
            break;
          case "SPEAK":
            code = code + "Discord.PermissionsBitField.Flags.Speak, true)";
            break;
          case "USE_VIDEO":
            code = code + "Discord.PermissionsBitField.Flags.Stream, true)";
            break;
          case "START_ACTIVITY":
            code = code + "Discord.PermissionsBitField.Flags.UseEmbeddedActivities, true)";
            break;
          case "USE_VOICE_DETECTOR":
            code = code + "Discord.PermissionsBitField.Flags.UseVAD, true)";
            break;
          case "PRIORITY_SPEAKER":
            code = code + "Discord.PermissionsBitField.Flags.PrioritySpeaker, true)";
            break;
          case "MUTE_MEMBER":
            code = code + "Discord.PermissionsBitField.Flags.MuteMembers, true)";
            break;
          case "DEAF_MEMBER":
            code = code + "Discord.PermissionsBitField.Flags.DeafenMembers, true)";
            break;
          case "MOOVE_MEMBER":
            code = code + "Discord.PermissionsBitField.Flags.MoveMembers, true)";
            break;
          case "MANAGE_VOICE_CHANNEL_EVENTS":
            code = code + "Discord.PermissionsBitField.Flags.ManageEvents, true)";
            break;
          default:
            code = code + "Discord.PermissionsBitField.Flags.ViewChannel, true)";
            break;
        }

        return [code, Blockly.JavaScript.ORDER_NONE];
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_channel_set_permission"] = function (block) {
      const valueUserOrRank = Blockly.JavaScript.valueToCode(block, "userOrRank", Blockly.JavaScript.ORDER_ATOMIC);
      const dropdownPermission = block.getFieldValue("permission"); //Regex not needed : only used for a switch and never executed
      const dropdownIsGranted = block.getFieldValue("isGranted");
      const valueChannel = Blockly.JavaScript.valueToCode(block, "channel", Blockly.JavaScript.ORDER_ATOMIC);
      let permissionToEdit = "ViewChannel"; //Used to store the permission to edit
      let code = "";

      if (valueUserOrRank !== "" && dropdownPermission !== "" && dropdownIsGranted !== "" && valueChannel !== "") {
        switch (dropdownPermission) {
          case "SEE_CHANNEL":
            permissionToEdit = "ViewChannel";
            break;
          case "MANAGE_CHANNEL":
            permissionToEdit = "ManageChannels";
            break;
          case "MANAGE_CHANNEL_PERMISSIONS":
            permissionToEdit = "ManageRoles";
            break;
          case "MANAGE_CHANNEL_WEBHOOKS":
            permissionToEdit = "ManageWebhooks";
            break;
          case "CREATE_INVITE":
            permissionToEdit = "CreateInstantInvite";
            break;
          case "SEND_MESSAGES":
            permissionToEdit = "SendMessages";
            break;
          case "SEND_MESSAGES_IN_THREADS":
            permissionToEdit = "SendMessagesInThreads";
            break;
          case "CREATE_PUBLIC_THREADS":
            permissionToEdit = "CreatePublicThreads";
            break;
          case "CREATE_PRIVATE_THREADS":
            permissionToEdit = "CreatePrivateThreads";
            break;
          case "EMBED_LINKS":
            permissionToEdit = "EmbedLinks";
            break;
          case "ADD_FILES":
            permissionToEdit = "AttachFiles";
            break;
          case "ADD_REACTIONS":
            permissionToEdit = "AddReactions";
            break;
          case "USE_EXTERNAL_EMOJIS":
            permissionToEdit = "UseExternalEmojis";
            break;
          case "USE_EXTERNAL_STICKERS":
            permissionToEdit = "UseExternalStickers";
            break;
          case "PING_EVERYONE":
            permissionToEdit = "MentionEveryone";
            break;
          case "MANAGE_MESSAGES":
            permissionToEdit = "ManageMessages";
            break;
          case "MANAGE_THREADS":
            permissionToEdit = "ManageThreads";
            break;
          case "SEE_OLD_MESSAGES":
            permissionToEdit = "ReadMessageHistory";
            break;
          case "SEND_VOICE_MESSAGE":
            permissionToEdit = "SendTTSMessages";
            break;
          case "USE_APP_COMMANDS":
            permissionToEdit = "UseApplicationCommands";
            break;
          case "CONNECT_TO_VOICE_CHANNEL":
            permissionToEdit = "Connect";
            break;
          case "SPEAK":
            permissionToEdit = "Speak";
            break;
          case "USE_VIDEO":
            permissionToEdit = "Stream";
            break;
          case "START_ACTIVITY":
            permissionToEdit = "UseEmbeddedActivities";
            break;
          case "USE_VOICE_DETECTOR":
            permissionToEdit = "UseVAD";
            break;
          case "PRIORITY_SPEAKER":
            permissionToEdit = "PrioritySpeaker";
            break;
          case "MUTE_MEMBER":
            permissionToEdit = "MuteMembers";
            break;
          case "DEAF_MEMBER":
            permissionToEdit = "DeafenMembers";
            break;
          case "MOOVE_MEMBER":
            permissionToEdit = "MoveMembers";
            break;
          case "MANAGE_VOICE_CHANNEL_EVENTS":
            permissionToEdit = "ManageEvents";
            break;
          default:
            permissionToEdit = "ViewChannel";
            break;
        }
        switch (dropdownIsGranted) {
          case "GRANT":
            code =
              "await " +
              valueChannel +
              ".permissionOverwrites.edit(" +
              valueUserOrRank +
              ", {" +
              permissionToEdit +
              ": true});\n"; //If two modifications are made at the same time, that's will be very buggy
            break;
          case "DENY":
            code =
              "await " +
              valueChannel +
              ".permissionOverwrites.edit(" +
              valueUserOrRank +
              ", {" +
              permissionToEdit +
              ": false});\n";
            break;
          default: //UNDEFINED is sent here
            code =
              "await " +
              valueChannel +
              ".permissionOverwrites.edit(" +
              valueUserOrRank +
              ", {" +
              permissionToEdit +
              ": null});\n";
            break;
        }
        return code;
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_channel_list"] = function (block) {
      //const code = 'await CURRENT_GUILD.channels.fetch()';
      const code = ""; //This block is disabled
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript["block_channel_get_category_with_id"] = function (block) {
      const valueCategoryId = Blockly.JavaScript.valueToCode(block, "category_id", Blockly.JavaScript.ORDER_ATOMIC);
      if (valueCategoryId !== "") {
        const code = "await CURRENT_GUILD.channels.fetch(" + valueCategoryId + ")";
        return [code, Blockly.JavaScript.ORDER_NONE];
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_channel_get_thread_parent"] = function (block) {
      const valueChannel = Blockly.JavaScript.valueToCode(block, "channel", Blockly.JavaScript.ORDER_ATOMIC);
      if (valueChannel !== "") {
        const code = "(" + valueChannel + ".isThread() ? " + valueChannel + ".parent : undefined)";
        return [code, Blockly.JavaScript.ORDER_NONE];
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_channel_set_thread_locked"] = function (block) {
      const dropdownIsLocked = block.getFieldValue("isLocked"); //Regex not needed : Just used for an if
      const valueChannel = Blockly.JavaScript.valueToCode(block, "channel", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueChannel !== "" && dropdownIsLocked !== "") {
        const code = valueChannel + ".setLocked(" + (dropdownIsLocked === "LOCK" ? "true" : "false") + ");\n";
        return code;
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_channel_is_thread_locked"] = function (block) {
      const valueChannel = Blockly.JavaScript.valueToCode(block, "channel", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueChannel !== "") {
        const code = valueChannel + ".locked";
        return [code, Blockly.JavaScript.ORDER_NONE];
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_channel_set_thread_archived"] = function (block) {
      const dropdownIsArchived = block.getFieldValue("isArchived"); //Regex not needed : only used for an if
      const valueChannel = Blockly.JavaScript.valueToCode(block, "channel", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueChannel !== "" && dropdownIsArchived !== "") {
        const code = valueChannel + ".setArchived(" + (dropdownIsArchived === "ARCHIVED" ? "true" : "false") + ");\n";
        return code;
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_channel_is_thread_archived"] = function (block) {
      const valueChannel = Blockly.JavaScript.valueToCode(block, "channel", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueChannel !== "") {
        const code = valueChannel + ".archived";
        return [code, Blockly.JavaScript.ORDER_NONE];
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    /* ##### RANKS blocks ##### */

    Blockly.JavaScript["block_rank_create"] = function (block) {
      const valueName = Blockly.JavaScript.valueToCode(block, "name", Blockly.JavaScript.ORDER_ATOMIC);
      const colourColor = block.getFieldValue("color");
      const checkboxIsPingeable = block.getFieldValue("is_pingeable") === "TRUE";
      const checkboxAreMembersShown = block.getFieldValue("are_members_shown") === "TRUE";
      const valuePosition = Blockly.JavaScript.valueToCode(block, "position", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueName !== "" && definedRegexes.isHexColor(colourColor) && valuePosition !== "") {
        const code =
          "createdRank = await CURRENT_GUILD.roles.create({name:" +
          valueName +
          ", color:'" +
          colourColor +
          "', position: " +
          valuePosition +
          ", hoist: " +
          checkboxAreMembersShown +
          ", mentionable: " +
          checkboxIsPingeable +
          "});\n";
        return code;
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_rank_var_created_rank"] = function (block) {
      const code = "createdRank";
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript["block_rank_delete"] = function (block) {
      const valueRank = Blockly.JavaScript.valueToCode(block, "rank", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueRank !== "") {
        const code = valueRank + ".delete();\n";
        return code;
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_rank_edit_name"] = function (block) {
      const valueRank = Blockly.JavaScript.valueToCode(block, "rank", Blockly.JavaScript.ORDER_ATOMIC);
      const valueName = Blockly.JavaScript.valueToCode(block, "name", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueRank !== "" && valueName !== "") {
        const code = valueRank + ".setName(" + valueName + ");\n";
        return code;
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_rank_edit_color"] = function (block) {
      const valueRank = Blockly.JavaScript.valueToCode(block, "rank", Blockly.JavaScript.ORDER_ATOMIC);
      const colourColor = block.getFieldValue("color");

      if (valueRank !== "" && definedRegexes.isHexColor(colourColor)) {
        const code = valueRank + ".setColor('" + colourColor + "');\n";
        return code;
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_rank_edit_pingeable"] = function (block) {
      const valueRank = Blockly.JavaScript.valueToCode(block, "rank", Blockly.JavaScript.ORDER_ATOMIC);
      const dropdownIsPingeable = block.getFieldValue("IS_PINGEABLE"); //Regex not needed : used only for an if

      if (valueRank !== "") {
        const code = valueRank + ".setMentionable(" + (dropdownIsPingeable === "PINGEABLE" ? "true" : "false") + ");\n";
        return code;
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_rank_edit_members_shown"] = function (block) {
      const valueRank = Blockly.JavaScript.valueToCode(block, "rank", Blockly.JavaScript.ORDER_ATOMIC);
      const dropdownAreMemberShown = block.getFieldValue("ARE_MEMBER_SHOWN"); //Regex not needed : used only for an if

      if (valueRank !== "") {
        const code = valueRank + ".setHoist(" + (dropdownAreMemberShown === "SHOWN" ? "true" : "false") + ");\n";
        return code;
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_rank_edit_position"] = function (block) {
      const valueRank = Blockly.JavaScript.valueToCode(block, "rank", Blockly.JavaScript.ORDER_ATOMIC);
      const valuePosition = Blockly.JavaScript.valueToCode(block, "position", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueRank !== "" && valuePosition !== "") {
        const code = valueRank + ".setPosition(" + valuePosition + ");\n";
        return code;
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_rank_get_rank_with_id"] = function (block) {
      const valueId = Blockly.JavaScript.valueToCode(block, "id", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueId !== "") {
        const code = "CURRENT_GUILD.roles.resolve(" + valueId + ")";
        return [code, Blockly.JavaScript.ORDER_NONE];
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_rank_edit_permissions"] = function (block) {
      const dropdownPermission = block.getFieldValue("permission"); //Regex not needed : used only for a switch
      const valueRank = Blockly.JavaScript.valueToCode(block, "rank", Blockly.JavaScript.ORDER_ATOMIC);
      const dropdownIsGranted = block.getFieldValue("isGranted"); //Regex not needed : used only for an if

      if (dropdownPermission !== "" && valueRank !== "" && dropdownIsGranted !== "") {
        let currentPermission = "Discord.PermissionsBitField.Flags.ViewChannel";
        let code = "";
        switch (dropdownPermission) {
          case "SEE_CHANNEL":
            currentPermission = "Discord.PermissionsBitField.Flags.ViewChannel";
            break;
          case "MANAGE_CHANNEL":
            currentPermission = "Discord.PermissionsBitField.Flags.ManageChannels";
            break;
          case "MANAGE_RANKS":
            currentPermission = "Discord.PermissionsBitField.Flags.ManageRoles";
            break;
          case "MANAGE_EMOJIS":
            currentPermission = "Discord.PermissionsBitField.Flags.ManageEmojisAndStickers";
            break;
          case "SEE_SERVER_LOGS":
            currentPermission = "Discord.PermissionsBitField.Flags.ViewAuditLog";
            break;
          case "MANAGE_WEBHOOKS":
            currentPermission = "Discord.PermissionsBitField.Flags.ManageWebhooks";
            break;
          case "MANAGE_SERVER":
            currentPermission = "Discord.PermissionsBitField.Flags.ManageGuild";
            break;
          case "CREATE_INVITE":
            currentPermission = "Discord.PermissionsBitField.Flags.CreateInstantInvite";
            break;
          case "EDIT_USERNAME":
            currentPermission = "Discord.PermissionsBitField.Flags.ChangeNickname";
            break;
          case "EDIT_OTHERS_USERNAME":
            currentPermission = "Discord.PermissionsBitField.Flags.ManageNicknames";
            break;
          case "KICK":
            currentPermission = "Discord.PermissionsBitField.Flags.KickMembers";
            break;
          case "BAN":
            currentPermission = "Discord.PermissionsBitField.Flags.BanMembers";
            break;
          case "TIMEOUT":
            currentPermission = "Discord.PermissionsBitField.Flags.ModerateMembers";
            break;
          case "SEND_MESSAGES":
            currentPermission = "Discord.PermissionsBitField.Flags.SendMessages";
            break;
          case "SEND_MESSAGES_IN_THREADS":
            currentPermission = "Discord.PermissionsBitField.Flags.SendMessagesInThreads";
            break;
          case "CREATE_PUBLIC_THREADS":
            currentPermission = "Discord.PermissionsBitField.Flags.CreatePublicThreads";
            break;
          case "CREATE_PRIVATE_THREADS":
            currentPermission = "Discord.PermissionsBitField.Flags.CreatePrivateThreads";
            break;
          case "EMBED_LINKS":
            currentPermission = "Discord.PermissionsBitField.Flags.EmbedLinks";
            break;
          case "ADD_FILES":
            currentPermission = "Discord.PermissionsBitField.Flags.AttachFiles";
            break;
          case "ADD_REACTIONS":
            currentPermission = "Discord.PermissionsBitField.Flags.AddReactions";
            break;
          case "USE_EXTERNAL_EMOJIS":
            currentPermission = "Discord.PermissionsBitField.Flags.UseExternalEmojis";
            break;
          case "USE_EXTERNAL_STICKERS":
            currentPermission = "Discord.PermissionsBitField.Flags.UseExternalStickers";
            break;
          case "PING_EVERYONE":
            currentPermission = "Discord.PermissionsBitField.Flags.MentionEveryone";
            break;
          case "MANAGE_MESSAGES":
            currentPermission = "Discord.PermissionsBitField.Flags.ManageMessages";
            break;
          case "MANAGE_THREADS":
            currentPermission = "Discord.PermissionsBitField.Flags.ManageThreads";
            break;
          case "SEE_OLD_MESSAGES":
            currentPermission = "Discord.PermissionsBitField.Flags.ReadMessageHistory";
            break;
          case "SEND_VOICE_MESSAGE":
            currentPermission = "Discord.PermissionsBitField.Flags.SendTTSMessages";
            break;
          case "USE_APP_COMMANDS":
            currentPermission = "Discord.PermissionsBitField.Flags.UseApplicationCommands";
            break;
          case "CONNECT_TO_VOICE_CHANNEL":
            currentPermission = "Discord.PermissionsBitField.Flags.Connect";
            break;
          case "SPEAK":
            currentPermission = "Discord.PermissionsBitField.Flags.Speak";
            break;
          case "USE_VIDEO":
            currentPermission = "Discord.PermissionsBitField.Flags.Stream";
            break;
          case "START_ACTIVITY":
            currentPermission = "Discord.PermissionsBitField.Flags.UseEmbeddedActivities";
            break;
          case "VOICE_DETECTION":
            currentPermission = "Discord.PermissionsBitField.Flags.UseVAD";
            break;
          case "PRIORITY_SPEAKER":
            currentPermission = "Discord.PermissionsBitField.Flags.PrioritySpeaker";
            break;
          case "MUTE_MEMBER":
            currentPermission = "Discord.PermissionsBitField.Flags.MuteMembers";
            break;
          case "DEAF_MEMBER":
            currentPermission = "Discord.PermissionsBitField.Flags.DeafenMembers";
            break;
          case "MOOVE_MEMBER":
            currentPermission = "Discord.PermissionsBitField.Flags.MoveMembers";
            break;
          case "MANAGE_EVENTS":
            currentPermission = "Discord.PermissionsBitField.Flags.ManageEvents";
            break;
          case "ADMINISTRATOR":
            currentPermission = "Discord.PermissionsBitField.Flags.Administrator";
            break;
          default:
            currentPermission = "Discord.PermissionsBitField.Flags.ViewChannel";
            break;
        }

        if (dropdownIsGranted === "GRANT") {
          code =
            "await " +
            valueRank +
            ".edit({permissions:" +
            valueRank +
            ".permissions.add(" +
            currentPermission +
            ")});\n";
        } //We get the permission bits, remove the bits of the selected permission and send these bits to discord
        else if (dropdownIsGranted === "DENY") {
          code =
            "await " +
            valueRank +
            ".edit({permissions:" +
            valueRank +
            ".permissions.remove(" +
            currentPermission +
            ")});\n";
        }

        return code;
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_rank_get_name"] = function (block) {
      const valueRank = Blockly.JavaScript.valueToCode(block, "rank", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueRank !== "") {
        const code = valueRank + ".name || ''";
        return [code, Blockly.JavaScript.ORDER_NONE];
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_rank_get_position"] = function (block) {
      const valueRank = Blockly.JavaScript.valueToCode(block, "rank", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueRank !== "") {
        const code = valueRank + ".position";
        return [code, Blockly.JavaScript.ORDER_NONE];
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_rank_get_color"] = function (block) {
      const valueRank = Blockly.JavaScript.valueToCode(block, "rank", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueRank !== "") {
        const code = valueRank + ".color || '#000000'";
        return [code, Blockly.JavaScript.ORDER_NONE];
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_rank_get_id"] = function (block) {
      const valueRank = Blockly.JavaScript.valueToCode(block, "rank", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueRank !== "") {
        const code = valueRank + ".id || ''";
        return [code, Blockly.JavaScript.ORDER_NONE];
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_rank_has_permission"] = function (block) {
      const valueRank = Blockly.JavaScript.valueToCode(block, "rank", Blockly.JavaScript.ORDER_ATOMIC);
      const dropdownPermission = block.getFieldValue("permission"); //Regex not needed : used only for a switch

      if (valueRank !== "" && dropdownPermission !== "") {
        let currentPermission = "Discord.PermissionsBitField.Flags.ViewChannel";
        switch (dropdownPermission) {
          case "SEE_CHANNEL":
            currentPermission = "Discord.PermissionsBitField.Flags.ViewChannel";
            break;
          case "MANAGE_CHANNEL":
            currentPermission = "Discord.PermissionsBitField.Flags.ManageChannels";
            break;
          case "MANAGE_RANKS":
            currentPermission = "Discord.PermissionsBitField.Flags.ManageRoles";
            break;
          case "MANAGE_EMOJIS":
            currentPermission = "Discord.PermissionsBitField.Flags.ManageEmojisAndStickers";
            break;
          case "SEE_SERVER_LOGS":
            currentPermission = "Discord.PermissionsBitField.Flags.ViewAuditLog";
            break;
          case "MANAGE_WEBHOOKS":
            currentPermission = "Discord.PermissionsBitField.Flags.ManageWebhooks";
            break;
          case "MANAGE_SERVER":
            currentPermission = "Discord.PermissionsBitField.Flags.ManageGuild";
            break;
          case "CREATE_INVITE":
            currentPermission = "Discord.PermissionsBitField.Flags.CreateInstantInvite";
            break;
          case "EDIT_USERNAME":
            currentPermission = "Discord.PermissionsBitField.Flags.ChangeNickname";
            break;
          case "EDIT_OTHERS_USERNAME":
            currentPermission = "Discord.PermissionsBitField.Flags.ManageNicknames";
            break;
          case "KICK":
            currentPermission = "Discord.PermissionsBitField.Flags.KickMembers";
            break;
          case "BAN":
            currentPermission = "Discord.PermissionsBitField.Flags.BanMembers";
            break;
          case "TIMEOUT":
            currentPermission = "Discord.PermissionsBitField.Flags.ModerateMembers";
            break;
          case "SEND_MESSAGES":
            currentPermission = "Discord.PermissionsBitField.Flags.SendMessages";
            break;
          case "SEND_MESSAGES_IN_THREADS":
            currentPermission = "Discord.PermissionsBitField.Flags.SendMessagesInThreads";
            break;
          case "CREATE_PUBLIC_THREADS":
            currentPermission = "Discord.PermissionsBitField.Flags.CreatePublicThreads";
            break;
          case "CREATE_PRIVATE_THREADS":
            currentPermission = "Discord.PermissionsBitField.Flags.CreatePrivateThreads";
            break;
          case "EMBED_LINKS":
            currentPermission = "Discord.PermissionsBitField.Flags.EmbedLinks";
            break;
          case "ADD_FILES":
            currentPermission = "Discord.PermissionsBitField.Flags.AttachFiles";
            break;
          case "ADD_REACTIONS":
            currentPermission = "Discord.PermissionsBitField.Flags.AddReactions";
            break;
          case "USE_EXTERNAL_EMOJIS":
            currentPermission = "Discord.PermissionsBitField.Flags.UseExternalEmojis";
            break;
          case "USE_EXTERNAL_STICKERS":
            currentPermission = "Discord.PermissionsBitField.Flags.UseExternalStickers";
            break;
          case "PING_EVERYONE":
            currentPermission = "Discord.PermissionsBitField.Flags.MentionEveryone";
            break;
          case "MANAGE_MESSAGES":
            currentPermission = "Discord.PermissionsBitField.Flags.ManageMessages";
            break;
          case "MANAGE_THREADS":
            currentPermission = "Discord.PermissionsBitField.Flags.ManageThreads";
            break;
          case "SEE_OLD_MESSAGES":
            currentPermission = "Discord.PermissionsBitField.Flags.ReadMessageHistory";
            break;
          case "SEND_VOICE_MESSAGE":
            currentPermission = "Discord.PermissionsBitField.Flags.SendTTSMessages";
            break;
          case "USE_APP_COMMANDS":
            currentPermission = "Discord.PermissionsBitField.Flags.UseApplicationCommands";
            break;
          case "CONNECT_TO_VOICE_CHANNEL":
            currentPermission = "Discord.PermissionsBitField.Flags.Connect";
            break;
          case "SPEAK":
            currentPermission = "Discord.PermissionsBitField.Flags.Speak";
            break;
          case "USE_VIDEO":
            currentPermission = "Discord.PermissionsBitField.Flags.Stream";
            break;
          case "START_ACTIVITY":
            currentPermission = "Discord.PermissionsBitField.Flags.UseEmbeddedActivities";
            break;
          case "VOICE_DETECTION":
            currentPermission = "Discord.PermissionsBitField.Flags.UseVAD";
            break;
          case "PRIORITY_SPEAKER":
            currentPermission = "Discord.PermissionsBitField.Flags.PrioritySpeaker";
            break;
          case "MUTE_MEMBER":
            currentPermission = "Discord.PermissionsBitField.Flags.MuteMembers";
            break;
          case "DEAF_MEMBER":
            currentPermission = "Discord.PermissionsBitField.Flags.DeafenMembers";
            break;
          case "MOOVE_MEMBER":
            currentPermission = "Discord.PermissionsBitField.Flags.MoveMembers";
            break;
          case "MANAGE_EVENTS":
            currentPermission = "Discord.PermissionsBitField.Flags.ManageEvents";
            break;
          case "ADMINISTRATOR":
            currentPermission = "Discord.PermissionsBitField.Flags.Administrator";
            break;
          default:
            currentPermission = "Discord.PermissionsBitField.Flags.ViewChannel";
            break;
        }

        const code = valueRank + ".permissions.has(" + currentPermission + ", true)";
        return [code, Blockly.JavaScript.ORDER_NONE];
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_rank_get_everyone"] = function (block) {
      const code = "CURRENT_GUILD.roles.everyone";
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    /* ##### EMBEDS blocks ##### */

    Blockly.JavaScript["block_embed_create"] = function (block) {
      const valueName = Blockly.JavaScript.valueToCode(block, "name", Blockly.JavaScript.ORDER_ATOMIC);
      const valueColor = Blockly.JavaScript.valueToCode(block, "color", Blockly.JavaScript.ORDER_ATOMIC);
      const statementsOptions = Blockly.JavaScript.statementToCode(block, "options");
      const valueDescription = Blockly.JavaScript.valueToCode(block, "description", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueName !== "" && valueColor !== "") {
        const code =
          "embedMessage = new Discord.EmbedBuilder().setTitle(" +
          valueName +
          ").setDescription((" +
          valueDescription +
          ").replaceAll('<br>', '\\n')).setColor(" +
          valueColor +
          ")" +
          statementsOptions.trim() +
          ";\n";
        return code;
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_embed_option_set_image"] = function (block) {
      const valueImageUrl = Blockly.JavaScript.valueToCode(block, "image_url", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueImageUrl !== "") {
        const code =
          ".setImage((" +
          valueImageUrl +
          '.substr(0, 7)==="http://" || ' +
          valueImageUrl +
          '.substr(0, 8)==="https://")?' +
          valueImageUrl +
          ':"https://cdn.discordapp.com/attachments/973567795189153802/986035610206744626/Sans_titre.png")';
        return code;
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_embed_option_set_thumbnail"] = function (block) {
      const valueThumbnailUrl = Blockly.JavaScript.valueToCode(block, "thumbnail_url", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueThumbnailUrl !== "") {
        const code =
          ".setThumbnail((" +
          valueThumbnailUrl +
          '.substr(0, 7)==="http://" || ' +
          valueThumbnailUrl +
          '.substr(0, 8)==="https://")?' +
          valueThumbnailUrl +
          ':"https://cdn.discordapp.com/attachments/973567795189153802/986035610206744626/Sans_titre.png")';
        return code;
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_embed_option_add_field"] = function (block) {
      const valueName = Blockly.JavaScript.valueToCode(block, "name", Blockly.JavaScript.ORDER_ATOMIC);
      const valueText = Blockly.JavaScript.valueToCode(block, "text", Blockly.JavaScript.ORDER_ATOMIC);
      const checkboxInline = block.getFieldValue("inline") === "TRUE";

      if (valueName !== "" && valueText !== "") {
        const code =
          ".addFields({name:" +
          valueName +
          ", value:(" +
          valueText +
          ").replaceAll('<br>', '\\n'), inline:" +
          (checkboxInline ? "true" : "false") +
          "})";
        return code;
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_embed_option_set_author"] = function (block) {
      const valueName = Blockly.JavaScript.valueToCode(block, "name", Blockly.JavaScript.ORDER_ATOMIC);
      const valueUrl = Blockly.JavaScript.valueToCode(block, "URL", Blockly.JavaScript.ORDER_ATOMIC);
      const valueIconUrl = Blockly.JavaScript.valueToCode(block, "icon_URL", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueName !== "") {
        const code =
          ".setAuthor({name:" +
          valueName +
          " " +
          (valueUrl !== ""
            ? ", url: (" +
              valueUrl +
              '.substr(0, 7)==="http://" || ' +
              valueUrl +
              '.substr(0, 8)==="https://")?' +
              valueUrl +
              ':"https://cdn.discordapp.com/attachments/973567795189153802/986035610206744626/Sans_titre.png"'
            : "") +
          " " +
          (valueIconUrl !== ""
            ? ", iconURL: (" +
              valueIconUrl +
              '.substr(0, 7)==="http://" || ' +
              valueIconUrl +
              '.substr(0, 8)==="https://")?' +
              valueIconUrl +
              ':"https://cdn.discordapp.com/attachments/973567795189153802/986035610206744626/Sans_titre.png"'
            : "") +
          "})";
        return code;
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_embed_option_set_footer"] = function (block) {
      const valueName = Blockly.JavaScript.valueToCode(block, "name", Blockly.JavaScript.ORDER_ATOMIC);
      const valueIconUrl = Blockly.JavaScript.valueToCode(block, "icon_URL", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueName !== "") {
        const code =
          ".setFooter({text: " +
          valueName +
          " " +
          (valueIconUrl !== ""
            ? ", iconURL: (" +
              valueIconUrl +
              '.substr(0, 7)==="http://" || ' +
              valueIconUrl +
              '.substr(0, 8)==="https://")?' +
              valueIconUrl +
              ':"https://cdn.discordapp.com/attachments/973567795189153802/986035610206744626/Sans_titre.png"'
            : "") +
          "})";
        return code;
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_embed_option_set_timestamp"] = function (block) {
      // TODO: Assemble JavaScript into code variable.
      const code = ".setTimestamp()";
      return code;
    };

    Blockly.JavaScript["block_embed_send"] = function (block) {
      const valueEmbed = Blockly.JavaScript.valueToCode(block, "embed", Blockly.JavaScript.ORDER_ATOMIC);
      const valueChannel = Blockly.JavaScript.valueToCode(block, "channel", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueEmbed !== "" && valueChannel !== "") {
        //GuildMember has a .user property, not the Channel objects
        const code =
          "if(" +
          valueChannel +
          ".user) sentMessage = await " +
          valueChannel +
          ".send({ embeds: [Discord.EmbedBuilder.from(" +
          valueEmbed +
          ").setFooter({iconURL: " +
          valueChannel +
          '.guild.iconURL({dynamic:true}), text:"Sent from the server "+' +
          valueChannel +
          ".guild.name})] });  \n\
          else sentMessage = await " +
          valueChannel +
          ".send({ embeds: [" +
          valueEmbed +
          "] });\n";

        return code;
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_embed_var_embed"] = function (block) {
      const code = "embedMessage";
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    /* ##### GUILD blocks ##### */

    Blockly.JavaScript["block_guild_get_id"] = function (block) {
      const code = "CURRENT_GUILD.id || ''";
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript["block_guild_get_boosts_count"] = function (block) {
      const code = "CURRENT_GUILD.premiumSubscriptionCount";
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript["block_guild_get_members_count"] = function (block) {
      const code = "CURRENT_GUILD.memberCount";
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript["block_guild_create_invite"] = function (block) {
      const dropdownDuration = block.getFieldValue("duration"); //Regex not needed : used only for a switch
      const dropdownUses = block.getFieldValue("uses"); //Regex not needed : used only for a switch
      const valueChannel = Blockly.JavaScript.valueToCode(block, "channel", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueChannel === "") {
        return "";
      }

      let duration = 0;
      let maxUses = 0;

      switch (dropdownDuration) {
        case "30MIN":
          duration = 1800; //In seconds
          break;
        case "1H":
          duration = 3600;
          break;
        case "6H":
          duration = 21600;
          break;
        case "12H":
          duration = 43200;
          break;
        case "1D":
          duration = 86400;
          break;
        case "1W":
          duration = 604800;
          break;
        case "NEVER":
          duration = 0;
          break;
        default:
          duration = 1800;
          break;
      }

      switch (dropdownUses) {
        case "1":
          maxUses = 1;
          break;
        case "5":
          maxUses = 5;
          break;
        case "10":
          maxUses = 10;
          break;
        case "25":
          maxUses = 25;
          break;
        case "50":
          maxUses = 50;
          break;
        case "100":
          maxUses = 100;
          break;
        default:
          maxUses = 0; //Infinity
          break;
      }

      const code =
        "(await CURRENT_GUILD.invites.create(" +
        valueChannel +
        ", {maxAge: " +
        duration +
        ", maxUses: " +
        maxUses +
        "})).toString()";
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript["block_guild_get_name"] = function (block) {
      const code = "CURRENT_GUILD.name || ''";
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    /* ##### COLOR blocks ##### */
    Blockly.JavaScript["block_color_hex"] = function (block) {
      const textColor = block.getFieldValue("color");
      const code = definedRegexes.isHexColor(textColor) ? "'" + textColor + "'" : ""; //A regex check if color hex is valid
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    /* ##### Temporary VARIABLES blocks ##### */
    Blockly.JavaScript["block_var_save"] = function (block) {
      const valueInput = Blockly.JavaScript.valueToCode(block, "INPUT", Blockly.JavaScript.ORDER_ATOMIC);
      const textName = block.getFieldValue("NAME");
      //const dropdown_type = block.getFieldValue('TYPE');

      if (!definedRegexes.variableName(textName)) {
        throw errorsTypes.invalidRegex;
      }

      if (valueInput == "" || valueInput == undefined) {
        //Error
        return "temporaryStorage." + textName + " = undefined;\n";
      }
      //OK
      else {
        return "temporaryStorage." + textName + " = " + valueInput + ";\n";
      }
    };

    Blockly.JavaScript["block_var_get"] = function (block) {
      const textName = block.getFieldValue("NAME");

      if (!definedRegexes.variableName(textName)) {
        throw errorsTypes.invalidRegex;
      }

      const code = "temporaryStorage." + textName;

      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    /* ##### Emojis blocks ##### */

    Blockly.JavaScript["block_emoji_get_name"] = function (block) {
      const valueEmoji = Blockly.JavaScript.valueToCode(block, "emoji", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueEmoji !== "") {
        return [valueEmoji + ".name", Blockly.JavaScript.ORDER_NONE];
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_emoji_react"] = function (block) {
      const valueEmoji = Blockly.JavaScript.valueToCode(block, "emoji", Blockly.JavaScript.ORDER_ATOMIC);
      const valueMessage = Blockly.JavaScript.valueToCode(block, "message", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueEmoji !== "" && valueMessage !== "") {
        return "await sleep(1000).then(async()=>{" + valueMessage + ".react(" + valueEmoji + ");});\n";
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_emoji_get_number_of_reactions"] = function (block) {
      let valueEmoji = Blockly.JavaScript.valueToCode(block, "emoji", Blockly.JavaScript.ORDER_ATOMIC);
      const valueMessage = Blockly.JavaScript.valueToCode(block, "Message", Blockly.JavaScript.ORDER_ATOMIC);
      if (valueEmoji !== "" && valueMessage !== "") {
        if (valueEmoji === "(eventReaction)") {
          valueEmoji = "(eventReaction.id || eventReaction.name)";
        }
        //Sending directly this object will cause issues, so if the user gave the object, we get the id ( for custom emojis ) or the name ( Discord emojis )
        if (valueEmoji.includes(":")) {
          //That's a custom emoji. We will remove everything except the ID. I don't know why, but that don't work if we don't do that...
          //We check in front-end that it's valid. If invalid data come here, an error will be thrown by node and caught in the caller context.
          valueEmoji = valueEmoji.split(":")[2];
          valueEmoji = valueEmoji.split(">")[0];
          valueEmoji = "'" + valueEmoji + "'";
        }

        return [
          valueMessage +
            ".reactions.resolve(" +
            valueEmoji +
            ") ? " +
            valueMessage +
            ".reactions.resolve(" +
            valueEmoji +
            ").count : 0",
          Blockly.JavaScript.ORDER_NONE,
        ]; //If emoji found, return the count, else, return 0
      } else {
        return ["undefined", Blockly.JavaScript.ORDER_NONE];
      }
    };

    Blockly.JavaScript["block_emoji_remove_reaction"] = function (block) {
      let valueEmoji = Blockly.JavaScript.valueToCode(block, "emoji", Blockly.JavaScript.ORDER_ATOMIC);
      const valueUser = Blockly.JavaScript.valueToCode(block, "User", Blockly.JavaScript.ORDER_ATOMIC);
      const valueMessage = Blockly.JavaScript.valueToCode(block, "Message", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueEmoji !== "" && valueUser !== "" && valueMessage !== "") {
        if (valueEmoji === "(eventReaction)") {
          valueEmoji = "(eventReaction.id || eventReaction.name)";
        }
        //Sending directly this object will cause issues, so if the user gave the object, we get the id ( for custom emojis ) or the name ( Discord emojis )
        if (valueEmoji.includes(":")) {
          //That's a custom emoji. We will remove everything except the ID. I don't know why, but that don't work if we don't do that...
          //We check in front-end that it's valid. If invalid data come here, an error will be thrown by node and caught in the caller context.
          valueEmoji = valueEmoji.split(":")[2];
          valueEmoji = valueEmoji.split(">")[0];
          valueEmoji = "'" + valueEmoji + "'";
        }

        return (
          "if(" +
          valueMessage +
          ".reactions.resolve(" +
          valueEmoji +
          ")){await sleep(1000).then(async()=>{" +
          valueMessage +
          ".reactions.resolve(" +
          valueEmoji +
          ").users.remove(" +
          valueUser +
          ");});}\n"
        );
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_emoji_remove_all_reactions"] = function (block) {
      const valueMessage = Blockly.JavaScript.valueToCode(block, "Message", Blockly.JavaScript.ORDER_ATOMIC);

      if (valueMessage !== "") {
        return valueMessage + ".reactions.removeAll();\n";
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    /* ##### Miscellaneous blocks ##### */

    Blockly.JavaScript["block_miscellaneous_return"] = function (block) {
      const code = "return();\n";
      return code;
    };

    Blockly.JavaScript["block_miscellaneous_str_to_int"] = function (block) {
      const valueString = Blockly.JavaScript.valueToCode(block, "STRING", Blockly.JavaScript.ORDER_ATOMIC);
      if (valueString != undefined && valueString != "") {
        return ["strToInt(" + valueString + ")", Blockly.JavaScript.ORDER_NONE];
      } else {
        return ["-1", Blockly.JavaScript.ORDER_NONE];
      }
    };

    /* ##### Slash commands blocks ##### */

    Blockly.JavaScript["block_slash_command_creator"] = function (block) {
      //We get values for this block directly in modules/blockly/utils/manage_slash_commands.js !
      throw errorsTypes.error;
    };

    Blockly.JavaScript["block_slash_command_arg_boolean"] = function (block) {
      const textName = block.getFieldValue("NAME");
      const textDesc = block.getFieldValue("DESC");
      const checkboxRequired = block.getFieldValue("REQUIRED") === "TRUE";

      if (definedRegexes.slashCommandName(textName) && definedRegexes.slashCommandDescription(textDesc)) {
        return (
          '{"name":"' +
          textName +
          '", "desc":"' +
          textDesc +
          '", "required": ' +
          checkboxRequired +
          ', "type":"' +
          commandsArgsTypes.boolean +
          '"},'
        );
      }

      throw errorsTypes.uncompleteBlock;
    };

    Blockly.JavaScript["block_slash_command_arg_int"] = function (block) {
      const textInt = block.getFieldValue("NAME");
      const textDesc = block.getFieldValue("DESC");
      const checkboxRequired = block.getFieldValue("REQUIRED") === "TRUE";

      if (definedRegexes.slashCommandName(textInt) && definedRegexes.slashCommandDescription(textDesc)) {
        return (
          '{"name":"' +
          textInt +
          '", "desc":"' +
          textDesc +
          '", "required": ' +
          checkboxRequired +
          ', "type":"' +
          commandsArgsTypes.int +
          '"},'
        );
      }

      throw errorsTypes.uncompleteBlock;
    };

    Blockly.JavaScript["block_slash_command_arg_role"] = function (block) {
      const textRole = block.getFieldValue("NAME");
      const textDesc = block.getFieldValue("DESC");
      const checkboxRequired = block.getFieldValue("REQUIRED") === "TRUE";

      if (definedRegexes.slashCommandName(textRole) && definedRegexes.slashCommandDescription(textDesc)) {
        return (
          '{"name":"' +
          textRole +
          '", "desc":"' +
          textDesc +
          '", "required": ' +
          checkboxRequired +
          ', "type":"' +
          commandsArgsTypes.role +
          '"},'
        );
      }

      throw errorsTypes.uncompleteBlock;
    };

    Blockly.JavaScript["block_slash_command_arg_string"] = function (block) {
      const textText = block.getFieldValue("NAME");
      const textDesc = block.getFieldValue("DESC");
      const checkboxRequired = block.getFieldValue("REQUIRED") === "TRUE";

      if (definedRegexes.slashCommandName(textText) && definedRegexes.slashCommandDescription(textDesc)) {
        return (
          '{"name":"' +
          textText +
          '", "desc":"' +
          textDesc +
          '", "required": ' +
          checkboxRequired +
          ', "type":"' +
          commandsArgsTypes.string +
          '"},'
        );
      }

      throw errorsTypes.uncompleteBlock;
    };

    Blockly.JavaScript["block_slash_command_arg_user"] = function (block) {
      const textUser = block.getFieldValue("NAME");
      const textDesc = block.getFieldValue("DESC");
      const checkboxRequired = block.getFieldValue("REQUIRED") === "TRUE";

      if (definedRegexes.slashCommandName(textUser) && definedRegexes.slashCommandDescription(textDesc)) {
        return (
          '{"name":"' +
          textUser +
          '", "desc":"' +
          textDesc +
          '", "required": ' +
          checkboxRequired +
          ', "type":"' +
          commandsArgsTypes.user +
          '"},'
        );
      }

      throw errorsTypes.uncompleteBlock;
    };

    Blockly.JavaScript["block_slash_command_reply"] = function (block) {
      const valueText = Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_ATOMIC);
      if (valueText !== "") {
        const code = "interaction.editReply(" + valueText + ");\n";
        return code;
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_slash_command_arg_text_channel"] = function (block) {
      const textChannel = block.getFieldValue("NAME");
      const textDesc = block.getFieldValue("DESC");
      const checkboxRequired = block.getFieldValue("REQUIRED") === "TRUE";

      if (definedRegexes.slashCommandName(textChannel) && definedRegexes.slashCommandDescription(textDesc)) {
        return (
          '{"name":"' +
          textChannel +
          '", "desc":"' +
          textDesc +
          '", "required": ' +
          checkboxRequired +
          ', "type":"' +
          commandsArgsTypes.textChannel +
          '"},'
        );
      }

      throw errorsTypes.uncompleteBlock;
    };

    Blockly.JavaScript["block_slash_command_get_boolean"] = function (block) {
      const textName = block.getFieldValue("NAME");
      if (!definedRegexes.slashCommandName(textName)) throw errorsTypes.invalidRegex;

      const code = 'interaction.options.getBoolean("' + textName + '")';
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript["block_slash_command_get_int"] = function (block) {
      const textName = block.getFieldValue("NAME");
      if (!definedRegexes.slashCommandName(textName)) throw errorsTypes.invalidRegex;

      const code = 'interaction.options.getNumber("' + textName + '")';
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript["block_slash_command_get_role"] = function (block) {
      const textName = block.getFieldValue("NAME");
      if (!definedRegexes.slashCommandName(textName)) throw errorsTypes.invalidRegex;

      const code = 'interaction.options.getRole("' + textName + '")';
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript["block_slash_command_get_string"] = function (block) {
      const textName = block.getFieldValue("NAME");
      if (!definedRegexes.slashCommandName(textName)) throw errorsTypes.invalidRegex;

      const code = 'interaction.options.getString("' + textName + '")';
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript["block_slash_command_get_user"] = function (block) {
      const textName = block.getFieldValue("NAME");
      if (!definedRegexes.slashCommandName(textName)) throw errorsTypes.invalidRegex;

      const code = 'interaction.options.getMember("' + textName + '")';
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript["block_slash_command_get_text_channel"] = function (block) {
      const textName = block.getFieldValue("NAME");
      if (!definedRegexes.slashCommandName(textName)) throw errorsTypes.invalidRegex;

      const code = 'interaction.options.getChannel("' + textName + '")';
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript["block_slash_command_data_channel"] = function (block) {
      const code = "interaction.channel";
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript["block_slash_command_data_user"] = function (block) {
      const code = "interaction.member";
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript["block_slash_command_form_creator"] = function (block) {
      const textName = block.getFieldValue("NAME");
      const statementsInputs = Blockly.JavaScript.statementToCode(block, "INPUTS");
      //onst statements_statements = Blockly.JavaScript.statementToCode(block, 'STATEMENTS'); //This part is managed in manage_slash_commands.js

      if (!definedRegexes.formName(textName)) {
        //Invalid regex
        throw errorsTypes.invalidRegex;
      }

      const code =
        "await interaction.showModal( new Discord.ModalBuilder().setCustomId(CURRENT_GUILD.id+'" +
        textName +
        "').setTitle('" +
        textName +
        "').addComponents(" +
        statementsInputs +
        ") );\n";
      return code;
    };

    Blockly.JavaScript["block_slash_command_form_input_text"] = function (block) {
      const dropdownStyle = block.getFieldValue("STYLE");
      const textName = block.getFieldValue("NAME");
      const numberMinsize = block.getFieldValue("MINSIZE");
      const numberMaxsize = block.getFieldValue("MAXSIZE");
      const textPlaceholder = block.getFieldValue("PLACEHOLDER");
      const checkboxRequired = block.getFieldValue("REQUIRED") === "TRUE";

      if (
        !definedRegexes.formName(textName) ||
        !definedRegexes.isNumber(numberMinsize) ||
        !definedRegexes.isNumber(numberMaxsize) ||
        !definedRegexes.formPlaceholder(textPlaceholder) ||
        !(dropdownStyle === "SHORT" || dropdownStyle === "LONG")
      ) {
        throw errorsTypes.invalidRegex;
      }

      const code =
        "new Discord.ActionRowBuilder().addComponents( \
                    new Discord.TextInputBuilder().setCustomId('" +
        textName +
        "').setLabel('" +
        textName +
        "').setStyle(Discord.TextInputStyle." +
        (dropdownStyle === "SHORT" ? "Short" : "Paragraph") +
        ").setMaxLength(" +
        numberMaxsize +
        ").setMinLength(" +
        numberMinsize +
        ").setPlaceholder('" +
        textPlaceholder +
        "').setRequired(" +
        checkboxRequired +
        ")\
                  ),"; // , because that's included IN the block_slash_command_data_user block
      //Yes, it's a TextInputBuilder in an ActionRowBuilder, in a ModalBuilder. Should be complex enough to work
      return code;
    };

    Blockly.JavaScript["block_slash_command_form_get_input_text"] = function (block) {
      const textName = block.getFieldValue("NAME");

      if (!definedRegexes.formName(textName)) throw errorsTypes.invalidRegex;

      const code =
        "( interaction.fields.getTextInputValue('" +
        textName +
        "')!=='' ? interaction.fields.getTextInputValue('" +
        textName +
        "') : undefined)";
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript["block_slash_command_form_get_user"] = function (block) {
      const code = "interaction.member";
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    /* ##### Data storage blocks ##### */
    //Blocks used to manage data in the database
    Blockly.JavaScript["block_data_storage_create_int"] = function (block) {
      //const textDataname = block.getFieldValue('DATANAME');

      //We get values for this block directly in xml_to_js !
      throw errorsTypes.error;
    };

    Blockly.JavaScript["block_data_storage_create_string"] = function (block) {
      //const textDataname = block.getFieldValue('DATANAME');

      //We get values for this block directly in xml_to_js !
      throw errorsTypes.error;
    };

    Blockly.JavaScript["block_data_storage_save_int"] = function (block) {
      const textDataname = block.getFieldValue("DATANAME");
      const valueVarname = Blockly.JavaScript.valueToCode(block, "VARNAME", Blockly.JavaScript.ORDER_ATOMIC);
      const valueVarContent = Blockly.JavaScript.valueToCode(block, "VARCONTENT", Blockly.JavaScript.ORDER_ATOMIC);

      if (definedRegexes.dataStorageName(textDataname) && valueVarname != "" && valueVarContent != "") {
        return "dataStorage.saveValue('I" + textDataname + "', " + valueVarname + ", " + valueVarContent + ");\n";
      }
      // At the start of data names, there is S or I to detect String or Int storages
      else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_data_storage_save_string"] = function (block) {
      const textDataname = block.getFieldValue("DATANAME");
      const valueVarname = Blockly.JavaScript.valueToCode(block, "VARNAME", Blockly.JavaScript.ORDER_ATOMIC);
      const valueVarContent = Blockly.JavaScript.valueToCode(block, "VARCONTENT", Blockly.JavaScript.ORDER_ATOMIC);

      if (definedRegexes.dataStorageName(textDataname) && valueVarname != "" && valueVarContent != "") {
        return "dataStorage.saveValue('S" + textDataname + "', " + valueVarname + ", " + valueVarContent + ");\n";
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_data_storage_get_int"] = function (block) {
      const textDataname = block.getFieldValue("DATANAME");
      const valueVarname = Blockly.JavaScript.valueToCode(block, "VARNAME", Blockly.JavaScript.ORDER_ATOMIC);

      if (definedRegexes.dataStorageName(textDataname) && valueVarname != "") {
        const code = "strToInt((await dataStorage.getValue('I" + textDataname + "', " + valueVarname + ")))";
        return [code, Blockly.JavaScript.ORDER_NONE];
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_data_storage_get_string"] = function (block) {
      const textDataname = block.getFieldValue("DATANAME");
      const valueVarname = Blockly.JavaScript.valueToCode(block, "VARNAME", Blockly.JavaScript.ORDER_ATOMIC);

      if (definedRegexes.dataStorageName(textDataname) && valueVarname != "") {
        const code = "await dataStorage.getValue('S" + textDataname + "', " + valueVarname + ")";
        return [code, Blockly.JavaScript.ORDER_NONE];
      } else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_data_storage_delete_int"] = function (block) {
      const textDataname = block.getFieldValue("DATANAME");
      const valueVarname = Blockly.JavaScript.valueToCode(block, "VARNAME", Blockly.JavaScript.ORDER_ATOMIC);

      if (definedRegexes.dataStorageName(textDataname) && valueVarname != "") {
        return "dataStorage.delValue('I" + textDataname + "', " + valueVarname + ");\n";
      }
      // At the start of data names, there is S or I to detect String or Int storages
      else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    Blockly.JavaScript["block_data_storage_delete_string"] = function (block) {
      const textDataname = block.getFieldValue("DATANAME");
      const valueVarname = Blockly.JavaScript.valueToCode(block, "VARNAME", Blockly.JavaScript.ORDER_ATOMIC);

      if (definedRegexes.dataStorageName(textDataname) && valueVarname != "") {
        return "dataStorage.delValue('S" + textDataname + "', " + valueVarname + ");\n";
      }
      // At the start of data names, there is S or I to detect String or Int storages
      else {
        throw errorsTypes.uncompleteBlock;
      }
    };

    /* ##### DISABLED blocks ##### */
    //Blockly's default blocks that should be disabled
    //These blocks are removed / commented in toolbox.ejs

    const disabledFunction = function (block) {
      return "";
    };
    //Loops
    Blockly.JavaScript["controls_repeat_ext"] = disabledFunction;
    Blockly.JavaScript["controls_whileUntil"] = disabledFunction;
    Blockly.JavaScript["controls_for"] = disabledFunction;
    Blockly.JavaScript["controls_forEach"] = disabledFunction;
    Blockly.JavaScript["controls_flow_statements"] = disabledFunction;

    //Text
    Blockly.JavaScript["text_print"] = disabledFunction;
    Blockly.JavaScript["text_append"] = disabledFunction;
    Blockly.JavaScript["text_prompt_ext"] = disabledFunction;

    //Lists
    //Blockly.JavaScript['lists_create_with'] = disabledFunction;
    Blockly.JavaScript["lists_repeat"] = disabledFunction;
    /*Blockly.JavaScript['lists_length'] = disabledFunction;
        Blockly.JavaScript['lists_isEmpty'] = disabledFunction;
        Blockly.JavaScript['lists_indexOf'] = disabledFunction;
        Blockly.JavaScript['lists_getIndex'] = disabledFunction;
        Blockly.JavaScript['lists_setIndex'] = disabledFunction;
        Blockly.JavaScript['lists_getSublist'] = disabledFunction;
        Blockly.JavaScript['lists_split'] = disabledFunction;
        Blockly.JavaScript['lists_sort'] = disabledFunction;*/

    //Colors
    Blockly.JavaScript["colour_rgb"] = disabledFunction;
    Blockly.JavaScript["colour_blend"] = disabledFunction;

    return Blockly;
  },
};
