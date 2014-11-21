window.Router = Backbone.Router.extend({

	routes: {
		"": "home"
	},

	initialize: function(options){
		this.app = options.app;
		Parse.Router.prototype.initialize.apply(this, arguments);
	},

	home: function(){
		console.log('in home route');
		if(!this._homeView){
			this._homeView = new HomeView({
				el: '#app'
			});
		}
		this._homeView.render();
	}
});
