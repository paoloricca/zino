var app_view_index = Backbone.View.extend({
    events: {
        //"click #btnLogin": "login"
    },
    initialize: function () {
        this.render();
        this.draw();
    },
    render: function () {
        this.$el.html(loadTemplate(this.$el, 'index'));

        /*
        var jsonTerms = JSON.parse(appAlert.terms);
        console.log(jsonTerms.termKey);
        */
        // appAlert.terms = '{ "termKey": ' + termValue + '}';
        appAlert.collection.title = "Title";
        appAlert.collection.defaultConfirm = "defaultConfirm";
        appAlert.collection.onConfirm = "onConfirm";
        appAlert.show();

    },
    draw: function () {
        var self = this;
    },});
$(function () {
    
});