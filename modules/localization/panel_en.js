//File used to translate panel pages in French
module.exports = {
  /* Guild panel */
  manageServerVars: "Manage variables",
  modificationsLogs: "Modifications logs",
  rollbackServer: "Rollback workspace",
  sendCodeButton: "Send code",
  showWindowSendCodeSuccessTitle: "Success !",
  showWindowSendCodeSuccessText: "Your workspace was saved, and is ready to use !",
  showWindowSendCodeErrorTitle: "Failed !",
  showWindowSendCodeErrorText: "There was an error while processing your workspace.",
  blocksInWorkspace: "Blocks in workspace : ",

  /* showWindow function, panel.ejs */
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
