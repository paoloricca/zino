var app_view_models_tree = Backbone.View.extend({
    selectedId: "",
    events: {
        //"click #btnAddStructureCategory": "addStructureCategory_click"
    },
    initialize: function () {
        this.render();
        this.draw();
    },
    render: function () {
        this.$el.html(loadTemplate(this.$el, 'app.template.models.tree'));
    },
    draw: function () {
        var self = this;
    },
    toolBar: function () {
        if ((this.selectedId != "" && this.selectedId.substring(1).split(',').length == 1) ||
            this.selectedId == "") {
            $("#btnAddStructureCategory").attr("class", "btn btn-default btn-sm");
        } else {
            $("#btnAddStructureCategory").attr("class", "btn btn-default btn-sm disabled");
        }
        if (this.selectedId != "" && this.selectedId.substring(1).split(',').length >= 1) {
            $("#btnDeleteStructureCategory").attr("class", "btn btn-default btn-sm");
        } else {
            $("#btnDeleteStructureCategory").attr("class", "btn btn-default btn-sm disabled");
        }
        if (this.selectedId != "" && this.selectedId.substring(1).split(',').length == 1) {
            $("#btnEditStructureCategory").attr("class", "btn btn-default btn-sm");
        } else {
            $("#btnEditStructureCategory").attr("class", "btn btn-default btn-sm disabled");
        }
    },
    load: function () {
        var models = $("#models-container");
        models.empty();
        try {
            spinner.show();
            $.ajax({
                url: appConfig.apiPrefix + 'models',
                dataType: 'json',
                type: 'get',
                data: {
                    idAccount: userStorage.Account._id
                },
                success: function (data, textStatus, jqXHR) {
                    console.log(data);
                    if (data.length > 0) {
                        for (i = 0; i <= data.length - 1; i++) {
                            var type = '<i class="fa fa-circle magenta" data-toggle="tooltip" title="Valutativo"></i>',
                            menu =
                                '<div class="dropdown">' +
                                    '<div class="dropdown-toggle" data-toggle="dropdown">' +
                                        '<a class="btn btn-xs fa fa-angle-down" data-toggle="tooltip" title="Menu"></a>' +
                                    '</div>' +
                                    '<ul id="' + data[i]._id + '" class="dropdown-menu">' +
                                        '<li><a href="#" id="btnEditModels">Modifica</a></li>' +
                                        '<li class="divider"></li>' +
                                        '<li><a href="#">Anteprima</a></li>' +
                                        '<li><a href="#">Struttura</a></li>' +
                                        '<li><a href="#" id="btnDeleteModels">Elimina</a></li>' +
                                    '</ul>' +
                                '</div>';
                            models.append(
                                '<tr>' +
                                    '<th class="col-xs-1" index="' + eval(i+1) + '" scope="row">' + menu + '</th>' +
                                    '<td class="col-xs-10" id="td-' + data[i]._id + '">' + data[i].descE + '</td>' +
                                    '<td class="col-xs-1">' + type + '</td>' +
                                '</tr>');
                        }
                        $('[data-toggle="tooltip"]').tooltip({ html: true });
                        $('[data-toggle="popover"]').popover({ html: true });
                    }
                    spinner.hide();
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
});
$(function () {

});
/* global function */
