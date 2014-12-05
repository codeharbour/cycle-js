window.App = Backbone.View.extend({

	initialize: function(){
		
		Parse.initialize(
			window.config.PARSE_APPLICATION_ID,
			window.config.PARSE_JAVASCRIPT_KEY
		);

		console.log('starting app');

		this.router = new Router({
			app: this
		});
		Backbone.history.start();
		
		this._checkLogin();
	},
	
	switchPage: function(view){
		console.log('switchPage()');
		var inactive = $('section.active')
		inactive.attr('class', 'inactive')
		view.render();
		view.$el.attr('class', 'active')
	},
	
	_checkLogin: function(){
		var currentUser = UserModel.current();
		if(!currentUser){
			console.log('not logged in');
			this.router.navigate('user/loginForm',{
				trigger: true
			});
		}
	},

});