﻿$(function () {

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
			'category': 'category',
			'models': 'models',
			'show/:id': 'show',
			'test': 'test',
			'test2': 'test2'
		},
		index: function () {
			return new app_view_index({ el: $("#app") }).initialize();
		},
		category: function () {
		    return new app_view_category({ el: $("#app") }).initialize();
		},
		models: function () {
		    return new app_view_models({ el: $("#app") }).initialize();
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
	//Backbone.history.start();

	/* init router */
	router = new App.Router();
	Backbone.history.start({ pushState: true });

	/* init app start app with index */
	router.navigate('', true, true);

});