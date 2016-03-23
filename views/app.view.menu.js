var menu = Backbone.View.extend({
    id: null,
    events: {
        "click #btnAccedi": "test",
        "click #btnLogout": "btnLogout_click",
        "click #aSwitchChannel": "aSwitchChannel_click",
    },
    initialize: function () {
        this.id = this.$el[0].id;
        this.render();
        this.draw();
        //initLang(this.id, current_languages_menu);
    },
    render: function () {
        this.$el.html(
            loadTemplate(this.$el, null, this.collection.templateName));
    },
    draw: function () {
        var self = this;
    },
    show: function () {
        $(".menuContainer").show();
    },
    hide: function () {
        $(".menuContainer").hide();
    },
    btnAccedi_click: function () {
        try {
            spinner.show();
            $.ajax({
                url: appConfig.apiPrefix + 'session',
                dataType: 'json',
                type: 'post',
                data: { username: $('#txt-username').val(), password: $('#txt-password').val() },
                success: function (data, textStatus, jqXHR) {
                    if (data.length > 0) {
                        /* Setting user auth-parameters on local storage */
                        console.log({ session: data });
                        userStorage.Account = data[0];
                        localStorage.setItem("session", JSON.stringify(userStorage));
                        appMenu.load();
                        spinner.hide();
                        router.navigate('structure', true, true);
                    }
                    else {
                        spinner.hide();
                        displayError(appMessage.accountError);
                    }
                    //// Gestione errori
                    //if (data[0].Errors.List.length > 0) {
                    //    for (e = 0; e <= data[0].Errors.List.length - 1; e++) {
                    //        // Se l'Account dell'Utente è in scadenza fra (n) giorni.
                    //        if (data[0].Errors.List[e].returnCode == "450") {

                    //        }
                    //        // Se l'Account dell'utente è scaduto e la relativa operatività rientra nell'ulteriore periodo di (n) validità.
                    //        if (data[0].Errors.List[e].returnCode == "451") {

                    //        }
                    //        // Se l'Account dell'utente è scaduto e risulta superato anche l'ulteriore periodo di (n) validità.
                    //        if (data[0].Errors.List[e].returnCode == "452") {

                    //        }
                    //        // Autenticazione fallita.
                    //        if (data[0].Errors.List[e].returnCode == "453") {
                    //            appNotify.type = "ERR";
                    //            appNotify.title = "Autenticazione";
                    //            appNotify.text = appMessage.accountError;
                    //            appNotify.show();
                    //        }
                    //    }
                    //    spinner.hide();
                    //} else {
                    //    /* Setting user auth-parameters on local storage */
                    //    userStorage.Account = data[0].Account;
                    //    userStorage.Attore = data[0].Attore;
                    //    userStorage.Persona = data[0].Persona;
                    //    userStorage.SelectedChannels = data[0].SelectedChannels;
                    //    localStorage.setItem("session", JSON.stringify(userStorage));
                    //    appMenu.collection.onConfirm = "get_Bandi;get_CountRegioniArticoli";
                    //    appMenu.load();
                    //    spinner.hide();
                    //}
                },
                error: function (request, error) {
                    displayError(error);
                    spinner.hide();
                }
            });
        } catch (err) {
            printError(getDelegateName(arguments), err.message);
            spinner.hide();
        }
    },
    btnLogout_click: function () {
        clearSession();
    },
    load: function () {
        var self = this;
        try {
            if (userStorage.Account._id != undefined) {
                
                $("#dLogin").hide();
                $("#dMyMenu").show();
                $("#spnNominativo").html(userStorage.Account.name);
                $("#spnRuoloStatus").show();
                $("#help").show();
                //if (self.collection.onConfirm != null) {
                //    if (self.collection.onConfirm.indexOf(";") > -1) {
                //        arOnConfirm = self.collection.onConfirm.split(";");
                //        for (i = 0; i <= arOnConfirm.length - 1; i++) {
                //            window[arOnConfirm[i]]();
                //        }
                //    } else {
                //        window[self.collection.onConfirm]();
                //    }
                //}

            } else {
                $("#dLogin").show();
                $("#dMyMenu").hide();
                $("#spnRuoloStatus").hide();
                $("#help").hide();
            }
        } catch (err) {
            displayError("appMenu.load: " + err.message);
        }
    },
});
/* init {menu} */
$(function () {
    appMenu = new menu({
        el: $("#container_menu"),
        collection: {
            id: "container_menu",
            functionName: null,
            templateName: "menu",
        }
    });
});
