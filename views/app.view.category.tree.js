var app_view_category_tree = Backbone.View.extend({
    selectedId: "",
    events: {
        //"click #btnAddStructureCategory": "addStructureCategory_click"
    },
    initialize: function () {
        this.render();
        this.draw();
    },
    render: function () {
        this.$el.html(loadTemplate(this.$el, 'app.template.category.tree'));
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
        var category = $(".tree");
        category.empty();
        try {
            spinner.show();
            $.ajax({
                url: appConfig.apiPrefix + 'category',
                dataType: 'json',
                type: 'get',
                data: {
                    idAccount: userStorage.Account._id
                },
                success: function (data, textStatus, jqXHR) {
                    if (data.length > 0) {
                        for (i = 0; i <= data.length-1; i++) {
                            if (data[i].idParent != "") {
                                if ($("#" + data[i].idParent).attr("class") == "" || $("#" + data[i].idParent).attr("class") == undefined) {
                                    $("#" + data[i].idParent).attr("class", "branch")
                                    var parentText = $("#" + data[i].idParent).children("span").html();
                                    $("#" + data[i].idParent).empty().append('<input id="chk-' + data[i].idParent + '" type="checkbox"><label for="chk-' + data[i].idParent + '"></label><a href="#">' + parentText + '</a>');
                                    $("#" + data[i].idParent).append('<ul><li id="' + data[i]._id + '" class=""><input id="chk-' + data[i]._id + '" type="checkbox"><label for="chk-' + data[i]._id + '"></label><span>' + data[i].descE + '</span></li></ul>');
                                } else {
                                    $("#" + data[i].idParent).children("ul").append('<li id="' + data[i]._id + '" class=""><input id="chk-' + data[i]._id + '" type="checkbox"><label for="chk-' + data[i]._id + '"></label><span>' + data[i].descE + '</span></li>');
                                }
                            } else {
                                category.append('<li id="' + data[i]._id + '" class=""><input id="chk-' + data[i]._id + '" type="checkbox"><label for="chk-' + data[i]._id + '"></label><span>' + data[i].descE + '</span></li>');
                            }
                        }
                        $('.tree').treed();
                        $('.tree input').click(function () {
                            if (this.checked) {
                                _app_view_category_tree.selectedId += ',' + this.id.substring(this.id.indexOf("-") + 1);
                            } else {
                                _app_view_category_tree.selectedId = _app_view_category_tree.selectedId.split(',' + this.id.substring(this.id.indexOf("-") + 1)).join('');
                            }
                            console.log(_app_view_category_tree.selectedId);
                            _app_view_category_tree.toolBar();
                        })
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
