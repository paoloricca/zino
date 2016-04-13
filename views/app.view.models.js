var app_view_models = Backbone.View.extend({
    events: {
        "click #btnAddModels": "addModels_click",
        "click #btnEditModel": "editModel_click",
        "click #btnStructureModel": "structureModel_click",
        "click #btnDeleteModel": "deleteModel_click",
    },
    initialize: function () {
        this.render();
        this.draw();
    },
    render: function () {
        this.$el.html(loadTemplate(this.$el, 'app.template.models'));
    },
    draw: function () {
        var self = this;
    },
    addModels_click: function () {
        $("#modal-models-edit-title").html("Crea un nuovo formulario");
        _app_view_models_edit.descE = null;
        _app_view_models_edit.type = null;
        _app_view_models_edit.onConfirm = "addModels_click_onConfirm";
        _app_view_models_edit.show();
    },
    editModel_click: function (e) {
        $("#modal-models-edit-title").html("Modifica il formulario selezionato");
        _app_view_models_edit._id = $(e.toElement).parent("li").parent("ul").attr("id");
        spinner.show();
        $.ajax({
            url: appConfig.apiPrefix + 'models/' + _app_view_models_edit._id,
            dataType: 'json',
            type: 'get',
            success: function (data, textStatus, jqXHR) {
                console.log(data);
                if (data.length > 0) {
                    _app_view_models_edit.descE = data[0].descE;
                    _app_view_models_edit.type = data[0].type;
                    _app_view_models_edit.onConfirm = "editModels_click_onConfirm";
                    _app_view_models_edit.show();
                }
                spinner.hide();
            },
            error: function (request, error) {
                displayError(error);
                spinner.hide();
            }
        });
    },
    deleteModel_click: function (e) {
        _app_view_models_edit._id = $(e.toElement).parent("li").parent("ul").attr("id");
        appAlert.hideTitle = true;
        appAlert.collection.defaultConfirm = appMessage.defaultConfirm;
        appAlert.collection.onConfirm = "deleteModels_click_onConfirm";
        appAlert.show();

    },
    structureModel_click: function (e) {
        //$("#modal-models-edit-title").html("Modifica il formulario selezionato");
        _app_view_models_content._id = $(e.toElement).parent("li").parent("ul").attr("id");
        _app_view_models_content.loadStructure();
    },
});
$(function () {

});
/* global function */
function deleteModels_click_onConfirm() {
    try {
        spinner.show();
        $.ajax({
            url: appConfig.apiPrefix + 'models',
            dataType: 'json',
            type: 'delete',
            data: {
                _id: _app_view_models_edit._id
            },
            success: function (data, textStatus, jqXHR) {
                console.log(data)
                _app_view_models_tree.selectedId = "";
                _app_view_models_tree.toolBar();
                _app_view_models_tree.load();
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
}
function editModels_click_onConfirm() {
    try {
        spinner.show();
        $.ajax({
            url: appConfig.apiPrefix + 'models',
            dataType: 'json',
            type: 'put',
            data: {
                _id: _app_view_models_edit._id,
                descE: _app_view_models_edit.descE,
                type: _app_view_models_edit.type,
            },
            success: function (data, textStatus, jqXHR) {
                console.log(data)
                _app_view_models_edit.hide()
                _app_view_models_tree.selectedId = "";
                _app_view_models_tree.toolBar();
                _app_view_models_tree.load();
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
}
function addModels_click_onConfirm() {
    try {
        spinner.show();
        $.ajax({
            url: appConfig.apiPrefix + 'models',
            dataType: 'json',
            type: 'post',
            data: {
                idAccount: userStorage.Account._id,
                descE: _app_view_models_edit.descE,
                type: _app_view_models_edit.type,
            },
            success: function (data, textStatus, jqXHR) {
                console.log(data)
                _app_view_models_edit.hide()
                _app_view_models_tree.selectedId = "";
                _app_view_models_edit.idParent = "";
                _app_view_models_tree.toolBar();
                _app_view_models_tree.load();
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
}