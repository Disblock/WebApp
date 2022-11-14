# Contributing to Disblock

Firstly, thanks for taking the time to contribute!

Every contributions are encouraged ! You can find different ways to help in the table of contents :

## Table of Contents

- [I Have a Question](#i-have-a-question)
- [I Want To Contribute](#i-want-to-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Enhancements](#suggesting-enhancements)
  - [Your First Code Contribution](#your-first-code-contribution)
  - [Improving The Documentation](#improving-the-documentation)
  - [Styleguide](#styleguide)

-----

## I Have a Question

Before asking a questions, you should check the available [documentation](https://docs.disblock.xyz), and search for related issues.

If docs and issues didn't answered your question, feel free to join the [support server](https://discord.gg/4b6j3UBKWp), or open an issue here ! We will help you as soon as possible !

-----

## I Want To Contribute

### Reporting Bugs

#### Before Submitting a Bug Report

A good bug report should give all relevant information about the problem. Therefore, we ask you to investigate, collect information about the problem, describe and report the issue on GitHub. Here is a to-do list to check before submitting an issue :

- Make sure that you are using a supported version
- Determine if your bug is really a bug and not an error on your side ( *incompatible environment, .env file incorrectly configured, incompatible versions between the web app and the bot, permission error, error with blocks in workspace...*)
- Check if another user already reported this bug
- Some information that we need about the bug :
  - OS, platform and version
  - The name of your web browser, and the version that you're running
  - Can you reliably reproduce the issue ?
  - If you're self-hosting the bot :
    - Version of the web app, bot, node.js
    - Stack trace or error message

#### How Do I Submit a Good Bug Report?

> If you found a security related issue, please, report it to security@disblock.xyz and keep it strictly confidential.
>
> We know that you want to make your discovery public as soon as possible, so if you don't hear back from us within a week, you can release publicly the vulnerability.


If you followed the previous step correctly, you should be ready to submit your bug report :

- Open a new issue.
- Provide as much **context** as possible, explain what happened, and what should happened.
- Explain **how to reproduce** the bug and provide the information you collected in the previous step.

After submitting your bug report, we will try to reproduce the bug, or ask you more details if needed. If we're able to reproduce the bug, we will fix it quickly and release the fix as soon as possible.

### Suggesting Enhancements

This section will explain how to suggest a **new feature** or **improvements** to an already implement feature.

#### Before Submitting an Enhancement

- Read the [docs](https://docs.disblock.xyz) and check that your idea isn't already implemented.
- Maybe something similar was already suggested, so it's a good idea to **search for an existing suggestion** instead of creating a new one.
- Check that your idea is adapted for Disblock, and will benefit to the majority of users, and not only to few of them.

#### How Do I Submit a Good Enhancement Suggestion?

Suggestion are tracked using GitHub issues. Here is the to-do list :

- Use a **clear and descriptive title** to identify and find easily the suggestion.
- Provide as many **details** as possible.
- Explain why this enhancement would be useful to most users.
- If you suggest to enhance an already implemented feature, explain the current behavior, and **what you would like to see** instead, and why.
- Feel free to add any screenshots or GIFs to help us understanding your idea !

### Your First Code Contribution

You can also help us by adding a feature, enhancing something, or fixing bugs ! Feel free to contact us on GitHub ( issues, ... ) or Discord ( support channel, DM, ... ) if you have a question, want to know what feature you can work on, or don't understand how something work.

Before submitting your pull request, be sure that :

- You're **following the Styleguide**.
- Your modifications are **following the project architecture**.
- You created something useful that will benefit to the majority of users. If you're unsure about that, you can submit an enhancement suggestion before.
- You **tested** everything that was modified, and didn't found any bugs.
- You **commented** extensively, correctly and precisely your modifications.

If you're ready, here are the steps to create a good pull request :

- Use a **clear and descriptive title**.
- Explain **what was your goal**, and **how you achieved it**.
- Describe for each edited file the modifications you made.

We will test your modifications, and reply to your request. When your contribution is accepted, your code will be added to the work-in-progress branch. Users who frequently contribute with qualitative work may be asked to join us as a team member.

### Improving The Documentation

Sometimes, there may be something incorrect or missing in the documentation. In this case, don't hesitate to open an issue or a pull request on the [documentation repository](https://github.com/Disblock/Documentation). You can also contact us on Discord so we can fix this problem.

-----

## Styleguide
> *This part is still a work in progress*

### Namming conventions

#### Variables
When creating a variable or a function, use the **lowerCamelCase** convention. When creating a class, prefer the **UpperCamelCase** convention.
Utilization of **const** and **let** are encouraged, **var** is deprecated.
```js
const guildId = '1234567890'; //Good
var currentUserId = '1234567890'; //Bad, deprecated
let TextString = "Hello World !";//Bad, the first letter don't need to be uppercase
var bot_token = "zf4z8e.ed78#94azd";//Bad, that's snake_case
```

#### Modules , blocks ID
When importing a module, or defining a Block for Blockly, use the **snake_case** convention.
Utilization of **const** and **let** are encouraged, **var** is deprecated.
```js
const express = require('express');//Good
const blockly_generator = require('./modules/blockly/generator/generator.js');//Good
const blockly_block_message_reply = {
  "type": "block_message_reply",
  (...)
};//Good
```

#### Configuration parameters
This type of variable are constants, and used widely in the project. To distinguish easily these variables,
we will use the **SNAKE_CASE** convention and make them easily understandable.
```js
bot.login(config.BOT_TOKEN);//Good
setMaxBlocksNumberPerGuild(config.max_blocks_per_guild);//Bad, constant not in uppercase
```

### Indentation
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

### Commit Messages

The title must be clear, descriptive and short, so we can easily understand what was this commit about. Summarize every modifications you made in the description, with explanations if needed.

-----
## Attribution
This guide is based on the **contributing.md**. [Make your own](https://contributing.md/)!
