"use strict";
module.exports = function init(Blockly) {
  //A name has been set, in order to make it runnable when sent to front-end

  Blockly.Msg["ADD_COMMENT"] = "Add Comment";
  Blockly.Msg["CANNOT_DELETE_VARIABLE_PROCEDURE"] =
    "Can't delete the variable '%1' because it's part of the definition of the function '%2'";
  Blockly.Msg["CHANGE_VALUE_TITLE"] = "Change value:";
  Blockly.Msg["CLEAN_UP"] = "Clean up Blocks";
  Blockly.Msg["COLLAPSED_WARNINGS_WARNING"] = "Collapsed blocks contain warnings.";
  Blockly.Msg["COLLAPSE_ALL"] = "Collapse Blocks";
  Blockly.Msg["COLLAPSE_BLOCK"] = "Collapse Block";
  Blockly.Msg["COLOUR_BLEND_COLOUR1"] = "colour 1";
  Blockly.Msg["COLOUR_BLEND_COLOUR2"] = "colour 2";
  Blockly.Msg["COLOUR_BLEND_HELPURL"] = "https://meyerweb.com/eric/tools/color-blend/#:::rgbp";
  Blockly.Msg["COLOUR_BLEND_RATIO"] = "ratio";
  Blockly.Msg["COLOUR_BLEND_TITLE"] = "blend";
  Blockly.Msg["COLOUR_BLEND_TOOLTIP"] = "Blends two colours together with a given ratio (0.0 - 1.0).";
  Blockly.Msg["COLOUR_PICKER_HELPURL"] = "https://en.wikipedia.org/wiki/Color";
  Blockly.Msg["COLOUR_PICKER_TOOLTIP"] = "Choose a colour from the palette.";
  Blockly.Msg["COLOUR_RANDOM_HELPURL"] = "http://randomcolour.com";
  Blockly.Msg["COLOUR_RANDOM_TITLE"] = "random colour";
  Blockly.Msg["COLOUR_RANDOM_TOOLTIP"] = "Choose a colour at random.";
  Blockly.Msg["COLOUR_RGB_BLUE"] = "blue";
  Blockly.Msg["COLOUR_RGB_GREEN"] = "green";
  Blockly.Msg["COLOUR_RGB_HELPURL"] = "https://www.december.com/html/spec/colorpercompact.html";
  Blockly.Msg["COLOUR_RGB_RED"] = "red";
  Blockly.Msg["COLOUR_RGB_TITLE"] = "colour with";
  Blockly.Msg["COLOUR_RGB_TOOLTIP"] =
    "Create a colour with the specified amount of red, green, and blue. All values must be between 0 and 100.";
  Blockly.Msg["CONTROLS_FLOW_STATEMENTS_HELPURL"] =
    "https://github.com/google/blockly/wiki/Loops#loop-termination-blocks";
  Blockly.Msg["CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK"] = "break out of loop";
  Blockly.Msg["CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE"] = "continue with next iteration of loop";
  Blockly.Msg["CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK"] = "Break out of the containing loop.";
  Blockly.Msg["CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE"] =
    "Skip the rest of this loop, and continue with the next iteration.";
  Blockly.Msg["CONTROLS_FLOW_STATEMENTS_WARNING"] = "Warning: This block may only be used within a loop.";
  Blockly.Msg["CONTROLS_FOREACH_HELPURL"] = "https://github.com/google/blockly/wiki/Loops#for-each";
  Blockly.Msg["CONTROLS_FOREACH_TITLE"] = "for each item %1 in list %2";
  Blockly.Msg["CONTROLS_FOREACH_TOOLTIP"] =
    "For each item in a list, set the variable '%1' to the item, and then do some statements.";
  Blockly.Msg["CONTROLS_FOR_HELPURL"] = "https://github.com/google/blockly/wiki/Loops#count-with";
  Blockly.Msg["CONTROLS_FOR_TITLE"] = "count with %1 from %2 to %3 by %4";
  Blockly.Msg["CONTROLS_FOR_TOOLTIP"] =
    "Have the variable '%1' take on the values from the start number to the end number, counting by the specified interval, and do the specified blocks.";
  Blockly.Msg["CONTROLS_IF_ELSEIF_TOOLTIP"] = "Add a condition to the if block.";
  Blockly.Msg["CONTROLS_IF_ELSE_TOOLTIP"] = "Add a final, catch-all condition to the if block.";
  Blockly.Msg["CONTROLS_IF_HELPURL"] = "https://github.com/google/blockly/wiki/IfElse";
  Blockly.Msg["CONTROLS_IF_IF_TOOLTIP"] = "Add, remove, or reorder sections to reconfigure this if block.";
  Blockly.Msg["CONTROLS_IF_MSG_ELSE"] = "else";
  Blockly.Msg["CONTROLS_IF_MSG_ELSEIF"] = "else if";
  Blockly.Msg["CONTROLS_IF_MSG_IF"] = "if";
  Blockly.Msg["CONTROLS_IF_TOOLTIP_1"] = "If a value is true, then do some statements.";
  Blockly.Msg["CONTROLS_IF_TOOLTIP_2"] =
    "If a value is true, then do the first block of statements. Otherwise, do the second block of statements.";
  Blockly.Msg["CONTROLS_IF_TOOLTIP_3"] =
    "If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements.";
  Blockly.Msg["CONTROLS_IF_TOOLTIP_4"] =
    "If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements. If none of the values are true, do the last block of statements.";
  Blockly.Msg["CONTROLS_REPEAT_HELPURL"] = "https://en.wikipedia.org/wiki/For_loop";
  Blockly.Msg["CONTROLS_REPEAT_INPUT_DO"] = "do";
  Blockly.Msg["CONTROLS_REPEAT_TITLE"] = "repeat %1 times";
  Blockly.Msg["CONTROLS_REPEAT_TOOLTIP"] = "Do some statements several times.";
  Blockly.Msg["CONTROLS_WHILEUNTIL_HELPURL"] = "https://github.com/google/blockly/wiki/Loops#repeat";
  Blockly.Msg["CONTROLS_WHILEUNTIL_OPERATOR_UNTIL"] = "repeat until";
  Blockly.Msg["CONTROLS_WHILEUNTIL_OPERATOR_WHILE"] = "repeat while";
  Blockly.Msg["CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL"] = "While a value is false, then do some statements.";
  Blockly.Msg["CONTROLS_WHILEUNTIL_TOOLTIP_WHILE"] = "While a value is true, then do some statements.";
  Blockly.Msg["DELETE_ALL_BLOCKS"] = "Delete all %1 blocks?";
  Blockly.Msg["DELETE_BLOCK"] = "Delete Block";
  Blockly.Msg["DELETE_VARIABLE"] = "Delete the '%1' variable";
  Blockly.Msg["DELETE_VARIABLE_CONFIRMATION"] = "Delete %1 uses of the '%2' variable?";
  Blockly.Msg["DELETE_X_BLOCKS"] = "Delete %1 Blocks";
  Blockly.Msg["DIALOG_CANCEL"] = "Cancel";
  Blockly.Msg["DIALOG_OK"] = "OK";
  Blockly.Msg["DISABLE_BLOCK"] = "Disable Block";
  Blockly.Msg["DUPLICATE_BLOCK"] = "Duplicate";
  Blockly.Msg["DUPLICATE_COMMENT"] = "Duplicate Comment";
  Blockly.Msg["ENABLE_BLOCK"] = "Enable Block";
  Blockly.Msg["EXPAND_ALL"] = "Expand Blocks";
  Blockly.Msg["EXPAND_BLOCK"] = "Expand Block";
  Blockly.Msg["EXTERNAL_INPUTS"] = "External Inputs";
  Blockly.Msg["HELP"] = "Help";
  Blockly.Msg["INLINE_INPUTS"] = "Inline Inputs";
  Blockly.Msg["LISTS_CREATE_EMPTY_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#create-empty-list";
  Blockly.Msg["LISTS_CREATE_EMPTY_TITLE"] = "create empty list";
  Blockly.Msg["LISTS_CREATE_EMPTY_TOOLTIP"] = "Returns a list, of length 0, containing no data records";
  Blockly.Msg["LISTS_CREATE_WITH_CONTAINER_TITLE_ADD"] = "list";
  Blockly.Msg["LISTS_CREATE_WITH_CONTAINER_TOOLTIP"] =
    "Add, remove, or reorder sections to reconfigure this list block.";
  Blockly.Msg["LISTS_CREATE_WITH_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#create-list-with";
  Blockly.Msg["LISTS_CREATE_WITH_INPUT_WITH"] = "create list with";
  Blockly.Msg["LISTS_CREATE_WITH_ITEM_TOOLTIP"] = "Add an item to the list.";
  Blockly.Msg["LISTS_CREATE_WITH_TOOLTIP"] = "Create a list with any number of items.";
  Blockly.Msg["LISTS_GET_INDEX_FIRST"] = "first";
  Blockly.Msg["LISTS_GET_INDEX_FROM_END"] = "# from end";
  Blockly.Msg["LISTS_GET_INDEX_FROM_START"] = "#";
  Blockly.Msg["LISTS_GET_INDEX_GET"] = "get";
  Blockly.Msg["LISTS_GET_INDEX_GET_REMOVE"] = "get and remove";
  Blockly.Msg["LISTS_GET_INDEX_LAST"] = "last";
  Blockly.Msg["LISTS_GET_INDEX_RANDOM"] = "random";
  Blockly.Msg["LISTS_GET_INDEX_REMOVE"] = "remove";
  Blockly.Msg["LISTS_GET_INDEX_TAIL"] = "";
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_FIRST"] = "Returns the first item in a list.";
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_FROM"] = "Returns the item at the specified position in a list.";
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_LAST"] = "Returns the last item in a list.";
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_RANDOM"] = "Returns a random item in a list.";
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST"] = "Removes and returns the first item in a list.";
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM"] =
    "Removes and returns the item at the specified position in a list.";
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST"] = "Removes and returns the last item in a list.";
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM"] = "Removes and returns a random item in a list.";
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST"] = "Removes the first item in a list.";
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM"] = "Removes the item at the specified position in a list.";
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST"] = "Removes the last item in a list.";
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM"] = "Removes a random item in a list.";
  Blockly.Msg["LISTS_GET_SUBLIST_END_FROM_END"] = "to # from end";
  Blockly.Msg["LISTS_GET_SUBLIST_END_FROM_START"] = "to #";
  Blockly.Msg["LISTS_GET_SUBLIST_END_LAST"] = "to last";
  Blockly.Msg["LISTS_GET_SUBLIST_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#getting-a-sublist";
  Blockly.Msg["LISTS_GET_SUBLIST_START_FIRST"] = "get sub-list from first";
  Blockly.Msg["LISTS_GET_SUBLIST_START_FROM_END"] = "get sub-list from # from end";
  Blockly.Msg["LISTS_GET_SUBLIST_START_FROM_START"] = "get sub-list from #";
  Blockly.Msg["LISTS_GET_SUBLIST_TAIL"] = "";
  Blockly.Msg["LISTS_GET_SUBLIST_TOOLTIP"] = "Creates a copy of the specified portion of a list.";
  Blockly.Msg["LISTS_INDEX_FROM_END_TOOLTIP"] = "%1 is the last item.";
  Blockly.Msg["LISTS_INDEX_FROM_START_TOOLTIP"] = "%1 is the first item.";
  Blockly.Msg["LISTS_INDEX_OF_FIRST"] = "find first occurrence of item";
  Blockly.Msg["LISTS_INDEX_OF_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list";
  Blockly.Msg["LISTS_INDEX_OF_LAST"] = "find last occurrence of item";
  Blockly.Msg["LISTS_INDEX_OF_TOOLTIP"] =
    "Returns the index of the first/last occurrence of the item in the list. Returns %1 if item is not found.";
  Blockly.Msg["LISTS_INLIST"] = "in list";
  Blockly.Msg["LISTS_ISEMPTY_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#is-empty";
  Blockly.Msg["LISTS_ISEMPTY_TITLE"] = "%1 is empty";
  Blockly.Msg["LISTS_ISEMPTY_TOOLTIP"] = "Returns true if the list is empty.";
  Blockly.Msg["LISTS_LENGTH_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#length-of";
  Blockly.Msg["LISTS_LENGTH_TITLE"] = "length of %1";
  Blockly.Msg["LISTS_LENGTH_TOOLTIP"] = "Returns the length of a list.";
  Blockly.Msg["LISTS_REPEAT_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#create-list-with";
  Blockly.Msg["LISTS_REPEAT_TITLE"] = "create list with item %1 repeated %2 times";
  Blockly.Msg["LISTS_REPEAT_TOOLTIP"] =
    "Creates a list consisting of the given value repeated the specified number of times.";
  Blockly.Msg["LISTS_REVERSE_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#reversing-a-list";
  Blockly.Msg["LISTS_REVERSE_MESSAGE0"] = "reverse %1";
  Blockly.Msg["LISTS_REVERSE_TOOLTIP"] = "Reverse a copy of a list.";
  Blockly.Msg["LISTS_SET_INDEX_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#in-list--set";
  Blockly.Msg["LISTS_SET_INDEX_INPUT_TO"] = "as";
  Blockly.Msg["LISTS_SET_INDEX_INSERT"] = "insert at";
  Blockly.Msg["LISTS_SET_INDEX_SET"] = "set";
  Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST"] = "Inserts the item at the start of a list.";
  Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_INSERT_FROM"] = "Inserts the item at the specified position in a list.";
  Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_INSERT_LAST"] = "Append the item to the end of a list.";
  Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM"] = "Inserts the item randomly in a list.";
  Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_SET_FIRST"] = "Sets the first item in a list.";
  Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_SET_FROM"] = "Sets the item at the specified position in a list.";
  Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_SET_LAST"] = "Sets the last item in a list.";
  Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_SET_RANDOM"] = "Sets a random item in a list.";
  Blockly.Msg["LISTS_SORT_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#sorting-a-list";
  Blockly.Msg["LISTS_SORT_ORDER_ASCENDING"] = "ascending";
  Blockly.Msg["LISTS_SORT_ORDER_DESCENDING"] = "descending";
  Blockly.Msg["LISTS_SORT_TITLE"] = "sort %1 %2 %3";
  Blockly.Msg["LISTS_SORT_TOOLTIP"] = "Sort a copy of a list.";
  Blockly.Msg["LISTS_SORT_TYPE_IGNORECASE"] = "alphabetic, ignore case";
  Blockly.Msg["LISTS_SORT_TYPE_NUMERIC"] = "numeric";
  Blockly.Msg["LISTS_SORT_TYPE_TEXT"] = "alphabetic";
  Blockly.Msg["LISTS_SPLIT_HELPURL"] =
    "https://github.com/google/blockly/wiki/Lists#splitting-strings-and-joining-lists";
  Blockly.Msg["LISTS_SPLIT_LIST_FROM_TEXT"] = "make list from text";
  Blockly.Msg["LISTS_SPLIT_TEXT_FROM_LIST"] = "make text from list";
  Blockly.Msg["LISTS_SPLIT_TOOLTIP_JOIN"] = "Join a list of texts into one text, separated by a delimiter.";
  Blockly.Msg["LISTS_SPLIT_TOOLTIP_SPLIT"] = "Split text into a list of texts, breaking at each delimiter.";
  Blockly.Msg["LISTS_SPLIT_WITH_DELIMITER"] = "with delimiter";
  Blockly.Msg["LOGIC_BOOLEAN_FALSE"] = "false";
  Blockly.Msg["LOGIC_BOOLEAN_HELPURL"] = "https://github.com/google/blockly/wiki/Logic#values";
  Blockly.Msg["LOGIC_BOOLEAN_TOOLTIP"] = "Returns either true or false.";
  Blockly.Msg["LOGIC_BOOLEAN_TRUE"] = "true";
  Blockly.Msg["LOGIC_COMPARE_HELPURL"] = "https://en.wikipedia.org/wiki/Inequality_(mathematics)";
  Blockly.Msg["LOGIC_COMPARE_TOOLTIP_EQ"] = "Return true if both inputs equal each other.";
  Blockly.Msg["LOGIC_COMPARE_TOOLTIP_GT"] = "Return true if the first input is greater than the second input.";
  Blockly.Msg["LOGIC_COMPARE_TOOLTIP_GTE"] =
    "Return true if the first input is greater than or equal to the second input.";
  Blockly.Msg["LOGIC_COMPARE_TOOLTIP_LT"] = "Return true if the first input is smaller than the second input.";
  Blockly.Msg["LOGIC_COMPARE_TOOLTIP_LTE"] =
    "Return true if the first input is smaller than or equal to the second input.";
  Blockly.Msg["LOGIC_COMPARE_TOOLTIP_NEQ"] = "Return true if both inputs are not equal to each other.";
  Blockly.Msg["LOGIC_NEGATE_HELPURL"] = "https://github.com/google/blockly/wiki/Logic#not";
  Blockly.Msg["LOGIC_NEGATE_TITLE"] = "not %1";
  Blockly.Msg["LOGIC_NEGATE_TOOLTIP"] = "Returns true if the input is false. Returns false if the input is true.";
  Blockly.Msg["LOGIC_NULL"] = "null";
  Blockly.Msg["LOGIC_NULL_HELPURL"] = "https://en.wikipedia.org/wiki/Nullable_type";
  Blockly.Msg["LOGIC_NULL_TOOLTIP"] = "Returns null.";
  Blockly.Msg["LOGIC_OPERATION_AND"] = "and";
  Blockly.Msg["LOGIC_OPERATION_HELPURL"] = "https://github.com/google/blockly/wiki/Logic#logical-operations";
  Blockly.Msg["LOGIC_OPERATION_OR"] = "or";
  Blockly.Msg["LOGIC_OPERATION_TOOLTIP_AND"] = "Return true if both inputs are true.";
  Blockly.Msg["LOGIC_OPERATION_TOOLTIP_OR"] = "Return true if at least one of the inputs is true.";
  Blockly.Msg["LOGIC_TERNARY_CONDITION"] = "test";
  Blockly.Msg["LOGIC_TERNARY_HELPURL"] = "https://en.wikipedia.org/wiki/%3F:";
  Blockly.Msg["LOGIC_TERNARY_IF_FALSE"] = "if false";
  Blockly.Msg["LOGIC_TERNARY_IF_TRUE"] = "if true";
  Blockly.Msg["LOGIC_TERNARY_TOOLTIP"] =
    "Check the condition in 'test'. If the condition is true, returns the 'if true' value; otherwise returns the 'if false' value.";
  Blockly.Msg["MATH_ADDITION_SYMBOL"] = "+";
  Blockly.Msg["MATH_ARITHMETIC_HELPURL"] = "https://en.wikipedia.org/wiki/Arithmetic";
  Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_ADD"] = "Return the sum of the two numbers.";
  Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_DIVIDE"] = "Return the quotient of the two numbers.";
  Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_MINUS"] = "Return the difference of the two numbers.";
  Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_MULTIPLY"] = "Return the product of the two numbers.";
  Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_POWER"] = "Return the first number raised to the power of the second number.";
  Blockly.Msg["MATH_ATAN2_HELPURL"] = "https://en.wikipedia.org/wiki/Atan2";
  Blockly.Msg["MATH_ATAN2_TITLE"] = "atan2 of X:%1 Y:%2";
  Blockly.Msg["MATH_ATAN2_TOOLTIP"] = "Return the arctangent of point (X, Y) in degrees from -180 to 180.";
  Blockly.Msg["MATH_CHANGE_HELPURL"] = "https://en.wikipedia.org/wiki/Programming_idiom#Incrementing_a_counter";
  Blockly.Msg["MATH_CHANGE_TITLE"] = "change %1 by %2";
  Blockly.Msg["MATH_CHANGE_TOOLTIP"] = "Add a number to variable '%1'.";
  Blockly.Msg["MATH_CONSTANT_HELPURL"] = "https://en.wikipedia.org/wiki/Mathematical_constant";
  Blockly.Msg["MATH_CONSTANT_TOOLTIP"] =
    "Return one of the common constants: π (3.141…), e (2.718…), φ (1.618…), sqrt(2) (1.414…), sqrt(½) (0.707…), or ∞ (infinity).";
  Blockly.Msg["MATH_CONSTRAIN_HELPURL"] = "https://en.wikipedia.org/wiki/Clamping_(graphics)";
  Blockly.Msg["MATH_CONSTRAIN_TITLE"] = "constrain %1 low %2 high %3";
  Blockly.Msg["MATH_CONSTRAIN_TOOLTIP"] = "Constrain a number to be between the specified limits (inclusive).";
  Blockly.Msg["MATH_DIVISION_SYMBOL"] = "÷";
  Blockly.Msg["MATH_IS_DIVISIBLE_BY"] = "is divisible by";
  Blockly.Msg["MATH_IS_EVEN"] = "is even";
  Blockly.Msg["MATH_IS_NEGATIVE"] = "is negative";
  Blockly.Msg["MATH_IS_ODD"] = "is odd";
  Blockly.Msg["MATH_IS_POSITIVE"] = "is positive";
  Blockly.Msg["MATH_IS_PRIME"] = "is prime";
  Blockly.Msg["MATH_IS_TOOLTIP"] =
    "Check if a number is an even, odd, prime, whole, positive, negative, or if it is divisible by certain number. Returns true or false.";
  Blockly.Msg["MATH_IS_WHOLE"] = "is whole";
  Blockly.Msg["MATH_MODULO_HELPURL"] = "https://en.wikipedia.org/wiki/Modulo_operation";
  Blockly.Msg["MATH_MODULO_TITLE"] = "remainder of %1 ÷ %2";
  Blockly.Msg["MATH_MODULO_TOOLTIP"] = "Return the remainder from dividing the two numbers.";
  Blockly.Msg["MATH_MULTIPLICATION_SYMBOL"] = "×";
  Blockly.Msg["MATH_NUMBER_HELPURL"] = "https://en.wikipedia.org/wiki/Number";
  Blockly.Msg["MATH_NUMBER_TOOLTIP"] = "A number.";
  Blockly.Msg["MATH_ONLIST_HELPURL"] = "";
  Blockly.Msg["MATH_ONLIST_OPERATOR_AVERAGE"] = "average of list";
  Blockly.Msg["MATH_ONLIST_OPERATOR_MAX"] = "max of list";
  Blockly.Msg["MATH_ONLIST_OPERATOR_MEDIAN"] = "median of list";
  Blockly.Msg["MATH_ONLIST_OPERATOR_MIN"] = "min of list";
  Blockly.Msg["MATH_ONLIST_OPERATOR_MODE"] = "modes of list";
  Blockly.Msg["MATH_ONLIST_OPERATOR_RANDOM"] = "random item of list";
  Blockly.Msg["MATH_ONLIST_OPERATOR_STD_DEV"] = "standard deviation of list";
  Blockly.Msg["MATH_ONLIST_OPERATOR_SUM"] = "sum of list";
  Blockly.Msg["MATH_ONLIST_TOOLTIP_AVERAGE"] =
    "Return the average (arithmetic mean) of the numeric values in the list.";
  Blockly.Msg["MATH_ONLIST_TOOLTIP_MAX"] = "Return the largest number in the list.";
  Blockly.Msg["MATH_ONLIST_TOOLTIP_MEDIAN"] = "Return the median number in the list.";
  Blockly.Msg["MATH_ONLIST_TOOLTIP_MIN"] = "Return the smallest number in the list.";
  Blockly.Msg["MATH_ONLIST_TOOLTIP_MODE"] = "Return a list of the most common item(s) in the list.";
  Blockly.Msg["MATH_ONLIST_TOOLTIP_RANDOM"] = "Return a random element from the list.";
  Blockly.Msg["MATH_ONLIST_TOOLTIP_STD_DEV"] = "Return the standard deviation of the list.";
  Blockly.Msg["MATH_ONLIST_TOOLTIP_SUM"] = "Return the sum of all the numbers in the list.";
  Blockly.Msg["MATH_POWER_SYMBOL"] = "^";
  Blockly.Msg["MATH_RANDOM_FLOAT_HELPURL"] = "https://en.wikipedia.org/wiki/Random_number_generation";
  Blockly.Msg["MATH_RANDOM_FLOAT_TITLE_RANDOM"] = "random fraction";
  Blockly.Msg["MATH_RANDOM_FLOAT_TOOLTIP"] = "Return a random fraction between 0.0 (inclusive) and 1.0 (exclusive).";
  Blockly.Msg["MATH_RANDOM_INT_HELPURL"] = "https://en.wikipedia.org/wiki/Random_number_generation";
  Blockly.Msg["MATH_RANDOM_INT_TITLE"] = "random integer from %1 to %2";
  Blockly.Msg["MATH_RANDOM_INT_TOOLTIP"] = "Return a random integer between the two specified limits, inclusive.";
  Blockly.Msg["MATH_ROUND_HELPURL"] = "https://en.wikipedia.org/wiki/Rounding";
  Blockly.Msg["MATH_ROUND_OPERATOR_ROUND"] = "round";
  Blockly.Msg["MATH_ROUND_OPERATOR_ROUNDDOWN"] = "round down";
  Blockly.Msg["MATH_ROUND_OPERATOR_ROUNDUP"] = "round up";
  Blockly.Msg["MATH_ROUND_TOOLTIP"] = "Round a number up or down.";
  Blockly.Msg["MATH_SINGLE_HELPURL"] = "https://en.wikipedia.org/wiki/Square_root";
  Blockly.Msg["MATH_SINGLE_OP_ABSOLUTE"] = "absolute";
  Blockly.Msg["MATH_SINGLE_OP_ROOT"] = "square root";
  Blockly.Msg["MATH_SINGLE_TOOLTIP_ABS"] = "Return the absolute value of a number.";
  Blockly.Msg["MATH_SINGLE_TOOLTIP_EXP"] = "Return e to the power of a number.";
  Blockly.Msg["MATH_SINGLE_TOOLTIP_LN"] = "Return the natural logarithm of a number.";
  Blockly.Msg["MATH_SINGLE_TOOLTIP_LOG10"] = "Return the base 10 logarithm of a number.";
  Blockly.Msg["MATH_SINGLE_TOOLTIP_NEG"] = "Return the negation of a number.";
  Blockly.Msg["MATH_SINGLE_TOOLTIP_POW10"] = "Return 10 to the power of a number.";
  Blockly.Msg["MATH_SINGLE_TOOLTIP_ROOT"] = "Return the square root of a number.";
  Blockly.Msg["MATH_SUBTRACTION_SYMBOL"] = "-";
  Blockly.Msg["MATH_TRIG_ACOS"] = "acos";
  Blockly.Msg["MATH_TRIG_ASIN"] = "asin";
  Blockly.Msg["MATH_TRIG_ATAN"] = "atan";
  Blockly.Msg["MATH_TRIG_COS"] = "cos";
  Blockly.Msg["MATH_TRIG_HELPURL"] = "https://en.wikipedia.org/wiki/Trigonometric_functions";
  Blockly.Msg["MATH_TRIG_SIN"] = "sin";
  Blockly.Msg["MATH_TRIG_TAN"] = "tan";
  Blockly.Msg["MATH_TRIG_TOOLTIP_ACOS"] = "Return the arccosine of a number.";
  Blockly.Msg["MATH_TRIG_TOOLTIP_ASIN"] = "Return the arcsine of a number.";
  Blockly.Msg["MATH_TRIG_TOOLTIP_ATAN"] = "Return the arctangent of a number.";
  Blockly.Msg["MATH_TRIG_TOOLTIP_COS"] = "Return the cosine of a degree (not radian).";
  Blockly.Msg["MATH_TRIG_TOOLTIP_SIN"] = "Return the sine of a degree (not radian).";
  Blockly.Msg["MATH_TRIG_TOOLTIP_TAN"] = "Return the tangent of a degree (not radian).";
  Blockly.Msg["NEW_COLOUR_VARIABLE"] = "Create colour variable...";
  Blockly.Msg["NEW_NUMBER_VARIABLE"] = "Create number variable...";
  Blockly.Msg["NEW_STRING_VARIABLE"] = "Create string variable...";
  Blockly.Msg["NEW_VARIABLE"] = "Create variable...";
  Blockly.Msg["NEW_VARIABLE_TITLE"] = "New variable name:";
  Blockly.Msg["NEW_VARIABLE_TYPE_TITLE"] = "New variable type:";
  Blockly.Msg["ORDINAL_NUMBER_SUFFIX"] = "";
  Blockly.Msg["PROCEDURES_ALLOW_STATEMENTS"] = "allow statements";
  Blockly.Msg["PROCEDURES_BEFORE_PARAMS"] = "with:";
  Blockly.Msg["PROCEDURES_CALLNORETURN_HELPURL"] = "https://en.wikipedia.org/wiki/Subroutine";
  Blockly.Msg["PROCEDURES_CALLNORETURN_TOOLTIP"] = "Run the user-defined function '%1'.";
  Blockly.Msg["PROCEDURES_CALLRETURN_HELPURL"] = "https://en.wikipedia.org/wiki/Subroutine";
  Blockly.Msg["PROCEDURES_CALLRETURN_TOOLTIP"] = "Run the user-defined function '%1' and use its output.";
  Blockly.Msg["PROCEDURES_CALL_BEFORE_PARAMS"] = "with:";
  Blockly.Msg["PROCEDURES_CREATE_DO"] = "Create '%1'";
  Blockly.Msg["PROCEDURES_DEFNORETURN_COMMENT"] = "Describe this function...";
  Blockly.Msg["PROCEDURES_DEFNORETURN_DO"] = "";
  Blockly.Msg["PROCEDURES_DEFNORETURN_HELPURL"] = "https://en.wikipedia.org/wiki/Subroutine";
  Blockly.Msg["PROCEDURES_DEFNORETURN_PROCEDURE"] = "do something";
  Blockly.Msg["PROCEDURES_DEFNORETURN_TITLE"] = "to";
  Blockly.Msg["PROCEDURES_DEFNORETURN_TOOLTIP"] = "Creates a function with no output.";
  Blockly.Msg["PROCEDURES_DEFRETURN_HELPURL"] = "https://en.wikipedia.org/wiki/Subroutine";
  Blockly.Msg["PROCEDURES_DEFRETURN_RETURN"] = "return";
  Blockly.Msg["PROCEDURES_DEFRETURN_TOOLTIP"] = "Creates a function with an output.";
  Blockly.Msg["PROCEDURES_DEF_DUPLICATE_WARNING"] = "Warning: This function has duplicate parameters.";
  Blockly.Msg["PROCEDURES_HIGHLIGHT_DEF"] = "Highlight function definition";
  Blockly.Msg["PROCEDURES_IFRETURN_HELPURL"] = "http://c2.com/cgi/wiki?GuardClause";
  Blockly.Msg["PROCEDURES_IFRETURN_TOOLTIP"] = "If a value is true, then return a second value.";
  Blockly.Msg["PROCEDURES_IFRETURN_WARNING"] = "Warning: This block may be used only within a function definition.";
  Blockly.Msg["PROCEDURES_MUTATORARG_TITLE"] = "input name:";
  Blockly.Msg["PROCEDURES_MUTATORARG_TOOLTIP"] = "Add an input to the function.";
  Blockly.Msg["PROCEDURES_MUTATORCONTAINER_TITLE"] = "inputs";
  Blockly.Msg["PROCEDURES_MUTATORCONTAINER_TOOLTIP"] = "Add, remove, or reorder inputs to this function.";
  Blockly.Msg["REDO"] = "Redo";
  Blockly.Msg["REMOVE_COMMENT"] = "Remove Comment";
  Blockly.Msg["RENAME_VARIABLE"] = "Rename variable...";
  Blockly.Msg["RENAME_VARIABLE_TITLE"] = "Rename all '%1' variables to:";
  Blockly.Msg["TEXT_APPEND_HELPURL"] = "https://github.com/google/blockly/wiki/Text#text-modification";
  Blockly.Msg["TEXT_APPEND_TITLE"] = "to %1 append text %2";
  Blockly.Msg["TEXT_APPEND_TOOLTIP"] = "Append some text to variable '%1'.";
  Blockly.Msg["TEXT_CHANGECASE_HELPURL"] = "https://github.com/google/blockly/wiki/Text#adjusting-text-case";
  Blockly.Msg["TEXT_CHANGECASE_OPERATOR_LOWERCASE"] = "to lower case";
  Blockly.Msg["TEXT_CHANGECASE_OPERATOR_TITLECASE"] = "to Title Case";
  Blockly.Msg["TEXT_CHANGECASE_OPERATOR_UPPERCASE"] = "to UPPER CASE";
  Blockly.Msg["TEXT_CHANGECASE_TOOLTIP"] = "Return a copy of the text in a different case.";
  Blockly.Msg["TEXT_CHARAT_FIRST"] = "get first letter";
  Blockly.Msg["TEXT_CHARAT_FROM_END"] = "get letter # from end";
  Blockly.Msg["TEXT_CHARAT_FROM_START"] = "get letter #";
  Blockly.Msg["TEXT_CHARAT_HELPURL"] = "https://github.com/google/blockly/wiki/Text#extracting-text";
  Blockly.Msg["TEXT_CHARAT_LAST"] = "get last letter";
  Blockly.Msg["TEXT_CHARAT_RANDOM"] = "get random letter";
  Blockly.Msg["TEXT_CHARAT_TAIL"] = "";
  Blockly.Msg["TEXT_CHARAT_TITLE"] = "in text %1 %2";
  Blockly.Msg["TEXT_CHARAT_TOOLTIP"] = "Returns the letter at the specified position.";
  Blockly.Msg["TEXT_COUNT_HELPURL"] = "https://github.com/google/blockly/wiki/Text#counting-substrings";
  Blockly.Msg["TEXT_COUNT_MESSAGE0"] = "count %1 in %2";
  Blockly.Msg["TEXT_COUNT_TOOLTIP"] = "Count how many times some text occurs within some other text.";
  Blockly.Msg["TEXT_CREATE_JOIN_ITEM_TOOLTIP"] = "Add an item to the text.";
  Blockly.Msg["TEXT_CREATE_JOIN_TITLE_JOIN"] = "join";
  Blockly.Msg["TEXT_CREATE_JOIN_TOOLTIP"] = "Add, remove, or reorder sections to reconfigure this text block.";
  Blockly.Msg["TEXT_GET_SUBSTRING_END_FROM_END"] = "to letter # from end";
  Blockly.Msg["TEXT_GET_SUBSTRING_END_FROM_START"] = "to letter #";
  Blockly.Msg["TEXT_GET_SUBSTRING_END_LAST"] = "to last letter";
  Blockly.Msg["TEXT_GET_SUBSTRING_HELPURL"] = "https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text";
  Blockly.Msg["TEXT_GET_SUBSTRING_INPUT_IN_TEXT"] = "in text";
  Blockly.Msg["TEXT_GET_SUBSTRING_START_FIRST"] = "get substring from first letter";
  Blockly.Msg["TEXT_GET_SUBSTRING_START_FROM_END"] = "get substring from letter # from end";
  Blockly.Msg["TEXT_GET_SUBSTRING_START_FROM_START"] = "get substring from letter #";
  Blockly.Msg["TEXT_GET_SUBSTRING_TAIL"] = "";
  Blockly.Msg["TEXT_GET_SUBSTRING_TOOLTIP"] = "Returns a specified portion of the text.";
  Blockly.Msg["TEXT_INDEXOF_HELPURL"] = "https://github.com/google/blockly/wiki/Text#finding-text";
  Blockly.Msg["TEXT_INDEXOF_OPERATOR_FIRST"] = "find first occurrence of text";
  Blockly.Msg["TEXT_INDEXOF_OPERATOR_LAST"] = "find last occurrence of text";
  Blockly.Msg["TEXT_INDEXOF_TITLE"] = "in text %1 %2 %3";
  Blockly.Msg["TEXT_INDEXOF_TOOLTIP"] =
    "Returns the index of the first/last occurrence of the first text in the second text. Returns %1 if text is not found.";
  Blockly.Msg["TEXT_ISEMPTY_HELPURL"] = "https://github.com/google/blockly/wiki/Text#checking-for-empty-text";
  Blockly.Msg["TEXT_ISEMPTY_TITLE"] = "%1 is empty";
  Blockly.Msg["TEXT_ISEMPTY_TOOLTIP"] = "Returns true if the provided text is empty.";
  Blockly.Msg["TEXT_JOIN_HELPURL"] = "https://github.com/google/blockly/wiki/Text#text-creation";
  Blockly.Msg["TEXT_JOIN_TITLE_CREATEWITH"] = "create text with";
  Blockly.Msg["TEXT_JOIN_TOOLTIP"] = "Create a piece of text by joining together any number of items.";
  Blockly.Msg["TEXT_LENGTH_HELPURL"] = "https://github.com/google/blockly/wiki/Text#text-modification";
  Blockly.Msg["TEXT_LENGTH_TITLE"] = "length of %1";
  Blockly.Msg["TEXT_LENGTH_TOOLTIP"] = "Returns the number of letters (including spaces) in the provided text.";
  Blockly.Msg["TEXT_PRINT_HELPURL"] = "https://github.com/google/blockly/wiki/Text#printing-text";
  Blockly.Msg["TEXT_PRINT_TITLE"] = "print %1";
  Blockly.Msg["TEXT_PRINT_TOOLTIP"] = "Print the specified text, number or other value.";
  Blockly.Msg["TEXT_PROMPT_HELPURL"] = "https://github.com/google/blockly/wiki/Text#getting-input-from-the-user";
  Blockly.Msg["TEXT_PROMPT_TOOLTIP_NUMBER"] = "Prompt for user for a number.";
  Blockly.Msg["TEXT_PROMPT_TOOLTIP_TEXT"] = "Prompt for user for some text.";
  Blockly.Msg["TEXT_PROMPT_TYPE_NUMBER"] = "prompt for number with message";
  Blockly.Msg["TEXT_PROMPT_TYPE_TEXT"] = "prompt for text with message";
  Blockly.Msg["TEXT_REPLACE_HELPURL"] = "https://github.com/google/blockly/wiki/Text#replacing-substrings";
  Blockly.Msg["TEXT_REPLACE_MESSAGE0"] = "replace %1 with %2 in %3";
  Blockly.Msg["TEXT_REPLACE_TOOLTIP"] = "Replace all occurances of some text within some other text.";
  Blockly.Msg["TEXT_REVERSE_HELPURL"] = "https://github.com/google/blockly/wiki/Text#reversing-text";
  Blockly.Msg["TEXT_REVERSE_MESSAGE0"] = "reverse %1";
  Blockly.Msg["TEXT_REVERSE_TOOLTIP"] = "Reverses the order of the characters in the text.";
  Blockly.Msg["TEXT_TEXT_HELPURL"] = "https://en.wikipedia.org/wiki/String_(computer_science)";
  Blockly.Msg["TEXT_TEXT_TOOLTIP"] = "A letter, word, or line of text.";
  Blockly.Msg["TEXT_TRIM_HELPURL"] = "https://github.com/google/blockly/wiki/Text#trimming-removing-spaces";
  Blockly.Msg["TEXT_TRIM_OPERATOR_BOTH"] = "trim spaces from both sides of";
  Blockly.Msg["TEXT_TRIM_OPERATOR_LEFT"] = "trim spaces from left side of";
  Blockly.Msg["TEXT_TRIM_OPERATOR_RIGHT"] = "trim spaces from right side of";
  Blockly.Msg["TEXT_TRIM_TOOLTIP"] = "Return a copy of the text with spaces removed from one or both ends.";
  Blockly.Msg["TODAY"] = "Today";
  Blockly.Msg["UNDO"] = "Undo";
  Blockly.Msg["UNNAMED_KEY"] = "unnamed";
  Blockly.Msg["VARIABLES_DEFAULT_NAME"] = "item";
  Blockly.Msg["VARIABLES_GET_CREATE_SET"] = "Create 'set %1'";
  Blockly.Msg["VARIABLES_GET_HELPURL"] = "https://github.com/google/blockly/wiki/Variables#get";
  Blockly.Msg["VARIABLES_GET_TOOLTIP"] = "Returns the value of this variable.";
  Blockly.Msg["VARIABLES_SET"] = "set %1 to %2";
  Blockly.Msg["VARIABLES_SET_CREATE_GET"] = "Create 'get %1'";
  Blockly.Msg["VARIABLES_SET_HELPURL"] = "https://github.com/google/blockly/wiki/Variables#set";
  Blockly.Msg["VARIABLES_SET_TOOLTIP"] = "Sets this variable to be equal to the input.";
  Blockly.Msg["VARIABLE_ALREADY_EXISTS"] = "A variable named '%1' already exists.";
  Blockly.Msg["VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE"] =
    "A variable named '%1' already exists for another type: '%2'.";
  Blockly.Msg["WORKSPACE_ARIA_LABEL"] = "Blockly Workspace";
  Blockly.Msg["WORKSPACE_COMMENT_DEFAULT_TEXT"] = "Say something...";
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
  Blockly.Msg["WORKSPACE_TAB_EVENTS"] = "Events";
  Blockly.Msg["WORKSPACE_TAB_SLASH_COMMAND"] = "Slash commands";
  Blockly.Msg["WORKSPACE_TAB_MESSAGES"] = "Messages";
  Blockly.Msg["WORKSPACE_TAB_CHANNELS"] = "Channels & Threads";
  Blockly.Msg["WORKSPACE_TAB_USERS"] = "Users";
  Blockly.Msg["WORKSPACE_TAB_GUILD"] = "Servers";
  Blockly.Msg["WORKSPACE_TAB_RANKS"] = "Ranks";
  Blockly.Msg["WORKSPACE_TAB_EMBEDS"] = "Embed Messages";
  Blockly.Msg["WORKSPACE_TAB_VARIABLES"] = "Variables";
  Blockly.Msg["WORKSPACE_TAB_DATA_STORAGE"] = "Data storage";
  Blockly.Msg["WORKSPACE_TAB_EMOJIS"] = "Emojis";
  Blockly.Msg["WORKSPACE_TAB_MISCELLANEOUS"] = "Miscellaneous";

  Blockly.Msg["WORKSPACE_EVENTS_MESSAGE_SENT_DELETED"] = "A message is sent or deleted";
  Blockly.Msg["WORKSPACE_EVENTS_MESSAGE_UPDATED"] = "A message is updated";
  Blockly.Msg["WORKSPACE_EVENTS_USER_JOIN_LEAVE"] = "An user join or leave the server";
  Blockly.Msg["WORKSPACE_EVENTS_USER_UPDATED"] = "An user is updated";
  Blockly.Msg["WORKSPACE_EVENTS_RANK"] = "A rank is created or deleted";
  Blockly.Msg["WORKSPACE_EVENTS_RANK_UPDATE"] = "A rank is updated";
  Blockly.Msg["WORKSPACE_EVENTS_BAN_UNBAN"] = "An user is banned or unbanned";
  Blockly.Msg["WORKSPACE_EVENTS_TEXT_CHANNEL"] = "A text channel is created or deleted";
  Blockly.Msg["WORKSPACE_EVENTS_TEXT_CHANNEL_UPDATE"] = "A text channel is updated";
  Blockly.Msg["WORKSPACE_EVENTS_VOICE_CHANNEL"] = "A voice channel is created or deleted";
  Blockly.Msg["WORKSPACE_EVENTS_VOICE_CHANNEL_UPDATE"] = "A voice channel is updated";
  Blockly.Msg["WORKSPACE_EVENTS_VOICE_UPDATE"] = "An user's voice state is updated";
  Blockly.Msg["WORKSPACE_EVENTS_REACTION"] = "A reaction is added or removed from a message";
  Blockly.Msg["WORKSPACE_EVENTS_EXTRA"] = "Others";

  Blockly.Msg["WORKSPACE_SLASH_COMMAND_CREATE"] = "Create a slash command";
  Blockly.Msg["WORKSPACE_SLASH_COMMAND_ARGS"] = "Add arguments to a clash command";
  Blockly.Msg["WORKSPACE_SLASH_COMMAND_GET_ARGS"] = "Get the value of command arguments";
  Blockly.Msg["WORKSPACE_SLASH_COMMAND_GET_DATA"] = "Get command's data";
  Blockly.Msg["WORKSPACE_SLASH_COMMAND_ACTIONS"] = "Do something when this command is used";
  Blockly.Msg["WORKSPACE_SLASH_COMMAND_FORMS"] = "Create a form";

  Blockly.Msg["WORKSPACE_MESSAGES_SEND"] = "Send a message";
  Blockly.Msg["WORKSPACE_MESSAGES_DELETE"] = "Delete a message";
  Blockly.Msg["WORKSPACE_MESSAGES_CREATE_THREAD"] = "Create a Thread";
  Blockly.Msg["WORKSPACE_MESSAGES_PINE"] = "Pin or unpin";
  Blockly.Msg["WORKSPACE_MESSAGES_GET_DATA"] = "Get data";
  Blockly.Msg["WORKSPACE_MESSAGES_MENTIONS"] = "@mentions";

  Blockly.Msg["WORKSPACE_CHANNELS_CREATE"] = "Create or delete a text or voice channel";
  Blockly.Msg["WORKSPACE_CHANNELS_DELETE"] = "Delete a channel";
  Blockly.Msg["WORKSPACE_CHANNELS_EDIT"] = "Update a channel";
  Blockly.Msg["WORKSPACE_CHANNELS_GET_DATA"] = "Get channel's data";
  Blockly.Msg["WORKSPACE_CHANNELS_GET_CHANNEL"] = "Get a channel";
  Blockly.Msg["WORKSPACE_CHANNELS_GET_CATEGORY"] = "Get a category";

  Blockly.Msg["WORKSPACE_USERS_SEND_MESSAGE"] = "Send private message";
  Blockly.Msg["WORKSPACE_USERS_MODERATE"] = "Manage users";
  Blockly.Msg["WORKSPACE_USERS_CHECK_PERMISSIONS"] = "Check permissions";
  Blockly.Msg["WORKSPACE_USERS_GET_DATA"] = "Get user's data";

  Blockly.Msg["WORKSPACE_GUILD_INVITE"] = "Manage Invites";
  Blockly.Msg["WORKSPACE_GUILD_GET_DATA"] = "Get data";

  Blockly.Msg["WORKSPACE_RANKS_CREATE"] = "Create a rank";
  Blockly.Msg["WORKSPACE_RANKS_DELETE"] = "Delete a rank";
  Blockly.Msg["WORKSPACE_RANKS_EDIT"] = "Update a rank";
  Blockly.Msg["WORKSPACE_RANKS_GET_DATA"] = "Get rank's data";

  Blockly.Msg["WORKSPACE_EMBEDS_CREATE_SEND"] = "Create and send an Embed message";
  Blockly.Msg["WORKSPACE_EMBEDS_EDIT"] = "Embed customization";

  Blockly.Msg["WORKSPACE_LISTS_USE"] = "Work with lists";

  Blockly.Msg["WORKSPACE_DATA_STORAGE_CREATE"] = "Create a new data storage";
  Blockly.Msg["WORKSPACE_DATA_STORAGE_SAVE"] = "Save a value to storage";
  Blockly.Msg["WORKSPACE_DATA_STORAGE_GET"] = "Get a value from storage";
  Blockly.Msg["WORKSPACE_DATA_STORAGE_DELETE"] = "Delete a value from storage";

  Blockly.Msg["WORKSPACE_EMOJIS_GET_DATA"] = "Get emoji's data";
  Blockly.Msg["WORKSPACE_EMOJIS_USE"] = "Use Emojis";

  Blockly.Msg["WORKSPACE_MISCELLANEOUS_MANAGE_ACTION_FLOW"] = "Manage action flow execution";

  //Event blocks
  Blockly.Msg["EVENT_MESSAGE_SENT"] = "A message was sent %1 %2";
  Blockly.Msg["EVENT_MESSAGE_SENT_TOOLTIP"] =
    'A message was sent, use the "Sent Message" variable to get message\'s data';
  Blockly.Msg["EVENT_MESSAGE_DELETED"] = "A message was deleted %1 %2";
  Blockly.Msg["EVENT_MESSAGE_DELETED_TOOLTIP"] =
    'A message was deleted, use the "message" variable to get the deleted message';
  Blockly.Msg["EVENT_MESSAGE_UPDATED"] = "A message was updated %1 %2";
  Blockly.Msg["EVENT_MESSAGE_UPDATED_TOOLTIP"] =
    'A message was updated, use "Old message" and "New message" vars to get messages data';
  Blockly.Msg["EVENT_USER_JOIN"] = "An user joined %1 %2";
  Blockly.Msg["EVENT_USER_JOIN_TOOLTIP"] = "An user joined the server";
  Blockly.Msg["EVENT_USER_LEFT"] = "An user left %1 %2";
  Blockly.Msg["EVENT_USER_LEFT_TOOLTIP"] = "An user left the server";
  Blockly.Msg["EVENT_USER_UPDATED"] = "An user is updated %1 %2";
  Blockly.Msg["EVENT_USER_UPDATED_TOOLTIP"] = "An user was updated ( Server's username edited, ranks updated, ... ).";
  Blockly.Msg["EVENT_ROLE_CREATED"] = "A rank is created %1 %2";
  Blockly.Msg["EVENT_ROLE_CREATED_TOOLTIP"] = "A new rank was created";
  Blockly.Msg["EVENT_ROLE_DELETED"] = "A rank is deleted %1 %2";
  Blockly.Msg["EVENT_ROLE_DELETED_TOOLTIP"] = "A rank was deleted";
  Blockly.Msg["EVENT_ROLE_EDITED"] = "A rank is updated %1 %2";
  Blockly.Msg["EVENT_ROLE_EDITED_TOOLTIP"] = "A rank was updated ( Name, colour, permissions, ect... )";
  Blockly.Msg["EVENT_USER_BANNED"] = "An user was banned %1 %2";
  Blockly.Msg["EVENT_USER_BANNED_TOOLTIP"] = "An user was banned from the server";
  Blockly.Msg["EVENT_USER_UNBANNED"] = "An user was unbanned %1 %2";
  Blockly.Msg["EVENT_USER_UNBANNED_TOOLTIP"] = "An user was unbanned from the server";
  Blockly.Msg["EVENT_PINNED_UPDATED"] = "A message was pinned or unpinned %1 %2";
  Blockly.Msg["EVENT_PINNED_UPDATED_TOOLTIP"] = "A message was pinned or unpinned";
  Blockly.Msg["EVENT_USER_VOICE_UPDATE"] = "An user moved from a voice channel %1 %2";
  Blockly.Msg["EVENT_USER_VOICE_UPDATE_TOOLTIP"] = "An user joined, left or switched voice channel";
  Blockly.Msg["EVENT_USER_START_WRITTING"] = "An user started writting %1 %2";
  Blockly.Msg["EVENT_USER_START_WRITTING_TOOLTIP"] = "An user started writting in a text channel";
  Blockly.Msg["EVENT_TEXT_CHANNEL_CREATED"] = "A text channel was created %1 %2";
  Blockly.Msg["EVENT_TEXT_CHANNEL_CREATED_TOOLTIP"] = "A text channel was created";
  Blockly.Msg["EVENT_TEXT_CHANNEL_DELETED"] = "A text channel was deleted %1 %2";
  Blockly.Msg["EVENT_TEXT_CHANNEL_DELETED_TOOLTIP"] = "A text channel was deleted";
  Blockly.Msg["EVENT_TEXT_CHANNEL_EDITED"] = "A text channel was updated %1 %2";
  Blockly.Msg["EVENT_TEXT_CHANNEL_EDITED_TOOLTIP"] = "A text channel was updated ( Name updated, topic edited, ... )";
  Blockly.Msg["EVENT_VOICE_CHANNEL_CREATED"] = "A voice channel was created %1 %2";
  Blockly.Msg["EVENT_VOICE_CHANNEL_CREATED_TOOLTIP"] = "A voice channel was created";
  Blockly.Msg["EVENT_VOICE_CHANNEL_DELETED"] = "A voice channel was deleted %1 %2";
  Blockly.Msg["EVENT_VOICE_CHANNEL_DELETED_TOOLTIP"] = "A voice channel was deleted";
  Blockly.Msg["EVENT_VOICE_CHANNEL_EDITED"] = "A voice channel was updated %1 %2";
  Blockly.Msg["EVENT_VOICE_CHANNEL_EDITED_TOOLTIP"] = "A voice channel was updated ( Name updated, topic edited, ... )";
  Blockly.Msg["EVENT_REACTION_ADDED"] = "A reaction was added %1 %2";
  Blockly.Msg["EVENT_REACTION_ADDED_TOOLTIP"] = "A reaction was added on a message";
  Blockly.Msg["EVENT_REACTION_REMOVED"] = "A reaction was removed %1 %2";
  Blockly.Msg["EVENT_REACTION_REMOVED_TOOLIP"] = "A reaction was removed from a message";

  //Event var blocks
  Blockly.Msg["EVENT_VAR_MESSAGE"] = "Message";
  Blockly.Msg["EVENT_VAR_MESSAGE_TOOLTIP"] = "Represents an Event's message";
  Blockly.Msg["EVENT_VAR_OLD_MESSAGE"] = "Old message";
  Blockly.Msg["EVENT_VAR_OLD_MESSAGE_TOOLTIP"] =
    "Represents the old state of an edited message. Used only in updated message event";
  Blockly.Msg["EVENT_VAR_NEW_MESSAGE"] = "New message";
  Blockly.Msg["EVENT_VAR_NEW_MESSAGE_TOOLTIP"] =
    "Represents the new state of an edited message. Used only in updated message event";
  Blockly.Msg["EVENT_VAR_USER"] = "User";
  Blockly.Msg["EVENT_VAR_USER_TOOLTIP"] = "Represents the user who triggered an event";
  Blockly.Msg["EVENT_VAR_OLD_USER"] = "Old user";
  Blockly.Msg["EVENT_VAR_OLD_USER_TOOLTIP"] = "Represents the old user state";
  Blockly.Msg["EVENT_VAR_NEW_USER"] = "New user";
  Blockly.Msg["EVENT_VAR_NEW_USER_TOOLTIP"] = "Represents the new user state";
  Blockly.Msg["EVENT_VAR_RANK"] = "Rank";
  Blockly.Msg["EVENT_VAR_RANK_TOOLTIP"] = "Represents an event's rank";
  Blockly.Msg["EVENT_VAR_OLD_RANK"] = "Old rank";
  Blockly.Msg["EVENT_VAR_OLD_RANK_TOOLTIP"] = "Represents the old state of an event's rank";
  Blockly.Msg["EVENT_VAR_NEW_RANK"] = "New rank";
  Blockly.Msg["EVENT_VAR_NEW_RANK_TOOLTIP"] = "Represents the new state of an event's rank";
  Blockly.Msg["EVENT_VAR_OLD_VOICE_CHANNEL"] = "Old voice channel";
  Blockly.Msg["EVENT_VAR_OLD_VOICE_CHANNEL_TOOLTIP"] =
    "Represents the voice channel before an event. If the channel was updated, this is his old state, if a member's voice state was updated, this is the voice channel where the user was. If the user just joined voice channels, this will be undefined/null.";
  Blockly.Msg["EVENT_VAR_NEW_VOICE_CHANNEL"] = "New voice channel";
  Blockly.Msg["EVENT_VAR_NEW_VOICE_CHANNEL_TOOLTIP"] =
    "Represents the voice channel after an event. If the channel was updated, this is his new state, if a member's voice state was updated, this is the voice channel where the user is after the event. If the user just left voice channels, this will be undefined/null.";
  Blockly.Msg["EVENT_VAR_TEXT_CHANNEL"] = "Text channel";
  Blockly.Msg["EVENT_VAR_TEXT_CHANNEL_TOOLTIP"] = "Represents the text channel where an event was triggered";
  Blockly.Msg["EVENT_VAR_OLD_TEXT_CHANNEL"] = "Old text channel";
  Blockly.Msg["EVENT_VAR_OLD_TEXT_CHANNEL_TOOLTIP"] = "Represents the old state of a text channel";
  Blockly.Msg["EVENT_VAR_NEW_TEXT_CHANNEL"] = "New text channel";
  Blockly.Msg["EVENT_VAR_NEW_TEXT_CHANNEL_TOOLTIP"] = "Represents the new state of a text channel";
  Blockly.Msg["EVENT_VAR_VOICE_CHANNEL"] = "Voice channel";
  Blockly.Msg["EVENT_VAR_VOICE_CHANNEL_TOOLTIP"] = "Represents the voice channel where an event was triggered";
  Blockly.Msg["EVENT_VAR_REACTION"] = "Emoji";
  Blockly.Msg["EVENT_VAR_REACTION_TOOLTIP"] = "Represents an event's Emoji";

  //Channel Permissions
  Blockly.Msg["PERMISSION_SEE_CHANNEL"] = "View Channels";
  Blockly.Msg["PERMISSION_MANAGE_CHANNEL"] = "Manage Channels";
  Blockly.Msg["PERMISSION_MANAGE_CHANNEL_PERMISSIONS"] = "Manage Channels's Roles";
  Blockly.Msg["PERMISSION_MANAGE_RANKS"] = "Manage Roles";
  Blockly.Msg["PERMISSION_MANAGE_EMOJIS"] = "Manage Emojis and Stickers";
  Blockly.Msg["PERMISSION_SEE_SERVER_LOGS"] = "View Audit Log";
  Blockly.Msg["PERMISSION_MANAGE_SERVER"] = "Manage Server";
  Blockly.Msg["PERMISSION_MANAGE_WEBHOOKS"] = "Manage Webhooks";
  Blockly.Msg["PERMISSION_CREATE_INVITE"] = "Create Invite";
  Blockly.Msg["PERMISSION_EDIT_USERNAME"] = "Change Nickname";
  Blockly.Msg["PERMISSION_EDIT_OTHERS_USERNAME"] = "Manage Nicknames";
  Blockly.Msg["PERMISSION_KICK"] = "Kick Members";
  Blockly.Msg["PERMISSION_BAN"] = "Ban Members";
  Blockly.Msg["PERMISSION_TIMEOUT"] = "Timeout Members";
  Blockly.Msg["PERMISSION_SEND_MESSAGES"] = "Send Messages";
  Blockly.Msg["PERMISSION_SEND_MESSAGE_IN_THREADS"] = "Send Messages In Threads";
  Blockly.Msg["PERMISSION_CREATE_PUBLIC_THREADS"] = "Create Public Threads";
  Blockly.Msg["PERMISSION_CREATE_PRIVATE_THREADS"] = "Create Private Threads";
  Blockly.Msg["PERMISSION_EMBED_LINKS"] = "Embed Links";
  Blockly.Msg["PERMISSION_ADD_FILES"] = "Attach Files";
  Blockly.Msg["PERMISSION_ADD_REACTIONS"] = "Add Reactions";
  Blockly.Msg["PERMISSION_USE_EXTERNAL_EMOJIS"] = "Use External Emojis";
  Blockly.Msg["PERMISSION_USE_EXTERNAL_STICKERS"] = "Use External Stickers";
  Blockly.Msg["PERMISSION_PING_EVERYONE"] = "Mention @everyone";
  Blockly.Msg["PERMISSION_MANAGE_MESSAGES"] = "Manage Messages";
  Blockly.Msg["PERMISSION_MANAGE_THREADS"] = "Manage Threads";
  Blockly.Msg["PERMISSION_SEE_OLD_MESSAGES"] = "Read Message History";
  Blockly.Msg["PERMISSION_SEND_VOICE_MESSAGE"] = "Send Text-to-Speech Messages";
  Blockly.Msg["PERMISSION_USE_APP_COMMANDS"] = "Use Application Commands";
  Blockly.Msg["PERMISSION_CONNECT_TO_VOICE_CHANNEL"] = "Connect to voice channel";
  Blockly.Msg["PERMISSION_SPEAK"] = "Speak";
  Blockly.Msg["PERMISSION_USE_VIDEO"] = "Video";
  Blockly.Msg["PERMISSION_START_ACTIVITY"] = "Use Activities";
  Blockly.Msg["PERMISSION_USE_VOICE_DETECTION"] = "Use Voice Activity";
  Blockly.Msg["PERMISSION_PRIORITY_SPEAKER"] = "Priority Speaker";
  Blockly.Msg["PERMISSION_MUTE_MEMBER"] = "Mute Members";
  Blockly.Msg["PERMISSION_DEAF_MEMBER"] = "Deafen Members";
  Blockly.Msg["PERMISSION_MOOVE_MEMBER"] = "Move Members";
  Blockly.Msg["PERMISSION_MANAGE_VOICE_CHANNEL_EVENTS"] = "Manage Events";
  Blockly.Msg["PERMISSION_ADMINISTRATOR"] = "Administrator";
  Blockly.Msg["PERMISSION_GRANT_PERMISSION"] = "Allow";
  Blockly.Msg["PERMISSION_DENY_PERMISSION"] = "Deny";
  Blockly.Msg["PERMISSION_UNDEFINED_PERMISSION"] = "Undefined";
  Blockly.Msg["PERMISSION_USER"] = Blockly.Msg["EVENT_VAR_USER"];
  Blockly.Msg["PERMISSION_RANK"] = Blockly.Msg["EVENT_VAR_RANK"];

  //Durations
  Blockly.Msg["DURATION_1MIN"] = "1 minute";
  Blockly.Msg["DURATION_5MIN"] = "5 minutes";
  Blockly.Msg["DURATION_10MIN"] = "10 minutes";
  Blockly.Msg["DURATION_30MIN"] = "30 minutes";
  Blockly.Msg["DURATION_1H"] = "1 hour";
  Blockly.Msg["DURATION_6H"] = "6 hours";
  Blockly.Msg["DURATION_12H"] = "12 hours";
  Blockly.Msg["DURATION_1D"] = "1 day";
  Blockly.Msg["DURATION_1W"] = "1 week";
  Blockly.Msg["DURATION_NEVER"] = "Never";

  //Channels blocks
  Blockly.Msg["BLOCK_CHANNEL_CREATE_TEXT_CHANNEL"] = "Create a text channel %1 With the topic %2 In the category %3";
  Blockly.Msg["BLOCK_CHANNEL_CREATE_TEXT_CHANNEL_TOOLTIP"] =
    "Create a new text channel. If category isn't defined, it will be created without a category";
  Blockly.Msg["BLOCK_CHANNEL_CREATE_VOICE_CHANNEL"] = "Create a voice channel named %1 In the category %2";
  Blockly.Msg["BLOCK_CHANNEL_CREATE_VOICE_CHANNEL_TOOLTIP"] =
    "Create a new voice channel. If category isn't defined, it will be created without a category";
  Blockly.Msg["BLOCK_CHANNEL_VAR_VOICE_CHANNEL"] = "Created voice channel";
  Blockly.Msg["BLOCK_CHANNEL_VAR_VOICE_CHANNEL_TOOLTIP"] = "Represents the created voice channel";
  Blockly.Msg["BLOCK_CHANNEL_VAR_TEXT_CHANNEL"] = "Created text channel";
  Blockly.Msg["BLOCK_CHANNEL_VAR_TEXT_CHANNEL_TOOLTIP"] = "Represents the created text channel";
  Blockly.Msg["BLOCK_CHANNEL_DELETE"] = "Delete the channel %1";
  Blockly.Msg["BLOCK_CHANNEL_DELETE_TOOLTIP"] = "Delete a text, voice or thread channel";
  Blockly.Msg["BLOCK_CHANNEL_RENAMME"] = "Rename channel %1 with new name %2";
  Blockly.Msg["BLOCK_CHANNEL_RENAMME_TOOLTIP"] = "Rename a text, voice or thread channel";
  Blockly.Msg["BLOCK_CHANNEL_GET_CATEGORY_OF_CHANNEL"] = "Channel's Category %1";
  Blockly.Msg["BLOCK_CHANNEL_GET_CATEGORY_OF_CHANNEL_TOOLTIP"] = "Get the category of a text or voice channel";
  Blockly.Msg["BLOCK_CHANNEL_GET_CHANNEL_NAME"] = "Channel's name %1";
  Blockly.Msg["BLOCK_CHANNEL_GET_CHANNEL_NAME_TOOLTIP"] = "Get the name of a channel";
  Blockly.Msg["BLOCK_CHANNEL_GET_CHANNEL_TOPIC"] = "Channel's topic %1";
  Blockly.Msg["BLOCK_CHANNEL_GET_CHANNEL_TOPIC_TOOLTIP"] = "Get the topic of a channel";
  Blockly.Msg["BLOCK_CHANNEL_GET_CHANNEL_ID"] = "Channel's ID %1";
  Blockly.Msg["BLOCK_CHANNEL_GET_CHANNEL_ID_TOOLTIP"] = "Get the ID of a channel";
  Blockly.Msg["BLOCK_CHANNEL_GET_CHANNEL_WITH_ID"] = "Get a channel with its ID %1";
  Blockly.Msg["BLOCK_CHANNEL_GET_CHANNEL_WITH_ID_TOOLTIP"] = "Get a text, voice or Thread channel with an ID";
  Blockly.Msg["BLOCK_CHANNEL_GET_PERMISSION"] =
    "Check if user or role %1 has the permission %2 %3 in text or voice channel %4";
  Blockly.Msg["BLOCK_CHANNEL_GET_PERMISSION_TOOLTIP"] =
    "Check if user or role has a permission in given text or voice channel. Return True or False";
  Blockly.Msg["BLOCK_CHANNEL_SET_PERMISSION"] =
    "Define permission %2 %3 %4 for user or rank %1 in text or voice channel %5";
  Blockly.Msg["BLOCK_CHANNEL_SET_PERMISSION_TOOLTIP"] =
    "Define a permission for an user or rank in a voice or text channel";
  Blockly.Msg["BLOCK_CHANNEL_LIST"] = "List of all channels in the server";
  Blockly.Msg["BLOCK_CHANNEL_LIST_TOOLTIP"] = "Get a list of all channels in the server";
  Blockly.Msg["BLOCK_CHANNEL_GET_USER_COUNT"] = "Count users in voice channel %1";
  Blockly.Msg["BLOCK_CHANNEL_GET_USER_COUNT_TOOLBOX"] =
    "Return the number of users connected to the given voice channel";
  Blockly.Msg["BLOCK_CHANNEL_GET_CATEGORY_WITH_ID"] = "Get a category with its ID %1";
  Blockly.Msg["BLOCK_CHANNEL_GET_CATEGORY_WITH_ID_TOOLTIP"] = "Get a category with an ID";
  Blockly.Msg["BLOCK_CHANNEL_GET_THREAD_PARENT"] = "Get the parent channel of thread %1";
  Blockly.Msg["BLOCK_CHANNEL_GET_THREAD_PARENT_TOOLTIP"] = "Allows to retrieve the parent channel of a thread";
  Blockly.Msg["BLOCK_CHANNEL_SET_THREAD_LOCKED"] = "%1 the thread %2";
  Blockly.Msg["BLOCK_CHANNEL_SET_THREAD_LOCKED_TOOLTIP"] = "Allows to lock or unlock a thread";
  Blockly.Msg["BLOCK_CHANNEL_IS_THREAD_LOCKED"] = "Is thread %1 locked?";
  Blockly.Msg["BLOCK_CHANNEL_IS_THREAD_LOCKED_TOOLTIP"] =
    "Allows to check if a thread is locked. Returns a Boolean True or False.";
  Blockly.Msg["BLOCK_CHANNEL_SET_THREAD_ARCHIVED"] = "%1 the thread %2";
  Blockly.Msg["BLOCK_CHANNEL_SET_THREAD_ARCHIVED_TOOLTIP"] = "Allows to archive or unarchive a thread";
  Blockly.Msg["BLOCK_CHANNEL_IS_THREAD_ARCHIVED"] = "Is thread %1 archived?";
  Blockly.Msg["BLOCK_CHANNEL_IS_THREAD_ARCHIVED_TOOLTIP"] =
    "Checks if a thread is archived. Returns a Boolean value of True or False.";

  //Message blocks
  Blockly.Msg["BLOCK_MESSAGE_REPLY"] = "Reply to message %1 with content %2";
  Blockly.Msg["BLOCK_MESSAGE_REPLY_TOOLTIP"] = "Reply to a message";
  Blockly.Msg["BLOCK_MESSAGE_SEND"] = "Send a message in text channel %1 with content %2";
  Blockly.Msg["BLOCK_MESSAGE_SEND_TOOLTIP"] = "Send a message in given text channel or Thread";
  Blockly.Msg["BLOCK_MESSAGE_DELETE"] = "Delete message %1";
  Blockly.Msg["BLOCK_MESSAGE_DELETE_TOOLTIP"] = "Delete a message";
  Blockly.Msg["BLOCK_MESSAGE_DELETE_BULK"] = "Delete %1 messages in text channel %2";
  Blockly.Msg["BLOCK_MESSAGE_DELETE_BULK_TOOLTIP"] = "Bulk delete in a text channel or Thread";
  Blockly.Msg["BLOCK_MESSAGE_START_THREAD"] = "Create a Thread named %1 starting with the message %2";
  Blockly.Msg["BLOCK_MESSAGE_START_THREAD_TOOLTIP"] =
    "Create a Thread starting by the given message. The message must be in a text channel and not a Thread !";
  Blockly.Msg["BLOCK_MESSAGE_PINE"] = "Pin the message %1";
  Blockly.Msg["BLOCK_MESSAGE_PINE_TOOLTIP"] = "Pin a message";
  Blockly.Msg["BLOCK_MESSAGE_UNPINE"] = "Unpin the message %1";
  Blockly.Msg["BLOCK_MESSAGE_UNPINE_TOOLTIP"] = "Unpin a message";
  Blockly.Msg["BLOCK_MESSAGE_GET_TEXT"] = "Message content %1";
  Blockly.Msg["BLOCK_MESSAGE_GET_TEXT_TOOLTIP"] = "Get the text of a message";
  Blockly.Msg["BLOCK_MESSAGE_GET_ID"] = "Message ID %1";
  Blockly.Msg["BLOCK_MESSAGE_GET_ID_TOOLTIP"] = "Get a message ID";
  Blockly.Msg["BLOCK_MESSAGE_GET_AUTOR"] = "Message sender %1";
  Blockly.Msg["BLOCK_MESSAGE_GET_AUTOR_TOOLTIP"] = "Get the user who send the message";
  Blockly.Msg["BLOCK_MESSAGE_GET_CHANNEL"] = "Message's channel %1";
  Blockly.Msg["BLOCK_MESSAGE_GET_CHANNEL_TOOLTIP"] = "Get the text channel ou thread where the message was sent";
  Blockly.Msg["BLOCK_MESSAGE_DOES_MENTION_EVERYONE"] = "Did the message mention @everyone ? %1";
  Blockly.Msg["BLOCK_MESSAGE_DOES_MENTION_EVERYONE_TOOLTIP"] = "Return True if @everyone was mentionned, False if not";
  Blockly.Msg["BLOCK_MESSAGE_DOES_MENTION_USER"] = "Did an user was mentionned ? %1";
  Blockly.Msg["BLOCK_MESSAGE_DOES_MENTION_USER_TOOLTIP"] = "Return True if @user was used, False if not";
  Blockly.Msg["BLOCK_MESSAGE_DOES_MENTION_CHANNEL"] = "Did a channel was mentionned ? %1";
  Blockly.Msg["BLOCK_MESSAGE_DOES_MENTION_CHANNEL_TOOLTIP"] = "Return True if #channel was used, False if not";
  Blockly.Msg["BLOCK_MESSAGE_GET_USER_MENTION"] = "Get the @user mention at position %1 from message %2";
  Blockly.Msg["BLOCK_MESSAGE_GET_USER_MENTION_TOOLTIP"] =
    "Get the mentionned user at a given position ( 1 = First @user, 2 = Second @user , ect...)";
  Blockly.Msg["BLOCK_MESSAGE_GET_CHANNEL_MENTION"] = "Get the #channel mention at position %1 from message %2";
  Blockly.Msg["BLOCK_MESSAGE_GET_CHANNEL_MENTION_TOOLTIP"] =
    "Get the mentionned channel at a given position ( 1 = First #channel, 2 = Second #channel , ect...)";
  Blockly.Msg["BLOCK_MESSAGE_NUMBER_OF_MENTIONS_USER"] = "Number of @user mentions in message %1";
  Blockly.Msg["BLOCK_MESSAGE_NUMBER_OF_MENTIONS_USER_TOOLTIP"] = "Get the number of @user mentions in a message";
  Blockly.Msg["BLOCK_MESSAGE_NUMBER_OF_MENTIONS_CHANNEL"] = "Number of #channel mentions in message %1";
  Blockly.Msg["BLOCK_MESSAGE_NUMBER_OF_MENTIONS_CHANNEL_TOOLTIP"] = "Get the number of #channel mentions in a message";
  Blockly.Msg["BLOCK_MESSAGE_VAR_SENT_MESSAGE"] = "Sent message";
  Blockly.Msg["BLOCK_MESSAGE_VAR_SENT_MESSAGE_TOOLTIP"] = "Represents the sent message";
  Blockly.Msg["BLOCK_MESSAGE_VAR_CREATED_THREAD"] = "Created Thread";
  Blockly.Msg["BLOCK_MESSAGE_VAR_CREATED_THREAD_TOOLTIP"] = "Represents the created Thread channel";

  //User blocks
  Blockly.Msg["BLOCK_USER_BAN"] = "Ban member %1 with reason %2";
  Blockly.Msg["BLOCK_USER_BAN_TOOLTIP"] = "Ban an user with a reason";
  Blockly.Msg["BLOCK_USER_UNBAN"] = "Unban member %1 with a reason %2";
  Blockly.Msg["BLOCK_USER_UNBAN_TOOLTIP"] = "Unban an user with a reason. The user ID can be used here";
  Blockly.Msg["BLOCK_USER_SEND_PRIVATE_MESSAGE"] = "Send %1 to user %2";
  Blockly.Msg["BLOCK_USER_SEND_PRIVATE_MESSAGE_TOOLTIP"] = "Send a private message to an user";
  Blockly.Msg["BLOCK_USER_KICK"] = "Kick user %1 with reason %2";
  Blockly.Msg["BLOCK_USER_KICK_TOOLTIP"] = "Kick an user from the server with a reason";
  Blockly.Msg["BLOCK_USER_GET_WITH_ID"] = "Get user with ID %1";
  Blockly.Msg["BLOCK_USER_GET_WITH_ID_TOOLTIP"] =
    "Get an user with its ID. The user must be in the server or an error will occur";
  Blockly.Msg["BLOCK_USER_GET_SERVER_USERNAME"] = "Get member's nickname %1";
  Blockly.Msg["BLOCK_USER_GET_SERVER_USERNAME_TOOLTIP"] = "Get the nickname of a member";
  Blockly.Msg["BLOCK_USER_GET_USERNAME"] = "Get user's username %1";
  Blockly.Msg["BLOCK_USER_GET_USERNAME_TOOLTIP"] = "Get the username of an user";
  Blockly.Msg["BLOCK_USER_GET_ID"] = "Get user's ID %1";
  Blockly.Msg["BLOCK_USER_GET_ID_TOOLTIP"] = "Get the ID of an user";
  Blockly.Msg["BLOCK_USER_GET_PICTURE"] = "Get user's profile picture %1";
  Blockly.Msg["BLOCK_USER_GET_PICTURE_TOOLTIP"] = "Get a link to the profile picture of an user";
  Blockly.Msg["BLOCK_USER_IS_BOT"] = "Is the user a bot ? %1";
  Blockly.Msg["BLOCK_USER_IS_BOT_TOOLTIP"] = "Return True if user is a bot, false if not";
  Blockly.Msg["BLOCK_USER_MUTE"] = "Mute user %1";
  Blockly.Msg["BLOCK_USER_MUTE_TOOLTIP"] =
    "Mute an user in voice channels. The user should be connected to a voice channel";
  Blockly.Msg["BLOCK_USER_UNMUTE"] = "Unmute user %1";
  Blockly.Msg["BLOCK_USER_UNMUTE_TOOLTIP"] =
    "Unmute an user in voice channels. The user should be connected to a voice channel";
  Blockly.Msg["BLOCK_USER_DEAF"] = "Deafen user %1";
  Blockly.Msg["BLOCK_USER_DEAF_TOOLTIP"] =
    "Deafen an user in voice channels. The user should be connected to a voice channel";
  Blockly.Msg["BLOCK_USER_UNDEAF"] = "Undeafen user %1";
  Blockly.Msg["BLOCK_USER_UNDEAF_TOOLTIP"] =
    "Undeafen an user in voice channels. The user should be connected to a voice channel";
  Blockly.Msg["BLOCK_USER_IS_TIMEOUT"] = "Is member timed out ? %1";
  Blockly.Msg["BLOCK_USER_IS_TIMEOUT_TOOLTIP"] =
    "Check if member is actually timed out ( Can't send message, join voice channels, ... ). Return True if timed out, False if not";
  Blockly.Msg["BLOCK_USER_TIMEOUT"] = "Time out user %1 for %2 with reason %3";
  Blockly.Msg["BLOCK_USER_TIMEOUT_TOOLTIP"] = "Time out an user with a reason and a duration";
  Blockly.Msg["BLOCK_USER_CUSTOM_TIMEOUT"] = "Time out user %1 for %2 seconds with reason %3";
  Blockly.Msg["BLOCK_USER_CUSTOM_TIMEOUT_TOOLTIP"] = "Time out an user with custom duration and a reason";
  Blockly.Msg["BLOCK_USER_REMOVE_TIMEOUT"] = "Cancel time out for user %1";
  Blockly.Msg["BLOCK_USER_REMOVE_TIMEOUT_TOOLTIP"] = "Cancel a time out for an user";
  Blockly.Msg["BLOCK_USER_HAS_PERMISSION"] = "Does user %1 has permission %2 ?";
  Blockly.Msg["BLOCK_USER_HAS_PERMISSION_TOOLTIP"] =
    "Check if user has given permission. Return True if has permission, False if not";
  Blockly.Msg["BLOCK_USER_HAS_RANK"] = "Does user %1 has the role %2 ?";
  Blockly.Msg["BLOCK_USER_HAS_RANK_TOOLTIP"] = "Check if user has given role. Return True if has role, False if not.";
  Blockly.Msg["BLOCK_USER_IS_IN_VOICE_CHANNEL"] = "Is user %1 connected to a voice channel ?";
  Blockly.Msg["BLOCK_USER_IS_IN_VOICE_CHANNEL_TOOLTIP"] =
    "Return true if given user is connected to a voice channel, false if not";
  Blockly.Msg["BLOCK_USER_GET_VOICE_CHANNEL"] = "Get voice channel where is connected user %1";
  Blockly.Msg["BLOCK_USER_GET_VOICE_CHANNEL_TOOLTIP"] =
    "Return the voice channel where the user is connected. Return Nul if user isn't connected to a voice channel";
  Blockly.Msg["BLOCK_USER_MOVE_TO_VOICE_CHANNEL"] = "Move user %1 to voice channel %2";
  Blockly.Msg["BLOCK_USER_MOVE_TO_VOICE_CHANNEL_TOOLTIP"] =
    'Move an user to another voice channel. The user must be connected to a voice channel, this can be checked with "If" block and "Is user connected to a voice channel ?" block';
  Blockly.Msg["BLOCK_USER_GIVE_RANK"] = "Give to user %1 the role %2";
  Blockly.Msg["BLOCK_USER_GIVE_RANK_TOOLTIP"] = "Give a role to an user";
  Blockly.Msg["BLOCK_USER_REMOVE_RANK"] = "Remove from user %1 the role %2";
  Blockly.Msg["BLOCK_USER_REMOVE_RANK_TOOLTIP"] = "Remove a role from an user";
  Blockly.Msg["BLOCK_USER_RENAME"] = "Rename user %1 with new name %2";
  Blockly.Msg["BLOCK_USER_RENAME_TOOLTIP"] =
    "Give a new nickname to a user on your Discord server. The user must be moderatable by the bot";

  //Guild blocks
  Blockly.Msg["BLOCK_GUILD_GET_ID"] = "Get Server ID";
  Blockly.Msg["BLOCK_GUILD_GET_ID_TOOLTIP"] = "Get the server ID";
  Blockly.Msg["BLOCK_GUILD_GET_NAME"] = "Get server name";
  Blockly.Msg["BLOCK_GUILD_GET_NAME_TOOLTIP"] = "Get the name of the servers";
  Blockly.Msg["BLOCK_GUILD_GET_BOOST_COUNT"] = "Number of boosts";
  Blockly.Msg["BLOCK_GUILD_GET_BOOST_COUNT_TOOLTIP"] = "Get the boost count on the server";
  Blockly.Msg["BLOCK_GUILD_GET_MEMBERS_COUNT"] = "Number of users";
  Blockly.Msg["BLOCK_GUILD_GET_MEMBERS_COUNT_TOOLTIP"] = "Get the members count on the server";
  Blockly.Msg["BLOCK_GUILD_CREATE_INVITE"] = "Create an invite for the channel %1 that expire after %2 with %3 uses";
  Blockly.Msg["BLOCK_GUILD_CREATE_INVITE_TOOLTIP"] = "Create an invite for the server. Return the created invite code";

  //Ranks blocks
  Blockly.Msg["BLOCK_RANK_CREATE"] =
    "Create a rank named %1 with color %2 %3 Can members be @mentionned : %4 %5 Does members shown in members list : %6 %7 Add this role at given position in roles hierarchy : %8";
  Blockly.Msg["BLOCK_RANK_CREATE_TOOLTIP"] =
    "Create a new role. Give a name, a color ( White = not colored ) and choose if members can be @mentionned or shown in members list. Finally, give the position where this role will be added in server's hierarchy.";
  Blockly.Msg["BLOCK_RANK_VAR_CREATED_RANK"] = "Created role";
  Blockly.Msg["BLOCK_RANK_VAR_CREATED_RANK_TOOLTIP"] = "Return the created role";
  Blockly.Msg["BLOCK_RANK_DELETE"] = "Delete the role %1";
  Blockly.Msg["BLOCK_RANK_DELETE_TOOLTIP"] = "Delete the given role";
  Blockly.Msg["BLOCK_RANK_EDIT_NAME"] = "Renamme role %1 with %2";
  Blockly.Msg["BLOCK_RANK_EDIT_NAME_TOOLTIP"] = "Renamme a role with the given new name";
  Blockly.Msg["BLOCK_RANK_EDIT_COLOR"] = "Change the color of role %1 with new color %2";
  Blockly.Msg["BLOCK_RANK_EDIT_COLOR_TOOLTIP"] =
    "Change the color of a role. If white is given, the color will be removed";
  Blockly.Msg["BLOCK_RANK_EDIT_PINGEABLE"] = "Define if the role %1 is @mentionnable : %2";
  Blockly.Msg["BLOCK_RANK_EDIT_PINGEABLE_TOOLTIP"] = "Set if everyone can @mention the given role or not";
  Blockly.Msg["BLOCK_RANK_EDIT_MEMBERS_SHOWN"] = "Define if role %1 members are shown in members list : %2";
  Blockly.Msg["BLOCK_RANK_EDIT_MEMBERS_SHOWN_TOOLTIP"] =
    "Set if users who have the given role are shown in the members list";
  Blockly.Msg["BLOCK_RANK_EDIT_POSITION"] = "Define role %1 position in hierarchy to %2";
  Blockly.Msg["BLOCK_RANK_EDIT_POSITION_TOOLTIP"] = "Define the position where this role will be in server's hierarchy";
  Blockly.Msg["BLOCK_RANK_GET_RANK_WITH_ID"] = "Get role with ID %1";
  Blockly.Msg["BLOCK_RANK_GET_RANK_WITH_ID_TOOLTIP"] = "Get a role with its ID";
  Blockly.Msg["BLOCK_RANK_EDIT_PERMISSIONS"] = "Set permission %1 for role %2 to %3";
  Blockly.Msg["BLOCK_RANK_EDIT_PERMISSIONS_TOOLTIP"] = "Edit role permissions";
  Blockly.Msg["BLOCK_RANK_GET_NAME"] = "Get role name %1";
  Blockly.Msg["BLOCK_RANK_GET_NAME_TOOLTIP"] = "Return the name of given role";
  Blockly.Msg["BLOCK_RANK_GET_POSITION"] = "Get role position in server hierarchy %1";
  Blockly.Msg["BLOCK_RANK_GET_POSITION_TOOLTIP"] = "Return role position in server hierarchy";
  Blockly.Msg["BLOCK_RANK_GET_COLOR"] = "Get role color %1";
  Blockly.Msg["BLOCK_RANK_GET_COLOR_TOOLTIP"] = "Return role color ( Hex format : #ffffff )";
  Blockly.Msg["BLOCK_RANK_GET_ID"] = "Get role ID %1";
  Blockly.Msg["BLOCK_RANK_GET_ID_TOOLTIP"] = "Return the role ID";
  Blockly.Msg["BLOCK_RANK_HAS_PERMISSION"] = "Does the role %1 has permission %2 ?";
  Blockly.Msg["BLOCK_RANK_HAS_PERMISSION_TOOLTIP"] =
    "Check if given role has given permission. Return True if role is allowed to use permission, False if not";
  Blockly.Msg["BLOCK_RANK_GET_EVERYONE"] = "Get @everyone role";
  Blockly.Msg["BLOCK_RANK_GET_EVERYONE_TOOLTIP"] = "Return the @everyone role";

  //Embeds blocks
  Blockly.Msg["BLOCK_EMBED_CREATE"] =
    "Create an embed message with title %1 Embed description : %2 Embed color : %3 and customization : %4 %5";
  Blockly.Msg["BLOCK_EMBED_CREATE_TOOLTIP"] =
    "Create an embed message with defined title and color. Use embeds customization blocks to modify the created embed";
  Blockly.Msg["BLOCK_EMBED_OPTION_SET_IMAGE"] = "Define Embed Image %1";
  Blockly.Msg["BLOCK_EMBED_OPTION_SET_IMAGE_TOOLTIP"] =
    "Embed option, define the image shown within the embed message. Give an URL linked to the image";
  Blockly.Msg["BLOCK_EMBED_OPTION_SET_THUMBNAIL"] = "Define Embed Thumbnail %1";
  Blockly.Msg["BLOCK_EMBED_OPTION_SET_THUMBNAIL_TOOLTIP"] =
    "Embed option, define the thumbnail shown within the embed message. Give an URL linked to the image";
  Blockly.Msg["BLOCK_EMBED_OPTION_ADD_FIELD"] = "Add field with name %1 And content : %2 Is inline ? : %3";
  Blockly.Msg["BLOCK_EMBED_OPTION_ADD_FIELD_TOOLTIP"] =
    "Embed option, Add a field in embed message. Content can't be longer than 255 characters";
  Blockly.Msg["BLOCK_EMBED_OPTION_SET_AUTHOR"] = "Set author with name %1 and URL %2 with image %3";
  Blockly.Msg["BLOCK_EMBED_OPTION_SET_AUTHOR_TOOLTIP"] =
    "Embed option, define Embed author with name, an URL and an image, give an URL linked to the image";
  Blockly.Msg["BLOCK_EMBED_OPTION_SET_FOOTER"] = "Add footer with content %1 And image %2";
  Blockly.Msg["BLOCK_EMBED_OPTION_SET_FOOTER_TOOLTIP"] =
    "Embed option, define Embed footer with content and image. Give an URL linked to the image";
  Blockly.Msg["BLOCK_EMBED_OPTION_SET_TIMESTAMP"] = "Add Timestamp to the Embed";
  Blockly.Msg["BLOCK_EMBED_OPTION_SET_TIMESTAMP_TOOLTIP"] =
    "Embed option, use this to show the timestamp within the embed";
  Blockly.Msg["BLOCK_EMBED_SEND"] = "Send embed message %1 to channel or user %2";
  Blockly.Msg["BLOCK_EMBED_SEND_TOOLTIP"] = "Send an embed message to a channel or an user";
  Blockly.Msg["BLOCK_EMBED_VAR_EMBED"] = "Embed message";
  Blockly.Msg["BLOCK_EMBED_VAR_EMBED_TOOLTIP"] = "Represents the created embed message";

  //Color blocks
  Blockly.Msg["BLOCK_COLOR_HEX"] = "Color from hexadecimal code %1";
  Blockly.Msg["BLOCK_COLOR_HEX_TOOLTIP"] = "Get a color from an hexadecimal code";

  //Emojis blocks
  Blockly.Msg["BLOCK_EMOJI_GET_NAME"] = "Get emoji's name %1";
  Blockly.Msg["BLOCK_EMOJI_GET_NAME_TOOLTIP"] =
    'Get the name of an emoji from Discord or your server. If from Discord, return the unicode value of this emoji ( Get it by typing "\\:joy:" on Discord ). If from your server, return the name of this emoji.';
  Blockly.Msg["BLOCK_EMOJI_REACT"] = "React with the emoji %1 to the message %2";
  Blockly.Msg["BLOCK_EMOJI_REACT_TOOLTIP"] =
    "Add a reaction to a message. Use an Emoji, or copy-paste the result of sending \\:your_emoji: somewhere in Discord.";
  Blockly.Msg["BLOCK_EMOJI_GET_NUMBER_OF_REACTIONS"] = "Get the number of reactions %1 on the message %2";
  Blockly.Msg["BLOCK_EMOJI_GET_NUMBER_OF_REACTIONS_TOOLTIP"] =
    "Get the number of peoples who reacted with an emoji on a message ! Use an Emoji, or copy-paste the result of sending \\:your_emoji: somewhere in Discord";
  Blockly.Msg["BLOCK_EMOJI_REMOVE_REACTION"] = "Remove the reaction %1 from the user %2 on the message %3";
  Blockly.Msg["BLOCK_EMOJI_REMOVE_REACTION_TOOLTIP"] =
    'Remove a reaction from a message. Use an Emoji, or copy-paste the result of sending \\:your_emoji: somewhere in Discord. This will trigger the "A reaction is removed" event.';
  Blockly.Msg["BLOCK_EMOJI_REMOVE_ALL_REACTION"] = "Remove every reactions from the message %1";
  Blockly.Msg["BLOCK_EMOJI_REMOVE_ALL_REACTION_TOOLTIP"] = "Remove ALL reactions from a message";

  //Temporary variables blocks
  Blockly.Msg["BLOCK_VAR_SAVE"] = "Save %1 in a temporary variable named  %2 of type %3";
  Blockly.Msg["BLOCK_VAR_SAVE_TOOLTIP"] =
    "You can use this block to store something and use it later. You must declare the variable and use it in the same event, they aren't kept after the code execution..";
  Blockly.Msg["BLOCK_VAR_GET"] = "Get the content of the variable named %1";
  Blockly.Msg["BLOCK_VAR_GET_TOOLTIP"] =
    "You can use this block to get the content of a variable that was saved during the same event. Make sure the content is of the right type when using this somewhere !";

  //Miscellaneous blocks
  Blockly.Msg["BLOCK_MISCELLANEOUS_RETURN"] = "Stop execution";
  Blockly.Msg["BLOCK_MISCELLANEOUS_RETURN_TOOLTIP"] = "This block will stop the action flow";
  Blockly.Msg["BLOCK_MISCELLANEOUS_STR_TO_INT"] = "String to number %1";
  Blockly.Msg["BLOCK_MISCELLANEOUS_STR_TO_INT_TOOLTIP"] =
    "This block will transform a string into a number. It will return -1 if the string isn't a number";

  //Slash commands blocks
  Blockly.Msg["BLOCK_SLASH_COMMAND_CREATOR"] =
    "Create a slash command nammed %1 %2 With the description %3 %4 Ephemeral replies : %5 %6 With arguments %7 that will do %8";
  Blockly.Msg["BLOCK_SLASH_COMMAND_CREATOR_TOOLTIP"] =
    "Create a new Slash command for your server ! You can give a name, a description and add some arguments";
  Blockly.Msg["BLOCK_SLASH_COMMAND_ARG_BOOLEAN"] =
    "Add a boolean argument nammed %1 %2 with the description %3 %4 Required ? %5";
  Blockly.Msg["BLOCK_SLASH_COMMAND_ARG_BOOLEAN_TOOLTIP"] =
    "Add a boolean argument to the slash command, with a name and description";
  Blockly.Msg["BLOCK_SLASH_COMMAND_ARG_TEXT_CHANNEL"] =
    "Add a text channel argument nammed %1 %2 with the description %3 %4 Required ? %5";
  Blockly.Msg["BLOCK_SLASH_COMMAND_ARG_TEXT_CHANNEL_TOOLTIP"] =
    "Add a text channel argument to the slash command, with a name and description";
  Blockly.Msg["BLOCK_SLASH_COMMAND_ARG_INT"] =
    "Add an integer argument nammed %1 %2 with the description %3 %4 Required ? %5";
  Blockly.Msg["BLOCK_SLASH_COMMAND_ARG_INT_TOOLTIP"] =
    "Add an integer argument to the slash command, with a name and description";
  Blockly.Msg["BLOCK_SLASH_COMMAND_ARG_ROLE"] =
    "Add a role argument nammed %1 %2 with the description %3 %4 Required ? %5";
  Blockly.Msg["BLOCK_SLASH_COMMAND_ARG_ROLE_TOOLTIP"] =
    "Add a role argument to the slash command, with a name and description";
  Blockly.Msg["BLOCK_SLASH_COMMAND_ARG_STRING"] =
    "add a text argument nammed %1 %2 with the description %3 %4 Required ? %5";
  Blockly.Msg["BLOCK_SLASH_COMMAND_ARG_STRING_TOOLTIP"] =
    "Add a text argument to the slash command, with a name and description";
  Blockly.Msg["BLOCK_SLASH_COMMAND_ARG_USER"] =
    "Add an user argument nammed %1 %2 with the description %3 %4 Required ? %5";
  Blockly.Msg["BLOCK_SLASH_COMMAND_ARG_USER_TOOLTIP"] =
    "Add an user argument to the slash command, with a name and description";
  Blockly.Msg["BLOCK_SLASH_COMMAND_REPLY"] = "Reply to the command with the message %1";
  Blockly.Msg["BLOCK_SLASH_COMMAND_REPLY_TOOLTIP"] =
    "Reply to a slash command. This block can only be used with a command, and may be only visible for the user who used this command";
  Blockly.Msg["BLOCK_SLASH_COMMAND_GET_BOOLEAN"] = "Get the boolean argument nammed %1";
  Blockly.Msg["BLOCK_SLASH_COMMAND_GET_BOOLEAN_TOOLTIP"] =
    "Get the value of a boolean argument used in this slash command, with his name";
  Blockly.Msg["BLOCK_SLASH_COMMAND_GET_INT"] = "Get the integer argument nammed %1";
  Blockly.Msg["BLOCK_SLASH_COMMAND_GET_INT_TOOLTIP"] =
    "Get the value of an integer argument used in this slash command, with his name";
  Blockly.Msg["BLOCK_SLASH_COMMAND_GET_ROLE"] = "Get the role argument nammed %1";
  Blockly.Msg["BLOCK_SLASH_COMMAND_GET_ROLE_TOOLTIP"] =
    "Get the value of a role argument used in this slash command, with his name";
  Blockly.Msg["BLOCK_SLASH_COMMAND_GET_STRING"] = "Get the text argument nammed %1";
  Blockly.Msg["BLOCK_SLASH_COMMAND_GET_STRING_TOOLTIP"] =
    "Get the value of a text argument used in this slash command, with his name";
  Blockly.Msg["BLOCK_SLASH_COMMAND_GET_USER"] = "Get the user argument nammed %1";
  Blockly.Msg["BLOCK_SLASH_COMMAND_GET_USER_TOOLTIP"] =
    "Get the value of an user argument used in this slash command, with his name";
  Blockly.Msg["BLOCK_SLASH_COMMAND_GET_TEXT_CHANNEL"] = "Get the text channel argument nammed %1";
  Blockly.Msg["BLOCK_SLASH_COMMAND_GET_TEXT_CHANNEL_TOOLTIP"] =
    "Get the value of a text channel argument used in this slash command, with his name";
  Blockly.Msg["BLOCK_SLASH_COMMAND_DATA_CHANNEL"] = "Channel where this command was used";
  Blockly.Msg["BLOCK_SLASH_COMMAND_DATA_CHANNEL_TOOLTIP"] = "Return the text channel where someone used this command";
  Blockly.Msg["BLOCK_SLASH_COMMAND_DATA_USER"] = "User who ran this command";
  Blockly.Msg["BLOCK_SLASH_COMMAND_DATA_USER_TOOLTIP"] = "Return the user who used this command";
  Blockly.Msg["BLOCK_SLASH_COMMAND_FORM_CREATOR"] =
    "Create the form %1 %2 with fields: %3 Once the form is received, do: %4";
  Blockly.Msg["BLOCK_SLASH_COMMAND_FORM_CREATOR_TOOLTIP"] =
    "Allows you to create a form. This block must be the very first in the command's actions. You can add fields to fill out, as well as actions to be performed once the form has been submitted.";
  Blockly.Msg["BLOCK_SLASH_COMMAND_FORM_INPUT_TEXT"] =
    "Add a text input %1 named %2 %3 Minimum size: %4 Maximum size: %5 %6 Default content: %7 %8 Required: %9";
  Blockly.Msg["BLOCK_SLASH_COMMAND_FORM_INPUT_TEXT_TOOLTIP"] = "Allows you to add a text input to a form";
  Blockly.Msg["BLOCK_SLASH_COMMAND_FORM_GET_INPUT_TEXT"] = "Retrieve the text field %1 from the form";
  Blockly.Msg["BLOCK_SLASH_COMMAND_FORM_GET_INPUT_TEXT_TOOLTIP"] =
    "Allows you to retrieve the response provided to a question in the form";
  Blockly.Msg["BLOCK_SLASH_COMMAND_FORM_GET_USER"] = "Retrieve the user who responded to the form";
  Blockly.Msg["BLOCK_SLASH_COMMAND_FORM_GET_USER_TOOLTIP"] =
    "Allows you to retrieve the user who responded to the form";

  //Data storage blocks
  Blockly.Msg["BLOCK_DATA_STORAGE_CREATE_INT"] = "Create number storage named %1";
  Blockly.Msg["BLOCK_DATA_STORAGE_CREATE_INT_TOOLTIP"] =
    "This block defines a number storage. Deleting this block will delete all associated data.";
  Blockly.Msg["BLOCK_DATA_STORAGE_CREATE_STRING"] = "Create text storage named %1";
  Blockly.Msg["BLOCK_DATA_STORAGE_CREATE_STRING_TOOLTIP"] =
    "This block defines a text storage. Deleting this block will delete all associated data.";
  Blockly.Msg["BLOCK_DATA_STORAGE_SAVE_INT"] = "Save in number storage %1 %2 the variable %3 containing %4";
  Blockly.Msg["BLOCK_DATA_STORAGE_SAVE_INT_TOOLTIP"] =
    "Save a value in a storage. The variable name allows to find this variable in the storage, while the content is the saved value";
  Blockly.Msg["BLOCK_DATA_STORAGE_SAVE_STRING"] = "Save in text storage %1 %2 the variable %3 containing %4";
  Blockly.Msg["BLOCK_DATA_STORAGE_SAVE_STRING_TOOLTIP"] =
    "Save a value in a storage. The variable name allows to find this variable in the storage, while the content is the saved value";
  Blockly.Msg["BLOCK_DATA_STORAGE_GET_INT"] = "Get from number storage %1 %2 the variable %3";
  Blockly.Msg["BLOCK_DATA_STORAGE_GET_INT_TOOLTIP"] =
    "Retrieve a value from a storage. The variable name allows to find this variable in the storage";
  Blockly.Msg["BLOCK_DATA_STORAGE_GET_STRING"] = "Get from text storage %1 %2 the variable %3";
  Blockly.Msg["BLOCK_DATA_STORAGE_GET_STRING_TOOLTIP"] =
    "Retrieve a value from a storage. The variable name allows to find this variable in the storage";
  Blockly.Msg["BLOCK_DATA_STORAGE_DELETE_INT"] = "Delete from the number storage %1 %2 the variable %3";
  Blockly.Msg["BLOCK_DATA_STORAGE_DELETE_INT_TOOLTIP"] = "Delete a variable stored in a number storage";
  Blockly.Msg["BLOCK_DATA_STORAGE_DELETE_STRING"] = "Delete from the text storage %1 %2 the variable %3";
  Blockly.Msg["BLOCK_DATA_STORAGE_DELETE_STRING_TOOLTIP"] = "Delete a variable stored in a string storage";

  //Workspace warnings
  Blockly.Msg["WARNING_GET_VAR_INCORRECT_VALUE"] =
    'This variable don\'t seem to be of the right type. Please, make sure to use a "save in temporary variable" block before, and to use the same name and type required here.';
  Blockly.Msg["WARNING_SAVE_VAR_UNCOMPLETE"] = "To use this variable, you must assign a value to it !";
  Blockly.Msg["WARNING_SAVE_VAR_INCOMPATIBLE"] =
    "The value's type isn't compatible with the variable value. Try to use another block as value, or to change the value of this variable";
  Blockly.Msg["WARNING_GET_VAR_INCORRECT_VALUE_WINDOW"] =
    "Some temporary variables blocks are incorrectly used ! We placed warnings on these blocks to locate them and fix the problem.";
  Blockly.Msg["WARNING_INVALID_NAME"] =
    "You must use only letters (a-z A-Z) and numbers (1-9) and shouldn't give a name longer than 16 characters when naming this";
  Blockly.Msg["WARNING_EVENT_VAR_BLOCK_INCORRECTLY_PLACED"] =
    "This block can only be placed in a compatible event ! Try using another compatible Event Variable Block here";
  Blockly.Msg["WARNING_EVENT_VAR_BLOCK_INCORRECTLY_PLACED_WINDOW"] =
    "An Event Variable blocks is incorrectly placed ! We placed warnings on these blocks to locate them and fix the problem.";
  Blockly.Msg["WARNING_EMPTY_TEXT_BLOCK"] = "You must give a value to this block !";
  Blockly.Msg["WARNING_EMPTY_TEXT_BLOCK_WINDOW"] =
    "A text block seems empty ! Try to write something in it before trying again.";
  Blockly.Msg["WARNING_TOO_MANY_BLOCKS"] =
    "There is too much blocks in your workspace ! Please, try to use less blocks";
  Blockly.Msg["WARNING_INVALID_CUSTOM_EMOJI_STRING"] =
    "This don't looks like a valid custom emoji string. Try to send \\:your_emoji: in your server, and paste here the result.";
  Blockly.Msg["WARNING_INVALID_CUSTOM_EMOJI_STRING_WINDOW"] =
    "You tried to use a custom emoji as value for an Emoji block, but you didn't defined it correctly. The value should looks like <:Name:1234>.";
  Blockly.Msg["WARNING_SLASH_COMMAND_INVALID_REGEX"] =
    "The name or description contains an invalid character ! The name must have a length of at least 3, and must follow a-z0-9. The description can't include special characters";
  Blockly.Msg["WARNING_SLASH_COMMAND_INCORRECT_PLACEMENT"] =
    "This block can only be placed in a slash command creator block";
  Blockly.Msg["WARNING_SLASH_COMMAND_UNDEFINED_NAME"] =
    "The name of this block don't seems to be defined in command arguments";
  Blockly.Msg["WARNING_SLASH_COMMAND_TOO_MANY_ARGS"] = "This command has too many arguments !";
  Blockly.Msg["WARNING_SLASH_COMMAND_DUPLICATED_NAME"] = "This command has the same name as another command !";
  Blockly.Msg["WARNING_SLASH_COMMAND_DUPLICATED_ARG"] = "This argument has the same name as another argument !";
  Blockly.Msg["WARNING_SLASH_COMMAND_INVALID_REQUIRE_STATE"] =
    "Required arguments can't be defined after optionnal arguments !";
  Blockly.Msg["WARNING_SLASH_COMMAND_NO_REPLY_BLOCK"] = "You need to use a reply to command block within this block !";
  Blockly.Msg["WARNING_SLASH_COMMAND_EVENT_VAR_USED"] = "You can't use this block here !";
  Blockly.Msg["WARNING_SLASH_COMMAND_ERROR_WINDOW"] =
    "There is a problem with a slash command block. Read the warning to learn more about that";
  Blockly.Msg["WARNING_DATA_STORAGE_INVALID_NAME"] =
    "The name of this data storage is invalid ! It must not contain special characters and be between 3 and 28 characters long.";
  Blockly.Msg["WARNING_DATA_STORAGE_UNDEFINED"] = "The data storage for this block does not seem to be defined !";
  Blockly.Msg["WARNING_DATA_STORAGE_EMPTY_INPUT"] = "One input seems empty on this block !";
  Blockly.Msg["WARNING_DATA_STORAGE_ERROR_WINDOW"] =
    "There is a problem with the data storage blocks ! Read the warnings to learn more.";
  Blockly.Msg["WARNING_BLOCK_UNCOMPLETE"] = "This block seems to be uncomplete !";
  Blockly.Msg["WARNING_BLOCK_UNCOMPLETE_WINDOW"] = "Some blocks are uncomplete !";
  Blockly.Msg["WARNING_BLOCK_INVALID_PLACEMENT"] = "This block can't be used here !";
  Blockly.Msg["WARNING_FORM_TOO_MANY_INPUTS"] = "You can't add more inputs to this form !";
  Blockly.Msg["WARNING_FORM_NAME_ALREADY_DEFINED"] = "You can't give the same name to multiple forms !";
  Blockly.Msg["WARNING_FORM_INPUT_ALREADY_DEFINED"] = "You can't use the same name for multiple inputs !";
  Blockly.Msg["WARNING_FORM_INPUT_NOT_DEFINED"] = "This input isn't defined !";
  Blockly.Msg["WARNING_FORM_NO_INPUTS"] = "You must define at least one input !";
  Blockly.Msg["WARNING_FORM_ERROR_WINDOW"] = "There is an error with a form block !";

  //Types names
  Blockly.Msg["STRING"] = "String";
  Blockly.Msg["NUMBER"] = "Number";
  Blockly.Msg["BOOLEAN"] = "Boolean";
  Blockly.Msg["ARRAY"] = "List";
  Blockly.Msg["COLOUR"] = "Colour";
  Blockly.Msg["MESSAGE"] = "Message";
  Blockly.Msg["TEXT_CHANNEL"] = "Text channel";
  Blockly.Msg["VOICE_CHANNEL"] = "Voice channel";
  Blockly.Msg["THREAD_CHANNEL"] = "Thread channel";
  Blockly.Msg["CATEGORY"] = "Category";
  Blockly.Msg["USER"] = "User";
  Blockly.Msg["ROLE"] = "Role";
  Blockly.Msg["EMBED_MESSAGE"] = "Embed message";

  //Others
  Blockly.Msg["YES"] = "Yes";
  Blockly.Msg["NO"] = "No";
  Blockly.Msg["UNLIMITED"] = "Unlimited";
  Blockly.Msg["SHORT"] = "short";
  Blockly.Msg["LONG"] = "long";
  Blockly.Msg["LOCK"] = "Lock";
  Blockly.Msg["UNLOCK"] = "Unlock";
  Blockly.Msg["ARCHIVE"] = "Archive";
  Blockly.Msg["REOPEN"] = "Reopen";

  return Blockly;
};
