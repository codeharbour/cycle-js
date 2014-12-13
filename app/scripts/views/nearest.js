window.NearestView = Backbone.View.extend({

	template: window['JST']['app/templates/nearest.tpl'],

	initialize: function(options){
		Backbone.View.prototype.initialize.apply(this, arguments);
	},

	addLocationToMap: function(){
		console.log('addLocationToMap()');
		var instance = this;
		Device.getLocation(function(position){
			console.log('got location: ', position);
			instance.drawMap(position);
		});
	},

	addPlaces: function() {
		console.log('addPlaces()');
		var instance = this;
	    var Place = PlaceModel;
	    var query = new Parse.Query(Place);

	    query.find({
	      success: function(results) {
	        for (var i = 0; i < results.length; i++) {
	          instance.addPlace(results[i]);
	        }
	      },
	      error: function(error) {
	        console.log("Error: " + error.code + " " + error.message);
	      }
	    });
	  },
	  
	addPlace: function(place){
		console.log('addPlace()');
        var placeLocation = place.get('location');
        var placeName = place.get('name');
        var pos = new google.maps.LatLng(
          placeLocation.latitude,
          placeLocation.longitude
        );
        var marker = new google.maps.Marker({
          position: pos,
          map: this.map,
          title: placeName
        });
		
	},

	drawMap: function(position){
		console.log('drawMap()');
		var pos = new google.maps.LatLng(
			position.coords.latitude,
			position.coords.longitude
		);

		var mapOptions = {
			center: pos,
			zoom: 14,
			zoomControl: true,
			scaleControl: true
		};
		this.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
		this.addPlaces();
	},

	render: function(){
		this.$el.html(this.template());
		this.addLocationToMap();
		return this;
	}

});

_.extend(window.NearestView.prototype, MappableViewConcern);
