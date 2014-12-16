window.PositionModel = Backbone.Model.extend({

	asGeoPoint: function(){
		return new Parse.GeoPoint({
			latitude: this.get('latitude'),
			longitude: this.get('longitude')
		});
	}
});