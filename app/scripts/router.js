window.Router = Backbone.Router.extend({

	routes: {
		'': 'home',
		'nearest': 'nearest',
		'rate': 'rate',
		'place/:id': 'place',
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

		// User's location
		var currentUser = UserModel.current();
		var userGeoPoint = currentUser.get("location");
		console.log(userGeoPoint);
		// Create a query for places
		var query = new Parse.Query(PlaceModel);
		// Interested in locations near user.
		query.near("location", userGeoPoint);
		// Limit what could be a lot of points.
		query.limit(5);
		// Final list of objects
		var instance = this;
		query.find({
			success: function(places){
				instance._rateView.setNearby(places);
				instance.app.switchPage(instance._rateView);
			}
		});
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

	place: function(placeId){
		console.log('in place route: ', placeId);
		//TODO implement caching here for offline usage
		var query = new Parse.Query(PlaceModel);
		query.get(placeId, {
			success: function(place){
				// The object was retrieved successfully.
				this._placeView = new PlaceView({
					el: '#app #place',
					model: place
				});
				this.app.switchPage(this._placeView);
			},
			error: function(object, error){
				// The object was not retrieved successfully.
				// error is a Parse.Error with an error code and message.
				Device.alert("Error: " + error.code + " " + error.message);
			}
		});
	}

});
