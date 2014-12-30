window.ShowRatingView = Backbone.View.extend({

	template: window.JST['app/templates/rating/show.tpl'],

	render: function(){
		this.$el.html(this.template({
			model: this.model
		}));
		return this;
	}

});
