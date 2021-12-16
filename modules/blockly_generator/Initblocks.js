//Blocks used in backend by blockly

module.exports = {
  initializeBlocks: function(Blockly){
    Blockly.defineBlocksWithJsonArray([

/* ########## Event Blocks ######### */
/* Used to trigger events. They come sometimes with var blocks, defined under event blocks */

{
  "type": "event_message_sent",
  "message0": "%{BKY_EVENT_MESSAGE_SENT}",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "statements"
    }
  ],
  "colour": 30,
  "tooltip": "%{BKY_EVENT_MESSAGE_SENT_TOOLTIP}",
  "helpUrl": ""
},

{
  "type": "event_message_deleted",
  "message0": "%{BKY_EVENT_MESSAGE_DELETED}",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "statements"
    }
  ],
  "colour": 30,
  "tooltip": "%{BKY_EVENT_MESSAGE_DELETED_TOOLTIP}",
  "helpUrl": ""
},

{
  "type": "event_message_updated",
  "message0": "%{BKY_EVENT_MESSAGE_UPDATED}",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "statements"
    }
  ],
  "colour": 30,
  "tooltip": "%{BKY_EVENT_MESSAGE_UPDATED_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "event_user_join",
  "message0": "%{BKY_EVENT_USER_JOIN}",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "statements"
    }
  ],
  "colour": 30,
  "tooltip": "%{BKY_EVENT_USER_JOIN_TOOLTIP}",
  "helpUrl": ""
},

{
  "type": "event_user_left",
  "message0": "%{BKY_EVENT_USER_LEFT}",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "statements"
    }
  ],
  "colour": 30,
  "tooltip": "%{BKY_EVENT_USER_LEFT_TOOLTIP}",
  "helpUrl": ""
},

{
  "type": "event_user_updated",
  "message0": "%{BKY_EVENT_USER_UPDATED}",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "statements"
    }
  ],
  "colour": 30,
  "tooltip": "%{BKY_EVENT_USER_UPDATED_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "event_role_created",
  "message0": "%{BKY_EVENT_ROLE_CREATED}",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "statements"
    }
  ],
  "colour": 30,
  "tooltip": "%{BKY_EVENT_ROLE_CREATED_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "event_role_deleted",
  "message0": "%{BKY_EVENT_ROLE_DELETED}",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "statements"
    }
  ],
  "colour": 30,
  "tooltip": "%{BKY_EVENT_ROLE_DELETED_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "event_role_edited",
  "message0": "%{BKY_EVENT_ROLE_EDITED}",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "statements"
    }
  ],
  "colour": 30,
  "tooltip": "%{BKY_EVENT_ROLE_EDITED_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "event_user_banned",
  "message0": "%{BKY_EVENT_USER_BANNED}",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "statements"
    }
  ],
  "colour": 30,
  "tooltip": "%{BKY_EVENT_USER_BANNED_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "event_user_unbanned",
  "message0": "%{BKY_EVENT_USER_UNBANNED}",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "statements"
    }
  ],
  "colour": 30,
  "tooltip": "%{BKY_EVENT_USER_UNBANNED_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "event_pinned_updated",
  "message0": "%{BKY_EVENT_PINNED_UPDATED}",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "statements"
    }
  ],
  "colour": 30,
  "tooltip": "%{BKY_EVENT_PINNED_UPDATED_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "event_user_voice_update",
  "message0": "%{BKY_EVENT_USER_VOICE_UPDATE}",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "statements"
    }
  ],
  "colour": 30,
  "tooltip": "%{BKY_EVENT_USER_VOICE_UPDATE_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "event_user_start_writing",
  "message0": "%{BKY_EVENT_USER_START_WRITING}",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "statements"
    }
  ],
  "colour": 30,
  "tooltip": "%{BKY_EVENT_USER_START_WRITING_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "event_text_channel_created",
  "message0": "%{BKY_EVENT_TEXT_CHANNEL_CREATED}",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "statements"
    }
  ],
  "colour": 30,
  "tooltip": "%{BKY_EVENT_TEXT_CHANNEL_CREATED_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "event_text_channel_deleted",
  "message0": "%{BKY_EVENT_TEXT_CHANNEL_DELETED}",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "statements"
    }
  ],
  "colour": 30,
  "tooltip": "%{BKY_EVENT_TEXT_CHANNEL_DELETED_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "event_text_channel_edited",
  "message0": "%{BKY_EVENT_TEXT_CHANNEL_EDITED}",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "statements"
    }
  ],
  "colour": 30,
  "tooltip": "%{BKY_EVENT_TEXT_CHANNEL_EDITED_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "event_voice_channel_created",
  "message0": "%{BKY_EVENT_VOICE_CHANNEL_CREATED}",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "statements"
    }
  ],
  "colour": 30,
  "tooltip": "%{BKY_EVENT_VOICE_CHANNEL_CREATED_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "event_voice_channel_deleted",
  "message0": "%{BKY_EVENT_VOICE_CHANNEL_DELETED}",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "statements"
    }
  ],
  "colour": 30,
  "tooltip": "%{BKY_EVENT_VOICE_CHANNEL_DELETED_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "event_voice_channel_edited",
  "message0": "%{BKY_EVENT_VOICE_CHANNEL_EDITED}",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "statements"
    }
  ],
  "colour": 30,
  "tooltip": "%{BKY_EVENT_VOICE_CHANNEL_EDITED_TOOLTIP}",
  "helpUrl": ""
},

{
  "type": "event_reaction_added",
  "message0": "%{BKY_EVENT_REACTION_ADDED}",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "statements"
    }
  ],
  "colour": 30,
  "tooltip": "%{BKY_EVENT_REACTION_ADDED_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "event_reaction_removed",
  "message0": "%{BKY_EVENT_REACTION_REMOVED}",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "statements"
    }
  ],
  "colour": 30,
  "tooltip": "%{BKY_EVENT_REACTION_REMOVED_TOOLIP}",
  "helpUrl": ""
},

/* ########## Event Var Blocks ######### */
/* Used to represent event variables */

{
  "type": "event_var_message",
  "message0": "%{BKY_EVENT_VAR_MESSAGE}",
  "output": "Message",
  "colour": 30,
  "tooltip": "%{BKY_EVENT_VAR_MESSAGE_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "event_var_message_old",
  "message0": "%{BKY_EVENT_VAR_OLD_MESSAGE}",
  "output": "Message",
  "colour": 30,
  "tooltip": "%{BKY_EVENT_VAR_OLD_MESSAGE_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "event_var_message_new",
  "message0": "%{BKY_EVENT_VAR_NEW_MESSAGE}",
  "output": "Message",
  "colour": 30,
  "tooltip": "%{BKY_EVENT_VAR_NEW_MESSAGE_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "event_var_user",
  "message0": "%{BKY_EVENT_VAR_USER}",
  "output": "User",
  "colour": 30,
  "tooltip": "%{BKY_EVENT_VAR_USER_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "event_var_old_user",
  "message0": "%{BKY_EVENT_VAR_OLD_USER}",
  "output": "User",
  "colour": 30,
  "tooltip": "%{BKY_EVENT_VAR_OLD_USER_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "event_var_new_user",
  "message0": "%{BKY_EVENT_VAR_NEW_USER}",
  "output": "User",
  "colour": 30,
  "tooltip": "%{BKY_EVENT_VAR_NEW_USER_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "event_var_rank",
  "message0": "%{BKY_EVENT_VAR_RANK}",
  "output": "Rank",
  "colour": 30,
  "tooltip": "%{BKY_EVENT_VAR_RANK_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "event_var_old_rank",
  "message0": "%{BKY_EVENT_VAR_OLD_RANK}",
  "output": "Rank",
  "colour": 30,
  "tooltip": "%{BKY_EVENT_VAR_OLD_RANK_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "event_var_new_rank",
  "message0": "%{BKY_EVENT_VAR_NEW_RANK}",
  "output": "Rank",
  "colour": 30,
  "tooltip": "%{BKY_EVENT_VAR_NEW_RANK_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "event_var_old_voice_channel",
  "message0": "%{BKY_EVENT_VAR_OLD_VOICE_CHANNEL}",
  "output": "VoiceChannel",
  "colour": 30,
  "tooltip": "%{BKY_EVENT_VAR_OLD_VOICE_CHANNEL_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "event_var_new_voice_channel",
  "message0": "%{BKY_EVENT_VAR_NEW_VOICE_CHANNEL}",
  "output": "VoiceChannel",
  "colour": 30,
  "tooltip": "%{BKY_EVENT_VAR_NEW_VOICE_CHANNEL_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "event_var_text_channel",
  "message0": "%{BKY_EVENT_VAR_TEXT_CHANNEL}",
  "output": "Channel",
  "colour": 30,
  "tooltip": "%{BKY_EVENT_VAR_TEXT_CHANNEL_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "event_var_old_text_channel",
  "message0": "%{BKY_EVENT_VAR_OLD_TEXT_CHANNEL}",
  "output": "Channel",
  "colour": 30,
  "tooltip": "%{BKY_EVENT_VAR_OLD_TEXT_CHANNEL_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "event_var_new_text_channel",
  "message0": "%{BKY_EVENT_VAR_NEW_TEXT_CHANNEL}",
  "output": "Channel",
  "colour": 30,
  "tooltip": "%{BKY_EVENT_VAR_NEW_TEXT_CHANNEL_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "event_var_voice_channel",
  "message0": "%{BKY_EVENT_VAR_VOICE_CHANNEL}",
  "output": "VoiceChannel",
  "colour": 30,
  "tooltip": "%{BKY_EVENT_VAR_VOICE_CHANNEL_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "event_var_reaction",
  "message0": "%{BKY_EVENT_VAR_REACTION}",
  "output": "Reaction",
  "colour": 30,
  "tooltip": "%{BKY_EVENT_VAR_REACTION_TOOLTIP}",
  "helpUrl": ""
}
]);
Blockly.defineBlocksWithJsonArray([

/* ########## Messages Blocks ######### */
/* Used to interact with Messages methods. */
{
  "type": "block_message_reply",
  "message0": "%{BKY_BLOCK_MESSAGE_REPLY}",
  "args0": [
    {
      "type": "input_value",
      "name": "message",
      "check": "Message"
    },
    {
      "type": "input_value",
      "name": "text",
      "check": "String"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 180,
  "tooltip": "%{BKY_BLOCK_MESSAGE_REPLY_TOOLTIP}",
  "helpUrl": ""
}
]);
return(Blockly);
  },
  initializeText: function(Blockly){

    Blockly.Msg["ADD_COMMENT"] = "Ajouter un commentaire";
    Blockly.Msg["CANNOT_DELETE_VARIABLE_PROCEDURE"] = "Impossible de supprimer la variable « %1 » parce qu’elle fait partie de la définition de la fonction « %2 »";
    Blockly.Msg["CHANGE_VALUE_TITLE"] = "Modifier la valeur :";
    Blockly.Msg["CLEAN_UP"] = "Nettoyer les blocs";
    Blockly.Msg["COLLAPSED_WARNINGS_WARNING"] = "Les blocs repliés contiennent des avertissements.";
    Blockly.Msg["COLLAPSE_ALL"] = "Réduire les blocs";
    Blockly.Msg["COLLAPSE_BLOCK"] = "Réduire le bloc";
    Blockly.Msg["COLOUR_BLEND_COLOUR1"] = "couleur 1";
    Blockly.Msg["COLOUR_BLEND_COLOUR2"] = "couleur 2";
    Blockly.Msg["COLOUR_BLEND_HELPURL"] = "https://meyerweb.com/eric/tools/color-blend/#:::rgbp";
    Blockly.Msg["COLOUR_BLEND_RATIO"] = "taux";
    Blockly.Msg["COLOUR_BLEND_TITLE"] = "mélanger";
    Blockly.Msg["COLOUR_BLEND_TOOLTIP"] = "Mélange deux couleurs dans une proportion donnée (de 0.0 à 1.0).";
    Blockly.Msg["COLOUR_PICKER_HELPURL"] = "https://fr.wikipedia.org/wiki/Couleur";
    Blockly.Msg["COLOUR_PICKER_TOOLTIP"] = "Choisir une couleur dans la palette.";
    Blockly.Msg["COLOUR_RANDOM_HELPURL"] = "http://randomcolour.com";  // untranslated
    Blockly.Msg["COLOUR_RANDOM_TITLE"] = "couleur aléatoire";
    Blockly.Msg["COLOUR_RANDOM_TOOLTIP"] = "Choisir une couleur au hasard.";
    Blockly.Msg["COLOUR_RGB_BLUE"] = "bleu";
    Blockly.Msg["COLOUR_RGB_GREEN"] = "vert";
    Blockly.Msg["COLOUR_RGB_HELPURL"] = "https://www.december.com/html/spec/colorpercompact.html";
    Blockly.Msg["COLOUR_RGB_RED"] = "rouge";
    Blockly.Msg["COLOUR_RGB_TITLE"] = "colorier en";
    Blockly.Msg["COLOUR_RGB_TOOLTIP"] = "Créer une couleur avec la quantité spécifiée de rouge, vert et bleu. Les valeurs doivent être comprises entre 0 et 100.";
    Blockly.Msg["CONTROLS_FLOW_STATEMENTS_HELPURL"] = "https://github.com/google/blockly/wiki/Loops#loop-termination-blocks";  // untranslated
    Blockly.Msg["CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK"] = "quitter la boucle";
    Blockly.Msg["CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE"] = "passer à l’itération de boucle suivante";
    Blockly.Msg["CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK"] = "Sortir de la boucle englobante.";
    Blockly.Msg["CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE"] = "Sauter le reste de cette boucle, et poursuivre avec l’itération suivante.";
    Blockly.Msg["CONTROLS_FLOW_STATEMENTS_WARNING"] = "Attention : ce bloc ne devrait être utilisé que dans une boucle.";
    Blockly.Msg["CONTROLS_FOREACH_HELPURL"] = "https://github.com/google/blockly/wiki/Loops#for-each";  // untranslated
    Blockly.Msg["CONTROLS_FOREACH_TITLE"] = "pour chaque élément %1 dans la liste %2";
    Blockly.Msg["CONTROLS_FOREACH_TOOLTIP"] = "Pour chaque élément d’une liste, assigner la valeur de l’élément à la variable « %1 », puis exécuter des instructions.";
    Blockly.Msg["CONTROLS_FOR_HELPURL"] = "https://github.com/google/blockly/wiki/Loops#count-with";  // untranslated
    Blockly.Msg["CONTROLS_FOR_TITLE"] = "compter avec %1 de %2 à %3 par %4";
    Blockly.Msg["CONTROLS_FOR_TOOLTIP"] = "Faire prendre successivement à la variable « %1 » les valeurs entre deux nombres de début et de fin par incrément du pas spécifié et exécuter les instructions spécifiées.";
    Blockly.Msg["CONTROLS_IF_ELSEIF_TOOLTIP"] = "Ajouter une condition au bloc conditionnel.";
    Blockly.Msg["CONTROLS_IF_ELSE_TOOLTIP"] = "Ajouter une condition finale déclenchée dans tous les autres cas au bloc conditionnel.";
    Blockly.Msg["CONTROLS_IF_HELPURL"] = "https://github.com/google/blockly/wiki/IfElse";  // untranslated
    Blockly.Msg["CONTROLS_IF_IF_TOOLTIP"] = "Ajouter, supprimer ou réordonner les sections pour reconfigurer ce bloc conditionnel.";
    Blockly.Msg["CONTROLS_IF_MSG_ELSE"] = "sinon";
    Blockly.Msg["CONTROLS_IF_MSG_ELSEIF"] = "sinon si";
    Blockly.Msg["CONTROLS_IF_MSG_IF"] = "si";
    Blockly.Msg["CONTROLS_IF_TOOLTIP_1"] = "Si une valeur est vraie, alors exécuter certaines instructions.";
    Blockly.Msg["CONTROLS_IF_TOOLTIP_2"] = "Si une valeur est vraie, alors exécuter le premier bloc d’instructions. Sinon, exécuter le second bloc d’instructions.";
    Blockly.Msg["CONTROLS_IF_TOOLTIP_3"] = "Si la première valeur est vraie, alors exécuter le premier bloc d’instructions. Sinon, si la seconde valeur est vraie, exécuter le second bloc d’instructions.";
    Blockly.Msg["CONTROLS_IF_TOOLTIP_4"] = "Si la première valeur est vraie, alors exécuter le premier bloc d’instructions. Sinon, si la seconde valeur est vraie, exécuter le second bloc d’instruction. Si aucune des valeurs n’est vraie, exécuter le dernier bloc d’instruction.";
    Blockly.Msg["CONTROLS_REPEAT_HELPURL"] = "https://fr.wikipedia.org/wiki/Boucle_for";
    Blockly.Msg["CONTROLS_REPEAT_INPUT_DO"] = "faire";
    Blockly.Msg["CONTROLS_REPEAT_TITLE"] = "répéter %1 fois";
    Blockly.Msg["CONTROLS_REPEAT_TOOLTIP"] = "Exécuter des instructions plusieurs fois.";
    Blockly.Msg["CONTROLS_WHILEUNTIL_HELPURL"] = "https://github.com/google/blockly/wiki/Loops#repeat";
    Blockly.Msg["CONTROLS_WHILEUNTIL_OPERATOR_UNTIL"] = "répéter jusqu’à ce que";
    Blockly.Msg["CONTROLS_WHILEUNTIL_OPERATOR_WHILE"] = "répéter tant que";
    Blockly.Msg["CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL"] = "Tant qu’une valeur est fausse, alors exécuter des instructions.";
    Blockly.Msg["CONTROLS_WHILEUNTIL_TOOLTIP_WHILE"] = "Tant qu’une valeur est vraie, alors exécuter des instructions.";
    Blockly.Msg["DELETE_ALL_BLOCKS"] = "Supprimer ces %1 blocs ?";
    Blockly.Msg["DELETE_BLOCK"] = "Supprimer le bloc";
    Blockly.Msg["DELETE_VARIABLE"] = "Supprimer la variable « %1 »";
    Blockly.Msg["DELETE_VARIABLE_CONFIRMATION"] = "Supprimer %1 utilisations de la variable « %2 » ?";
    Blockly.Msg["DELETE_X_BLOCKS"] = "Supprimer %1 blocs";
    Blockly.Msg["DIALOG_CANCEL"] = "Annuler";
    Blockly.Msg["DIALOG_OK"] = "OK";
    Blockly.Msg["DISABLE_BLOCK"] = "Désactiver le bloc";
    Blockly.Msg["DUPLICATE_BLOCK"] = "Dupliquer";
    Blockly.Msg["DUPLICATE_COMMENT"] = "Dupliquer le commentaire";
    Blockly.Msg["ENABLE_BLOCK"] = "Activer le bloc";
    Blockly.Msg["EXPAND_ALL"] = "Développer les blocs";
    Blockly.Msg["EXPAND_BLOCK"] = "Développer le bloc";
    Blockly.Msg["EXTERNAL_INPUTS"] = "Entrées externes";
    Blockly.Msg["HELP"] = "Aide";
    Blockly.Msg["INLINE_INPUTS"] = "Entrées en ligne";
    Blockly.Msg["LISTS_CREATE_EMPTY_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#create-empty-list";  // untranslated
    Blockly.Msg["LISTS_CREATE_EMPTY_TITLE"] = "créer une liste vide";
    Blockly.Msg["LISTS_CREATE_EMPTY_TOOLTIP"] = "Renvoyer une liste, de longueur 0, ne contenant aucun enregistrement de données";
    Blockly.Msg["LISTS_CREATE_WITH_CONTAINER_TITLE_ADD"] = "liste";
    Blockly.Msg["LISTS_CREATE_WITH_CONTAINER_TOOLTIP"] = "Ajouter, supprimer, ou réordonner les sections pour reconfigurer ce bloc de liste.";
    Blockly.Msg["LISTS_CREATE_WITH_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#create-list-with";
    Blockly.Msg["LISTS_CREATE_WITH_INPUT_WITH"] = "créer une liste avec";
    Blockly.Msg["LISTS_CREATE_WITH_ITEM_TOOLTIP"] = "Ajouter un élément à la liste.";
    Blockly.Msg["LISTS_CREATE_WITH_TOOLTIP"] = "Créer une liste avec un nombre quelconque d’éléments.";
    Blockly.Msg["LISTS_GET_INDEX_FIRST"] = "premier";
    Blockly.Msg["LISTS_GET_INDEX_FROM_END"] = "n° depuis la fin";
    Blockly.Msg["LISTS_GET_INDEX_FROM_START"] = "nº";
    Blockly.Msg["LISTS_GET_INDEX_GET"] = "obtenir";
    Blockly.Msg["LISTS_GET_INDEX_GET_REMOVE"] = "obtenir et supprimer";
    Blockly.Msg["LISTS_GET_INDEX_LAST"] = "dernier";
    Blockly.Msg["LISTS_GET_INDEX_RANDOM"] = "aléatoire";
    Blockly.Msg["LISTS_GET_INDEX_REMOVE"] = "supprimer";
    Blockly.Msg["LISTS_GET_INDEX_TAIL"] = "";  // untranslated
    Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_FIRST"] = "Renvoie le premier élément dans une liste.";
    Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_FROM"] = "Renvoie l’élément à la position indiquée dans une liste.";
    Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_LAST"] = "Renvoie le dernier élément dans une liste.";
    Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_RANDOM"] = "Renvoie un élément au hasard dans une liste.";
    Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST"] = "Supprime et renvoie le premier élément dans une liste.";
    Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM"] = "Supprime et renvoie l’élément à la position indiquée dans une liste.";
    Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST"] = "Supprime et renvoie le dernier élément dans une liste.";
    Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM"] = "Supprime et renvoie un élément au hasard dans une liste.";
    Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST"] = "Supprime le premier élément dans une liste.";
    Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM"] = "Supprime l’élément à la position indiquée dans une liste.";
    Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST"] = "Supprime le dernier élément dans une liste.";
    Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM"] = "Supprime un élément au hasard dans une liste.";
    Blockly.Msg["LISTS_GET_SUBLIST_END_FROM_END"] = "jusqu’au n° depuis la fin";
    Blockly.Msg["LISTS_GET_SUBLIST_END_FROM_START"] = "jusqu’au n°";
    Blockly.Msg["LISTS_GET_SUBLIST_END_LAST"] = "jusqu’à la fin";
    Blockly.Msg["LISTS_GET_SUBLIST_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#getting-a-sublist";  // untranslated
    Blockly.Msg["LISTS_GET_SUBLIST_START_FIRST"] = "obtenir la sous-liste depuis le début";
    Blockly.Msg["LISTS_GET_SUBLIST_START_FROM_END"] = "obtenir la sous-liste depuis le n° depuis la fin";
    Blockly.Msg["LISTS_GET_SUBLIST_START_FROM_START"] = "obtenir la sous-liste depuis le n°";
    Blockly.Msg["LISTS_GET_SUBLIST_TAIL"] = "";  // untranslated
    Blockly.Msg["LISTS_GET_SUBLIST_TOOLTIP"] = "Crée une copie de la partie spécifiée d’une liste.";
    Blockly.Msg["LISTS_INDEX_FROM_END_TOOLTIP"] = "%1 est le dernier élément.";
    Blockly.Msg["LISTS_INDEX_FROM_START_TOOLTIP"] = "%1 est le premier élément.";
    Blockly.Msg["LISTS_INDEX_OF_FIRST"] = "trouver la première occurrence de l’élément";
    Blockly.Msg["LISTS_INDEX_OF_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list";  // untranslated
    Blockly.Msg["LISTS_INDEX_OF_LAST"] = "trouver la dernière occurrence de l’élément";
    Blockly.Msg["LISTS_INDEX_OF_TOOLTIP"] = "Renvoie l’index de la première/dernière occurrence de l’élément dans la liste. Renvoie %1 si l’élément n’est pas trouvé.";
    Blockly.Msg["LISTS_INLIST"] = "dans la liste";
    Blockly.Msg["LISTS_ISEMPTY_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#is-empty";  // untranslated
    Blockly.Msg["LISTS_ISEMPTY_TITLE"] = "%1 est vide";
    Blockly.Msg["LISTS_ISEMPTY_TOOLTIP"] = "Renvoie vrai si la liste est vide.";
    Blockly.Msg["LISTS_LENGTH_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#length-of";  // untranslated
    Blockly.Msg["LISTS_LENGTH_TITLE"] = "longueur de %1";
    Blockly.Msg["LISTS_LENGTH_TOOLTIP"] = "Renvoie la longueur d’une liste.";
    Blockly.Msg["LISTS_REPEAT_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#create-list-with";  // untranslated
    Blockly.Msg["LISTS_REPEAT_TITLE"] = "créer une liste avec l’élément %1 répété %2 fois";
    Blockly.Msg["LISTS_REPEAT_TOOLTIP"] = "Crée une liste consistant en la valeur fournie répétée le nombre de fois indiqué.";
    Blockly.Msg["LISTS_REVERSE_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#reversing-a-list";
    Blockly.Msg["LISTS_REVERSE_MESSAGE0"] = "inverser %1";
    Blockly.Msg["LISTS_REVERSE_TOOLTIP"] = "Inverser la copie d’une liste.";
    Blockly.Msg["LISTS_SET_INDEX_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#in-list--set";  // untranslated
    Blockly.Msg["LISTS_SET_INDEX_INPUT_TO"] = "comme";
    Blockly.Msg["LISTS_SET_INDEX_INSERT"] = "insérer en";
    Blockly.Msg["LISTS_SET_INDEX_SET"] = "mettre";
    Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST"] = "Insère l’élément au début d’une liste.";
    Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_INSERT_FROM"] = "Insère l’élément à la position indiquée dans une liste.";
    Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_INSERT_LAST"] = "Ajoute l’élément à la fin d’une liste.";
    Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM"] = "Insère l’élément au hasard dans une liste.";
    Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_SET_FIRST"] = "Définit le premier élément dans une liste.";
    Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_SET_FROM"] = "Définit l’élément à la position indiquée dans une liste.";
    Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_SET_LAST"] = "Définit le dernier élément dans une liste.";
    Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_SET_RANDOM"] = "Définit un élément au hasard dans une liste.";
    Blockly.Msg["LISTS_SORT_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#sorting-a-list";
    Blockly.Msg["LISTS_SORT_ORDER_ASCENDING"] = "croissant";
    Blockly.Msg["LISTS_SORT_ORDER_DESCENDING"] = "décroissant";
    Blockly.Msg["LISTS_SORT_TITLE"] = "trier %1 %2 %3";
    Blockly.Msg["LISTS_SORT_TOOLTIP"] = "Trier une copie d’une liste.";
    Blockly.Msg["LISTS_SORT_TYPE_IGNORECASE"] = "alphabétique, en ignorant la casse";
    Blockly.Msg["LISTS_SORT_TYPE_NUMERIC"] = "numérique";
    Blockly.Msg["LISTS_SORT_TYPE_TEXT"] = "alphabétique";
    Blockly.Msg["LISTS_SPLIT_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#splitting-strings-and-joining-lists";
    Blockly.Msg["LISTS_SPLIT_LIST_FROM_TEXT"] = "créer une liste depuis le texte";
    Blockly.Msg["LISTS_SPLIT_TEXT_FROM_LIST"] = "créer un texte depuis la liste";
    Blockly.Msg["LISTS_SPLIT_TOOLTIP_JOIN"] = "Réunir une liste de textes en un seul, en les joignant par un séparateur.";
    Blockly.Msg["LISTS_SPLIT_TOOLTIP_SPLIT"] = "Couper un texte en une liste de textes, en coupant à chaque séparateur.";
    Blockly.Msg["LISTS_SPLIT_WITH_DELIMITER"] = "avec séparateur";
    Blockly.Msg["LOGIC_BOOLEAN_FALSE"] = "faux";
    Blockly.Msg["LOGIC_BOOLEAN_HELPURL"] = "https://github.com/google/blockly/wiki/Logic#values";  // untranslated
    Blockly.Msg["LOGIC_BOOLEAN_TOOLTIP"] = "Renvoie soit vrai soit faux.";
    Blockly.Msg["LOGIC_BOOLEAN_TRUE"] = "vrai";
    Blockly.Msg["LOGIC_COMPARE_HELPURL"] = "https://fr.wikipedia.org/wiki/In%C3%A9galit%C3%A9_(math%C3%A9matiques)";
    Blockly.Msg["LOGIC_COMPARE_TOOLTIP_EQ"] = "Renvoyer vrai si les deux entrées sont égales.";
    Blockly.Msg["LOGIC_COMPARE_TOOLTIP_GT"] = "Renvoyer vrai si la première entrée est plus grande que la seconde.";
    Blockly.Msg["LOGIC_COMPARE_TOOLTIP_GTE"] = "Renvoyer true si la première entrée est supérieure ou égale à la seconde.";
    Blockly.Msg["LOGIC_COMPARE_TOOLTIP_LT"] = "Renvoyer vrai si la première entrée est plus petite que la seconde.";
    Blockly.Msg["LOGIC_COMPARE_TOOLTIP_LTE"] = "Renvoyer vrai si la première entrée est plus petite ou égale à la seconde.";
    Blockly.Msg["LOGIC_COMPARE_TOOLTIP_NEQ"] = "Renvoyer vrai si les deux entrées sont différentes.";
    Blockly.Msg["LOGIC_NEGATE_HELPURL"] = "https://github.com/google/blockly/wiki/Logic#not";  // untranslated
    Blockly.Msg["LOGIC_NEGATE_TITLE"] = "non %1";
    Blockly.Msg["LOGIC_NEGATE_TOOLTIP"] = "Renvoie vrai si l’entrée est fausse. Renvoie faux si l’entrée est vraie.";
    Blockly.Msg["LOGIC_NULL"] = "nul";
    Blockly.Msg["LOGIC_NULL_HELPURL"] = "https://en.wikipedia.org/wiki/Nullable_type";
    Blockly.Msg["LOGIC_NULL_TOOLTIP"] = "Renvoie nul.";
    Blockly.Msg["LOGIC_OPERATION_AND"] = "et";
    Blockly.Msg["LOGIC_OPERATION_HELPURL"] = "https://github.com/google/blockly/wiki/Logic#logical-operations";  // untranslated
    Blockly.Msg["LOGIC_OPERATION_OR"] = "ou";
    Blockly.Msg["LOGIC_OPERATION_TOOLTIP_AND"] = "Renvoyer vrai si les deux entrées sont vraies.";
    Blockly.Msg["LOGIC_OPERATION_TOOLTIP_OR"] = "Renvoyer vrai si au moins une des entrées est vraie.";
    Blockly.Msg["LOGIC_TERNARY_CONDITION"] = "test";
    Blockly.Msg["LOGIC_TERNARY_HELPURL"] = "https://en.wikipedia.org/wiki/%3F%3A";
    Blockly.Msg["LOGIC_TERNARY_IF_FALSE"] = "si faux";
    Blockly.Msg["LOGIC_TERNARY_IF_TRUE"] = "si vrai";
    Blockly.Msg["LOGIC_TERNARY_TOOLTIP"] = "Vérifie la condition indiquée dans « test ». Si elle est vraie, renvoie la valeur « si vrai » ; sinon renvoie la valeur « si faux ».";
    Blockly.Msg["MATH_ADDITION_SYMBOL"] = "+";
    Blockly.Msg["MATH_ARITHMETIC_HELPURL"] = "https://fr.wikipedia.org/wiki/Arithm%C3%A9tique";
    Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_ADD"] = "Renvoie la somme des deux nombres.";
    Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_DIVIDE"] = "Renvoie le quotient des deux nombres.";
    Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_MINUS"] = "Renvoie la différence des deux nombres.";
    Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_MULTIPLY"] = "Renvoie le produit des deux nombres.";
    Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_POWER"] = "Renvoie le premier nombre élevé à la puissance du second.";
    Blockly.Msg["MATH_ATAN2_HELPURL"] = "https://fr.wikipedia.org/wiki/Atan2";
    Blockly.Msg["MATH_ATAN2_TITLE"] = "atan2 de (x : %1 ; y : %2)";
    Blockly.Msg["MATH_ATAN2_TOOLTIP"] = "Renvoie l’arc-tangente du point (X, Y) en degrés entre -180 et 180.";
    Blockly.Msg["MATH_CHANGE_HELPURL"] = "https://fr.wikipedia.org/wiki/Idiome_de_programmation";
    Blockly.Msg["MATH_CHANGE_TITLE"] = "incrémenter %1 de %2";
    Blockly.Msg["MATH_CHANGE_TOOLTIP"] = "Ajouter un nombre à la variable « %1 ».";
    Blockly.Msg["MATH_CONSTANT_HELPURL"] = "https://fr.wikipedia.org/wiki/Table_de_constantes_math%C3%A9matiques";
    Blockly.Msg["MATH_CONSTANT_TOOLTIP"] = "Renvoie une des constantes courantes : π (3,141...), e (2,718...), φ (nom d’or : ½(1+√5) = 1,618…), √2 (1,414...), √½ (0,707...), ou ∞ (infini).";
    Blockly.Msg["MATH_CONSTRAIN_HELPURL"] = "https://en.wikipedia.org/wiki/Clamping_(graphics)";  // untranslated
    Blockly.Msg["MATH_CONSTRAIN_TITLE"] = "contraindre %1 entre %2 et %3";
    Blockly.Msg["MATH_CONSTRAIN_TOOLTIP"] = "Contraindre un nombre à rester entre les limites spécifiées (incluses).";
    Blockly.Msg["MATH_DIVISION_SYMBOL"] = "÷";
    Blockly.Msg["MATH_IS_DIVISIBLE_BY"] = "est divisible par";
    Blockly.Msg["MATH_IS_EVEN"] = "est pair";
    Blockly.Msg["MATH_IS_NEGATIVE"] = "est négatif";
    Blockly.Msg["MATH_IS_ODD"] = "est impair";
    Blockly.Msg["MATH_IS_POSITIVE"] = "est positif";
    Blockly.Msg["MATH_IS_PRIME"] = "est premier";
    Blockly.Msg["MATH_IS_TOOLTIP"] = "Vérifier si un nombre est pair, impair, premier, entier, positif, négatif ou s’il est divisible par un certain nombre. Renvoie vrai ou faux.";
    Blockly.Msg["MATH_IS_WHOLE"] = "est entier";
    Blockly.Msg["MATH_MODULO_HELPURL"] = "https://fr.wikipedia.org/wiki/Modulo_(op%C3%A9ration)";
    Blockly.Msg["MATH_MODULO_TITLE"] = "reste de %1 ÷ %2";
    Blockly.Msg["MATH_MODULO_TOOLTIP"] = "Renvoyer le reste de la division euclidienne des deux nombres.";
    Blockly.Msg["MATH_MULTIPLICATION_SYMBOL"] = "×";
    Blockly.Msg["MATH_NUMBER_HELPURL"] = "https://fr.wikipedia.org/wiki/Nombre";
    Blockly.Msg["MATH_NUMBER_TOOLTIP"] = "Un nombre.";
    Blockly.Msg["MATH_ONLIST_HELPURL"] = "";  // untranslated
    Blockly.Msg["MATH_ONLIST_OPERATOR_AVERAGE"] = "moyenne de la liste";
    Blockly.Msg["MATH_ONLIST_OPERATOR_MAX"] = "maximum de la liste";
    Blockly.Msg["MATH_ONLIST_OPERATOR_MEDIAN"] = "médiane de la liste";
    Blockly.Msg["MATH_ONLIST_OPERATOR_MIN"] = "minimum de la liste";
    Blockly.Msg["MATH_ONLIST_OPERATOR_MODE"] = "majoritaires de la liste";
    Blockly.Msg["MATH_ONLIST_OPERATOR_RANDOM"] = "élément aléatoire de la liste";
    Blockly.Msg["MATH_ONLIST_OPERATOR_STD_DEV"] = "écart type de la liste";
    Blockly.Msg["MATH_ONLIST_OPERATOR_SUM"] = "somme de la liste";
    Blockly.Msg["MATH_ONLIST_TOOLTIP_AVERAGE"] = "Renvoyer la moyenne (arithmétique) des valeurs numériques dans la liste.";
    Blockly.Msg["MATH_ONLIST_TOOLTIP_MAX"] = "Renvoyer le plus grand nombre dans la liste.";
    Blockly.Msg["MATH_ONLIST_TOOLTIP_MEDIAN"] = "Renvoyer le nombre médian de la liste.";
    Blockly.Msg["MATH_ONLIST_TOOLTIP_MIN"] = "Renvoyer le plus petit nombre dans la liste.";
    Blockly.Msg["MATH_ONLIST_TOOLTIP_MODE"] = "Renvoyer une liste d’un ou plusieurs éléments les plus fréquents dans la liste.";
    Blockly.Msg["MATH_ONLIST_TOOLTIP_RANDOM"] = "Renvoyer un élément au hasard dans la liste.";
    Blockly.Msg["MATH_ONLIST_TOOLTIP_STD_DEV"] = "Renvoyer l’écart type de la liste.";
    Blockly.Msg["MATH_ONLIST_TOOLTIP_SUM"] = "Renvoyer la somme de tous les nombres dans la liste.";
    Blockly.Msg["MATH_POWER_SYMBOL"] = "^";
    Blockly.Msg["MATH_RANDOM_FLOAT_HELPURL"] = "https://fr.wikipedia.org/wiki/G%C3%A9n%C3%A9rateur_de_nombres_al%C3%A9atoires";
    Blockly.Msg["MATH_RANDOM_FLOAT_TITLE_RANDOM"] = "fraction aléatoire";
    Blockly.Msg["MATH_RANDOM_FLOAT_TOOLTIP"] = "Renvoyer une fraction aléatoire entre 0,0 (inclus) et 1,0 (exclus).";
    Blockly.Msg["MATH_RANDOM_INT_HELPURL"] = "https://fr.wikipedia.org/wiki/G%C3%A9n%C3%A9rateur_de_nombres_al%C3%A9atoires";
    Blockly.Msg["MATH_RANDOM_INT_TITLE"] = "entier aléatoire entre %1 et %2";
    Blockly.Msg["MATH_RANDOM_INT_TOOLTIP"] = "Renvoyer un entier aléatoire entre les deux limites spécifiées, incluses.";
    Blockly.Msg["MATH_ROUND_HELPURL"] = "https://fr.wikipedia.org/wiki/Arrondi_(math%C3%A9matiques)";
    Blockly.Msg["MATH_ROUND_OPERATOR_ROUND"] = "arrondir";
    Blockly.Msg["MATH_ROUND_OPERATOR_ROUNDDOWN"] = "arrondir par défaut (à l’entier inférieur le plus proche)";
    Blockly.Msg["MATH_ROUND_OPERATOR_ROUNDUP"] = "arrondir par excès (à l’entier supérieur le plus proche)";
    Blockly.Msg["MATH_ROUND_TOOLTIP"] = "Arrondir un nombre au-dessus ou au-dessous.";
    Blockly.Msg["MATH_SINGLE_HELPURL"] = "https://fr.wikipedia.org/wiki/Racine_carr%C3%A9e";
    Blockly.Msg["MATH_SINGLE_OP_ABSOLUTE"] = "valeur absolue";
    Blockly.Msg["MATH_SINGLE_OP_ROOT"] = "racine carrée";
    Blockly.Msg["MATH_SINGLE_TOOLTIP_ABS"] = "Renvoie la valeur absolue d’un nombre.";
    Blockly.Msg["MATH_SINGLE_TOOLTIP_EXP"] = "Renvoie <em>e</em> à la puissance d’un nombre.";
    Blockly.Msg["MATH_SINGLE_TOOLTIP_LN"] = "Renvoie le logarithme naturel d’un nombre.";
    Blockly.Msg["MATH_SINGLE_TOOLTIP_LOG10"] = "Renvoie le logarithme décimal d’un nombre.";
    Blockly.Msg["MATH_SINGLE_TOOLTIP_NEG"] = "Renvoie l’opposé d’un nombre";
    Blockly.Msg["MATH_SINGLE_TOOLTIP_POW10"] = "Renvoie 10 à la puissance d’un nombre.";
    Blockly.Msg["MATH_SINGLE_TOOLTIP_ROOT"] = "Renvoie la racine carrée d’un nombre.";
    Blockly.Msg["MATH_SUBTRACTION_SYMBOL"] = "−";
    Blockly.Msg["MATH_TRIG_ACOS"] = "acos";
    Blockly.Msg["MATH_TRIG_ASIN"] = "asin";
    Blockly.Msg["MATH_TRIG_ATAN"] = "atan";
    Blockly.Msg["MATH_TRIG_COS"] = "cos";
    Blockly.Msg["MATH_TRIG_HELPURL"] = "https://fr.wikipedia.org/wiki/Fonction_trigonom%C3%A9trique";
    Blockly.Msg["MATH_TRIG_SIN"] = "sin";
    Blockly.Msg["MATH_TRIG_TAN"] = "tan";
    Blockly.Msg["MATH_TRIG_TOOLTIP_ACOS"] = "Renvoie l’arccosinus d’un nombre.";
    Blockly.Msg["MATH_TRIG_TOOLTIP_ASIN"] = "Renvoie l’arcsinus d’un nombre.";
    Blockly.Msg["MATH_TRIG_TOOLTIP_ATAN"] = "Renvoie l’arctangente d’un nombre.";
    Blockly.Msg["MATH_TRIG_TOOLTIP_COS"] = "Renvoie le cosinus d’un angle en degrés (pas en radians).";
    Blockly.Msg["MATH_TRIG_TOOLTIP_SIN"] = "Renvoie le sinus d’un angle en degrés (pas en radians).";
    Blockly.Msg["MATH_TRIG_TOOLTIP_TAN"] = "Renvoie la tangente d’un angle en degrés (pas en radians).";
    Blockly.Msg["NEW_COLOUR_VARIABLE"] = "Créer une variable de couleur...";
    Blockly.Msg["NEW_NUMBER_VARIABLE"] = "Créer une variable numérique...";
    Blockly.Msg["NEW_STRING_VARIABLE"] = "Créer une variable de chaîne...";
    Blockly.Msg["NEW_VARIABLE"] = "Créer une variable...";
    Blockly.Msg["NEW_VARIABLE_TITLE"] = "Nom de la nouvelle variable :";
    Blockly.Msg["NEW_VARIABLE_TYPE_TITLE"] = "Nouveau type de variable :";
    Blockly.Msg["ORDINAL_NUMBER_SUFFIX"] = "";  // untranslated
    Blockly.Msg["PROCEDURES_ALLOW_STATEMENTS"] = "autoriser les ordres";
    Blockly.Msg["PROCEDURES_BEFORE_PARAMS"] = "avec :";
    Blockly.Msg["PROCEDURES_CALLNORETURN_HELPURL"] = "https://fr.wikipedia.org/wiki/Sous-programme";
    Blockly.Msg["PROCEDURES_CALLNORETURN_TOOLTIP"] = "Exécuter la fonction « %1 » définie par l’utilisateur.";
    Blockly.Msg["PROCEDURES_CALLRETURN_HELPURL"] = "https://fr.wikipedia.org/wiki/Sous-programme";
    Blockly.Msg["PROCEDURES_CALLRETURN_TOOLTIP"] = "Exécuter la fonction « %1 » définie par l’utilisateur et utiliser son résultat.";
    Blockly.Msg["PROCEDURES_CALL_BEFORE_PARAMS"] = "avec :";
    Blockly.Msg["PROCEDURES_CREATE_DO"] = "Créer « %1 »";
    Blockly.Msg["PROCEDURES_DEFNORETURN_COMMENT"] = "Décrivez cette fonction...";
    Blockly.Msg["PROCEDURES_DEFNORETURN_DO"] = "";  // untranslated
    Blockly.Msg["PROCEDURES_DEFNORETURN_HELPURL"] = "https://fr.wikipedia.org/wiki/Sous-programme";
    Blockly.Msg["PROCEDURES_DEFNORETURN_PROCEDURE"] = "faire quelque chose";
    Blockly.Msg["PROCEDURES_DEFNORETURN_TITLE"] = "pour";
    Blockly.Msg["PROCEDURES_DEFNORETURN_TOOLTIP"] = "Crée une fonction sans sortie.";
    Blockly.Msg["PROCEDURES_DEFRETURN_HELPURL"] = "https://fr.wikipedia.org/wiki/Sous-programme";
    Blockly.Msg["PROCEDURES_DEFRETURN_RETURN"] = "retourner";
    Blockly.Msg["PROCEDURES_DEFRETURN_TOOLTIP"] = "Crée une fonction avec une sortie.";
    Blockly.Msg["PROCEDURES_DEF_DUPLICATE_WARNING"] = "Attention : cette fonction a des paramètres en doublon.";
    Blockly.Msg["PROCEDURES_HIGHLIGHT_DEF"] = "Surligner la définition de la fonction";
    Blockly.Msg["PROCEDURES_IFRETURN_HELPURL"] = "http://c2.com/cgi/wiki?GuardClause";
    Blockly.Msg["PROCEDURES_IFRETURN_TOOLTIP"] = "Si une valeur est vraie, alors renvoyer une seconde valeur.";
    Blockly.Msg["PROCEDURES_IFRETURN_WARNING"] = "Attention : ce bloc ne peut être utilisé que dans une définition de fonction.";
    Blockly.Msg["PROCEDURES_MUTATORARG_TITLE"] = "nom de l’entrée :";
    Blockly.Msg["PROCEDURES_MUTATORARG_TOOLTIP"] = "Ajouter une entrée à la fonction.";
    Blockly.Msg["PROCEDURES_MUTATORCONTAINER_TITLE"] = "entrées";
    Blockly.Msg["PROCEDURES_MUTATORCONTAINER_TOOLTIP"] = "Ajouter, supprimer, ou réarranger les entrées de cette fonction.";
    Blockly.Msg["REDO"] = "Refaire";
    Blockly.Msg["REMOVE_COMMENT"] = "Supprimer un commentaire";
    Blockly.Msg["RENAME_VARIABLE"] = "Renommer la variable...";
    Blockly.Msg["RENAME_VARIABLE_TITLE"] = "Renommer toutes les variables « %1 » en :";
    Blockly.Msg["TEXT_APPEND_HELPURL"] = "https://github.com/google/blockly/wiki/Text#text-modification";  // untranslated
    Blockly.Msg["TEXT_APPEND_TITLE"] = "ajouter le texte %2 à %1";
    Blockly.Msg["TEXT_APPEND_TOOLTIP"] = "Ajouter du texte à la variable « %1 ».";
    Blockly.Msg["TEXT_CHANGECASE_HELPURL"] = "https://github.com/google/blockly/wiki/Text#adjusting-text-case";  // untranslated
    Blockly.Msg["TEXT_CHANGECASE_OPERATOR_LOWERCASE"] = "en minuscules";
    Blockly.Msg["TEXT_CHANGECASE_OPERATOR_TITLECASE"] = "en Capitale Initiale Pour Chaque Mot";
    Blockly.Msg["TEXT_CHANGECASE_OPERATOR_UPPERCASE"] = "en MAJUSCULES";
    Blockly.Msg["TEXT_CHANGECASE_TOOLTIP"] = "Renvoyer une copie du texte dans une autre casse.";
    Blockly.Msg["TEXT_CHARAT_FIRST"] = "obtenir la première lettre";
    Blockly.Msg["TEXT_CHARAT_FROM_END"] = "obtenir la lettre nº (depuis la fin)";
    Blockly.Msg["TEXT_CHARAT_FROM_START"] = "obtenir la lettre nº";
    Blockly.Msg["TEXT_CHARAT_HELPURL"] = "https://github.com/google/blockly/wiki/Text#extracting-text";  // untranslated
    Blockly.Msg["TEXT_CHARAT_LAST"] = "obtenir la dernière lettre";
    Blockly.Msg["TEXT_CHARAT_RANDOM"] = "obtenir une lettre au hasard";
    Blockly.Msg["TEXT_CHARAT_TAIL"] = "";  // untranslated
    Blockly.Msg["TEXT_CHARAT_TITLE"] = "%2 dans le texte %1";
    Blockly.Msg["TEXT_CHARAT_TOOLTIP"] = "Renvoie la lettre à la position indiquée.";
    Blockly.Msg["TEXT_COUNT_HELPURL"] = "https://github.com/google/blockly/wiki/Text#counting-substrings";
    Blockly.Msg["TEXT_COUNT_MESSAGE0"] = "nombre %1 sur %2";
    Blockly.Msg["TEXT_COUNT_TOOLTIP"] = "Compter combien de fois un texte donné apparaît dans un autre.";
    Blockly.Msg["TEXT_CREATE_JOIN_ITEM_TOOLTIP"] = "Ajouter un élément au texte.";
    Blockly.Msg["TEXT_CREATE_JOIN_TITLE_JOIN"] = "joindre";
    Blockly.Msg["TEXT_CREATE_JOIN_TOOLTIP"] = "Ajouter, supprimer, ou réordonner des sections pour reconfigurer ce bloc de texte.";
    Blockly.Msg["TEXT_GET_SUBSTRING_END_FROM_END"] = "jusqu’à la lettre nº (depuis la fin)";
    Blockly.Msg["TEXT_GET_SUBSTRING_END_FROM_START"] = "jusqu’à la lettre nº";
    Blockly.Msg["TEXT_GET_SUBSTRING_END_LAST"] = "jusqu’à la dernière lettre";
    Blockly.Msg["TEXT_GET_SUBSTRING_HELPURL"] = "https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text";  // untranslated
    Blockly.Msg["TEXT_GET_SUBSTRING_INPUT_IN_TEXT"] = "dans le texte";
    Blockly.Msg["TEXT_GET_SUBSTRING_START_FIRST"] = "obtenir la sous-chaîne depuis la première lettre";
    Blockly.Msg["TEXT_GET_SUBSTRING_START_FROM_END"] = "obtenir la sous-chaîne depuis la lettre nº (depuis la fin)";
    Blockly.Msg["TEXT_GET_SUBSTRING_START_FROM_START"] = "obtenir la sous-chaîne depuis la lettre nº";
    Blockly.Msg["TEXT_GET_SUBSTRING_TAIL"] = "";  // untranslated
    Blockly.Msg["TEXT_GET_SUBSTRING_TOOLTIP"] = "Renvoie une partie indiquée du texte.";
    Blockly.Msg["TEXT_INDEXOF_HELPURL"] = "https://github.com/google/blockly/wiki/Text#finding-text";  // untranslated
    Blockly.Msg["TEXT_INDEXOF_OPERATOR_FIRST"] = "trouver la première occurrence de la chaîne";
    Blockly.Msg["TEXT_INDEXOF_OPERATOR_LAST"] = "trouver la dernière occurrence du texte";
    Blockly.Msg["TEXT_INDEXOF_TITLE"] = "%2 %3 dans le texte %1";
    Blockly.Msg["TEXT_INDEXOF_TOOLTIP"] = "Renvoie l’index de la première/dernière occurrence de la première chaîne dans la seconde. Renvoie %1 si la chaîne n’est pas trouvée.";
    Blockly.Msg["TEXT_ISEMPTY_HELPURL"] = "https://github.com/google/blockly/wiki/Text#checking-for-empty-text";  // untranslated
    Blockly.Msg["TEXT_ISEMPTY_TITLE"] = "%1 est vide";
    Blockly.Msg["TEXT_ISEMPTY_TOOLTIP"] = "Renvoie vrai si le texte fourni est vide.";
    Blockly.Msg["TEXT_JOIN_HELPURL"] = "https://github.com/google/blockly/wiki/Text#text-creation";  // untranslated
    Blockly.Msg["TEXT_JOIN_TITLE_CREATEWITH"] = "créer un texte avec";
    Blockly.Msg["TEXT_JOIN_TOOLTIP"] = "Créer un morceau de texte en joignant bout à bout et successivement un nombre quelconque d’éléments dans le même ordre.";
    Blockly.Msg["TEXT_LENGTH_HELPURL"] = "https://github.com/google/blockly/wiki/Text#text-modification";  // untranslated
    Blockly.Msg["TEXT_LENGTH_TITLE"] = "longueur de %1";
    Blockly.Msg["TEXT_LENGTH_TOOLTIP"] = "Renvoie le nombre de lettres (chiffres, ponctuations, symboles et espaces compris) dans le texte fourni.";
    Blockly.Msg["TEXT_PRINT_HELPURL"] = "https://github.com/google/blockly/wiki/Text#printing-text";  // untranslated
    Blockly.Msg["TEXT_PRINT_TITLE"] = "afficher %1";
    Blockly.Msg["TEXT_PRINT_TOOLTIP"] = "Afficher le texte, le nombre ou une autre valeur spécifiée.";
    Blockly.Msg["TEXT_PROMPT_HELPURL"] = "https://github.com/google/blockly/wiki/Text#getting-input-from-the-user";  // untranslated
    Blockly.Msg["TEXT_PROMPT_TOOLTIP_NUMBER"] = "Demander un nombre à l’utilisateur.";
    Blockly.Msg["TEXT_PROMPT_TOOLTIP_TEXT"] = "Demander un texte à l’utilisateur.";
    Blockly.Msg["TEXT_PROMPT_TYPE_NUMBER"] = "demander un nombre avec un message";
    Blockly.Msg["TEXT_PROMPT_TYPE_TEXT"] = "demander un texte avec un message";
    Blockly.Msg["TEXT_REPLACE_HELPURL"] = "https://github.com/google/blockly/wiki/Text#replacing-substrings";
    Blockly.Msg["TEXT_REPLACE_MESSAGE0"] = "remplacer %1 par %2 dans %3";
    Blockly.Msg["TEXT_REPLACE_TOOLTIP"] = "Remplacer toutes les occurrences d’un texte par un autre.";
    Blockly.Msg["TEXT_REVERSE_HELPURL"] = "https://github.com/google/blockly/wiki/Text#reversing-text";
    Blockly.Msg["TEXT_REVERSE_MESSAGE0"] = "renverser %1";
    Blockly.Msg["TEXT_REVERSE_TOOLTIP"] = "Renverse l’ordre des caractères dans le texte.";
    Blockly.Msg["TEXT_TEXT_HELPURL"] = "https://fr.wikipedia.org/wiki/Cha%C3%AEne_de_caract%C3%A8res";
    Blockly.Msg["TEXT_TEXT_TOOLTIP"] = "Une lettre, un mot ou une ligne de texte.";
    Blockly.Msg["TEXT_TRIM_HELPURL"] = "https://github.com/google/blockly/wiki/Text#trimming-removing-spaces";  // untranslated
    Blockly.Msg["TEXT_TRIM_OPERATOR_BOTH"] = "supprimer les espaces des deux côtés de";
    Blockly.Msg["TEXT_TRIM_OPERATOR_LEFT"] = "supprimer les espaces du côté gauche de";
    Blockly.Msg["TEXT_TRIM_OPERATOR_RIGHT"] = "supprimer les espaces du côté droit de";
    Blockly.Msg["TEXT_TRIM_TOOLTIP"] = "Renvoyer une copie du texte avec les espaces supprimés d’un ou des deux bouts.";
    Blockly.Msg["TODAY"] = "Aujourd'hui";
    Blockly.Msg["UNDO"] = "Annuler";
    Blockly.Msg["UNNAMED_KEY"] = "non nommé";
    Blockly.Msg["VARIABLES_DEFAULT_NAME"] = "élément";
    Blockly.Msg["VARIABLES_GET_CREATE_SET"] = "Créer « définir %1 »";
    Blockly.Msg["VARIABLES_GET_HELPURL"] = "https://github.com/google/blockly/wiki/Variables#get";  // untranslated
    Blockly.Msg["VARIABLES_GET_TOOLTIP"] = "Renvoie la valeur de cette variable.";
    Blockly.Msg["VARIABLES_SET"] = "définir %1 à %2";
    Blockly.Msg["VARIABLES_SET_CREATE_GET"] = "Créer « obtenir %1 »";
    Blockly.Msg["VARIABLES_SET_HELPURL"] = "https://github.com/google/blockly/wiki/Variables#set";  // untranslated
    Blockly.Msg["VARIABLES_SET_TOOLTIP"] = "Définit cette variable pour qu’elle soit égale à la valeur de l’entrée.";
    Blockly.Msg["VARIABLE_ALREADY_EXISTS"] = "Une variable nommée « %1 » existe déjà.";
    Blockly.Msg["VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE"] = "Une variable nommée « %1 » existe déjà pour un autre type : « %2 ».";
    Blockly.Msg["WORKSPACE_ARIA_LABEL"] = "Espace de travail de Blocky";
    Blockly.Msg["WORKSPACE_COMMENT_DEFAULT_TEXT"] = "Expliquez quelque chose...";
    Blockly.Msg["CONTROLS_FOREACH_INPUT_DO"] = Blockly.Msg["CONTROLS_REPEAT_INPUT_DO"];
    Blockly.Msg["CONTROLS_FOR_INPUT_DO"] = Blockly.Msg["CONTROLS_REPEAT_INPUT_DO"];
    Blockly.Msg["CONTROLS_IF_ELSEIF_TITLE_ELSEIF"] = Blockly.Msg["CONTROLS_IF_MSG_ELSEIF"];
    Blockly.Msg["CONTROLS_IF_ELSE_TITLE_ELSE"] = Blockly.Msg["CONTROLS_IF_MSG_ELSE"];
    Blockly.Msg["CONTROLS_IF_IF_TITLE_IF"] = Blockly.Msg["CONTROLS_IF_MSG_IF"];
    Blockly.Msg["CONTROLS_IF_MSG_THEN"] = Blockly.Msg["CONTROLS_REPEAT_INPUT_DO"];
    Blockly.Msg["CONTROLS_WHILEUNTIL_INPUT_DO"] = Blockly.Msg["CONTROLS_REPEAT_INPUT_DO"];
    Blockly.Msg["LISTS_CREATE_WITH_ITEM_TITLE"] = Blockly.Msg["VARIABLES_DEFAULT_NAME"];
    Blockly.Msg["LISTS_GET_INDEX_HELPURL"] = Blockly.Msg["LISTS_INDEX_OF_HELPURL"];
    Blockly.Msg["LISTS_GET_INDEX_INPUT_IN_LIST"] = Blockly.Msg["LISTS_INLIST"];
    Blockly.Msg["LISTS_GET_SUBLIST_INPUT_IN_LIST"] = Blockly.Msg["LISTS_INLIST"];
    Blockly.Msg["LISTS_INDEX_OF_INPUT_IN_LIST"] = Blockly.Msg["LISTS_INLIST"];
    Blockly.Msg["LISTS_SET_INDEX_INPUT_IN_LIST"] = Blockly.Msg["LISTS_INLIST"];
    Blockly.Msg["MATH_CHANGE_TITLE_ITEM"] = Blockly.Msg["VARIABLES_DEFAULT_NAME"];
    Blockly.Msg["PROCEDURES_DEFRETURN_COMMENT"] = Blockly.Msg["PROCEDURES_DEFNORETURN_COMMENT"];
    Blockly.Msg["PROCEDURES_DEFRETURN_DO"] = Blockly.Msg["PROCEDURES_DEFNORETURN_DO"];
    Blockly.Msg["PROCEDURES_DEFRETURN_PROCEDURE"] = Blockly.Msg["PROCEDURES_DEFNORETURN_PROCEDURE"];
    Blockly.Msg["PROCEDURES_DEFRETURN_TITLE"] = Blockly.Msg["PROCEDURES_DEFNORETURN_TITLE"];
    Blockly.Msg["TEXT_APPEND_VARIABLE"] = Blockly.Msg["VARIABLES_DEFAULT_NAME"];
    Blockly.Msg["TEXT_CREATE_JOIN_ITEM_TITLE_ITEM"] = Blockly.Msg["VARIABLES_DEFAULT_NAME"];

    Blockly.Msg["MATH_HUE"] = "230";
    Blockly.Msg["LOOPS_HUE"] = "120";
    Blockly.Msg["LISTS_HUE"] = "260";
    Blockly.Msg["LOGIC_HUE"] = "210";
    Blockly.Msg["VARIABLES_HUE"] = "330";
    Blockly.Msg["TEXTS_HUE"] = "160";
    Blockly.Msg["PROCEDURES_HUE"] = "290";
    Blockly.Msg["COLOUR_HUE"] = "20";
    Blockly.Msg["VARIABLES_DYNAMIC_HUE"] = "310";

    //Workspace
    Blockly.Msg["WORKSPACE_TAB_EVENTS"] = "Evénements";
    Blockly.Msg["WORKSPACE_TAB_MESSAGES"] = "Messages";

    Blockly.Msg["WORKSPACE_EVENTS_MESSAGE_SENT_DELETED"] = "Un message est envoyé ou supprimé";
    Blockly.Msg["WORKSPACE_EVENTS_MESSAGE_UPDATED"] = "Un message est modifié";
    Blockly.Msg["WORKSPACE_EVENTS_USER_JOIN_LEAVE"] = "Un utilisateur rejoint ou quitte le serveur";
    Blockly.Msg["WORKSPACE_EVENTS_USER_UPDATED"] = "Un utilisateur est modifié";
    Blockly.Msg["WORKSPACE_EVENTS_RANK"] = "Un rang est créé ou supprimé";
    Blockly.Msg["WORKSPACE_EVENTS_RANK_UPDATE"] = "Un rang est modifié";
    Blockly.Msg["WORKSPACE_EVENTS_BAN_UNBAN"] = "Un utilisateur est banni ou débanni";
    Blockly.Msg["WORKSPACE_EVENTS_TEXT_CHANNEL"] = "Un salon textuel est créé ou supprimé";
    Blockly.Msg["WORKSPACE_EVENTS_TEXT_CHANNEL_UPDATE"] = "Un salon textuel est modifié";
    Blockly.Msg["WORKSPACE_EVENTS_VOICE_CHANNEL"] = "Un salon vocal est créé ou supprimé";
    Blockly.Msg["WORKSPACE_EVENTS_VOICE_CHANNEL_UPDATE"] = "Un salon vocal est modifié";
    Blockly.Msg["WORKSPACE_EVENTS_VOICE_UPDATE"] = "L'état vocal d'un utilisateur est modifié";
    Blockly.Msg["WORKSPACE_EVENTS_REACTION"] = "Une réaction est ajoutée ou retirée d'un message";
    Blockly.Msg["WORKSPACE_EVENTS_EXTRA"] = "Autres";

    //Event blocks
    Blockly.Msg["EVENT_MESSAGE_SENT"] = "Un message est envoyé %1 %2";
    Blockly.Msg["EVENT_MESSAGE_SENT_TOOLTIP"] = "Un message est envoyé sur le serveur, utilisez la variable \"Message envoyé\" pour obtenir les informations sur le message";
    Blockly.Msg["EVENT_MESSAGE_DELETED"] = "Un message est supprimé %1 %2";
    Blockly.Msg["EVENT_MESSAGE_DELETED_TOOLTIP"] = "Un message est supprimé, utilisez a variable \"message\" pour accéder au message supprimé";
    Blockly.Msg["EVENT_MESSAGE_UPDATED"] = "Un message est modifié %1 %2";
    Blockly.Msg["EVENT_MESSAGE_UPDATED_TOOLTIP"] = "Un message est modifié, utilisez les variables \"Ancien message\" et \"Nouveau message\" pour accéder aux messages";
    Blockly.Msg["EVENT_USER_JOIN"] = "Un utilisateur rejoint le serveur %1 %2";
    Blockly.Msg["EVENT_USER_JOIN_TOOLTIP"] = "Un utilisateur rejoint le serveur.";
    Blockly.Msg["EVENT_USER_LEFT"] = "Un utilisateur quitte le serveur %1 %2";
    Blockly.Msg["EVENT_USER_LEFT_TOOLTIP"] = "Un utilisateur quitte le serveur.";
    Blockly.Msg["EVENT_USER_UPDATED"] = "Un utilisateur est modifié %1 %2";
    Blockly.Msg["EVENT_USER_UPDATED_TOOLTIP"] = "Un utilisateur est modifié ( Changement de pseudo sur le serveur, changement de rôles, ... ).";
    Blockly.Msg["EVENT_ROLE_CREATED"] = "Un rôle est créé %1 %2";
    Blockly.Msg["EVENT_ROLE_CREATED_TOOLTIP"] = "Un nouveau rôle a été créé";
    Blockly.Msg["EVENT_ROLE_DELETED"] = "Un rôle est supprimé %1 %2";
    Blockly.Msg["EVENT_ROLE_DELETED_TOOLTIP"] = "Un rôle a été supprimé";
    Blockly.Msg["EVENT_ROLE_EDITED"] = "Un rôle est modifié %1 %2";
    Blockly.Msg["EVENT_ROLE_EDITED_TOOLTIP"] = "Un rôle a été modifié ( Nom, couleur, permissions, ect... changés )";
    Blockly.Msg["EVENT_USER_BANNED"] = "Un utilisateur est banni %1 %2";
    Blockly.Msg["EVENT_USER_BANNED_TOOLTIP"] = "Un utilisateur a été banni du serveur";
    Blockly.Msg["EVENT_USER_UNBANNED"] = "Un utilisateur est débanni %1 %2";
    Blockly.Msg["EVENT_USER_UNBANNED_TOOLTIP"] = "Un utilisateur est débanni du serveur";
    Blockly.Msg["EVENT_PINNED_UPDATED"] = "Un message est épinglé ou désépinglé %1 %2";
    Blockly.Msg["EVENT_PINNED_UPDATED_TOOLTIP"] = "Un message a été épinglé ou n'est plus épinglé";
    Blockly.Msg["EVENT_USER_VOICE_UPDATE"] = "Un membre se déplace d'un salon vocal %1 %2";
    Blockly.Msg["EVENT_USER_VOICE_UPDATE_TOOLTIP"] = "Un membre a rejoint, quitté ou a changé de salon vocal.";
    Blockly.Msg["EVENT_USER_START_WRITING"] = "Un membre commence à écrire %1 %2";
    Blockly.Msg["EVENT_USER_START_WRITING_TOOLTIP"] = "Un membre a commencé à écrire";
    Blockly.Msg["EVENT_TEXT_CHANNEL_CREATED"] = "Un salon textuel est créé %1 %2";
    Blockly.Msg["EVENT_TEXT_CHANNEL_CREATED_TOOLTIP"] = "Un salon textuel est créé";
    Blockly.Msg["EVENT_TEXT_CHANNEL_DELETED"] = "Un salon textuel est supprimé %1 %2";
    Blockly.Msg["EVENT_TEXT_CHANNEL_DELETED_TOOLTIP"] = "Un salon textuel est supprimé";
    Blockly.Msg["EVENT_TEXT_CHANNEL_EDITED"] = "Un salon textuel est modifié %1 %2";
    Blockly.Msg["EVENT_TEXT_CHANNEL_EDITED_TOOLTIP"] = "Un salon textuel est modifié ( Changement de nom, sujet, ... )";
    Blockly.Msg["EVENT_VOICE_CHANNEL_CREATED"] = "Un salon vocal est créé %1 %2";
    Blockly.Msg["EVENT_VOICE_CHANNEL_CREATED_TOOLTIP"] = "Un salon vocal est créé";
    Blockly.Msg["EVENT_VOICE_CHANNEL_DELETED"] = "Un salon vocal est supprimé %1 %2";
    Blockly.Msg["EVENT_VOICE_CHANNEL_DELETED_TOOLTIP"] = "Un salon vocal est supprimé";
    Blockly.Msg["EVENT_VOICE_CHANNEL_EDITED"] = "Un salon vocal est modifié %1 %2";
    Blockly.Msg["EVENT_VOICE_CHANNEL_EDITED_TOOLTIP"] = "Un salon vocal est modifié ( Changement de nom, sujet, ... )";
    Blockly.Msg["EVENT_REACTION_ADDED"] = "Une réaction est ajoutée %1 %2";
    Blockly.Msg["EVENT_REACTION_ADDED_TOOLTIP"] = "Une réaction est ajoutée à un message";
    Blockly.Msg["EVENT_REACTION_REMOVED"] = "Une réaction est retirée %1 %2";
    Blockly.Msg["EVENT_REACTION_REMOVED_TOOLIP"] = "Une réaction est retirée d'un message";

    //Event var blocks
    Blockly.Msg["EVENT_VAR_MESSAGE"] = "Message";
    Blockly.Msg["EVENT_VAR_MESSAGE_TOOLTIP"] = "Représente le message d'un événement";
    Blockly.Msg["EVENT_VAR_OLD_MESSAGE"] = "Ancien Message";
    Blockly.Msg["EVENT_VAR_OLD_MESSAGE_TOOLTIP"] = "Représente l'ancien état d'un message modifié. Ne sert qu'à l'événement message modifié";
    Blockly.Msg["EVENT_VAR_NEW_MESSAGE"] = "Nouveau Message";
    Blockly.Msg["EVENT_VAR_NEW_MESSAGE_TOOLTIP"] = "Représente le nouvel état d'un message modifié. Ne sert qu'à l'événement message modifié";
    Blockly.Msg["EVENT_VAR_USER"] = "Utilisateur";
    Blockly.Msg["EVENT_VAR_USER_TOOLTIP"] = "Représente l'utilisateur d'un événement";
    Blockly.Msg["EVENT_VAR_OLD_USER"] = "Ancien Utilisateur";
    Blockly.Msg["EVENT_VAR_OLD_USER_TOOLTIP"] = "Représente l'ancien état de l'utilisateur";
    Blockly.Msg["EVENT_VAR_NEW_USER"] = "Nouvel Utilisateur";
    Blockly.Msg["EVENT_VAR_NEW_USER_TOOLTIP"] = "Représente le nouvel état de l'utilisateur";
    Blockly.Msg["EVENT_VAR_RANK"] = "Rôle";
    Blockly.Msg["EVENT_VAR_RANK_TOOLTIP"] = "Représente le rôle impliqué dans l'événement";
    Blockly.Msg["EVENT_VAR_OLD_RANK"] = "Ancien Rôle";
    Blockly.Msg["EVENT_VAR_OLD_RANK_TOOLTIP"] = "Représente l'ancien état du rôle impliqué dans l'événement";
    Blockly.Msg["EVENT_VAR_NEW_RANK"] = "Nouveau Rôle";
    Blockly.Msg["EVENT_VAR_NEW_RANK_TOOLTIP"] = "Représente le nouvel état du rôle impliqué dans l'événement";
    Blockly.Msg["EVENT_VAR_OLD_VOICE_CHANNEL"] = "Ancien salon vocal";
    Blockly.Msg["EVENT_VAR_OLD_VOICE_CHANNEL_TOOLTIP"] = "Représente le salon vocal d'avant l'action. Dans le cadre d'une modification du salon, son ancien état, dans le cadre d'une mise à jour d'état vocal, cela représente le salon où était le membre. Si le membre vient de se connecter, cette variable sera vide.";
    Blockly.Msg["EVENT_VAR_NEW_VOICE_CHANNEL"] = "Nouveau salon vocal";
    Blockly.Msg["EVENT_VAR_NEW_VOICE_CHANNEL_TOOLTIP"] = "Représente le salon vocal d'après l'action. Dans le cadre d'une modification du salon, son nouvel état, dans le cadre d'une mise à jour d'état vocal, cela représente le salon où est maintenant le membre. Si le membre vient de se déconnecter, cette variable sera vide.";
    Blockly.Msg["EVENT_VAR_TEXT_CHANNEL"] = "Salon textuel";
    Blockly.Msg["EVENT_VAR_TEXT_CHANNEL_TOOLTIP"] = "Représente le salon de l'événement d'un salon textuel";
    Blockly.Msg["EVENT_VAR_OLD_TEXT_CHANNEL"] = "Ancien Salon textuel";
    Blockly.Msg["EVENT_VAR_OLD_TEXT_CHANNEL_TOOLTIP"] = "Représente l'ancien état d'un salon textuel";
    Blockly.Msg["EVENT_VAR_NEW_TEXT_CHANNEL"] = "Nouveau Salon textuel";
    Blockly.Msg["EVENT_VAR_NEW_TEXT_CHANNEL_TOOLTIP"] = "Représente le nouvel état d'un salon textuel";
    Blockly.Msg["EVENT_VAR_VOICE_CHANNEL"] = "Salon vocal";
    Blockly.Msg["EVENT_VAR_VOICE_CHANNEL_TOOLTIP"] = "Représente le salon vocal où s'est déroulé l'événement";
    Blockly.Msg["EVENT_VAR_REACTION"] = "Réaction";
    Blockly.Msg["EVENT_VAR_REACTION_TOOLTIP"] = "Représente la réaction de l'événement";

    //Message blocks
    Blockly.Msg["BLOCK_MESSAGE_REPLY"] = "Repondre au message %1 Avec le texte %2";
    Blockly.Msg["BLOCK_MESSAGE_REPLY_TOOLTIP"] = "Permet de directement répondre à un message";

    //Text Channel Permissions
    Blockly.Msg["BLOCK_TEXT_CHANNEL_PERMISSION"] = "Définir les permissions pour un %1 %2 %3 %4 pour %5 dans le salon textuel %6";
    Blockly.Msg["BLOCK_TEXT_VOICE_PERMISSION"] = "Définir les permissions pour un %1 %2 %3 pour %4 dans le salon vocal %5";
    Blockly.Msg["PERMISSION_SEE_CHANNEL"] = "Voir le salon";
    Blockly.Msg["PERMISSION_MANAGE_CHANNEL"] = "Gérer le salon";
    Blockly.Msg["PERMISSION_MANAGE_CHANNEL_PERMISSIONS"] = "Gérer les permissions du salon";
    Blockly.Msg["PERMISSION_CREATE_INVITE"] = "Créer une invitation";
    Blockly.Msg["PERMISSION_SEND_MESSAGES"] = "Envoyer des messages";
    Blockly.Msg["PERMISSION_SEND_MESSAGE_IN_THREADS"] = "Envoyer des messages dans un fil";
    Blockly.Msg["PERMISSION_CREATE_PUBLIC_THREADS"] = "Créer des fils publics";
    Blockly.Msg["PERMISSION_CREATE_PRIVATE_THREADS"] = "Créer des fils privés";
    Blockly.Msg["PERMISSION_USE_LINKS"] = "Utiliser des liens";
    Blockly.Msg["PERMISSION_ADD_FILES"] = "Ajouter des fichiers";
    Blockly.Msg["PERMISSION_ADD_REACTIONS"] = "Ajouter des réactions";
    Blockly.Msg["PERMISSION_USE_EXTERNAL_EMOJIS"] = "Utiliser des émojis externes";
    Blockly.Msg["PERMISSION_USE_EXTERNAL_STICKERS"] = "Utiliser des stickers externes";
    Blockly.Msg["PERMISSION_PING_EVERYONE"] = "Mentionner @everyone";
    Blockly.Msg["PERMISSION_MANAGE_MESSAGES"] = "Gérer les messages";
    Blockly.Msg["PERMISSION_MANAGE_THREADS"] = "Gérer les fils";
    Blockly.Msg["PERMISSION_SEE_OLD_MESSAGES"] = "Voir les anciens messages";
    Blockly.Msg["PERMISSION_CONNECT_TO_VOICE_CHANNEL"] = "Se connecter au salon vocal";
    Blockly.Msg["PERMISSION_SPEAK"] = "Parler";
    Blockly.Msg["PERMISSION_USE_VIDEO"] = "Utiliser la vidéo";
    Blockly.Msg["PERMISSION_START_ACTIVITY"] = "Démarrer une activité";
    Blockly.Msg["PERMISSION_USE_VOICE_DETECTION"] = "Utiliser la détéction de voix";
    Blockly.Msg["PERMISSION_PRIORITY_SPEAKER"] = "Voix prioritaire";
    Blockly.Msg["PERMISSION_MUTE_MEMBER"] = "Rendre un membre muet";
    Blockly.Msg["PERMISSION_DEAF_MEMBER"] = "Rendre un membre sourd";
    Blockly.Msg["PERMISSION_MOOVE_MEMBER"] = "Déplacer un membre";
    Blockly.Msg["PERMISSION_GRANT_PERMISSION"] = "Autoriser";
    Blockly.Msg["PERMISSION_DENY_PERMISSION"] = "Refuser";
    Blockly.Msg["PERMISSION_UNDEFINED_PERMISSION"] = "Indéfinit";
    Blockly.Msg["PERMISSION_USER"] = Blockly.Msg["EVENT_VAR_USER"];
    Blockly.Msg["PERMISSION_RANK"] = Blockly.Msg["EVENT_VAR_RANK"];
    Blockly.Msg["BLOCK_TEXT_CHANNEL_PERMISSION_TOOLTIP"] = "Permet de définir les permissions d'un salon écrit. Indiquez si vous définissez les permissions d'un grade ou d'un utilisateur, puis quelle permission, si elle est accordée, refusée ou indéfinie, puis ajoutez les variables Utilisateur ou Groupe ainsi que celle du salon.";
    Blockly.Msg["BLOCK_TEXT_VOICE_PERMISSION_TOOLTIP"] = "Permet de définir les permissions d'un salon vocal. Indiquez si vous définissez les permissions d'un grade ou d'un utilisateur, puis quelle permission, si elle est accordée, refusée ou indéfinie, puis ajoutez les variables Utilisateur ou Groupe ainsi que celle du salon.";

    return(Blockly);
  }
}