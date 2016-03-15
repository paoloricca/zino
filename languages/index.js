var model_languages_index = Backbone.Model.extend({
    defaults: {
        a73de28bba77d3f8f2c0d6f6ef0bf4b9: {
            ita: "Caricamento in corso...",
            eng: "Loading..."
        },
        lbl_registrati: {
            ita: "Registrati",
            eng: "Lorem ipsum",
        },
        b7b03a5aa4e446e44715c9ceb45644c1: {
            ita: "Seleziona una rivendita",
            eng: "Lorem ipsum",
        },
        a37683e1e872e44544d060dc02ae343c: {
            ita: "Seleziona un dispositivo",
            eng: "Lorem ipsum",
        },
        d0e57dd5667fe440912eb85793e41b78: {
            ita: "Profilo operatore",
            eng: "Lorem ipsum",
        },
        cbcaea31e04657d10b1b0b7514042172: {
            ita: "Seleziona un profilo operatore",
            eng: "Lorem ipsum",
        },
    }
});
$(function () {
    current_languages = new model_languages_index();
});