window.PlaceModel = Parse.Object.extend({
	className: "Place",

	initialize: function(options){
		Parse.Object.prototype.initialize.apply(this, arguments);
		this.ratings = new ForPlaceRatingsCollection([], {
			place: this
		});
	},

	getRatings: function(cb){
		if(this.ratings.length){	//have ratings already
			cb();
		}
		else{
			console.log('fetching ratings');
			this.ratings.fetch({
				success: cb,
				error: function(collection, error){
					console.log("Error: " + error.code + " " + error.message);
				},
				place: this
			});
		}
	},

	numRatings: function(){
		return this.ratings.length;
	},

	averageRating: function(){
		total =  this.ratings.reduce(function(memo, item){
			return (memo + item.get('stars'));
		}, 0);
		var accurate = (total / this.numRatings());
		return Math.round(accurate);
	},

	distanceFrom: function(position){
		// setup our variables
		var placeLocation = this.get('location');

		var radianLat1 = placeLocation.latitude * (Math.PI  / 180);
		var radianLng1 = placeLocation.longitude * (Math.PI  / 180);

		var radianLat2 = position.get('latitude') * (Math.PI  / 180);
		var radianLng2 = position.get('longitude') * (Math.PI  / 180);

		// sort out the radius, MILES or KM?
		var earth_radius = 6378.1; // (km = 6378.1) OR (miles = 3959) - radius of the earth

		// sort our the differences
		var diffLat =  (radianLat1 - radianLat2);
		var diffLng =  (radianLng1 - radianLng2);

		// put on a wave (hey the earth is round after all)
		var sinLat = Math.sin(diffLat / 2);
		var sinLng = Math.sin(diffLng / 2); 

		var a = Math.pow(sinLat, 2.0) + Math.cos(radianLat1) * Math.cos(radianLat2) * Math.pow(sinLng, 2.0);

		// work out the distance
		var distance = earth_radius * 2 * Math.asin(Math.min(1, Math.sqrt(a)));

		// return the distance
		return distance;
	},

	asGoogleMapsLatLng: function(){
		var placeLocation = this.get('location');
		return new google.maps.LatLng(
			placeLocation.latitude,
			placeLocation.longitude
		);
	}

});