window.NearestPlacesCollection = PlacesCollection.extend({

	fetch: function(options){
		this.query = (new Parse.Query(PlaceModel)).withinKilometers("location", this.position.asGeoPoint(), 5);
		PlacesCollection.prototype.fetch.apply(this, arguments);
	}

});