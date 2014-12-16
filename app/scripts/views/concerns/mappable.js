window.MappableViewConcern = {

	addLocationToMap: function(cb){
		console.log('addLocationToMap()');
		var instance = this;
		Device.getLocation(function(position){
			console.log('got location: ', position);
			instance._updatePosition(position.coords.latitude, position.coords.longitude);
			instance.drawMap(cb);
		});
	},

	drawMap: function(cb){
		console.log('drawMap()');
		var pos = new google.maps.LatLng(
			this.position.get('latitude'),
			this.position.get('longitude')
		);
	
		var mapOptions = {
			center: pos,
			zoom: 14,
			zoomControl: true,
			scaleControl: true
		};
		this.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
		cb();
	},

	_updatePosition: function(lat, long){
		if(!this.position){
			this.position = new PositionModel();
		}
		this.position.set('latitude', lat);
		this.position.set('longitude', long);
		console.log('position now: ', this.position.attributes);
	}

};