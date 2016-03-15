var loader = Backbone.View.extend({
    initialize: function () {
        this.render();
        this.draw()
    },
    render: function () {
        $('<div class="alert alert-warning">' +
            '<i class="fa fa-spinner fa-pulse" style="float:right"></i>' +
            '<span class="control-label">' + appMessage.loader + '</span>' +
            '</div>').appendTo($("#" + this.collection.id));
    },
    draw: function () {
    },
    show: function () {
        this.draw();
        $("#" + this.collection.id).show();
    },
    hide: function () {
        $("#" + this.collection.id).hide();
    }
});
/* {initialize} system-objects */
$(function () {
    appLoader = new loader({
        collection: {
            id: "container_loader",
        }
    });
});
