/* ########## Emoji Blocks ######### */
/* Added blocks to manage emojis */

module.exports = {
	blocks: JSON.stringify([{
			"type": "block_emoji_get_name",
			"message0": "%{BKY_BLOCK_EMOJI_GET_NAME}",
			"args0": [{
				"type": "input_value",
				"name": "EMOJI",
				"check": "Emoji"
			}],
			"output": "String",
			"colour": 120,
			"tooltip": "%{BKY_BLOCK_EMOJI_GET_NAME_TOOLTIP}",
			"helpUrl": ""
		},
		{
			"type": "block_emoji_react",
			"message0": "%{BKY_BLOCK_EMOJI_REACT}",
			"args0": [{
					"type": "input_value",
					"name": "emoji",
					"check": [
						"String",
						"Emoji"
					]
				},
				{
					"type": "input_value",
					"name": "message",
					"check": "Message"
				}
			],
			"inputsInline": true,
			"previousStatement": "block",
			"nextStatement": "block",
			"colour": 120,
			"tooltip": "%{BKY_BLOCK_EMOJI_REACT_TOOLTIP}",
			"helpUrl": ""
		},
		{
		  "type": "block_emoji_get_number_of_reactions",
		  "message0": "%{BKY_BLOCK_EMOJI_GET_NUMBER_OF_REACTIONS}",
		  "args0": [
		    {
		      "type": "input_value",
		      "name": "Emoji",
		      "check": [
		        "String",
		        "Emoji"
		      ]
		    },
		    {
		      "type": "input_value",
		      "name": "Message",
		      "check": "Message"
		    }
		  ],
		  "inputsInline": true,
		  "output": "Number",
		  "colour": 120,
		  "tooltip": "%{BKY_BLOCK_EMOJI_GET_NUMBER_OF_REACTIONS_TOOLTIP}",
		  "helpUrl": ""
		},
		{
		  "type": "block_emoji_remove_reaction",
		  "message0": "%{BKY_BLOCK_EMOJI_REMOVE_REACTION}",
		  "args0": [
		    {
		      "type": "input_value",
		      "name": "Emoji",
		      "check": [
		        "String",
		        "Emoji"
		      ]
		    },
		    {
		      "type": "input_value",
		      "name": "User",
		      "check": "User"
		    },
		    {
		      "type": "input_value",
		      "name": "Message",
		      "check": "Message"
		    }
		  ],
		  "inputsInline": true,
		  "previousStatement": "block",
		  "nextStatement": "block",
		  "colour": 120,
		  "tooltip": "%{BKY_BLOCK_EMOJI_REMOVE_REACTION_TOOLTIP}",
		  "helpUrl": ""
		},
		{
		  "type": "block_emoji_remove_all_reactions",
		  "message0": "%{BKY_BLOCK_EMOJI_REMOVE_ALL_REACTION}",
		  "args0": [
		    {
		      "type": "input_value",
		      "name": "Message",
		      "check": "Message"
		    }
		  ],
		  "inputsInline": true,
		  "previousStatement": "block",
		  "nextStatement": "block",
		  "colour": 120,
		  "tooltip": "%{BKY_BLOCK_EMOJI_REMOVE_ALL_REACTION_TOOLTIP}",
		  "helpUrl": ""
		}
	])
};
