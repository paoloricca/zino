var app_view_category = Backbone.View.extend({
    events: {
        "click #btnAddStructureCategory": "addStructureCategory_click",
        "click #btnEditStructureCategory": "editStructureCategory_click",
        "click #btnDeleteStructureCategory": "deleteStructureCategory_click",
    },
    initialize: function () {
        this.render();
        this.draw();
    },
    render: function () {
        this.$el.html(loadTemplate(this.$el, 'app.template.category'));
        //this.$('#modal-category-edit-container').on('load', this.category_load());
    },
    draw: function () {
        var self = this;
    },
    addStructureCategory_click: function () {
        $("#modal-category-edit-title").html("Aggiungi una nuova categoria");
        _app_view_category_edit._id = "";
        _app_view_category_edit.idParent = _app_view_category_tree.selectedId.substring(1);
        _app_view_category_edit.descE = null;
        _app_view_category_edit.onConfirm = "addStructureCategory_click_onConfirm";
        _app_view_category_edit.show();
        console.log(_app_view_category_edit.idParent);
    },
    editStructureCategory_click: function () {
        $("#modal-category-edit-title").html("Modifica la categoria selezionata");
        _app_view_category_edit._id = _app_view_category_tree.selectedId.substring(1);
        if ($("#" + _app_view_category_edit._id).children("span").length > 0) {
            _app_view_category_edit.descE = $("#" + _app_view_category_edit._id).children("span").html();
        } else {
            _app_view_category_edit.descE = $("#" + _app_view_category_edit._id).children("a").html();
        }
        _app_view_category_edit.onConfirm = "editStructureCategory_click_onConfirm";
        _app_view_category_edit.show();
    },
    deleteStructureCategory_click: function () {
        _app_view_category_edit._id = _app_view_category_tree.selectedId.substring(1);
        appAlert.hideTitle = true;
        appAlert.collection.defaultConfirm = appMessage.defaultConfirm;
        appAlert.collection.onConfirm = "deleteStructureCategory_click_onConfirm";
        appAlert.show();

    },
});
$(function () {
    
});
/* global function */
function deleteStructureCategory_click_onConfirm() {
    try {
        spinner.show();
        $.ajax({
            url: appConfig.apiPrefix + 'category',
            dataType: 'json',
            type: 'delete',
            data: {
                _id: _app_view_category_edit._id
            },
            success: function (data, textStatus, jqXHR) {
                console.log(data)
                _app_view_category_tree.selectedId = "";
                _app_view_category_tree.toolBar();
                _app_view_category_tree.load();
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
function editStructureCategory_click_onConfirm() {
    try {
        spinner.show();
        $.ajax({
            url: appConfig.apiPrefix + 'category',
            dataType: 'json',
            type: 'put',
            data: {
                _id: _app_view_category_edit._id,
                descE: _app_view_category_edit.descE
            },
            success: function (data, textStatus, jqXHR) {
                console.log(data)
                _app_view_category_edit.hide()
                _app_view_category_tree.selectedId = "";
                _app_view_category_tree.toolBar();
                _app_view_category_tree.load();
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
function addStructureCategory_click_onConfirm() {
    try {
        spinner.show();
        $.ajax({
            url: appConfig.apiPrefix + 'category',
            dataType: 'json',
            type: 'post',
            data: {
                idAccount: userStorage.Account._id,
                _id: _app_view_category_edit._id,
                idParent: _app_view_category_edit.idParent,
                descE: _app_view_category_edit.descE
            },
            success: function (data, textStatus, jqXHR) {
                console.log(data)
                _app_view_category_edit.hide()
                _app_view_category_tree.selectedId = "";
                _app_view_category_edit.idParent = "";
                _app_view_category_tree.toolBar();
                _app_view_category_tree.load();
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