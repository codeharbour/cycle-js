window.ForPlaceRatingsCollection = RatingsCollection.extend({

	fetch: function(options){
		this.query = (new Parse.Query(RatingModel)).equalTo("place", this.place.id);
		RatingsCollection.prototype.fetch.apply(this, arguments);
	}
});