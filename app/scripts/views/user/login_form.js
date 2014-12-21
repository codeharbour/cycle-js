window.UserLoginFormView = Backbone.View.extend({

	template: window.JST['app/templates/user/login_form.tpl'],

	events: {
		'click button[data-url]': '_route',
		'click button#login': '_login'
	},

	initialize: function(options){
		this.router = options.router;
		Backbone.View.prototype.initialize.apply(this, arguments);
	},

	render: function(){
		this.$el.html(this.template());
		return this;
	},

	_route: function(e){
		console.log('_route');
		route = e.currentTarget.getAttribute('data-url');
		console.log("routing to: ", route);
		this.router.navigate(route, {
			trigger: true
		});
	},

	_login: function(){
		console.log('_login');

		var username = this.$('#username').val();
		var password = this.$('#password').val();

		UserModel.logIn(username, password, {
			success: function(user){
				console.log('success');
				window.location = "#";	//FIXME go back to start
			},
			error: function(user, error){
				// The login failed. Check error to see why.
				Device.alert("Error: " + error.code + " " + error.message);
			}
		});

	}

});