window.Router = Backbone.Router.extend({

	routes: {
		'': 'home',
		'nearest': 'nearest',
		'rate': 'rate',
		'user/loginForm': 'userLoginForm',
		'user/login': 'userLogin',
		'user/signUpForm': 'userSignUpForm',
		'user/signUp': 'userSignUp'
	},

	initialize: function(options){
		this.app = options.app;
		Backbone.Router.prototype.initialize.apply(this, arguments);
	},

	home: function(){
		console.log('in home route');
		if(!this._homeView){
			this._homeView = new HomeView({
				el: '#app #home'
			});
		}
		this.app.switchPage(this._homeView);
	},

	nearest: function(){
		console.log('in nearest route');
		if(!this._nearestView){
			this._nearestView = new NearestView({
				el: '#app #nearest'
			});
		}
		this.app.switchPage(this._nearestView);
	},

	rate: function(){
		console.log('in rate route');
		if(!this._rateView){
			this._rateView = new RateView({
				el: '#app #rate'
			});
		}
		this.app.switchPage(this._rateView);
	},

	userLoginForm: function(){
		console.log('in user login form route');
		if(!this._userLoginFormView){
			this._userLoginFormView = new UserLoginFormView({
				el: '#app #userLoginForm',
				router: this
			});
		}
		this.app.switchPage(this._userLoginFormView);
	},

	userLogin: function(){
		console.log('in user login route');
	},

	userSignUpForm: function(){
		console.log('in user sign up form route');
		if(!this._userSignUpFormView){
			this._userSignUpFormView = new UserSignUpFormView({
				el: '#app #userSignUpForm'
			});
		}
		this.app.switchPage(this._userSignUpFormView);
	},

});
