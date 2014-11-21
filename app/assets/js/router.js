window.Router = Backbone.Router.extend({

	routes: {
		'': 'home',
		'nearest': 'nearest'
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
	},

	nearest: function(){
		console.log('in nearest route');
		if(!this._nearestView){
			this._nearestView = new NearestView({
				el: '#app'
			});
		}
		this._nearestView.render();
	}
});
