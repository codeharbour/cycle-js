window.NearestPlacesCollection = PlacesCollection.extend({
	model: PlaceModel,
	query: (new Parse.Query(PlaceModel))
});