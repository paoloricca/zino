var error = Backbone.Model.extend({
    defaults: {
        descE: "undefined",
        targetID: ""
    }
});
var errors = Backbone.Collection.extend({
    model: error
});
var control = Backbone.Model.extend({
    defaults: {
        id: "",
        name: "",
        type: "",
        required: "",
        parent: ""
    }
});