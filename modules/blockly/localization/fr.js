"use strict";
module.exports = function init(Blockly) {
  //A name has been set, in order to make it runnable when sent to front-end

  Blockly.Msg["ADD_COMMENT"] = "Ajouter un commentaire";
  Blockly.Msg["CANNOT_DELETE_VARIABLE_PROCEDURE"] =
    "Impossible de supprimer la variable « %1 » parce qu’elle fait partie de la définition de la fonction « %2 »";
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
  Blockly.Msg["COLOUR_RANDOM_HELPURL"] = "http://randomcolour.com"; // untranslated
  Blockly.Msg["COLOUR_RANDOM_TITLE"] = "couleur aléatoire";
  Blockly.Msg["COLOUR_RANDOM_TOOLTIP"] = "Choisir une couleur au hasard.";
  Blockly.Msg["COLOUR_RGB_BLUE"] = "bleu";
  Blockly.Msg["COLOUR_RGB_GREEN"] = "vert";
  Blockly.Msg["COLOUR_RGB_HELPURL"] = "https://www.december.com/html/spec/colorpercompact.html";
  Blockly.Msg["COLOUR_RGB_RED"] = "rouge";
  Blockly.Msg["COLOUR_RGB_TITLE"] = "colorier en";
  Blockly.Msg["COLOUR_RGB_TOOLTIP"] =
    "Créer une couleur avec la quantité spécifiée de rouge, vert et bleu. Les valeurs doivent être comprises entre 0 et 100.";
  Blockly.Msg["CONTROLS_FLOW_STATEMENTS_HELPURL"] =
    "https://github.com/google/blockly/wiki/Loops#loop-termination-blocks"; // untranslated
  Blockly.Msg["CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK"] = "quitter la boucle";
  Blockly.Msg["CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE"] = "passer à l’itération de boucle suivante";
  Blockly.Msg["CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK"] = "Sortir de la boucle englobante.";
  Blockly.Msg["CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE"] =
    "Sauter le reste de cette boucle, et poursuivre avec l’itération suivante.";
  Blockly.Msg["CONTROLS_FLOW_STATEMENTS_WARNING"] = "Attention : ce bloc ne devrait être utilisé que dans une boucle.";
  Blockly.Msg["CONTROLS_FOREACH_HELPURL"] = "https://github.com/google/blockly/wiki/Loops#for-each"; // untranslated
  Blockly.Msg["CONTROLS_FOREACH_TITLE"] = "pour chaque élément %1 dans la liste %2";
  Blockly.Msg["CONTROLS_FOREACH_TOOLTIP"] =
    "Pour chaque élément d’une liste, assigner la valeur de l’élément à la variable « %1 », puis exécuter des instructions.";
  Blockly.Msg["CONTROLS_FOR_HELPURL"] = "https://github.com/google/blockly/wiki/Loops#count-with"; // untranslated
  Blockly.Msg["CONTROLS_FOR_TITLE"] = "compter avec %1 de %2 à %3 par %4";
  Blockly.Msg["CONTROLS_FOR_TOOLTIP"] =
    "Faire prendre successivement à la variable « %1 » les valeurs entre deux nombres de début et de fin par incrément du pas spécifié et exécuter les instructions spécifiées.";
  Blockly.Msg["CONTROLS_IF_ELSEIF_TOOLTIP"] = "Ajouter une condition au bloc conditionnel.";
  Blockly.Msg["CONTROLS_IF_ELSE_TOOLTIP"] =
    "Ajouter une condition finale déclenchée dans tous les autres cas au bloc conditionnel.";
  Blockly.Msg["CONTROLS_IF_HELPURL"] = "https://github.com/google/blockly/wiki/IfElse"; // untranslated
  Blockly.Msg["CONTROLS_IF_IF_TOOLTIP"] =
    "Ajouter, supprimer ou réordonner les sections pour reconfigurer ce bloc conditionnel.";
  Blockly.Msg["CONTROLS_IF_MSG_ELSE"] = "sinon";
  Blockly.Msg["CONTROLS_IF_MSG_ELSEIF"] = "sinon si";
  Blockly.Msg["CONTROLS_IF_MSG_IF"] = "si";
  Blockly.Msg["CONTROLS_IF_TOOLTIP_1"] = "Si une valeur est vraie, alors exécuter certaines instructions.";
  Blockly.Msg["CONTROLS_IF_TOOLTIP_2"] =
    "Si une valeur est vraie, alors exécuter le premier bloc d’instructions. Sinon, exécuter le second bloc d’instructions.";
  Blockly.Msg["CONTROLS_IF_TOOLTIP_3"] =
    "Si la première valeur est vraie, alors exécuter le premier bloc d’instructions. Sinon, si la seconde valeur est vraie, exécuter le second bloc d’instructions.";
  Blockly.Msg["CONTROLS_IF_TOOLTIP_4"] =
    "Si la première valeur est vraie, alors exécuter le premier bloc d’instructions. Sinon, si la seconde valeur est vraie, exécuter le second bloc d’instruction. Si aucune des valeurs n’est vraie, exécuter le dernier bloc d’instruction.";
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
  Blockly.Msg["LISTS_CREATE_EMPTY_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#create-empty-list"; // untranslated
  Blockly.Msg["LISTS_CREATE_EMPTY_TITLE"] = "créer une liste vide";
  Blockly.Msg["LISTS_CREATE_EMPTY_TOOLTIP"] =
    "Renvoyer une liste, de longueur 0, ne contenant aucun enregistrement de données";
  Blockly.Msg["LISTS_CREATE_WITH_CONTAINER_TITLE_ADD"] = "liste";
  Blockly.Msg["LISTS_CREATE_WITH_CONTAINER_TOOLTIP"] =
    "Ajouter, supprimer, ou réordonner les sections pour reconfigurer ce bloc de liste.";
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
  Blockly.Msg["LISTS_GET_INDEX_TAIL"] = ""; // untranslated
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_FIRST"] = "Renvoie le premier élément dans une liste.";
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_FROM"] = "Renvoie l’élément à la position indiquée dans une liste.";
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_LAST"] = "Renvoie le dernier élément dans une liste.";
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_RANDOM"] = "Renvoie un élément au hasard dans une liste.";
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST"] = "Supprime et renvoie le premier élément dans une liste.";
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM"] =
    "Supprime et renvoie l’élément à la position indiquée dans une liste.";
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST"] = "Supprime et renvoie le dernier élément dans une liste.";
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM"] = "Supprime et renvoie un élément au hasard dans une liste.";
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST"] = "Supprime le premier élément dans une liste.";
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM"] = "Supprime l’élément à la position indiquée dans une liste.";
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST"] = "Supprime le dernier élément dans une liste.";
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM"] = "Supprime un élément au hasard dans une liste.";
  Blockly.Msg["LISTS_GET_SUBLIST_END_FROM_END"] = "jusqu’au n° depuis la fin";
  Blockly.Msg["LISTS_GET_SUBLIST_END_FROM_START"] = "jusqu’au n°";
  Blockly.Msg["LISTS_GET_SUBLIST_END_LAST"] = "jusqu’à la fin";
  Blockly.Msg["LISTS_GET_SUBLIST_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#getting-a-sublist"; // untranslated
  Blockly.Msg["LISTS_GET_SUBLIST_START_FIRST"] = "obtenir la sous-liste depuis le début";
  Blockly.Msg["LISTS_GET_SUBLIST_START_FROM_END"] = "obtenir la sous-liste depuis le n° depuis la fin";
  Blockly.Msg["LISTS_GET_SUBLIST_START_FROM_START"] = "obtenir la sous-liste depuis le n°";
  Blockly.Msg["LISTS_GET_SUBLIST_TAIL"] = ""; // untranslated
  Blockly.Msg["LISTS_GET_SUBLIST_TOOLTIP"] = "Crée une copie de la partie spécifiée d’une liste.";
  Blockly.Msg["LISTS_INDEX_FROM_END_TOOLTIP"] = "%1 est le dernier élément.";
  Blockly.Msg["LISTS_INDEX_FROM_START_TOOLTIP"] = "%1 est le premier élément.";
  Blockly.Msg["LISTS_INDEX_OF_FIRST"] = "trouver la première occurrence de l’élément";
  Blockly.Msg["LISTS_INDEX_OF_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list"; // untranslated
  Blockly.Msg["LISTS_INDEX_OF_LAST"] = "trouver la dernière occurrence de l’élément";
  Blockly.Msg["LISTS_INDEX_OF_TOOLTIP"] =
    "Renvoie l’index de la première/dernière occurrence de l’élément dans la liste. Renvoie %1 si l’élément n’est pas trouvé.";
  Blockly.Msg["LISTS_INLIST"] = "dans la liste";
  Blockly.Msg["LISTS_ISEMPTY_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#is-empty"; // untranslated
  Blockly.Msg["LISTS_ISEMPTY_TITLE"] = "%1 est vide";
  Blockly.Msg["LISTS_ISEMPTY_TOOLTIP"] = "Renvoie vrai si la liste est vide.";
  Blockly.Msg["LISTS_LENGTH_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#length-of"; // untranslated
  Blockly.Msg["LISTS_LENGTH_TITLE"] = "longueur de %1";
  Blockly.Msg["LISTS_LENGTH_TOOLTIP"] = "Renvoie la longueur d’une liste.";
  Blockly.Msg["LISTS_REPEAT_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#create-list-with"; // untranslated
  Blockly.Msg["LISTS_REPEAT_TITLE"] = "créer une liste avec l’élément %1 répété %2 fois";
  Blockly.Msg["LISTS_REPEAT_TOOLTIP"] =
    "Crée une liste consistant en la valeur fournie répétée le nombre de fois indiqué.";
  Blockly.Msg["LISTS_REVERSE_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#reversing-a-list";
  Blockly.Msg["LISTS_REVERSE_MESSAGE0"] = "inverser %1";
  Blockly.Msg["LISTS_REVERSE_TOOLTIP"] = "Inverser la copie d’une liste.";
  Blockly.Msg["LISTS_SET_INDEX_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#in-list--set"; // untranslated
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
  Blockly.Msg["LISTS_SPLIT_HELPURL"] =
    "https://github.com/google/blockly/wiki/Lists#splitting-strings-and-joining-lists";
  Blockly.Msg["LISTS_SPLIT_LIST_FROM_TEXT"] = "créer une liste depuis le texte";
  Blockly.Msg["LISTS_SPLIT_TEXT_FROM_LIST"] = "créer un texte depuis la liste";
  Blockly.Msg["LISTS_SPLIT_TOOLTIP_JOIN"] = "Réunir une liste de textes en un seul, en les joignant par un séparateur.";
  Blockly.Msg["LISTS_SPLIT_TOOLTIP_SPLIT"] = "Couper un texte en une liste de textes, en coupant à chaque séparateur.";
  Blockly.Msg["LISTS_SPLIT_WITH_DELIMITER"] = "avec séparateur";
  Blockly.Msg["LOGIC_BOOLEAN_FALSE"] = "faux";
  Blockly.Msg["LOGIC_BOOLEAN_HELPURL"] = "https://github.com/google/blockly/wiki/Logic#values"; // untranslated
  Blockly.Msg["LOGIC_BOOLEAN_TOOLTIP"] = "Renvoie soit vrai soit faux.";
  Blockly.Msg["LOGIC_BOOLEAN_TRUE"] = "vrai";
  Blockly.Msg["LOGIC_COMPARE_HELPURL"] = "https://fr.wikipedia.org/wiki/In%C3%A9galit%C3%A9_(math%C3%A9matiques)";
  Blockly.Msg["LOGIC_COMPARE_TOOLTIP_EQ"] = "Renvoyer vrai si les deux entrées sont égales.";
  Blockly.Msg["LOGIC_COMPARE_TOOLTIP_GT"] = "Renvoyer vrai si la première entrée est plus grande que la seconde.";
  Blockly.Msg["LOGIC_COMPARE_TOOLTIP_GTE"] =
    "Renvoyer true si la première entrée est supérieure ou égale à la seconde.";
  Blockly.Msg["LOGIC_COMPARE_TOOLTIP_LT"] = "Renvoyer vrai si la première entrée est plus petite que la seconde.";
  Blockly.Msg["LOGIC_COMPARE_TOOLTIP_LTE"] =
    "Renvoyer vrai si la première entrée est plus petite ou égale à la seconde.";
  Blockly.Msg["LOGIC_COMPARE_TOOLTIP_NEQ"] = "Renvoyer vrai si les deux entrées sont différentes.";
  Blockly.Msg["LOGIC_NEGATE_HELPURL"] = "https://github.com/google/blockly/wiki/Logic#not"; // untranslated
  Blockly.Msg["LOGIC_NEGATE_TITLE"] = "non %1";
  Blockly.Msg["LOGIC_NEGATE_TOOLTIP"] = "Renvoie vrai si l’entrée est fausse. Renvoie faux si l’entrée est vraie.";
  Blockly.Msg["LOGIC_NULL"] = "nul";
  Blockly.Msg["LOGIC_NULL_HELPURL"] = "https://en.wikipedia.org/wiki/Nullable_type";
  Blockly.Msg["LOGIC_NULL_TOOLTIP"] = "Renvoie nul.";
  Blockly.Msg["LOGIC_OPERATION_AND"] = "et";
  Blockly.Msg["LOGIC_OPERATION_HELPURL"] = "https://github.com/google/blockly/wiki/Logic#logical-operations"; // untranslated
  Blockly.Msg["LOGIC_OPERATION_OR"] = "ou";
  Blockly.Msg["LOGIC_OPERATION_TOOLTIP_AND"] = "Renvoyer vrai si les deux entrées sont vraies.";
  Blockly.Msg["LOGIC_OPERATION_TOOLTIP_OR"] = "Renvoyer vrai si au moins une des entrées est vraie.";
  Blockly.Msg["LOGIC_TERNARY_CONDITION"] = "test";
  Blockly.Msg["LOGIC_TERNARY_HELPURL"] = "https://en.wikipedia.org/wiki/%3F%3A";
  Blockly.Msg["LOGIC_TERNARY_IF_FALSE"] = "si faux";
  Blockly.Msg["LOGIC_TERNARY_IF_TRUE"] = "si vrai";
  Blockly.Msg["LOGIC_TERNARY_TOOLTIP"] =
    "Vérifie la condition indiquée dans « test ». Si elle est vraie, renvoie la valeur « si vrai » ; sinon renvoie la valeur « si faux ».";
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
  Blockly.Msg["MATH_CONSTANT_TOOLTIP"] =
    "Renvoie une des constantes courantes : π (3,141...), e (2,718...), φ (nom d’or : ½(1+√5) = 1,618…), √2 (1,414...), √½ (0,707...), ou ∞ (infini).";
  Blockly.Msg["MATH_CONSTRAIN_HELPURL"] = "https://en.wikipedia.org/wiki/Clamping_(graphics)"; // untranslated
  Blockly.Msg["MATH_CONSTRAIN_TITLE"] = "contraindre %1 entre %2 et %3";
  Blockly.Msg["MATH_CONSTRAIN_TOOLTIP"] = "Contraindre un nombre à rester entre les limites spécifiées (incluses).";
  Blockly.Msg["MATH_DIVISION_SYMBOL"] = "÷";
  Blockly.Msg["MATH_IS_DIVISIBLE_BY"] = "est divisible par";
  Blockly.Msg["MATH_IS_EVEN"] = "est pair";
  Blockly.Msg["MATH_IS_NEGATIVE"] = "est négatif";
  Blockly.Msg["MATH_IS_ODD"] = "est impair";
  Blockly.Msg["MATH_IS_POSITIVE"] = "est positif";
  Blockly.Msg["MATH_IS_PRIME"] = "est premier";
  Blockly.Msg["MATH_IS_TOOLTIP"] =
    "Vérifier si un nombre est pair, impair, premier, entier, positif, négatif ou s’il est divisible par un certain nombre. Renvoie vrai ou faux.";
  Blockly.Msg["MATH_IS_WHOLE"] = "est entier";
  Blockly.Msg["MATH_MODULO_HELPURL"] = "https://fr.wikipedia.org/wiki/Modulo_(op%C3%A9ration)";
  Blockly.Msg["MATH_MODULO_TITLE"] = "reste de %1 ÷ %2";
  Blockly.Msg["MATH_MODULO_TOOLTIP"] = "Renvoyer le reste de la division euclidienne des deux nombres.";
  Blockly.Msg["MATH_MULTIPLICATION_SYMBOL"] = "×";
  Blockly.Msg["MATH_NUMBER_HELPURL"] = "https://fr.wikipedia.org/wiki/Nombre";
  Blockly.Msg["MATH_NUMBER_TOOLTIP"] = "Un nombre.";
  Blockly.Msg["MATH_ONLIST_HELPURL"] = ""; // untranslated
  Blockly.Msg["MATH_ONLIST_OPERATOR_AVERAGE"] = "moyenne de la liste";
  Blockly.Msg["MATH_ONLIST_OPERATOR_MAX"] = "maximum de la liste";
  Blockly.Msg["MATH_ONLIST_OPERATOR_MEDIAN"] = "médiane de la liste";
  Blockly.Msg["MATH_ONLIST_OPERATOR_MIN"] = "minimum de la liste";
  Blockly.Msg["MATH_ONLIST_OPERATOR_MODE"] = "majoritaires de la liste";
  Blockly.Msg["MATH_ONLIST_OPERATOR_RANDOM"] = "élément aléatoire de la liste";
  Blockly.Msg["MATH_ONLIST_OPERATOR_STD_DEV"] = "écart type de la liste";
  Blockly.Msg["MATH_ONLIST_OPERATOR_SUM"] = "somme de la liste";
  Blockly.Msg["MATH_ONLIST_TOOLTIP_AVERAGE"] =
    "Renvoyer la moyenne (arithmétique) des valeurs numériques dans la liste.";
  Blockly.Msg["MATH_ONLIST_TOOLTIP_MAX"] = "Renvoyer le plus grand nombre dans la liste.";
  Blockly.Msg["MATH_ONLIST_TOOLTIP_MEDIAN"] = "Renvoyer le nombre médian de la liste.";
  Blockly.Msg["MATH_ONLIST_TOOLTIP_MIN"] = "Renvoyer le plus petit nombre dans la liste.";
  Blockly.Msg["MATH_ONLIST_TOOLTIP_MODE"] =
    "Renvoyer une liste d’un ou plusieurs éléments les plus fréquents dans la liste.";
  Blockly.Msg["MATH_ONLIST_TOOLTIP_RANDOM"] = "Renvoyer un élément au hasard dans la liste.";
  Blockly.Msg["MATH_ONLIST_TOOLTIP_STD_DEV"] = "Renvoyer l’écart type de la liste.";
  Blockly.Msg["MATH_ONLIST_TOOLTIP_SUM"] = "Renvoyer la somme de tous les nombres dans la liste.";
  Blockly.Msg["MATH_POWER_SYMBOL"] = "^";
  Blockly.Msg["MATH_RANDOM_FLOAT_HELPURL"] =
    "https://fr.wikipedia.org/wiki/G%C3%A9n%C3%A9rateur_de_nombres_al%C3%A9atoires";
  Blockly.Msg["MATH_RANDOM_FLOAT_TITLE_RANDOM"] = "fraction aléatoire";
  Blockly.Msg["MATH_RANDOM_FLOAT_TOOLTIP"] = "Renvoyer une fraction aléatoire entre 0,0 (inclus) et 1,0 (exclus).";
  Blockly.Msg["MATH_RANDOM_INT_HELPURL"] =
    "https://fr.wikipedia.org/wiki/G%C3%A9n%C3%A9rateur_de_nombres_al%C3%A9atoires";
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
  Blockly.Msg["ORDINAL_NUMBER_SUFFIX"] = ""; // untranslated
  Blockly.Msg["PROCEDURES_ALLOW_STATEMENTS"] = "autoriser les ordres";
  Blockly.Msg["PROCEDURES_BEFORE_PARAMS"] = "avec :";
  Blockly.Msg["PROCEDURES_CALLNORETURN_HELPURL"] = "https://fr.wikipedia.org/wiki/Sous-programme";
  Blockly.Msg["PROCEDURES_CALLNORETURN_TOOLTIP"] = "Exécuter la fonction « %1 » définie par l’utilisateur.";
  Blockly.Msg["PROCEDURES_CALLRETURN_HELPURL"] = "https://fr.wikipedia.org/wiki/Sous-programme";
  Blockly.Msg["PROCEDURES_CALLRETURN_TOOLTIP"] =
    "Exécuter la fonction « %1 » définie par l’utilisateur et utiliser son résultat.";
  Blockly.Msg["PROCEDURES_CALL_BEFORE_PARAMS"] = "avec :";
  Blockly.Msg["PROCEDURES_CREATE_DO"] = "Créer « %1 »";
  Blockly.Msg["PROCEDURES_DEFNORETURN_COMMENT"] = "Décrivez cette fonction...";
  Blockly.Msg["PROCEDURES_DEFNORETURN_DO"] = ""; // untranslated
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
  Blockly.Msg["PROCEDURES_IFRETURN_WARNING"] =
    "Attention : ce bloc ne peut être utilisé que dans une définition de fonction.";
  Blockly.Msg["PROCEDURES_MUTATORARG_TITLE"] = "nom de l’entrée :";
  Blockly.Msg["PROCEDURES_MUTATORARG_TOOLTIP"] = "Ajouter une entrée à la fonction.";
  Blockly.Msg["PROCEDURES_MUTATORCONTAINER_TITLE"] = "entrées";
  Blockly.Msg["PROCEDURES_MUTATORCONTAINER_TOOLTIP"] =
    "Ajouter, supprimer, ou réarranger les entrées de cette fonction.";
  Blockly.Msg["REDO"] = "Refaire";
  Blockly.Msg["REMOVE_COMMENT"] = "Supprimer un commentaire";
  Blockly.Msg["RENAME_VARIABLE"] = "Renommer la variable...";
  Blockly.Msg["RENAME_VARIABLE_TITLE"] = "Renommer toutes les variables « %1 » en :";
  Blockly.Msg["TEXT_APPEND_HELPURL"] = "https://github.com/google/blockly/wiki/Text#text-modification"; // untranslated
  Blockly.Msg["TEXT_APPEND_TITLE"] = "ajouter le texte %2 à %1";
  Blockly.Msg["TEXT_APPEND_TOOLTIP"] = "Ajouter du texte à la variable « %1 ».";
  Blockly.Msg["TEXT_CHANGECASE_HELPURL"] = "https://github.com/google/blockly/wiki/Text#adjusting-text-case"; // untranslated
  Blockly.Msg["TEXT_CHANGECASE_OPERATOR_LOWERCASE"] = "en minuscules";
  Blockly.Msg["TEXT_CHANGECASE_OPERATOR_TITLECASE"] = "en Capitale Initiale Pour Chaque Mot";
  Blockly.Msg["TEXT_CHANGECASE_OPERATOR_UPPERCASE"] = "en MAJUSCULES";
  Blockly.Msg["TEXT_CHANGECASE_TOOLTIP"] = "Renvoyer une copie du texte dans une autre casse.";
  Blockly.Msg["TEXT_CHARAT_FIRST"] = "obtenir la première lettre";
  Blockly.Msg["TEXT_CHARAT_FROM_END"] = "obtenir la lettre nº (depuis la fin)";
  Blockly.Msg["TEXT_CHARAT_FROM_START"] = "obtenir la lettre nº";
  Blockly.Msg["TEXT_CHARAT_HELPURL"] = "https://github.com/google/blockly/wiki/Text#extracting-text"; // untranslated
  Blockly.Msg["TEXT_CHARAT_LAST"] = "obtenir la dernière lettre";
  Blockly.Msg["TEXT_CHARAT_RANDOM"] = "obtenir une lettre au hasard";
  Blockly.Msg["TEXT_CHARAT_TAIL"] = ""; // untranslated
  Blockly.Msg["TEXT_CHARAT_TITLE"] = "%2 dans le texte %1";
  Blockly.Msg["TEXT_CHARAT_TOOLTIP"] = "Renvoie la lettre à la position indiquée.";
  Blockly.Msg["TEXT_COUNT_HELPURL"] = "https://github.com/google/blockly/wiki/Text#counting-substrings";
  Blockly.Msg["TEXT_COUNT_MESSAGE0"] = "nombre %1 sur %2";
  Blockly.Msg["TEXT_COUNT_TOOLTIP"] = "Compter combien de fois un texte donné apparaît dans un autre.";
  Blockly.Msg["TEXT_CREATE_JOIN_ITEM_TOOLTIP"] = "Ajouter un élément au texte.";
  Blockly.Msg["TEXT_CREATE_JOIN_TITLE_JOIN"] = "joindre";
  Blockly.Msg["TEXT_CREATE_JOIN_TOOLTIP"] =
    "Ajouter, supprimer, ou réordonner des sections pour reconfigurer ce bloc de texte.";
  Blockly.Msg["TEXT_GET_SUBSTRING_END_FROM_END"] = "jusqu’à la lettre nº (depuis la fin)";
  Blockly.Msg["TEXT_GET_SUBSTRING_END_FROM_START"] = "jusqu’à la lettre nº";
  Blockly.Msg["TEXT_GET_SUBSTRING_END_LAST"] = "jusqu’à la dernière lettre";
  Blockly.Msg["TEXT_GET_SUBSTRING_HELPURL"] = "https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text"; // untranslated
  Blockly.Msg["TEXT_GET_SUBSTRING_INPUT_IN_TEXT"] = "dans le texte";
  Blockly.Msg["TEXT_GET_SUBSTRING_START_FIRST"] = "obtenir la sous-chaîne depuis la première lettre";
  Blockly.Msg["TEXT_GET_SUBSTRING_START_FROM_END"] = "obtenir la sous-chaîne depuis la lettre nº (depuis la fin)";
  Blockly.Msg["TEXT_GET_SUBSTRING_START_FROM_START"] = "obtenir la sous-chaîne depuis la lettre nº";
  Blockly.Msg["TEXT_GET_SUBSTRING_TAIL"] = ""; // untranslated
  Blockly.Msg["TEXT_GET_SUBSTRING_TOOLTIP"] = "Renvoie une partie indiquée du texte.";
  Blockly.Msg["TEXT_INDEXOF_HELPURL"] = "https://github.com/google/blockly/wiki/Text#finding-text"; // untranslated
  Blockly.Msg["TEXT_INDEXOF_OPERATOR_FIRST"] = "trouver la première occurrence de la chaîne";
  Blockly.Msg["TEXT_INDEXOF_OPERATOR_LAST"] = "trouver la dernière occurrence du texte";
  Blockly.Msg["TEXT_INDEXOF_TITLE"] = "%2 %3 dans le texte %1";
  Blockly.Msg["TEXT_INDEXOF_TOOLTIP"] =
    "Renvoie l’index de la première/dernière occurrence de la première chaîne dans la seconde. Renvoie %1 si la chaîne n’est pas trouvée.";
  Blockly.Msg["TEXT_ISEMPTY_HELPURL"] = "https://github.com/google/blockly/wiki/Text#checking-for-empty-text"; // untranslated
  Blockly.Msg["TEXT_ISEMPTY_TITLE"] = "%1 est vide";
  Blockly.Msg["TEXT_ISEMPTY_TOOLTIP"] = "Renvoie vrai si le texte fourni est vide.";
  Blockly.Msg["TEXT_JOIN_HELPURL"] = "https://github.com/google/blockly/wiki/Text#text-creation"; // untranslated
  Blockly.Msg["TEXT_JOIN_TITLE_CREATEWITH"] = "créer un texte avec";
  Blockly.Msg["TEXT_JOIN_TOOLTIP"] =
    "Créer un morceau de texte en joignant bout à bout et successivement un nombre quelconque d’éléments dans le même ordre.";
  Blockly.Msg["TEXT_LENGTH_HELPURL"] = "https://github.com/google/blockly/wiki/Text#text-modification"; // untranslated
  Blockly.Msg["TEXT_LENGTH_TITLE"] = "longueur de %1";
  Blockly.Msg["TEXT_LENGTH_TOOLTIP"] =
    "Renvoie le nombre de lettres (chiffres, ponctuations, symboles et espaces compris) dans le texte fourni.";
  Blockly.Msg["TEXT_PRINT_HELPURL"] = "https://github.com/google/blockly/wiki/Text#printing-text"; // untranslated
  Blockly.Msg["TEXT_PRINT_TITLE"] = "afficher %1";
  Blockly.Msg["TEXT_PRINT_TOOLTIP"] = "Afficher le texte, le nombre ou une autre valeur spécifiée.";
  Blockly.Msg["TEXT_PROMPT_HELPURL"] = "https://github.com/google/blockly/wiki/Text#getting-input-from-the-user"; // untranslated
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
  Blockly.Msg["TEXT_TRIM_HELPURL"] = "https://github.com/google/blockly/wiki/Text#trimming-removing-spaces"; // untranslated
  Blockly.Msg["TEXT_TRIM_OPERATOR_BOTH"] = "supprimer les espaces des deux côtés de";
  Blockly.Msg["TEXT_TRIM_OPERATOR_LEFT"] = "supprimer les espaces du côté gauche de";
  Blockly.Msg["TEXT_TRIM_OPERATOR_RIGHT"] = "supprimer les espaces du côté droit de";
  Blockly.Msg["TEXT_TRIM_TOOLTIP"] = "Renvoyer une copie du texte avec les espaces supprimés d’un ou des deux bouts.";
  Blockly.Msg["TODAY"] = "Aujourd'hui";
  Blockly.Msg["UNDO"] = "Annuler";
  Blockly.Msg["UNNAMED_KEY"] = "non nommé";
  Blockly.Msg["VARIABLES_DEFAULT_NAME"] = "élément";
  Blockly.Msg["VARIABLES_GET_CREATE_SET"] = "Créer « définir %1 »";
  Blockly.Msg["VARIABLES_GET_HELPURL"] = "https://github.com/google/blockly/wiki/Variables#get"; // untranslated
  Blockly.Msg["VARIABLES_GET_TOOLTIP"] = "Renvoie la valeur de cette variable.";
  Blockly.Msg["VARIABLES_SET"] = "définir %1 à %2";
  Blockly.Msg["VARIABLES_SET_CREATE_GET"] = "Créer « obtenir %1 »";
  Blockly.Msg["VARIABLES_SET_HELPURL"] = "https://github.com/google/blockly/wiki/Variables#set"; // untranslated
  Blockly.Msg["VARIABLES_SET_TOOLTIP"] = "Définit cette variable pour qu’elle soit égale à la valeur de l’entrée.";
  Blockly.Msg["VARIABLE_ALREADY_EXISTS"] = "Une variable nommée « %1 » existe déjà.";
  Blockly.Msg["VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE"] =
    "Une variable nommée « %1 » existe déjà pour un autre type : « %2 ».";
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
  Blockly.Msg["WORKSPACE_TAB_SLASH_COMMAND"] = "Commandes";
  Blockly.Msg["WORKSPACE_TAB_MESSAGES"] = "Messages";
  Blockly.Msg["WORKSPACE_TAB_CHANNELS"] = "Salons et fils";
  Blockly.Msg["WORKSPACE_TAB_USERS"] = "Utilisateurs";
  Blockly.Msg["WORKSPACE_TAB_GUILD"] = "Serveur";
  Blockly.Msg["WORKSPACE_TAB_RANKS"] = "Rôles";
  Blockly.Msg["WORKSPACE_TAB_EMBEDS"] = "Messages Embed";
  Blockly.Msg["WORKSPACE_TAB_VARIABLES"] = "Variables";
  Blockly.Msg["WORKSPACE_TAB_DATA_STORAGE"] = "Stockage de données";
  Blockly.Msg["WORKSPACE_TAB_EMOJIS"] = "Emojis";
  Blockly.Msg["WORKSPACE_TAB_MISCELLANEOUS"] = "Autres";

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

  Blockly.Msg["WORKSPACE_SLASH_COMMAND_CREATE"] = "Créer une commande";
  Blockly.Msg["WORKSPACE_SLASH_COMMAND_ARGS"] = "Ajouter des arguments à une commande";
  Blockly.Msg["WORKSPACE_SLASH_COMMAND_GET_ARGS"] = "Récupérer la valeur des arguments";
  Blockly.Msg["WORKSPACE_SLASH_COMMAND_GET_DATA"] = "Obtenir des informations sur la commande";
  Blockly.Msg["WORKSPACE_SLASH_COMMAND_ACTIONS"] = "Faire quelque chose quand cette commande est utilisée";
  Blockly.Msg["WORKSPACE_SLASH_COMMAND_FORMS"] = "Créer un formulaire";

  Blockly.Msg["WORKSPACE_MESSAGES_SEND"] = "Envoyer un message";
  Blockly.Msg["WORKSPACE_MESSAGES_DELETE"] = "Supprimer un message";
  Blockly.Msg["WORKSPACE_MESSAGES_CREATE_THREAD"] = "Créer un Fil";
  Blockly.Msg["WORKSPACE_MESSAGES_PINE"] = "Epingler et désépingler";
  Blockly.Msg["WORKSPACE_MESSAGES_GET_DATA"] = "Obtenir les données";
  Blockly.Msg["WORKSPACE_MESSAGES_MENTIONS"] = "Gérer les mentions";

  Blockly.Msg["WORKSPACE_CHANNELS_CREATE"] = "Créer un salon textuel ou vocal";
  Blockly.Msg["WORKSPACE_CHANNELS_DELETE"] = "Supprimer un salon";
  Blockly.Msg["WORKSPACE_CHANNELS_EDIT"] = "Modifier un salon";
  Blockly.Msg["WORKSPACE_CHANNELS_GET_DATA"] = "Obtenir les informations du salon";
  Blockly.Msg["WORKSPACE_CHANNELS_GET_CHANNEL"] = "Récupérer un salon";
  Blockly.Msg["WORKSPACE_CHANNELS_GET_CATEGORY"] = "Obtenir une catégorie";

  Blockly.Msg["WORKSPACE_USERS_SEND_MESSAGE"] = "Envoyer un message privé";
  Blockly.Msg["WORKSPACE_USERS_MODERATE"] = "Modérer les utilisateurs";
  Blockly.Msg["WORKSPACE_USERS_CHECK_PERMISSIONS"] = "Vérifier les permissions";
  Blockly.Msg["WORKSPACE_USERS_GET_DATA"] = "Obtenir les informations des utilisateurs";

  Blockly.Msg["WORKSPACE_GUILD_INVITE"] = "Gérer les invitations";
  Blockly.Msg["WORKSPACE_GUILD_GET_DATA"] = "Obtenir des données";

  Blockly.Msg["WORKSPACE_RANKS_CREATE"] = "Créer un rôle";
  Blockly.Msg["WORKSPACE_RANKS_DELETE"] = "Supprimer un rôle";
  Blockly.Msg["WORKSPACE_RANKS_EDIT"] = "Modifier un rôle";
  Blockly.Msg["WORKSPACE_RANKS_GET_DATA"] = "Obtenir les données d'un rôle";

  Blockly.Msg["WORKSPACE_EMBEDS_CREATE_SEND"] = "Créer et envoyer un Embed";
  Blockly.Msg["WORKSPACE_EMBEDS_EDIT"] = "Personnaliser un Embed";

  Blockly.Msg["WORKSPACE_LISTS_USE"] = "Travailler sur les listes";

  Blockly.Msg["WORKSPACE_DATA_STORAGE_CREATE"] = "Créer un stockage de données";
  Blockly.Msg["WORKSPACE_DATA_STORAGE_SAVE"] = "Sauvegarder une valeur";
  Blockly.Msg["WORKSPACE_DATA_STORAGE_GET"] = "Récupérer une valeur";
  Blockly.Msg["WORKSPACE_DATA_STORAGE_DELETE"] = "Supprimer une valeur";

  Blockly.Msg["WORKSPACE_EMOJIS_GET_DATA"] = "Obtenir les informations d'un Emoji";
  Blockly.Msg["WORKSPACE_EMOJIS_USE"] = "Utiliser les émojis";

  Blockly.Msg["WORKSPACE_MISCELLANEOUS_MANAGE_ACTION_FLOW"] = "Gérer l'exécution de l'évènement";

  //Event blocks
  Blockly.Msg["EVENT_MESSAGE_SENT"] = "Un message est envoyé %1 %2";
  Blockly.Msg["EVENT_MESSAGE_SENT_TOOLTIP"] =
    'Un message est envoyé sur le serveur, utilisez la variable "Message envoyé" pour obtenir les informations sur le message';
  Blockly.Msg["EVENT_MESSAGE_DELETED"] = "Un message est supprimé %1 %2";
  Blockly.Msg["EVENT_MESSAGE_DELETED_TOOLTIP"] =
    'Un message est supprimé, utilisez a variable "message" pour accéder au message supprimé';
  Blockly.Msg["EVENT_MESSAGE_UPDATED"] = "Un message est modifié %1 %2";
  Blockly.Msg["EVENT_MESSAGE_UPDATED_TOOLTIP"] =
    'Un message est modifié, utilisez les variables "Ancien message" et "Nouveau message" pour accéder aux messages';
  Blockly.Msg["EVENT_USER_JOIN"] = "Un utilisateur rejoint le serveur %1 %2";
  Blockly.Msg["EVENT_USER_JOIN_TOOLTIP"] = "Un utilisateur rejoint le serveur.";
  Blockly.Msg["EVENT_USER_LEFT"] = "Un utilisateur quitte le serveur %1 %2";
  Blockly.Msg["EVENT_USER_LEFT_TOOLTIP"] = "Un utilisateur quitte le serveur.";
  Blockly.Msg["EVENT_USER_UPDATED"] = "Un utilisateur est modifié %1 %2";
  Blockly.Msg["EVENT_USER_UPDATED_TOOLTIP"] =
    "Un utilisateur est modifié ( Changement de pseudo sur le serveur, changement de rôles, ... ).";
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
  Blockly.Msg["EVENT_USER_START_WRITTING"] = "Un membre commence à écrire %1 %2";
  Blockly.Msg["EVENT_USER_START_WRITTING_TOOLTIP"] = "Un membre a commencé à écrire";
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
  Blockly.Msg["EVENT_VAR_OLD_MESSAGE_TOOLTIP"] =
    "Représente l'ancien état d'un message modifié. Ne sert qu'à l'événement message modifié";
  Blockly.Msg["EVENT_VAR_NEW_MESSAGE"] = "Nouveau Message";
  Blockly.Msg["EVENT_VAR_NEW_MESSAGE_TOOLTIP"] =
    "Représente le nouvel état d'un message modifié. Ne sert qu'à l'événement message modifié";
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
  Blockly.Msg["EVENT_VAR_OLD_VOICE_CHANNEL_TOOLTIP"] =
    "Représente le salon vocal d'avant l'action. Dans le cadre d'une modification du salon, son ancien état, dans le cadre d'une mise à jour d'état vocal, cela représente le salon où était le membre. Si le membre vient de se connecter, cette variable sera vide.";
  Blockly.Msg["EVENT_VAR_NEW_VOICE_CHANNEL"] = "Nouveau salon vocal";
  Blockly.Msg["EVENT_VAR_NEW_VOICE_CHANNEL_TOOLTIP"] =
    "Représente le salon vocal d'après l'action. Dans le cadre d'une modification du salon, son nouvel état, dans le cadre d'une mise à jour d'état vocal, cela représente le salon où est maintenant le membre. Si le membre vient de se déconnecter, cette variable sera vide.";
  Blockly.Msg["EVENT_VAR_TEXT_CHANNEL"] = "Salon textuel";
  Blockly.Msg["EVENT_VAR_TEXT_CHANNEL_TOOLTIP"] = "Représente le salon de l'événement d'un salon textuel";
  Blockly.Msg["EVENT_VAR_OLD_TEXT_CHANNEL"] = "Ancien Salon textuel";
  Blockly.Msg["EVENT_VAR_OLD_TEXT_CHANNEL_TOOLTIP"] = "Représente l'ancien état d'un salon textuel";
  Blockly.Msg["EVENT_VAR_NEW_TEXT_CHANNEL"] = "Nouveau Salon textuel";
  Blockly.Msg["EVENT_VAR_NEW_TEXT_CHANNEL_TOOLTIP"] = "Représente le nouvel état d'un salon textuel";
  Blockly.Msg["EVENT_VAR_VOICE_CHANNEL"] = "Salon vocal";
  Blockly.Msg["EVENT_VAR_VOICE_CHANNEL_TOOLTIP"] = "Représente le salon vocal où s'est déroulé l'événement";
  Blockly.Msg["EVENT_VAR_REACTION"] = "Emoji";
  Blockly.Msg["EVENT_VAR_REACTION_TOOLTIP"] = "Représente l'émoji de l'événement";

  //Channel Permissions
  Blockly.Msg["PERMISSION_SEE_CHANNEL"] = "Voir le salon";
  Blockly.Msg["PERMISSION_MANAGE_CHANNEL"] = "Gérer le salon";
  Blockly.Msg["PERMISSION_MANAGE_CHANNEL_PERMISSIONS"] = "Gérer les permissions du salon";
  Blockly.Msg["PERMISSION_MANAGE_RANKS"] = "Gérer les rôles";
  Blockly.Msg["PERMISSION_MANAGE_EMOJIS"] = "Gérer les émotes et les autocollants";
  Blockly.Msg["PERMISSION_SEE_SERVER_LOGS"] = "Voir les logs du serveur";
  Blockly.Msg["PERMISSION_MANAGE_SERVER"] = "Gérer le serveur";
  Blockly.Msg["PERMISSION_MANAGE_WEBHOOKS"] = "Gérer les Webhooks";
  Blockly.Msg["PERMISSION_CREATE_INVITE"] = "Créer une invitation";
  Blockly.Msg["PERMISSION_EDIT_USERNAME"] = "Modifier son pseudo";
  Blockly.Msg["PERMISSION_EDIT_OTHERS_USERNAME"] = "Modifier les pseudos des autres";
  Blockly.Msg["PERMISSION_KICK"] = "Expulser un membre";
  Blockly.Msg["PERMISSION_BAN"] = "Bannir un membre";
  Blockly.Msg["PERMISSION_TIMEOUT"] = "Exclure un membre";
  Blockly.Msg["PERMISSION_SEND_MESSAGES"] = "Envoyer des messages";
  Blockly.Msg["PERMISSION_SEND_MESSAGE_IN_THREADS"] = "Envoyer des messages dans un fil";
  Blockly.Msg["PERMISSION_CREATE_PUBLIC_THREADS"] = "Créer des fils publics";
  Blockly.Msg["PERMISSION_CREATE_PRIVATE_THREADS"] = "Créer des fils privés";
  Blockly.Msg["PERMISSION_EMBED_LINKS"] = "Utiliser des liens";
  Blockly.Msg["PERMISSION_ADD_FILES"] = "Ajouter des fichiers";
  Blockly.Msg["PERMISSION_ADD_REACTIONS"] = "Ajouter des réactions";
  Blockly.Msg["PERMISSION_USE_EXTERNAL_EMOJIS"] = "Utiliser des émojis externes";
  Blockly.Msg["PERMISSION_USE_EXTERNAL_STICKERS"] = "Utiliser des stickers externes";
  Blockly.Msg["PERMISSION_PING_EVERYONE"] = "Mentionner @everyone";
  Blockly.Msg["PERMISSION_MANAGE_MESSAGES"] = "Gérer les messages";
  Blockly.Msg["PERMISSION_MANAGE_THREADS"] = "Gérer les fils";
  Blockly.Msg["PERMISSION_SEE_OLD_MESSAGES"] = "Voir les anciens messages";
  Blockly.Msg["PERMISSION_SEND_VOICE_MESSAGE"] = "Envoyer des messages de synthèse vocale";
  Blockly.Msg["PERMISSION_USE_APP_COMMANDS"] = "Utiliser les commandes de l'application";
  Blockly.Msg["PERMISSION_CONNECT_TO_VOICE_CHANNEL"] = "Se connecter au salon vocal";
  Blockly.Msg["PERMISSION_SPEAK"] = "Parler";
  Blockly.Msg["PERMISSION_USE_VIDEO"] = "Utiliser la vidéo";
  Blockly.Msg["PERMISSION_START_ACTIVITY"] = "Démarrer une activité";
  Blockly.Msg["PERMISSION_USE_VOICE_DETECTION"] = "Utiliser la détéction de voix";
  Blockly.Msg["PERMISSION_PRIORITY_SPEAKER"] = "Voix prioritaire";
  Blockly.Msg["PERMISSION_MUTE_MEMBER"] = "Rendre un membre muet";
  Blockly.Msg["PERMISSION_DEAF_MEMBER"] = "Rendre un membre sourd";
  Blockly.Msg["PERMISSION_MOOVE_MEMBER"] = "Déplacer un membre";
  Blockly.Msg["PERMISSION_MANAGE_VOICE_CHANNEL_EVENTS"] = "Gérer les événements du salon vocal";
  Blockly.Msg["PERMISSION_ADMINISTRATOR"] = "Administrateur";
  Blockly.Msg["PERMISSION_GRANT_PERMISSION"] = "Autoriser";
  Blockly.Msg["PERMISSION_DENY_PERMISSION"] = "Refuser";
  Blockly.Msg["PERMISSION_UNDEFINED_PERMISSION"] = "Indéfinit";
  Blockly.Msg["PERMISSION_USER"] = Blockly.Msg["EVENT_VAR_USER"];
  Blockly.Msg["PERMISSION_RANK"] = Blockly.Msg["EVENT_VAR_RANK"];

  //Durations
  Blockly.Msg["DURATION_1MIN"] = "1 minute";
  Blockly.Msg["DURATION_5MIN"] = "5 minutes";
  Blockly.Msg["DURATION_10MIN"] = "10 minutes";
  Blockly.Msg["DURATION_30MIN"] = "30 minutes";
  Blockly.Msg["DURATION_1H"] = "1 heure";
  Blockly.Msg["DURATION_6H"] = "6 heures";
  Blockly.Msg["DURATION_12H"] = "12 heures";
  Blockly.Msg["DURATION_1D"] = "1 jour";
  Blockly.Msg["DURATION_1W"] = "1 semaine";
  Blockly.Msg["DURATION_NEVER"] = "Jamais";

  //Channels blocks
  Blockly.Msg["BLOCK_CHANNEL_CREATE_TEXT_CHANNEL"] =
    "Créer le salon textuel nommé %1 Avec la description %2 Dans la catégorie %3";
  Blockly.Msg["BLOCK_CHANNEL_CREATE_TEXT_CHANNEL_TOOLTIP"] =
    "Permet de créer un salon textuel. Si aucune catégorie n'est donnée, il sera créé hors catégorie.";
  Blockly.Msg["BLOCK_CHANNEL_CREATE_VOICE_CHANNEL"] = "Créer le salon vocal nommé %1 Dans la catégorie %2";
  Blockly.Msg["BLOCK_CHANNEL_CREATE_VOICE_CHANNEL_TOOLTIP"] =
    "Permet de créer un salon vocal. Si aucune catégorie n'est donnée, il sera créé hors catégorie.";
  Blockly.Msg["BLOCK_CHANNEL_VAR_VOICE_CHANNEL"] = "Salon vocal créé";
  Blockly.Msg["BLOCK_CHANNEL_VAR_VOICE_CHANNEL_TOOLTIP"] = "Représente le salon vocal créé";
  Blockly.Msg["BLOCK_CHANNEL_VAR_TEXT_CHANNEL"] = "Salon textuel créé";
  Blockly.Msg["BLOCK_CHANNEL_VAR_TEXT_CHANNEL_TOOLTIP"] = "Représente le salon textuel créé";
  Blockly.Msg["BLOCK_CHANNEL_DELETE"] = "Supprimer le salon %1";
  Blockly.Msg["BLOCK_CHANNEL_DELETE_TOOLTIP"] = "Permet de supprimer un salon textuel, vocal ou fil";
  Blockly.Msg["BLOCK_CHANNEL_RENAMME"] = "Modifier le nom du salon %1 avec le nom %2";
  Blockly.Msg["BLOCK_CHANNEL_RENAMME_TOOLTIP"] = "Permet de renommer un salon textuel, vocal ou fil";
  Blockly.Msg["BLOCK_CHANNEL_GET_CATEGORY_OF_CHANNEL"] = "Catégorie du salon %1";
  Blockly.Msg["BLOCK_CHANNEL_GET_CATEGORY_OF_CHANNEL_TOOLTIP"] =
    "Permet de retrouver la catégorie où est placé un salon textuel ou vocal";
  Blockly.Msg["BLOCK_CHANNEL_GET_CHANNEL_NAME"] = "Nom du salon %1";
  Blockly.Msg["BLOCK_CHANNEL_GET_CHANNEL_NAME_TOOLTIP"] = "Permet de récupérer le nom d'un salon";
  Blockly.Msg["BLOCK_CHANNEL_GET_CHANNEL_TOPIC"] = "Description du salon %1";
  Blockly.Msg["BLOCK_CHANNEL_GET_CHANNEL_TOPIC_TOOLTIP"] = "Permet de récupérer la description d'un salon";
  Blockly.Msg["BLOCK_CHANNEL_GET_CHANNEL_ID"] = "ID du salon %1";
  Blockly.Msg["BLOCK_CHANNEL_GET_CHANNEL_ID_TOOLTIP"] = "Permet de récupérer l'ID d'un salon";
  Blockly.Msg["BLOCK_CHANNEL_GET_CHANNEL_WITH_ID"] = "Récupérer un salon avec son ID %1";
  Blockly.Msg["BLOCK_CHANNEL_GET_CHANNEL_WITH_ID_TOOLTIP"] =
    "Permet de récupérer un salon textuel, vocal ou fil à partir de son ID";
  Blockly.Msg["BLOCK_CHANNEL_GET_PERMISSION"] =
    "Vérifier si l'utilisateur ou le rôle %1 Dispose de la permission %2 %3 Dans le salon textuel ou vocal %4";
  Blockly.Msg["BLOCK_CHANNEL_GET_PERMISSION_TOOLTIP"] =
    "Vérifie si un utilisateur ou un rôle dispose d'une permission dans le salon textuel ou vocal indiqué. Retourne Vrai si oui, Faux si non";
  Blockly.Msg["BLOCK_CHANNEL_SET_PERMISSION"] =
    "Définir pour l'utilisateur ou le rôle %1 la permission %2 %3 %4 Dans le salon textuel ou vocal %5";
  Blockly.Msg["BLOCK_CHANNEL_SET_PERMISSION_TOOLTIP"] =
    "Permet de définir une permission pour un membre ou un rôle, dans un salon textuel ou vocal.";
  Blockly.Msg["BLOCK_CHANNEL_LIST"] = "Liste de tous les salons du serveur";
  Blockly.Msg["BLOCK_CHANNEL_LIST_TOOLTIP"] = "Permet de récupérer la liste de tous les salons du serveur";
  Blockly.Msg["BLOCK_CHANNEL_GET_USER_COUNT"] = "Nombre d'utilisateurs dans le salon vocal %1";
  Blockly.Msg["BLOCK_CHANNEL_GET_USER_COUNT_TOOLBOX"] =
    "Permet de récupérer le nombre d'utilisateurs connectés à un salon vocal";
  Blockly.Msg["BLOCK_CHANNEL_GET_CATEGORY_WITH_ID"] = "Récupérer une catégorie avec son ID %1";
  Blockly.Msg["BLOCK_CHANNEL_GET_CATEGORY_WITH_ID_TOOLTIP"] = "Permet de récupérer une catégorie à partir de son ID";

  //Message blocks
  Blockly.Msg["BLOCK_MESSAGE_REPLY"] = "Repondre au message %1 Avec le texte %2";
  Blockly.Msg["BLOCK_MESSAGE_REPLY_TOOLTIP"] = "Permet de directement répondre à un message";
  Blockly.Msg["BLOCK_MESSAGE_SEND"] = "Envoyer le message dans le channel %1 Avec le message %2";
  Blockly.Msg["BLOCK_MESSAGE_SEND_TOOLTIP"] = "Permet d'envoyer un message dans un salon";
  Blockly.Msg["BLOCK_MESSAGE_DELETE"] = "Supprimer le message %1";
  Blockly.Msg["BLOCK_MESSAGE_DELETE_TOOLTIP"] = "Supprimer le message passé en paramètre";
  Blockly.Msg["BLOCK_MESSAGE_DELETE_BULK"] = "Supprimer %1 messages dans le salon %2";
  Blockly.Msg["BLOCK_MESSAGE_DELETE_BULK_TOOLTIP"] = "Supprimer plusieurs messages d'un channel.";
  Blockly.Msg["BLOCK_MESSAGE_START_THREAD"] = "Créer un fil nommé %1 commençant par le message %2";
  Blockly.Msg["BLOCK_MESSAGE_START_THREAD_TOOLTIP"] =
    "Permet de créer un fil sur un message. Le message DOIT être dans un salon normal et non un thread";
  Blockly.Msg["BLOCK_MESSAGE_PINE"] = "Epingler le message %1";
  Blockly.Msg["BLOCK_MESSAGE_PINE_TOOLTIP"] = "Permet d'épingler un message";
  Blockly.Msg["BLOCK_MESSAGE_UNPINE"] = "Désepingler le message %1";
  Blockly.Msg["BLOCK_MESSAGE_UNPINE_TOOLTIP"] = "Permet de désépingler un message";
  Blockly.Msg["BLOCK_MESSAGE_GET_TEXT"] = "Texte du message %1";
  Blockly.Msg["BLOCK_MESSAGE_GET_TEXT_TOOLTIP"] = "Retourne le texte d'un message";
  Blockly.Msg["BLOCK_MESSAGE_GET_ID"] = "ID du message %1";
  Blockly.Msg["BLOCK_MESSAGE_GET_ID_TOOLTIP"] = "Retourne l'identifiant d'un message";
  Blockly.Msg["BLOCK_MESSAGE_GET_AUTOR"] = "Auteur du message %1";
  Blockly.Msg["BLOCK_MESSAGE_GET_AUTOR_TOOLTIP"] = "Retourne l'utilisateur qui a créé le message";
  Blockly.Msg["BLOCK_MESSAGE_GET_CHANNEL"] = "Salon du message %1";
  Blockly.Msg["BLOCK_MESSAGE_GET_CHANNEL_TOOLTIP"] = "Retourne le salon ou fil où a été envoyé le message";
  Blockly.Msg["BLOCK_MESSAGE_DOES_MENTION_EVERYONE"] = "Le message mentionne @everyone ? %1";
  Blockly.Msg["BLOCK_MESSAGE_DOES_MENTION_EVERYONE_TOOLTIP"] =
    "Retourne Vrai si le message mentionne @everyone, sinon faux";
  Blockly.Msg["BLOCK_MESSAGE_DOES_MENTION_USER"] = "Le message mentionne t-il un utilisateur ? %1";
  Blockly.Msg["BLOCK_MESSAGE_DOES_MENTION_USER_TOOLTIP"] =
    "Retourne Vrai si le message mentionne un utilisateur, sinon faux";
  Blockly.Msg["BLOCK_MESSAGE_DOES_MENTION_CHANNEL"] = "Le message mentionne un salon ? %1";
  Blockly.Msg["BLOCK_MESSAGE_DOES_MENTION_CHANNEL_TOOLTIP"] =
    "Retourne Vrai si le message mentionne un salon, sinon faux";
  Blockly.Msg["BLOCK_MESSAGE_GET_USER_MENTION"] = "Obtenir la mention d'utilisateur n° %1 du message %2";
  Blockly.Msg["BLOCK_MESSAGE_GET_USER_MENTION_TOOLTIP"] =
    "Retourne l'utilisateur mentionné par la xème mention contenue dans le message";
  Blockly.Msg["BLOCK_MESSAGE_GET_CHANNEL_MENTION"] = "Obtenir la mention du salon n° %1 du message %2";
  Blockly.Msg["BLOCK_MESSAGE_GET_CHANNEL_MENTION_TOOLTIP"] =
    "Retourne le salon mentionné par la xème mention contenue dans le message";
  Blockly.Msg["BLOCK_MESSAGE_NUMBER_OF_MENTIONS_USER"] = "Nombre de mentions @utilisateur du message %1";
  Blockly.Msg["BLOCK_MESSAGE_NUMBER_OF_MENTIONS_USER_TOOLTIP"] =
    "Retourne le nombre de mentions @utilisateur contenues dans le message";
  Blockly.Msg["BLOCK_MESSAGE_NUMBER_OF_MENTIONS_CHANNEL"] = "Nombre de mentions #salon du message %1";
  Blockly.Msg["BLOCK_MESSAGE_NUMBER_OF_MENTIONS_CHANNEL_TOOLTIP"] =
    "Retourne le nombre de mentions #salon contenues dans le message";
  Blockly.Msg["BLOCK_MESSAGE_VAR_SENT_MESSAGE"] = "Message envoyé";
  Blockly.Msg["BLOCK_MESSAGE_VAR_SENT_MESSAGE_TOOLTIP"] = "Représente le message venant d'être envoyé";
  Blockly.Msg["BLOCK_MESSAGE_VAR_CREATED_THREAD"] = "Fil créé";
  Blockly.Msg["BLOCK_MESSAGE_VAR_CREATED_THREAD_TOOLTIP"] = "Représente le salon Fil créé";

  //User blocks
  Blockly.Msg["BLOCK_USER_BAN"] = "Bannir l'utilisateur %1 avec la raison %2";
  Blockly.Msg["BLOCK_USER_BAN_TOOLTIP"] = "Permet de bannir un utilisateur du serveur avec une raison";
  Blockly.Msg["BLOCK_USER_UNBAN"] = "Débannir l'utilisateur %1 avec la raison %2";
  Blockly.Msg["BLOCK_USER_UNBAN_TOOLTIP"] =
    "Permet de débannir un utilisateur du serveur avec une raison. L'ID de l'utilisateur peur être utilisé pour le retrouver";
  Blockly.Msg["BLOCK_USER_SEND_PRIVATE_MESSAGE"] = "Envoyer le message %1 à l'utilisateur %2";
  Blockly.Msg["BLOCK_USER_SEND_PRIVATE_MESSAGE_TOOLTIP"] = "Envoyer un message privé à l'utilisateur";
  Blockly.Msg["BLOCK_USER_KICK"] = "Expulser l'utilisateur %1 avec la raison %2";
  Blockly.Msg["BLOCK_USER_KICK_TOOLTIP"] = "Permet d'expulser un utilisateur du serveur avec une raison";
  Blockly.Msg["BLOCK_USER_GET_WITH_ID"] = "Récupérer l'utilisateur avec l'ID %1";
  Blockly.Msg["BLOCK_USER_GET_WITH_ID_TOOLTIP"] =
    "Récupérer l'utilisateur avec l'ID indiqué. L'utilisateur doit être présent dans le serveur, sinon une erreur se produira";
  Blockly.Msg["BLOCK_USER_GET_SERVER_USERNAME"] = "Récupérer le pseudo serveur de l'utilisateur %1";
  Blockly.Msg["BLOCK_USER_GET_SERVER_USERNAME_TOOLTIP"] =
    "Récupérer le pseudo de l'utilisateur sur le serveur, sans le discriminant";
  Blockly.Msg["BLOCK_USER_GET_USERNAME"] = "Récupérer le pseudo de l'utilisateur %1";
  Blockly.Msg["BLOCK_USER_GET_USERNAME_TOOLTIP"] = "Récupérer le pseudo de l'utilisateur, sans le discriminant";
  Blockly.Msg["BLOCK_USER_GET_ID"] = "Récupérer l'ID de l'utilisateur %1";
  Blockly.Msg["BLOCK_USER_GET_ID_TOOLTIP"] = "Récupérer l'identifiant de l'utilisateur";
  Blockly.Msg["BLOCK_USER_GET_PICTURE"] = "Récupérer l'avatar de l'utilisateur %1";
  Blockly.Msg["BLOCK_USER_GET_PICTURE_TOOLTIP"] = "Récupérer le lien de l'avatar d'un utilisateur";
  Blockly.Msg["BLOCK_USER_IS_BOT"] = "L'utilisateur est-il un bot ? %1";
  Blockly.Msg["BLOCK_USER_IS_BOT_TOOLTIP"] =
    "Permet de savoir si l'utilisateur est un robot. Retourne Vrai si oui, Faux si non";
  Blockly.Msg["BLOCK_USER_MUTE"] = "Rendre muet le membre %1";
  Blockly.Msg["BLOCK_USER_MUTE_TOOLTIP"] = "Rendre l'utilisateur muet dans les salons vocaux du serveur";
  Blockly.Msg["BLOCK_USER_UNMUTE"] = "Rendre la parole au membre %1";
  Blockly.Msg["BLOCK_USER_UNMUTE_TOOLTIP"] = 'Rendre la parole au membre dans un salon vocal. Annule le "rendre muet"';
  Blockly.Msg["BLOCK_USER_DEAF"] = "Mettre en sourdine le membre %1";
  Blockly.Msg["BLOCK_USER_DEAF_TOOLTIP"] = "Rendre l'utilisateur sourd dans les salons vocaux du serveur";
  Blockly.Msg["BLOCK_USER_UNDEAF"] = "Rendre le son au membre %1";
  Blockly.Msg["BLOCK_USER_UNDEAF_TOOLTIP"] =
    "Permet au membre de retrouver le son dans les salons vocaux, annule l'effet d'un \"mettre en sourdine\"";
  Blockly.Msg["BLOCK_USER_IS_TIMEOUT"] = "Le membre est-il exclu ? %1";
  Blockly.Msg["BLOCK_USER_IS_TIMEOUT_TOOLTIP"] =
    "Permet de savoir si un membre est exclu du serveur ( Ne peut pas envoyer de messages, rejoindre de salons vocaux, ... ). Retourne Vrai si oui, Faux si non";
  Blockly.Msg["BLOCK_USER_TIMEOUT"] = "Exclure le membre %1 pendant %2 Avec la raison %3";
  Blockly.Msg["BLOCK_USER_TIMEOUT_TOOLTIP"] = "Permet d'exclure le membre pour une durée déterminée";
  Blockly.Msg["BLOCK_USER_CUSTOM_TIMEOUT"] = "Exclure le membre %1 pendant %2 secondes avec la raison %3";
  Blockly.Msg["BLOCK_USER_CUSTOM_TIMEOUT_TOOLTIP"] = "Permet d'exclure le membre pour une durée personnalisée";
  Blockly.Msg["BLOCK_USER_REMOVE_TIMEOUT"] = "Retirer l'exclusion du membre %1";
  Blockly.Msg["BLOCK_USER_REMOVE_TIMEOUT_TOOLTIP"] = "Permet de supprimer une exclusion d'un membre";
  Blockly.Msg["BLOCK_USER_HAS_PERMISSION"] = "L'utilisateur %1 possède t-il la permission %2 ?";
  Blockly.Msg["BLOCK_USER_HAS_PERMISSION_TOOLTIP"] =
    "Permet de savoir si un membre possède la permission associée. Retourne Vrai si oui, Faux si non";
  Blockly.Msg["BLOCK_USER_HAS_RANK"] = "L'utilisateur %1 possède t-il le rôle %2 ?";
  Blockly.Msg["BLOCK_USER_HAS_RANK_TOOLTIP"] =
    "Permet de savoir si un utilisateur possède le rôle indiqué. Retourne Vrai si oui, Faux si non";
  Blockly.Msg["BLOCK_USER_IS_IN_VOICE_CHANNEL"] = "L'utilisateur %1 est t-il dans un salon vocal ?";
  Blockly.Msg["BLOCK_USER_IS_IN_VOICE_CHANNEL_TOOLTIP"] =
    "Permet de savoir si un utilisateur est connecté à un salon vocal";
  Blockly.Msg["BLOCK_USER_GET_VOICE_CHANNEL"] = "Salon vocal de l'utilisateur %1";
  Blockly.Msg["BLOCK_USER_GET_VOICE_CHANNEL_TOOLTIP"] =
    "Permet de récupérer le salon vocal où un utilisateur est connecté. Retourne Nul si l'utilisateur n'est pas connecté en vocal";
  Blockly.Msg["BLOCK_USER_MOVE_TO_VOICE_CHANNEL"] = "Déplacer l'utilisateur %1 dans le salon vocal %2";
  Blockly.Msg["BLOCK_USER_MOVE_TO_VOICE_CHANNEL_TOOLTIP"] =
    'Permet de déplacer un membre dans un salon vocal. Le membre doit être connecté en vocal, cela peut être vérifié avec une condition et le bloc "L\'utilisateur est-il dans un salon vocal ?"';
  Blockly.Msg["BLOCK_USER_GIVE_RANK"] = "Donner à l'utilisateur %1 le grade %2";
  Blockly.Msg["BLOCK_USER_GIVE_RANK_TOOLTIP"] = "Permet de donner un grade à un utilisateur";
  Blockly.Msg["BLOCK_USER_REMOVE_RANK"] = "Retirer à l'utilisateur %1 le grade %2";
  Blockly.Msg["BLOCK_USER_REMOVE_RANK_TOOLTIP"] = "Permet de retirer un grade à un utilisateur";
  Blockly.Msg["BLOCK_USER_RENAME"] = "Renommer l'utilisateur %1 avec le nouveau nom %2";
  Blockly.Msg["BLOCK_USER_RENAME_TOOLTIP"] =
    "Permet de renommer un utilisateur sur le serveur Discord. L'utilisateur doit être modérable par le bot";

  //Guild blocks
  Blockly.Msg["BLOCK_GUILD_GET_ID"] = "Identifiant du serveur";
  Blockly.Msg["BLOCK_GUILD_GET_ID_TOOLTIP"] = "Permet d'obtenir l'identifiant du serveur DIscord";
  Blockly.Msg["BLOCK_GUILD_GET_NAME"] = "Nom du serveur";
  Blockly.Msg["BLOCK_GUILD_GET_NAME_TOOLTIP"] = "Permet d'obtenir le nom du serveur Discord";
  Blockly.Msg["BLOCK_GUILD_GET_BOOST_COUNT"] = "Nombre de boosts du serveur";
  Blockly.Msg["BLOCK_GUILD_GET_BOOST_COUNT_TOOLTIP"] = "Permet d'obtenir le nombre de boosts du serveur Discord";
  Blockly.Msg["BLOCK_GUILD_GET_MEMBERS_COUNT"] = "Nombre de personnes dans le serveur";
  Blockly.Msg["BLOCK_GUILD_GET_MEMBERS_COUNT_TOOLTIP"] =
    "Permet d'obtenir le nombre de personnes dans le serveur Discord";
  Blockly.Msg["BLOCK_GUILD_CREATE_INVITE"] =
    "Créer une invitation dans le salon %1 expirant après %2 et avec %3 utilisations";
  Blockly.Msg["BLOCK_GUILD_CREATE_INVITE_TOOLTIP"] =
    "Créer une invitation pour le serveur. Retourne le lien de l'invitation créée";

  //Ranks blocks
  Blockly.Msg["BLOCK_RANK_CREATE"] =
    "Créer un rôle avec le nom %1 et la couleur %2 %3 Les membres peuvent être mentionnés : %4 %5 Les membres sont affichés dans la liste : %6 %7 Ajouter ce rôle dans l'arborescence à la position %8";
  Blockly.Msg["BLOCK_RANK_CREATE_TOOLTIP"] =
    "Permet de créer un rôle. Insérez un nom, choisissez une couleur ( Blanc = transparent ) et indiquez si le rôle est mentionnable et si les membres sont visibles dans la liste des utilisateurs. Enfin, indiquez la position de ce rôle dans l'arborescence des grades.";
  Blockly.Msg["BLOCK_RANK_VAR_CREATED_RANK"] = "Rôle créé";
  Blockly.Msg["BLOCK_RANK_VAR_CREATED_RANK_TOOLTIP"] = "Retourne le rôle créé";
  Blockly.Msg["BLOCK_RANK_DELETE"] = "Supprimer le rôle %1";
  Blockly.Msg["BLOCK_RANK_DELETE_TOOLTIP"] = "Supprime le rôle passé en paramètre";
  Blockly.Msg["BLOCK_RANK_EDIT_NAME"] = "Renommer le rôle %1 Avec le nouveau nom %2";
  Blockly.Msg["BLOCK_RANK_EDIT_NAME_TOOLTIP"] = "Permet de renommer un rôle";
  Blockly.Msg["BLOCK_RANK_EDIT_COLOR"] = "Changer la couleur du rôle %1 avec la nouvelle couleur %2";
  Blockly.Msg["BLOCK_RANK_EDIT_COLOR_TOOLTIP"] =
    "Permet de changer la couleur d'un rôle. La couleur Blanc donne un rôle transparent";
  Blockly.Msg["BLOCK_RANK_EDIT_PINGEABLE"] = "Définir si le rôle %1 doit être mentionnable : %2";
  Blockly.Msg["BLOCK_RANK_EDIT_PINGEABLE_TOOLTIP"] = "Permet de définir si le rôle devrait être mentionnable ou non";
  Blockly.Msg["BLOCK_RANK_EDIT_MEMBERS_SHOWN"] =
    "Définir si les membres du rôle %1 doivent être affichés dans la liste des membres %2";
  Blockly.Msg["BLOCK_RANK_EDIT_MEMBERS_SHOWN_TOOLTIP"] =
    "Permet de définir si les membres d'un rôle sont affichés dans la liste des membres du serveur";
  Blockly.Msg["BLOCK_RANK_EDIT_POSITION"] = "Définir la position du rôle %1 dans l'arborescence des rôles à %2";
  Blockly.Msg["BLOCK_RANK_EDIT_POSITION_TOOLTIP"] =
    "Permet de définir la position du rôle dans l'arborescence des rôles du serveur";
  Blockly.Msg["BLOCK_RANK_GET_RANK_WITH_ID"] = "Obtenir le rôle ayant l'identifiant %1";
  Blockly.Msg["BLOCK_RANK_GET_RANK_WITH_ID_TOOLTIP"] = "Permet de retrouver un rôle avec son identifiant";
  Blockly.Msg["BLOCK_RANK_EDIT_PERMISSIONS"] = "Définir la permission %1 du rôle %2 à %3";
  Blockly.Msg["BLOCK_RANK_EDIT_PERMISSIONS_TOOLTIP"] = "Permet de modifier les permissions du rôle";
  Blockly.Msg["BLOCK_RANK_GET_NAME"] = "Obtenir le nom du rôle %1";
  Blockly.Msg["BLOCK_RANK_GET_NAME_TOOLTIP"] = "Retourne le nom du rôle donné en paramètre";
  Blockly.Msg["BLOCK_RANK_GET_POSITION"] = "Obtenir la position dans l'arborescence du rôle %1";
  Blockly.Msg["BLOCK_RANK_GET_POSITION_TOOLTIP"] =
    "Retourne la position du rôle dans l'arborescence des rôles du serveur";
  Blockly.Msg["BLOCK_RANK_GET_COLOR"] = "Obtenir la couleur du rôle %1";
  Blockly.Msg["BLOCK_RANK_GET_COLOR_TOOLTIP"] = "Retourne la couleur du rôle au format #ffffff";
  Blockly.Msg["BLOCK_RANK_GET_ID"] = "Obtenir l'identifiant du rôle %1";
  Blockly.Msg["BLOCK_RANK_GET_ID_TOOLTIP"] = "Retourne l'identifiant du rôle";
  Blockly.Msg["BLOCK_RANK_HAS_PERMISSION"] = "Le rôle %1 possède t-il la permission %2 ?";
  Blockly.Msg["BLOCK_RANK_HAS_PERMISSION_TOOLTIP"] =
    "Permet de savoir un rôle dispose d'une permission. Retourne Vrai si oui, Faux si non ou indéfinit";
  Blockly.Msg["BLOCK_RANK_GET_EVERYONE"] = "Obtenir le rôle @everyone";
  Blockly.Msg["BLOCK_RANK_GET_EVERYONE_TOOLTIP"] = "Retourne le role @everyone";

  //Embeds blocks
  Blockly.Msg["BLOCK_EMBED_CREATE"] =
    "Créer un message Embed avec le titre %1 Avec la description : %2 Avec la couleur : %3 et les options : %4 %5";
  Blockly.Msg["BLOCK_EMBED_CREATE_TOOLTIP"] =
    "Permet de créer un message Embed, avec un titre et une couleur. Utilisez les blocs de description d'embed pour le modifier.";
  Blockly.Msg["BLOCK_EMBED_OPTION_SET_IMAGE"] = "Définir l'URL de l'image de l'embed : %1";
  Blockly.Msg["BLOCK_EMBED_OPTION_SET_IMAGE_TOOLTIP"] =
    "Option d'embed, indiquez l'URL de l'image sous forme de chaîne de caractères";
  Blockly.Msg["BLOCK_EMBED_OPTION_SET_THUMBNAIL"] = "Définir l'URL de l'icone de l'embed : %1";
  Blockly.Msg["BLOCK_EMBED_OPTION_SET_THUMBNAIL_TOOLTIP"] =
    "Option d'embed, indiquez l'URL de l'icone sous forme de chaîne de caractères";
  Blockly.Msg["BLOCK_EMBED_OPTION_ADD_FIELD"] =
    "Ajouter un champ avec le nom %1 Et le texte : %2 Aligné avec les autres : %3";
  Blockly.Msg["BLOCK_EMBED_OPTION_ADD_FIELD_TOOLTIP"] =
    "Option d'embed, Ajoutez un champ dans un embed. Taille max du texte : 255 caractères";
  Blockly.Msg["BLOCK_EMBED_OPTION_SET_AUTHOR"] = "Définir l'auteur avec le nom %1 l'URL %2 Et le lien de son image %3";
  Blockly.Msg["BLOCK_EMBED_OPTION_SET_AUTHOR_TOOLTIP"] = "Option d'embed, Définissez l'auteur de l'embed";
  Blockly.Msg["BLOCK_EMBED_OPTION_SET_FOOTER"] = "Ajouter un Footer avec le texte %1 Et le lien de son image %2";
  Blockly.Msg["BLOCK_EMBED_OPTION_SET_FOOTER_TOOLTIP"] = "Option d'embed, Définissez le bas de l'embed";
  Blockly.Msg["BLOCK_EMBED_OPTION_SET_TIMESTAMP"] = "Ajouter la date d'envoi de l'embed";
  Blockly.Msg["BLOCK_EMBED_OPTION_SET_TIMESTAMP_TOOLTIP"] =
    "Option d'embed, permet d'ajouter la date d'envoi de l'embed";
  Blockly.Msg["BLOCK_EMBED_SEND"] = "Envoyer le message Embed %1 dans le salon %2";
  Blockly.Msg["BLOCK_EMBED_SEND_TOOLTIP"] = "Permet d'envoyer un message Embed";
  Blockly.Msg["BLOCK_EMBED_VAR_EMBED"] = "Message Embed";
  Blockly.Msg["BLOCK_EMBED_VAR_EMBED_TOOLTIP"] = "Représente le message Embed créé";

  //Color blocks
  Blockly.Msg["BLOCK_COLOR_HEX"] = "Couleur depuis le code hexadécimal %1";
  Blockly.Msg["BLOCK_COLOR_HEX_TOOLTIP"] = "Permet d'obtenir une couleur à partir de son code héxadécimal";

  //Emojis blocks
  Blockly.Msg["BLOCK_EMOJI_GET_NAME"] = "Obtenir le nom de l'émoji %1";
  Blockly.Msg["BLOCK_EMOJI_GET_NAME_TOOLTIP"] =
    "Obtenir le nom d'un émoji de Discord ou de votre serveur. S'il vient de Discord, retourne la valeur unicode de l'émoji ( Trouvable en tapant \"\\:joy:\" dans Discord ). S'il vient de votre serveur, retourne son nom.";
  Blockly.Msg["BLOCK_EMOJI_REACT"] = "Réagir avec l'émoji %1 au message %2";
  Blockly.Msg["BLOCK_EMOJI_REACT_TOOLTIP"] =
    "Ajoute une réaction au message. Utilisez un Emoji, ou copiez-collez ce que vous obtenez en envoyant \\:emoji: quelque part sur Discord.";
  Blockly.Msg["BLOCK_EMOJI_GET_NUMBER_OF_REACTIONS"] = "Obtenir le nombre de réactions %1 sur le message %2";
  Blockly.Msg["BLOCK_EMOJI_GET_NUMBER_OF_REACTIONS_TOOLTIP"] =
    "Obtenez le nombre de personnes qui ont réagit sur un message ! Utilisez un Emoji, ou copiez-collez ce que vous obtenez en envoyant \\:emoji: quelque part sur Discord.";
  Blockly.Msg["BLOCK_EMOJI_REMOVE_REACTION"] = "Retirer la réaction %1 de l'utilisateur %2 sur le message %3";
  Blockly.Msg["BLOCK_EMOJI_REMOVE_REACTION_TOOLTIP"] =
    "Retire une réaction d'un utilisateur sur un message. Utilisez un Emoji, ou copiez-collez ce que vous obtenez en envoyant \\:emoji: quelque part sur Discord. Cela déclenchera l'évènement \"une réaction est retirée\".";
  Blockly.Msg["BLOCK_EMOJI_REMOVE_ALL_REACTION"] = "Retirer toutes les réactions du message %1";
  Blockly.Msg["BLOCK_EMOJI_REMOVE_ALL_REACTION_TOOLTIP"] = "Retire TOUTES les réactions d'un message";

  //Temporary variables blocks
  Blockly.Msg["BLOCK_VAR_SAVE"] = "Sauvegarder la valeur %1 dans une variable temporaire nommée %2 de type %3";
  Blockly.Msg["BLOCK_VAR_SAVE_TOOLTIP"] =
    "Vous pouvez utiliser ce bloc pour conserver quelque chose et l'utiliser plus tard. Vous devez déclarer et utiliser la variable dans le même évènement, car elle n'est pas conservée après l'éxécution du code";
  Blockly.Msg["BLOCK_VAR_GET"] = "Obtenir le contenu de la variable nommée %1";
  Blockly.Msg["BLOCK_VAR_GET_TOOLTIP"] =
    "Vous pouvez utiliser ce bloc pour obtenir le contenu d'une variable sauvegardée dans le même évènement. Soyez sûr que le contenu est du bon type quand vous l'utilisez quelque part !";

  //Miscellaneous blocks
  Blockly.Msg["BLOCK_MISCELLANEOUS_RETURN"] = "Arrêter l'exécution";
  Blockly.Msg["BLOCK_MISCELLANEOUS_RETURN_TOOLTIP"] = "Ce bloc arrêtera l'exécution de l'évènement";
  Blockly.Msg["BLOCK_MISCELLANEOUS_STR_TO_INT"] = "Chaîne de caractères vers nombre %1";
  Blockly.Msg["BLOCK_MISCELLANEOUS_STR_TO_INT_TOOLTIP"] =
    "Ce bloc va transformer une chaîne de caractères en nombre. Il retournera -1 si la chaîne de caractères n'est pas un nombre";

  //Slash commands blocks
  Blockly.Msg["BLOCK_SLASH_COMMAND_CREATOR"] =
    "Créer une commande nommée %1 %2 Avec la description %3 %4 Réponses éphèmères : %5 %6 Avec les arguments %7 qui réalisera %8";
  Blockly.Msg["BLOCK_SLASH_COMMAND_CREATOR_TOOLTIP"] =
    "Créez une nouvelle commande pour votre serveur ! Vous pouvez lui donner un nom et une description ainsi qu'ajouter des arguments et des actions à exécuter";
  Blockly.Msg["BLOCK_SLASH_COMMAND_ARG_BOOLEAN"] =
    "Ajouter un argument booléen nommé %1 %2 Avec la description %3 %4 Est obligatoire ? %5";
  Blockly.Msg["BLOCK_SLASH_COMMAND_ARG_BOOLEAN_TOOLTIP"] =
    "Ajoutez un argument booléen à votre commande avec un nom et une description";
  Blockly.Msg["BLOCK_SLASH_COMMAND_ARG_TEXT_CHANNEL"] =
    "Ajouter un argument channel textuel nommé %1 %2 Avec la description %3 %4 Est obligatoire ? %5";
  Blockly.Msg["BLOCK_SLASH_COMMAND_ARG_TEXT_CHANNEL_TOOLTIP"] =
    "Ajoutez un salon textuel à votre commande avec un nom et une description";
  Blockly.Msg["BLOCK_SLASH_COMMAND_ARG_INT"] =
    "Ajouter un argument nombre entier nommé %1 %2 Avec la description %3 %4 Est obligatoire ? %5";
  Blockly.Msg["BLOCK_SLASH_COMMAND_ARG_INT_TOOLTIP"] =
    "Ajoutez un nombre entier à votre commande avec un nom et une description";
  Blockly.Msg["BLOCK_SLASH_COMMAND_ARG_ROLE"] =
    "Ajouter un argument rôle nommé %1 %2 Avec la description %3 %4 Est obligatoire ? %5";
  Blockly.Msg["BLOCK_SLASH_COMMAND_ARG_ROLE_TOOLTIP"] =
    "Ajoutez un rôle à votre commande avec un nom et une description";
  Blockly.Msg["BLOCK_SLASH_COMMAND_ARG_STRING"] =
    "Ajouter un argument texte nommé %1 %2 Avec la description %3 %4 Est obligatoire ? %5";
  Blockly.Msg["BLOCK_SLASH_COMMAND_ARG_STRING_TOOLTIP"] =
    "Ajoutez un texte à votre commande avec un nom et une description";
  Blockly.Msg["BLOCK_SLASH_COMMAND_ARG_USER"] =
    "Ajouter un argument membre nommé %1 %2 Avec la description %3 %4 Est obligatoire ? %5";
  Blockly.Msg["BLOCK_SLASH_COMMAND_ARG_USER_TOOLTIP"] =
    "Ajoutez un utilisateur à votre commande avec un nom et une description";
  Blockly.Msg["BLOCK_SLASH_COMMAND_REPLY"] = "Répondre à la commande avec le message %1";
  Blockly.Msg["BLOCK_SLASH_COMMAND_REPLY_TOOLTIP"] =
    "Répondre à une commande. Cela ne peut être utilisé qu'avec une commande, et peut n'être visible que pour l'utilisateur qui a utilisé la commande";
  Blockly.Msg["BLOCK_SLASH_COMMAND_GET_BOOLEAN"] = "Récupérer l'argument booléen nommé %1";
  Blockly.Msg["BLOCK_SLASH_COMMAND_GET_BOOLEAN_TOOLTIP"] =
    "Permet de récupérer un argument booléen de la commande, portant ce nom";
  Blockly.Msg["BLOCK_SLASH_COMMAND_GET_INT"] = "Récupérer l'argument nombre entier nommé %1";
  Blockly.Msg["BLOCK_SLASH_COMMAND_GET_INT_TOOLTIP"] =
    "Permet de récupérer un argument nombre entier de la commande, portant ce nom";
  Blockly.Msg["BLOCK_SLASH_COMMAND_GET_ROLE"] = "Récupérer l'argument rôle nommé %1";
  Blockly.Msg["BLOCK_SLASH_COMMAND_GET_ROLE_TOOLTIP"] =
    "Permet de récupérer un argument rôle de la commande, portant ce nom";
  Blockly.Msg["BLOCK_SLASH_COMMAND_GET_STRING"] = "Récupérer l'argument texte nommé %1";
  Blockly.Msg["BLOCK_SLASH_COMMAND_GET_STRING_TOOLTIP"] =
    "Permet de récupérer un argument texte de la commande, portant ce nom";
  Blockly.Msg["BLOCK_SLASH_COMMAND_GET_USER"] = "Récupérer l'argument utilisateur nommé %1";
  Blockly.Msg["BLOCK_SLASH_COMMAND_GET_USER_TOOLTIP"] =
    "Permet de récupérer un argument utilisateur de la commande, portant ce nom";
  Blockly.Msg["BLOCK_SLASH_COMMAND_GET_TEXT_CHANNEL"] = "Récupérer l'argument salon textuel nommé %1";
  Blockly.Msg["BLOCK_SLASH_COMMAND_GET_TEXT_CHANNEL_TOOLTIP"] =
    "Permet de récupérer un argument salon textuel de la commande, portant ce nom";
  Blockly.Msg["BLOCK_SLASH_COMMAND_DATA_CHANNEL"] = "Salon où cette commande a été utilisée";
  Blockly.Msg["BLOCK_SLASH_COMMAND_DATA_CHANNEL_TOOLTIP"] = "Retourne le salon où cette commande a été utilisée";
  Blockly.Msg["BLOCK_SLASH_COMMAND_DATA_USER"] = "Utilisateur qui a utilisé cette commande";
  Blockly.Msg["BLOCK_SLASH_COMMAND_DATA_USER_TOOLTIP"] = "Retourne l'utilisateur qui a exécuté cette commande";
  Blockly.Msg["BLOCK_SLASH_COMMAND_FORM_CREATOR"] =
    "Créer le formulaire %1 %2 avec les champs : %3 Une fois le formulaire reçu, faire : %4";
  Blockly.Msg["BLOCK_SLASH_COMMAND_FORM_CREATOR_TOOLTIP"] =
    "Permet de créer un formulaire. Ce bloc doit être le tout premier dans les actions de la commande. Vous pouvez ajouter des champs à remplir, ainsi que les actions réalisées une fois que le formulaire a été envoyé.";
  Blockly.Msg["BLOCK_SLASH_COMMAND_FORM_INPUT_TEXT"] =
    "Ajouter une entrée de texte %1 nommée %2 %3 Taille minimale : %4 Taille maximale : %5 %6 Contenu par défaut : %7 %8 Requis : %9";
  Blockly.Msg["BLOCK_SLASH_COMMAND_FORM_INPUT_TEXT_TOOLTIP"] = "Permet d'ajouter une entrée de texte à un formulaire";

  //Data storage blocks
  Blockly.Msg["BLOCK_DATA_STORAGE_CREATE_INT"] = "Créer le stockage de nombres nommé %1";
  Blockly.Msg["BLOCK_DATA_STORAGE_CREATE_INT_TOOLTIP"] =
    "Ce block permet de définir un stockage de nombres. Supprimer ce bloc supprimera toutes les données associées.";
  Blockly.Msg["BLOCK_DATA_STORAGE_CREATE_STRING"] = "Créer le stockage de texte nommé %1";
  Blockly.Msg["BLOCK_DATA_STORAGE_CREATE_STRING_TOOLTIP"] =
    "Ce block permet de définir un stockage de textes. Supprimer ce bloc supprimera toutes les données associées.";
  Blockly.Msg["BLOCK_DATA_STORAGE_SAVE_INT"] =
    "Sauvegarder dans le stockage de nombre  %1 %2 la variable %3 contenant %4";
  Blockly.Msg["BLOCK_DATA_STORAGE_SAVE_INT_TOOLTIP"] =
    "Sauvegarder une valeur dans un stockage. Le nom de la variable permet de retrouver cette variable dans le stockage, tandis que le contenu est la valeur enregistrée";
  Blockly.Msg["BLOCK_DATA_STORAGE_SAVE_STRING"] =
    "Sauvegarder dans le stockage de texte %1 %2 la variable %3 contenant %4";
  Blockly.Msg["BLOCK_DATA_STORAGE_SAVE_STRING_TOOLTIP"] =
    "Sauvegarder une valeur dans un stockage. Le nom de la variable permet de retrouver cette variable dans le stockage, tandis que le contenu est la valeur enregistrée";
  Blockly.Msg["BLOCK_DATA_STORAGE_GET_INT"] = "Obtenir dans le stockage de nombre  %1 %2 la variable %3";
  Blockly.Msg["BLOCK_DATA_STORAGE_GET_INT_TOOLTIP"] =
    "Récupérer une valeur dans un stockage. Le nom de la variable permet de retrouver cette variable dans le stockage";
  Blockly.Msg["BLOCK_DATA_STORAGE_GET_STRING"] = "Obtenir dans le stockage de texte %1 %2 la variable %3";
  Blockly.Msg["BLOCK_DATA_STORAGE_GET_STRING_TOOLTIP"] =
    "Récupérer une valeur dans un stockage. Le nom de la variable permet de retrouver cette variable dans le stockage";
  Blockly.Msg["BLOCK_DATA_STORAGE_DELETE_INT"] = "Supprimer dans le stockage de nombre %1 %2 la variable %3";
  Blockly.Msg["BLOCK_DATA_STORAGE_DELETE_INT_TOOLTIP"] = "Supprimer une variable stockée dans le stockage de nombres";
  Blockly.Msg["BLOCK_DATA_STORAGE_DELETE_STRING"] = "Supprimer dans le stockage de texte %1 %2 la variable %3";
  Blockly.Msg["BLOCK_DATA_STORAGE_DELETE_STRING_TOOLTIP"] = "Supprimer une variable stockée dans un stockage de texte.";

  //Workspace warnings
  Blockly.Msg["WARNING_GET_VAR_INCORRECT_VALUE"] =
    "Cette variable ne semble pas être du bon type ou définie. Soyez sûr d'utiliser un bloc \"Sauvegarder dans une variable temporaire\" avant celui-ci, et d'y utiliser le bon type et même nom qu'ici.";
  Blockly.Msg["WARNING_SAVE_VAR_UNCOMPLETE"] = "Pour utiliser cette variable, vous devez lui donner une valeur !";
  Blockly.Msg["WARNING_SAVE_VAR_INCOMPATIBLE"] =
    "Le type de la valeur n'est pas compatible avec le type de la variable. Essayez d'utiliser une autre valeur, ou de changer le type de la variable.";
  Blockly.Msg["WARNING_GET_VAR_INCORRECT_VALUE_WINDOW"] =
    "Des blocs de variable temporaires sont mals placés ! Utilisez les avertissements placés sur les blocs pour les trouver et corriger le problème.";
  Blockly.Msg["WARNING_INVALID_NAME"] =
    "Vous devez uniquement utiliser des lettres (a-z A-Z) et des chiffres (1-9) tout en ne dépassant pas 16 caractères en nommant cela !";
  Blockly.Msg["WARNING_EVENT_VAR_BLOCK_INCORRECTLY_PLACED"] =
    "Ce bloc n'est pas placé dans un évènement compatible ! Essayez d'utiliser un autre bloc de variable d'évènement compatible";
  Blockly.Msg["WARNING_EVENT_VAR_BLOCK_INCORRECTLY_PLACED_WINDOW"] =
    "Un bloc de variable d'évènement est incorrectement placé. Utilisez les avertissements placés sur les blocs pour les trouver et corriger le problème.";
  Blockly.Msg["WARNING_EMPTY_TEXT_BLOCK"] = "Vous devez entrer une valeur pour ce bloc !";
  Blockly.Msg["WARNING_EMPTY_TEXT_BLOCK_WINDOW"] =
    "Un bloc de texte semble vide ! Essayez d'y entrer quelque chose avant de réessayer";
  Blockly.Msg["WARNING_TOO_MANY_BLOCKS"] =
    "Il y a trop de blocs dans votre espace de travail ! Essayez d'utiliser moins de blocs";
  Blockly.Msg["WARNING_INVALID_CUSTOM_EMOJI_STRING"] =
    "Cela ne semble pas être un émoji custom valide. Essayez d'envoyer \\:votre_emoji: dans votre serveur et de coller ici le résultat.";
  Blockly.Msg["WARNING_INVALID_CUSTOM_EMOJI_STRING_WINDOW"] =
    "Vous avez essayé d'utiliser un émoji custom dans un block d'émoji mais cela semble invalide. La valeur devrait ressembler à <:Nom:1234>.";
  Blockly.Msg["WARNING_SLASH_COMMAND_INVALID_REGEX"] =
    "Le nom ou la description contient un charactère invalide ! Le nom doit avoir une longueur de 3, et ne contenir que a-z0-9. La description ne doit pas inclure de caractères spéciaux";
  Blockly.Msg["WARNING_SLASH_COMMAND_INCORRECT_PLACEMENT"] =
    "Ce bloc ne peut être utilisé que dans un bloc de création de commande";
  Blockly.Msg["WARNING_SLASH_COMMAND_UNDEFINED_NAME"] =
    "Le nom de ce bloc ne semble pas être dans les arguments de cette commande";
  Blockly.Msg["WARNING_SLASH_COMMAND_TOO_MANY_ARGS"] = "Cette commande possède trop d'arguments !";
  Blockly.Msg["WARNING_SLASH_COMMAND_DUPLICATED_NAME"] = "Cette commande a le même nom qu'une autre commande";
  Blockly.Msg["WARNING_SLASH_COMMAND_DUPLICATED_ARG"] = "Cet argument a le même nom qu'un autre argument !";
  Blockly.Msg["WARNING_SLASH_COMMAND_INVALID_REQUIRE_STATE"] =
    "Les argument requis ne peuvent pas être définis après des arguments optionnels !";
  Blockly.Msg["WARNING_SLASH_COMMAND_NO_REPLY_BLOCK"] =
    "Vous devez utiliser un block de réponse à cette commande dans ce block !";
  Blockly.Msg["WARNING_SLASH_COMMAND_EVENT_VAR_USED"] = "Vous ne pouvez pas utiliser ce bloc ici !";
  Blockly.Msg["WARNING_SLASH_COMMAND_ERROR_WINDOW"] =
    "Il y a un problème avec un bloc de commande ! Lisez les avertissements pour en savoir plus";
  Blockly.Msg["WARNING_DATA_STORAGE_INVALID_NAME"] =
    "Le nom de ce stockage de données n'est pas valide ! Il ne doit pas comporter de caractères spéciaux, et faire de 3 à 28 caractères.";
  Blockly.Msg["WARNING_DATA_STORAGE_UNDEFINED"] = "Le stockage de données de ce bloc ne semble pas définit !";
  Blockly.Msg["WARNING_DATA_STORAGE_EMPTY_INPUT"] = "Il y a des valeurs indéfinies à ce bloc !";
  Blockly.Msg["WARNING_DATA_STORAGE_ERROR_WINDOW"] =
    "Il y a un problème avec les blocs de stockage de données ! Lisez les avertissements pour en savoir plus";

  //Types names
  Blockly.Msg["STRING"] = "Chaîne de caractères";
  Blockly.Msg["NUMBER"] = "Nombre";
  Blockly.Msg["BOOLEAN"] = "Booléen";
  Blockly.Msg["ARRAY"] = "Liste";
  Blockly.Msg["COLOUR"] = "Couleur";
  Blockly.Msg["MESSAGE"] = "Message";
  Blockly.Msg["TEXT_CHANNEL"] = "Salon textuel";
  Blockly.Msg["VOICE_CHANNEL"] = "Salon vocal";
  Blockly.Msg["THREAD_CHANNEL"] = "Salon fil";
  Blockly.Msg["CATEGORY"] = "Catégorie";
  Blockly.Msg["USER"] = "Utilisateur";
  Blockly.Msg["ROLE"] = "Rôle";
  Blockly.Msg["EMBED_MESSAGE"] = "Message Embed";

  //Others
  Blockly.Msg["YES"] = "Oui";
  Blockly.Msg["NO"] = "Non";
  Blockly.Msg["UNLIMITED"] = "Illimité";
  Blockly.Msg["SHORT"] = "court";
  Blockly.Msg["LONG"] = "long";

  return Blockly;
};
