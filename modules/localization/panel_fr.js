"use strict";
//File used to translate panel pages in French
module.exports = {
  /* Index panel */
  panelIndexMessageDiv1:
    'Bienvenue sur l\'interface de Disblock !<br><br>Vous pouvez ajouter le bot en cliquant sur  "Inviter", dans le menu à gauche.<br><br>Aussi, soyez sûr d\'avoir la permission "Administrateur" sur le serveur à modifier !<br><br>Enfin, si vous avez besoin d\'aide, vous pouvez aussi rejoindre le <a href="https://discord.gg/4b6j3UBKWp">serveur de support</a>.',
  panelIndexMessageDiv2:
    'Disblock est aussi open-source et disponible sous la license MIT ! Vous pouvez retrouver le projet <a href="https://github.com/Disblock/WebApp">ici</a>.',

  /* Guild panel */
  manageServerVars: "Gérer les variables du serveur",
  modificationsLogs: "Historique des modifications",
  rollbackServer: "Restaurer une sauvegarde",
  sendCodeButton: "Sauvegarder",
  showWindowSendCodeSuccessTitle: "Succès !",
  showWindowSendCodeSuccessText:
    "Le code a été enregistré, et est prêt à être utilisé ! Si vous avez créé une commande Slash, n'oubliez pas de faire /reloadcommands dans votre serveur !",
  showWindowSendCodeErrorTitle: "Echec !",
  showWindowSendCodeErrorText: "Il y a eu une erreur durant le traitement du code.",
  blocksInWorkspace: "Blocks utilisés : ",

  /* showWindow function, panel.ejs */
  showWindowConfirm: "Confirmer",
  showWindowCantAccessServerTitle: "Impossible d'accéder à ce serveur !",
  showWindowCantAccessServerText: "Le bot doit être ajouté sur ce serveur avant de pouvoir modifier le code !",
  showWindowRollbackSuccessTitle: "Espace de travail restauré !",
  showWindowRollbackSuccessText: "Les actions du bot ainsi que l'espace de travail ont été restaurés.",
  showWindowRollbackErrorTitle: "Erreur lors de la restauration !",
  showWindowRollbackErrorText: "Il y a eu une erreur en restaurant l'espace de travail.",
  showWindowGivePremiumToServerSuccessTitle: "Premium déplacé vers un autre serveur !",
  showWindowGivePremiumToServerSuccessText:
    "Les évènements de l'ancien serveur vont être désactivés, et vous pouvez maintenant utiliser les avantages du Premium sur ce nouveau serveur !",
  showWindowPremiumCodeSuccessTitle: "Code utilisé !",
  showWindowPremiumCodeSuccessText:
    "Vous venez d'obtenir un nouvel emplacement Premium. Merci pour votre soutient ! ;)",
  showWindowPremiumCodeFailedTitle: "Code invalide",
  showWindowPremiumCodeFailedText:
    "Essayez de vérifier si vous avez correctement écrit le code, puis réessayez. Ce code est peut-être déjà utilisé",
  serverBannedTitle: "Serveur banni !",
  serverBannedText:
    "Ce serveur a été banni par un administrateur. Contactez-nous si vous pensez que ceci est une erreur.",

  /* Back-end errors for workspace sending */
  workspaceToJsError: "Il y a eu une erreur durant le traitement de l'éditeur !",
  workspaceToJsNotLoggedIn: "Vous n'êtes pas connecté !",
  workspaceToJsBanned: "Ce serveur ne peut pas être modifié pour le moment !",
  workspaceToJsNotFound: "Serveur non trouvé ! Essayez de retirer et de rajouter le bot sur votre serveur",
  workspaceToJsTooManyBlocks: "Trop de blocks dans votre éditeur !",
  workspaceToJsIncorrectlyPlacedBlocks: "Certains blocks sont mal placés !",
  workspaceToJsTooManyOfABlock: "Il y a trop d'exemplaires d'un même block !",
  workspaceToJsInvalidRegex: "Une entrée de texte contient une valeur incorrecte !",
  workspaceToJsRateLimitError: "Patientez avant de réessayer !",
  workspaceToJsUncompleteBlock:
    "Il y a un block incomplet dans votre code ! Essayez d'ajouter la valeur manquante avant de réessayer...",
  errorWithStorageBlocks:
    "Il y a une erreur avec les blocks de stockage de données ! Essayez de vérifier que tout est correct avant de réessayer...",

  /* Rollback panel */
  rollbackPageTitle: "Restaurer une sauvegarde de l'espace de travail de votre serveur",
  rollbackPageText:
    "Sur cette page, vous pouvez restaurer une ancienne sauvegarde de l'espace de travail du serveur. Une fois une ancienne version restaurée, le bot va immédiatement appliquer le code lié à cette ancienne version. En cas de restauration, l'espace de travail actuel est sauvegardé et restaurable ici.",
  rollbackPageNoSaves: "Il n'y a aucune sauvegarde enregistrée pour ce serveur !",
  rollbackPageRestaure: "Restaurer",

  /* Logs panel */
  logsPageTitle: "Vérifier l'historique de votre serveur",
  logsPageText:
    "Ici, vous pouvez voir toutes les modifications faites sur votre serveur, quand et par qui elles ont été faites",
  logsPageNoLogs: "Il n'y a aucune modification enregistrée pour ce serveur !",
  logsPageStaff: "Action du Staff",

  /* Premium panel */
  premiumPageTitle: "Gestion Premium",
  premiumPageText:
    "Vous pouvez gérer ici vos emplacements premium si vous en possédez. Vous pouvez aussi utiliser un code, ou nous soutenir pour obtenir des emplacements Premium.<br>Le premium n'est pas un produit, mais juste une contrepartie pour votre soutient",
  premiumPageNoSlotsAvailable: "Vous n'avez aucun emplacement Premium utilisable actuellement",
  premiumPageSelectASlot: "Séléctionnez un emplacement premium pour le modifier",
  premiumPageChangeServer: "Soutenir un autre serveur :",
  premiumPageSendChangeServer: "Changer le serveur",
  premiumPageSupportUs: "Soutenez-nous sur {} !",
  premiumPageSupportUsButton: "Accéder à {}",
  premiumPageRedeemCode: "Vous avez un code ?",
  premiumPageRedeemCodeSend: "Activer le code",
  premiumPageStart: "Début : ",
  premiumPageEnd: "Fin : ",
  premiumPageNever: "Jamais",
  premiumPagePremiumSource: "Provenance : ",
  premiumPagePremiumSourceCode: "Code",
  premiumPagePremiumSourceSubscription: "Abonnement",
  premiumPageAvailableSlot: "Emplacement disponible",
};
