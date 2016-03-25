var app_view_models_edit = Backbone.View.extend({
    _id: null,
    idParent: null,
    descE: null,
    onConfirm: null,
    events: {
        "click #btnOk": "btnOk_click"
    },
    initialize: function () {
        this.render();
        this.draw();
    },
    render: function () {
        this.$el.html(loadTemplate(this.$el, 'app.template.models.edit'));
    },
    draw: function () {
        var self = this;
        $("#txt-modal-models-edit-descE").val("");
        if (this.descE != null && this.descE != "") {
            $("#txt-modal-models-edit-descE").val(this.descE);
        }
    },
    show: function () {
        this.draw();
        $("#modal-models-edit").modal();
    },
    hide: function () {
        $("#modal-models-edit").modal("hide");
    },
    btnOk_click: function () {
        this.descE = $("#txt-modal-models-edit-descE").val();
        if (this.onConfirm != null) {
            window[this.onConfirm]();
        }
    },
});