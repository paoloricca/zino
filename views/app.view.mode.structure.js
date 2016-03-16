var app_view_structure = Backbone.View.extend({
    events: {
        "click #btnAddStructureCategory": "addStructureCategory_click"
    },
    initialize: function () {
        this.render();
        this.draw();
    },
    render: function () {
        this.$el.html(loadTemplate(this.$el, 'app.template.mode.structure'));
    },
    draw: function () {
        var self = this;
    },
    addStructureCategory_click: function () {
        //TODO...
    }
});