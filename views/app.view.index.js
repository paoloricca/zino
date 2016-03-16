var app_view_index = Backbone.View.extend({
    events: {
        //"click #btnLogin": "login"
    },
    initialize: function () {
        this.render();
        this.draw();
    },
    render: function () {
        this.$el.html(loadTemplate(this.$el, 'app.template.index'));
    },
    draw: function () {
        var self = this;
    },
});