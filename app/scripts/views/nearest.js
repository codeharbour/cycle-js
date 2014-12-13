window.NearestView = Backbone.View.extend({

	template: window['JST']['app/templates/nearest.tpl'],

	initialize: function(options){
		Backbone.View.prototype.initialize.apply(this, arguments);
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

	render: function(){
		this.$el.html(this.template());
		var instance = this;
		this.addLocationToMap(function(){
			console.log('in map callback');
			instance.addPlaces();
		});
		return this;
	}

});

_.extend(window.NearestView.prototype, MappableViewConcern);
