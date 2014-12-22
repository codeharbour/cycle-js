window.PositionModel = Backbone.Model.extend({

	asGeoPoint: function(){
		return new Parse.GeoPoint({
			latitude: this.get('latitude'),
			longitude: this.get('longitude')
		});
	},

	asGoogleMapsLatLng: function(){
		return new google.maps.LatLng(
			this.get('latitude'),
			this.get('longitude')
		);
	}
});