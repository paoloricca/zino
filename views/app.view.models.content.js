var app_view_models_content = Backbone.View.extend({
    _id: null,
    type: null,
    onConfirm: null,
    events: {
        //"click #btnOk": "btnOk_click"
    },
    initialize: function () {
        this.render();
        this.draw();
    },
    render: function () {
        this.$el.html(loadTemplate(this.$el, 'app.template.models.content'));
    },
    draw: function () {

    },
    loadPreview: function () {

    },
    loadStructure: function () {
        spinner.show();
        $.ajax({
            url: appConfig.apiPrefix + 'models/' + this._id,
            dataType: 'json',
            type: 'get',
            success: function (data, textStatus, jqXHR) {
                console.log(data);
                if (data.length > 0) {
                    $("#modelTitle").html(data[0].descE);
                    //_app_view_models_edit.type = data[0].type;

                    /* revisions */
                    $.ajax({
                        url: appConfig.apiPrefix + 'modelsRevisions',
                        dataType: 'json',
                        type: 'get',
                        data: {
                            idModel: data[0]._id
                        },
                        success: function (data, textStatus, jqXHR) {
                            if (data.length > 0) {
                                var idRevision = data[0]._id;


                            } else {
                                // no revisions founded.
                            }
                            spinner.hide();
                        },
                        error: function (request, error) {
                            displayError(error);
                            spinner.hide();
                        }
                    });
                    
                }
                spinner.hide();
            },
            error: function (request, error) {
                displayError(error);
                spinner.hide();
            }
        });
    }
    //show: function () {
    //    this.draw();
    //    initLabel();
    //    $("#modal-models-edit").modal();
    //},
    //hide: function () {
    //    $("#modal-models-edit").modal("hide");
    //},
    //btnOk_click: function () {
    //    if (validator("model-edit-form")) {
    //        this.descE = $("#txt_model_descE").val();
    //        this.type = $("#txt-model-type-value").val();
    //        if (this.onConfirm != null) {
    //            window[this.onConfirm]();
    //        }
    //    }
    //},
});