# Style guide

------------


## Namming conventions

### Variables
When creating a variable or a function, use the **lowerCamelCase** convention. When creating a class, prefer the **UpperCamelCase** convention.
Utilization of **const** and **let** are encouraged, but **var** is tolerated.
```js
const guildId = '1234567890'; //Good
var currentUserId = '1234567890'; //Allowed
let TextString = "Hello World !";//Bad, the first letter don't need to be uppercase
var bot_token = "zf4z8e.ed78#94azd";//Bad, that's snake_case
```

### Modules , blocks ID
When importing a module, or defining a Block for Blockly, use the **snake_case** convention.
Utilization of **const** and **let** are encouraged, but **var** is tolerated.
```js
const express = require('express');//Good
const blockly_generator = require('./modules/blockly/generator/generator.js');//Good
const blockly_block_message_reply = {
  "type": "block_message_reply",
  (...)
};//Good
```

### Configuration parameters
This type of variable are constants, and used widely in the project. To distinguish easily these variables,
we will use the **SNAKE_CASE** convention and make them easily understandable.
```js
bot.login(config.BOT_TOKEN);//Good
setMaxBlocksNumberPerGuild(config.max_blocks_per_guild);//Bad, constant not in uppercase
```

------------


## Indentation
When indenting your code, the indent increases or decrease by two spaces.
```js
let userData = {
  username: 'username#1234',
  guilds: [
    '1234567890',
    '0987654321',
    '7574898489'
  ]
};//Good

if(req.session.discord_id != undefined){
  res.redirect('/panel');
}else{
  res.redirect('/login');
}//Good

let userData = {username: 'username#1234',guilds: ['1234567890']};//Allowed, only few properties
```
