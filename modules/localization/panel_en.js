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

  /* showWindow function, panel.ejs */
  showWindowCantAccessServerTitle: "Unable to access this server !",
  showWindowCantAccessServerText: "The bot must be added on the server before accessing his workspace !",
  showWindowRollbackSuccessTitle: "Workspace rollbacked !",
  showWindowRollbackSuccessText: "Successfully restored workspace and executed actions.",
  showWindowRollbackErrorTitle: "Error while restoring the workspace !",
  showWindowRollbackErrorText: "There was an error while rollbacking the workspace.",

  /* Rollback panel */
  rollbackPageTitle: "Rollback to a previous state your server's workspace",
  rollbackPageText: "Here, you can rollback to an old state of your server's workspace. When you rollback to an old version, we will immediatly update the code executed by the bot to the restored version. If you rollback your workspace, the actual state will be restorable here.",
  rollbackPageNoSaves: "There isn't any saved workspace for this server !",
  rollbackPageRestaure: "Rollback"
}
