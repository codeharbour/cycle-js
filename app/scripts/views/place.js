window.PlaceView = Backbone.View.extend({

	template: window['JST']['app/templates/place.tpl'],

	events: {
		'click button#addRating': '_rate'
	},

	render: function(){
		this.$el.html(this.template());
		return this;
	},

	_rate: function(){
		console.log('_rate()');

		var currentUser = UserModel.current();
		var stars = parseInt(this.$('#cafe-rating').val(), 10);
		var comment = this.$('#cafe-comment').val();

		var rating = new RatingModel();
		rating.set('stars', stars);
		rating.set('comment', comment);
		var userRelation = rating.relation('user');
		userRelation.add(currentUser);
		var placeRelation = rating.relation('place');
		placeRelation.add(this.model);

		rating.save(null, {
			success: function(rating){
				// Execute any logic that should take place after the object is saved.
				console.log('success');
				Device.alert('Thank you for your rating');
				window.location = "#"	//FIXME use the router here
			},
			error: function(gameScore, error){
				// Execute any logic that should take place if the save fails.
				// error is a Parse.Error with an error code and message.
				Device.alert('Failed to create rating, with error code: ' + error.message);
			}
		});

	}
});