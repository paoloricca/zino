﻿var app_view_models_edit = Backbone.View.extend({
    _id: null,
    idParent: null,
    descE: null,
    type: null,
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
        if (this.descE != null && this.descE != "") {
            $("#txt_model_descE").val(this.descE);
        } else {
            $("#txt_model_descE").val("");
        }
        if (this.type != null && this.type.toString() != "") {
            $("#txt-model-type-value").val(this.type);
            $("#spn-model-type-selected-text").html(
                $("#spn-model-type-selected-text-" + this.type).parent("a").html());
        } else {
            $("#txt-model-type-value").val("");
            $("#spn-model-type-selected-text").html("...");
        }
    },
    show: function () {
        this.draw();
        initLabel();
        $("#modal-models-edit").modal();
    },
    hide: function () {
        $("#modal-models-edit").modal("hide");
    },
    btnOk_click: function () {
        if (validator("model-edit-form")) {
            this.descE = $("#txt_model_descE").val();
            this.type = $("#txt-model-type-value").val();
            if (this.onConfirm != null) {
                window[this.onConfirm]();
            }
        }
    },
});