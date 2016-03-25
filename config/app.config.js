﻿var appConfig = {
  appName: "",
  licenseKey: "",
  apiPrefix: "https://mysterious-hamlet-76883.herokuapp.com/",
}
var message = {
  sessionExpired: {
    ita: "Sessione scaduta",
    eng: "Lorem ipsum",
  },
  sessionExpiredText: {
    ita: "La tua sessione di lavoro è scaduta, tra pochi secondi tornerai automaticamente alla home-page del portale.",
    eng: "Lorem ipsum",
  },
  defaultError: {
    ita: "Si è verificato un errore imprevisto, riprovare in un altro momento.",
    eng: "Errors occurred, try again later.",
  },
  recordNotFound: {
    ita: "La ricerca non ha prodotto alcun risultato, riprovare in un altro momento.",
    eng: "Errors occurred, try again later.",
  },
  defaultConfirm: {
    ita: "L\'operazione non può essere annullata, sei sicuro di voler procedere?",
    eng: "Lorem ipsum?"
  },
  doubleConfirm: {
    ita: "L\'operazione richiede un\'ulteriore conferma, sei sicuro di voler procedere?",
    eng: "Lorem ipsum?"
  },
  defaultRequired: {
    ita: "I campi contrassegnati con l\'asterisco rosso sono obbligatori.",
    eng: "Lorem ipsum",
  },
  mailError: {
    ita: "L\'indirizzo e-mail specificato non risulta disponibile.",
    eng: "Lorem ipsum",
  },
  accountAlreadyExist: {
    ita: "L\'operazione richiesta non può essere eseguita perchè il relativo account risulta già attivato.",
    eng: "Lorem ipsum",
  },
  accountNotFound: {
    ita: "L\'operazione richiesta non può essere eseguita perchè il relativo account non risulta esistente.",
    eng: "Lorem ipsum",
  },
  accountError: {
    ita: "Autenticazione fallita, verificare i dati inseriti e riprovare in un altro momento.",
    eng: "Lorem ipsum",
  },
  loader: {
    ita: "Caricamento in corso...",
    eng: "Loading..."
  },
  initSearch: {
    ita: "Clicca qui per iniziare la ricerca",
    eng: "Loading..."
  },
  evaluationType_1: {
      ita: "Consentono di raccogliere informazioni ma non possono essere sottoposte a valutazione, <b class=cRosso>se scegli questo tipo la sezione potrà contenere solo domande informative</b>.",
      eng: "",
  },
  evaluationType_2: {
      ita: "Consentono di raccogliere informazioni ed assegnare un voto alla risposta ottenuta, <b class=cRosso>se scegli questo tipo la sezione potrà contenere solo domande valutative</b>.",
      eng: "",
  },
  evaluationType_3: {
      ita: "Se scegli questo tipo la sezione potrà includere contemporaneamente domande informative e valutative.",
      eng: "",
  },
}
var appMessage = {
  defaultError: message.defaultError[JSON.parse(localStorage.getItem("session")).lang.toLowerCase()],
  defaultConfirm: message.defaultConfirm[JSON.parse(localStorage.getItem("session")).lang.toLowerCase()],
  recordNotFound: message.recordNotFound[JSON.parse(localStorage.getItem("session")).lang.toLowerCase()],
  doubleConfirm: message.doubleConfirm[JSON.parse(localStorage.getItem("session")).lang.toLowerCase()],
  defaultRequired: message.defaultRequired[JSON.parse(localStorage.getItem("session")).lang.toLowerCase()],
  mailError: message.mailError[JSON.parse(localStorage.getItem("session")).lang.toLowerCase()],
  accountAlreadyExist: message.accountAlreadyExist[JSON.parse(localStorage.getItem("session")).lang.toLowerCase()],
  accountNotFound: message.accountNotFound[JSON.parse(localStorage.getItem("session")).lang.toLowerCase()],
  sessionExpired: message.sessionExpired[JSON.parse(localStorage.getItem("session")).lang.toLowerCase()],
  sessionExpiredText: message.sessionExpiredText[JSON.parse(localStorage.getItem("session")).lang.toLowerCase()],
  accountError: message.accountError[JSON.parse(localStorage.getItem("session")).lang.toLowerCase()],
  loader: message.loader[JSON.parse(localStorage.getItem("session")).lang.toLowerCase()],
  initSearch: message.initSearch[JSON.parse(localStorage.getItem("session")).lang.toLowerCase()],
  evaluationType_1: message.evaluationType_1[JSON.parse(localStorage.getItem("session")).lang.toLowerCase()],
  evaluationType_2: message.evaluationType_2[JSON.parse(localStorage.getItem("session")).lang.toLowerCase()],
  evaluationType_3: message.evaluationType_3[JSON.parse(localStorage.getItem("session")).lang.toLowerCase()]
}
