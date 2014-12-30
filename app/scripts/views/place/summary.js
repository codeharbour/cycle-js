window.PlaceSummaryView = Backbone.View.extend({

	template: window.JST['app/templates/place/summary.tpl'],

	events:{
		'click .details-link': '_details'
	},

	initialize: function(options){
		Backbone.View.prototype.initialize.apply(this, arguments);
		this.position = options.position;
	},

	render: function(){
		console.log('place summary view render()');
		var instance = this;
		this.model.getRatings(function(){
			instance.$el.html(instance.template({
				model: instance.model,
				position: instance.position
			}));
		});
		return this;
	},

	_details: function(e){
		console.log('_details');
		console.log(e.currentTarget);
		$('body').addClass('fixed-page').append('<div id="overlay" class="overlay"></div>');
		e.stopPropagation();
		e.preventDefault();

		var entry = this.$('.reviews');
		entry.empty();
		var instance = this;
		this.model.ratings.each(function(model){
			var showRatingView = new ShowRatingView({
				model: model
			});
			showRatingView.render();
			entry.append(showRatingView.el);
		});

	}

});