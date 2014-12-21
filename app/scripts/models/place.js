window.PlaceModel = Parse.Object.extend({
	className: "Place",

	initialize: function(options){
		Parse.Object.prototype.initialize.apply(this, arguments);
		this._ratings = new ForPlaceRatingsCollection([], {
			place: this
		});
	},

	ratings: function(cb){
		if(this._ratings.length){	//have ratings already
			cb();
		}
		else{
			console.log('fetching ratings');
			this._ratings.fetch({
				success: cb,
				error: function(collection, error){
					console.log("Error: " + error.code + " " + error.message);
				},
				place: this
			});
		}
	},

	numRatings: function(){
		return this._ratings.length;
	},

	averageRating: function(){
		total =  this._ratings.reduce(function(memo, item){
			return (memo + item.get('stars'));
		}, 0);
		var accurate = (total / this.numRatings());
		return Math.round(accurate);
	}

});