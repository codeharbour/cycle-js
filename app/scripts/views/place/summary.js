window.PlaceSummaryView = Backbone.View.extend({

	template: window.JST['app/templates/place/summary.tpl'],

	initialize: function(options){
		Backbone.View.prototype.initialize.apply(this, arguments);
		this.position = options.position;
	},

	render: function(){
		console.log('place summary view render()');
		var instance = this;
		this.model.ratings(function(){
			instance.$el.html(instance.template({
				model: instance.model,
				position: instance.position
			}));
		});
		return this;
	}

});