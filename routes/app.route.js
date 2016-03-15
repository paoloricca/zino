$(function () {

	$("#index").click(function () {
		router.navigate('', true, true);
	});

    $("#test").click(function () {
        router.navigate('test', true, true);
    });

    $("#test2").click(function () {
        router.navigate('test2', true, true);
    });

    window.App = {
		Models: {},
		Collections: {},
		Views: {},
		Router: {}
    };

	App.Router = Backbone.Router.extend({
		routes: {
			'': 'index',
			'show/:id': 'show',
			'test': 'test',
			'test2': 'test2'
		},
		index: function () {
			$("#app").empty().append("Index route has been called..");
		},
		test: function () {
    		$("#app").empty().append("Test route has been called..");
		},
		test2: function () {
    		$("#app").empty().append("Test2 route has been called..");
		},
		show: function (id) {
			$(document.body).append("Show route has been called.. with id equals : " + id);
		},
		default: function (other) {
			$(document.body).append("This route is not hanled.. you tried to access: " + other);
		}

	});

	router = new App.Router();
	//Backbone.history.start();
	Backbone.history.start({ pushState: true });
	router.navigate('', true, true);

});