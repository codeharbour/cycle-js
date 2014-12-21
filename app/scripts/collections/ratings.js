window.RatingsCollection = Parse.Collection.extend({
	model: RatingModel,
	
	initialize: function(models, options){
		Parse.Collection.prototype.initialize.apply(this, arguments);
		console.log("rating collection initialize()");
		if(arguments.length == 1 && !Array.isArray(models)){
			options = models;
		}
		this.place = options.place;
	},

});