window.PlaceSummaryView = Backbone.View.extend({

	template: window.JST['app/templates/place/summary.tpl'],

	render: function(){
		console.log('place summary view render()');
		var instance = this;
		this.model.ratings(function(){
			instance.$el.html(instance.template({
				model: instance.model
			}));
		});
		return this;
	}

});