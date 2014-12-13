window.MappableViewConcern = {

	addLocationToMap: function(cb){
		console.log('addLocationToMap()');
		var instance = this;
		Device.getLocation(function(position){
			console.log('got location: ', position);
			instance.drawMap(position, cb);
		});
	},

	drawMap: function(position, cb){
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
		cb();
	}

};