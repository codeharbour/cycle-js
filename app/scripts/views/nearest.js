window.NearestView = Backbone.View.extend({

	template: window['JST']['app/templates/nearest.tpl'],

	initialize: function(options){
		Backbone.View.prototype.initialize.apply(this, arguments);
		//Load the Google map once
		this.once('mapLoaded', function(){
			console.log('mapLoaded event');
			this.haveMap = true;
			this.addLocationToMap();
		}, this);
		this._loadMap();
	},

	addLocationToMap: function(){
		console.log('addLocationToMap()');
		var instance = this;
		this.getLocation(function(position){
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

	getLocation: function(callback) {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(callback);
		} else {
			alert("Geolocation is not supported by this browser.");
		}
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
		this.$el.html(this.template(
		));
		if(this.haveMap){
			this.addLocationToMap();
		}
		return this;
	},

	_loadMap: function() {
		console.log('loading map now');
		var instance = this;
		window.mapLoaded = function(){
			console.log('about to trigger event');
			instance.trigger('mapLoaded');
		};

		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&' +
		'callback=mapLoaded&key=' + window.config.GOOGLE_API_KEY;
		document.body.appendChild(script);
	}

});