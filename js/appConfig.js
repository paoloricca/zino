var appConfig = {
    appName: "/abcard/",
    licenseKey: "ATFR34W4YR4YB846ERA4TVREW4684T9ASD798AS7DF7AS98FD",
    sbe: "2",
    vettore: "4",
    apiPrefix: "http://10.233.133.0/cca-web-v1/api/"
    
}
var config = {
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
    a73de28bba77d3f8f2c0d6f6ef0bf4b9: {
        ita: "Caricamento in corso...",
        eng: "Loading..."
    }
}
var appMessage = {
    defaultError: config.defaultError[JSON.parse(localStorage.getItem("session")).lang.toLowerCase()],
    defaultConfirm: config.defaultConfirm[JSON.parse(localStorage.getItem("session")).lang.toLowerCase()],
    doubleConfirm: config.doubleConfirm[JSON.parse(localStorage.getItem("session")).lang.toLowerCase()],
    defaultRequired: config.defaultRequired[JSON.parse(localStorage.getItem("session")).lang.toLowerCase()],
    mailError: config.mailError[JSON.parse(localStorage.getItem("session")).lang.toLowerCase()],
    accountAlreadyExist: config.accountAlreadyExist[JSON.parse(localStorage.getItem("session")).lang.toLowerCase()],
    accountNotFound: config.accountNotFound[JSON.parse(localStorage.getItem("session")).lang.toLowerCase()],
    sessionExpired: config.sessionExpired[JSON.parse(localStorage.getItem("session")).lang.toLowerCase()],
    sessionExpiredText: config.sessionExpiredText[JSON.parse(localStorage.getItem("session")).lang.toLowerCase()],
    accountError: config.accountError[JSON.parse(localStorage.getItem("session")).lang.toLowerCase()],
}

