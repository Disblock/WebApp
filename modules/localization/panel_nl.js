"use strict";
//File used to translate panel pages in Dutch
module.exports = {
  /* Index panel */
  panelIndexMessageDiv1:
    'Welkom op Disblock\'s paneel !<br><br>Je kan de bot toevoegen aan je server door op   "Invite"   te klikken, in het menu aan de linker kant.<br><br>Ook, om server te beheren, heb je de "Administrator" permissie nodig voor het !<br><br>Als laatste, als je hulp nodig hebt of als je vragen hebt, Voel je vrij om de Discord support server te joinen <a href="https://discord.gg/4b6j3UBKWp">support server</a>.',
  panelIndexMessageDiv2:
    'Disblock is ook open-source en onder de MIT licentie ! Je kan onze projecten zien op Github <a href="https://github.com/Disblock/WebApp">here</a>.',

  /* Guild panel */
  manageServerVars: "Beheer variabelen",
  modificationsLogs: "Modificatie logs",
  rollbackServer: "Werkplaats terughalen",
  sendCodeButton: "Opslaan",
  showWindowSendCodeSuccessTitle: "Gelukt !",
  showWindowSendCodeSuccessText:
    "Je werkplaats is opgeslagen, en is klaar om te gebruiken ! Als je een slash commando hebt gemaakt, vergeet niet om /reloadcommands te gebruiken in je server !",
  showWindowSendCodeErrorTitle: "Gefaald !",
  showWindowSendCodeErrorText: "Er was een error terwijl je werkplaats aan het verwerken was.",
  blocksInWorkspace: "Blokken in werkplaats : ",

  /* showWindow function, panel.ejs */
  showWindowConfirm: "Bevestig",
  showWindowCantAccessServerTitle: "Niet in staat om deze server te betreden !",
  showWindowCantAccessServerText: "De bot moet toegevoegd aan de server zijn voor deze server te betreden met deze werksplaats !",
  showWindowRollbackSuccessTitle: "Werkplaats teruggehaald !",
  showWindowRollbackSuccessText: "Gelukt om werkplaats en uitgevoerde acties terug te halen.",
  showWindowRollbackErrorTitle: "Error terwijl werkplaats werdt teruggehaald !",
  showWindowRollbackErrorText: "Er was een error terwijl de werkspace werdt teruggehaald.",
  showWindowGivePremiumToServerSuccessTitle: "Met succes deze Premium slot toegewezen naar een andere server !",
  showWindowGivePremiumToServerSuccessText:
    "De gecreëerde code op de oude server gaat uitgeschakeld worden, en je kan nu de voordelen van Premium gebruiken op de nieuwe server !",
  showWindowPremiumCodeSuccessTitle: "Geldige code !",
  showWindowPremiumCodeSuccessText:
    "Je hebt met Success deze code ingediend, en een nieuwe Premium slot was toegevoegd aan je account. Bedankt voor je support ! ;)",
  showWindowPremiumCodeFailedTitle: "Ongeldige code",
  showWindowPremiumCodeFailedText:
    "Check of de code correct is geschreven, en probeer opnieuw. Deze code is misschien al gebruikt.",
  serverBannedTitle: "Server verbannen !",
  serverBannedText: "Deze server is uitgeschakeld door een Administrator. Contact ons als je denkt dat dit een fout is.",

  /* Back-end errors for workspace sending */
  workspaceToJsError: "Er is een error terwijl werksplaats werdt uitgevoerd !",
  workspaceToJsNotLoggedIn: "Je bent niet ingelogd !",
  workspaceToJsBanned: "Deze server kan niet worden betreden op dit moment",
  workspaceToJsNotFound: "Server niet gevonden ! Probeer de bot te verwijderen en voeg opnieuw toe",
  workspaceToJsTooManyBlocks: "Te veel blockken in de editor !",
  workspaceToJsIncorrectlyPlacedBlocks: "Sommige blokken zijn incorrect geplaatst !",
  workspaceToJsTooManyOfABlock: "Er zijn te veel kopieën van dezelfde blok !",
  workspaceToJsInvalidRegex: "Een tekst input bevat een ongeldig bereik !",
  workspaceToJsRateLimitError: "Alstublieft, wacht even voordat weer opnieuw te proberen !",
  workspaceToJsUncompleteBlock:
    "Er is een incompleet blok in je code ! Alstublieft voeg de missende waarde toe aan dit blok voordat je opnieuw probeert...",
  errorWithStorageBlocks:
    "Er is een error met je data opslag blokken ! Alstublieft, check of alles correct is voordat je opnieuw probeert...",

  /* Rollback panel */
  rollbackPageTitle: "Terughalen naar een eerdere status van de werkruimte van uw server",
  rollbackPageText:
    "Hier, je kan terughalen naar een oude status van je server's werksplaats. Wanneer je terughaald naar een oude versie, we zullen de door de bot uitgevoerde code onmiddellijk bijwerken naar de herstelde versie. Als je je werkplaats terughaald, de actuele status kan je hier terug halen.",
  rollbackPageNoSaves: "Er is geen enkel werksplaats voor deze server !",
  rollbackPageRestaure: "Haal terug",

  /* Logs panel */
  logsPageTitle: "Check je server's audit log",
  logsPageText: "Hier, je kan zien elke modificatie gemaakt aan je server, wanneer hen zijn gemaakt en wie het deed.",
  logsPageNoLogs: "Er is geen enkele opgeslagenn modificatie voor deze server !",
  logsPageStaff: "Staff actie",

  /* Premium panel */
  premiumPageTitle: "Premium beheren",
  premiumPageText:
    "Als je een paar Premium slots hebt, kan je ze hier beheren. Je kan ook een code invoeren, of help ons voor een paar Premium slots.<br>De Premium functie is geen product, maar gewoon een bonus voor het helpen van de bot.",
  premiumPageNoSlotsAvailable: "Je hebt geen één Premium slot beschikbaar",
  premiumPageSelectASlot: "Selecteer een premium slot om het te beheren",
  premiumPageChangeServer: "Gebruik deze Premium op een andere server :",
  premiumPageSendChangeServer: "Bevestig",
  premiumPageSupportUs: "Help ons op {} :",
  premiumPageSupportUsButton: "{}",
  premiumPageRedeemCode: "Je hebt een premium code ?",
  premiumPageRedeemCodeSend: "Wissel deze code in",
  premiumPageStart: "Van : ",
  premiumPageEnd: "Aan : ",
  premiumPageNever: "Verdwijnt nooit",
  premiumPagePremiumSource: "Oorsprong : ",
  premiumPagePremiumSourceCode: "Code",
  premiumPagePremiumSourceSubscription: "Abonnement",
  premiumPageAvailableSlot: "Beschikbare premium slot",
};
