//File used to translate panel pages in English
module.exports = {
  /* Index panel */
  panelIndexMessageDiv1: "Welcome on Disblock's panel !<br><br>You can add the bot to your server by clicking on  \"Invite\", in the menu on the left.<br><br>Also, to manage a server, you need the \"Administrator\" permission on it !<br><br>Finally, if you need help or have questions, feel free to join the <a href=\"https://discord.gg/4b6j3UBKWp\">support server</a>.",
  panelIndexMessageDiv2: "Disblock is also open-source and licensed under the MIT License ! You can check our project on Github <a href=\"https://github.com/Disblock/WebApp\">here</a>.",

  /* Guild panel */
  manageServerVars: "Manage variables",
  modificationsLogs: "Modifications logs",
  rollbackServer: "Rollback workspace",
  sendCodeButton: "Save",
  showWindowSendCodeSuccessTitle: "Success !",
  showWindowSendCodeSuccessText: "Your workspace was saved, and is ready to use ! If you created a slash command, don't forget to use /reloadcommands in your server !",
  showWindowSendCodeErrorTitle: "Failed !",
  showWindowSendCodeErrorText: "There was an error while processing your workspace.",
  blocksInWorkspace: "Blocks in workspace : ",

  /* showWindow function, panel.ejs */
  showWindowConfirm: "Confirm",
  showWindowCantAccessServerTitle: "Unable to access this server !",
  showWindowCantAccessServerText: "The bot must be added on the server before accessing his workspace !",
  showWindowRollbackSuccessTitle: "Workspace rollbacked !",
  showWindowRollbackSuccessText: "Successfully restored workspace and executed actions.",
  showWindowRollbackErrorTitle: "Error while restoring the workspace !",
  showWindowRollbackErrorText: "There was an error while rollbacking the workspace.",
  showWindowGivePremiumToServerSuccessTitle: "Successfully assigned this Premium slot to another server !",
  showWindowGivePremiumToServerSuccessText: "The created code on the old server will be disabled, and you can now use the advantages of Premium on the new server !",
  showWindowPremiumCodeSuccessTitle: "Valid code !",
  showWindowPremiumCodeSuccessText: "You Successfully redeemed this code, and a new Premium slot was added to your account. Thanks for your support ! ;)",
  showWindowPremiumCodeFailedTitle: "Invalid code",
  showWindowPremiumCodeFailedText: "Check that the code is correctly written, and retry. This code is maybe already used.",
  serverBannedTitle: "Server banned !",
  serverBannedText: "This server was disabled by an Administrator. Contact us if you believe this is an error.",

  /* Back-end errors for workspace sending */
  workspaceToJsError: "There was an error while processing your workspace !",
  workspaceToJsNotLoggedIn: "You are not logged in !",
  workspaceToJsBanned: "This server can't be accessed at the moment",
  workspaceToJsNotFound: "Server not found ! Try to remove and add again the bot on your server",
  workspaceToJsTooManyBlocks: "Too many blocks in the editor !",
  workspaceToJsIncorrectlyPlacedBlocks: "Some blocks are incorrectly placed !",
  workspaceToJsTooManyOfABlock: "There are too many copies of a same block !",
  workspaceToJsInvalidRegex: "A text input contain an invalid value !",
  workspaceToJsRateLimitError: "Please, wait before trying again !",
  workspaceToJsUncompleteBlock: "There is an uncomplete block in your code ! Please add the missing value to this block before trying again...",

  /* Rollback panel */
  rollbackPageTitle: "Rollback to a previous state your server's workspace",
  rollbackPageText: "Here, you can rollback to an old state of your server's workspace. When you rollback to an old version, we will immediatly update the code executed by the bot to the restored version. If you rollback your workspace, the actual state will be restorable here.",
  rollbackPageNoSaves: "There isn't any saved workspace for this server !",
  rollbackPageRestaure: "Rollback",

  /* Logs panel */
  logsPageTitle: "Check you server's audit log",
  logsPageText: "Here, you can see every modifications made to your server, when they was made and who did it.",
  logsPageNoLogs: "There isn't any saved modifications for this server !",
  logsPageStaff: "Staff action",

  /* Premium panel */
  premiumPageTitle: "Premium management",
  premiumPageText: "If you have some Premium slots, you can manage them here. You can also redeem a code, or support us to get some Premium slots.<br>The Premium feature isn't a product, but just a bonus for supporting the bot.",
  premiumPageNoSlotsAvailable: "You don't have any Premium slot available",
  premiumPageSelectASlot: "Select a premium slot to manage it",
  premiumPageChangeServer: "Use this Premium on another server :",
  premiumPageSendChangeServer: "Confirm",
  premiumPageSupportUs: "Support us on {} :",
  premiumPageSupportUsButton: "{}",
  premiumPageRedeemCode: "You have a premium code ?",
  premiumPageRedeemCodeSend:"Redeem this code",
  premiumPageStart:"From : ",
  premiumPageEnd:"To : ",
  premiumPageNever:"Never expire",
  premiumPagePremiumSource: "Origin : ",
  premiumPagePremiumSourceCode:"Code",
  premiumPagePremiumSourceSubscription:"Subscription",
  premiumPageAvailableSlot: "Available premium slot"
}
