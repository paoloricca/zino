var error = Backbone.View.extend({
    title: "",
    text: "",
    initialize: function () {
        this.render();
    },
    render: function () {
        var self = this;
        $("#" + self.collection.id).html(
            '<i class="fa fa-exclamation-triangle" style="font-size:200%;"></i>' +
            '<div id="errorTitle"></div>' +
            '<div id="errorText"></div>'
        );
    },
    draw: function () {
        var self = this;
        $("#errorTitle").html("");
        $("#errorText").html("");
        $("#errorTitle").append("<p>" + self.title + "</p>");
        $("#errorText").append("<p>" + self.text + "</p>");
    },
    show: function () {
        this.draw();
        $("#" + this.collection.id).show().delay(3000).fadeOut();
    },
    hide: function () {
        $("#" + this.collection.id).hide();
    },
});
/* {initialize} system-objects */
$(function () {
    appError = new error({
        collection: {
            id: "container_error",
        }
    });
});