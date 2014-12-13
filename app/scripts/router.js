window.Router = Backbone.Router.extend({

	routes: {
		'': 'home',
		'nearest': 'nearest',
		'rate': 'rate',
		'place/show/:id': 'placeShow',
		'place/add': 'placeAdd',
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

		var instance = this;
		Device.getLocation(function(position){	// User's location
			var userGeoPoint = new Parse.GeoPoint({latitude: position.coords.latitude, longitude: position.coords.longitude});
			console.log(userGeoPoint);
			// Create a query for places
			var query = new Parse.Query(PlaceModel);
			// Interested in locations near user.
			query.withinKilometers("location", userGeoPoint, 0.1);
			// Final list of objects
			query.find({
				success: function(places){
					instance._rateView.setNearby(places);
					instance.app.switchPage(instance._rateView);
				},
				error: function(object, error){
					Device.alert("Error: " + error.code + " " + error.message);
				}
			});
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

	placeShow: function(placeId){
		console.log('in place route: ', placeId);
		//TODO implement caching here for offline usage
		var query = new Parse.Query(PlaceModel);
		query.get(placeId, {
			success: function(place){
				// The object was retrieved successfully.
				this._placeShowView = new PlaceShowView({
					el: '#app #placeShow',
					model: place
				});
				this.app.switchPage(this._placeShowView);
			},
			error: function(object, error){
				// The object was not retrieved successfully.
				// error is a Parse.Error with an error code and message.
				Device.alert("Error: " + error.code + " " + error.message);
			}
		});
	},
	
	placeAdd: function(){
		console.log('in add place form route');
		if(!this._placeAddFormView){
			this._placeAddFormView = new PlaceAddFormView({
				el: '#app #placeAdd'
			});
		}
		this.app.switchPage(this._placeAddFormView);
	},


});
