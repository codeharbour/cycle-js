window.PlaceSummaryView = Backbone.View.extend({

	template: window.JST['app/templates/place/summary.tpl'],

	events:{
		'click .details-link': '_details',
		'click .close-button': '_closeRatings',
		'click #overlay': '_closeRatings'
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
		e.stopPropagation();
		e.preventDefault();
		$('body').addClass('fixed-page')
		this.$el.append('<div id="overlay" class="overlay"></div>');

		var entry = this.$('.reviews');
		entry.empty();
		this.model.ratings.each(function(model){
			var showRatingView = new ShowRatingView({
				model: model
			});
			showRatingView.render();
			entry.append(showRatingView.el);
		});
		this.$('.cafe__details').addClass('show');
	},

	_closeRatings: function(e){
		e.stopPropagation();
		e.preventDefault();
		$('body').removeClass('fixed-page');
		this.$('.cafe__details').removeClass('show');
		$('#overlay').remove('#overlay');
	}


});