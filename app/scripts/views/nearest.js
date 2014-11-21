window.NearestView = Backbone.View.extend({

	template: window['JST']['app/templates/nearest.tpl'],
	
	loadMaps: function() {
	    var script = document.createElement('script');
	    script.type = 'text/javascript';
	    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&' +
	    'callback=runApp&key=' + window.config.GOOGLE_API_KEY;
	    document.body.appendChild(script);
	},

	addPlaces: function(map) {

	    var Place = Parse.Object.extend("Place");
	    var query = new Parse.Query(Place);

	    query.find({
	      success: function(results) {
	        for (var i = 0; i < results.length; i++) {
	          var place = results[i]
	          var placeLocation = place.get('location');
	          var placeName = place.get('name');
	          var pos = new google.maps.LatLng(
	            placeLocation.latitude,
	            placeLocation.longitude
	          );
	          var marker = new google.maps.Marker({
	            position: pos,
	            map: map,
	            title: placeName
	          });
	        }
	      },
	      error: function(error) {
	        console.log("Error: " + error.code + " " + error.message);
	      }
	    });
	  },
	  
	  getLocation: function(callback) {
		    if (navigator.geolocation) {
		      navigator.geolocation.getCurrentPosition(callback);
		    } else {
		      x.innerHTML = "Geolocation is not supported by this browser.";
		    }
		  },


	render: function(){
		
		
		this.getLocation(function(position) {
			    var pos = new google.maps.LatLng(
			      position.coords.latitude,
			      position.coords.longitude
			    );

			    var mapOptions = {
			      center: pos,
			      zoom: 14
			    };
			    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
			    addPlaces(map);
			  });
			

		
		this.$el.html(this.template());
		return this;
	}
});