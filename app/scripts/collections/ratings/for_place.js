window.ForPlaceRatingsCollection = RatingsCollection.extend({
	
	initialize: function(models, options){
		RatingsCollection.prototype.initialize.apply(this, arguments);
	},
	
	fetch: function(options){
		this.query = (new Parse.Query(RatingModel)).equalTo("place", this.place.id);
		RatingsCollection.prototype.fetch.apply(this, arguments);
	}
});