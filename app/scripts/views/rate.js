window.RateView = Backbone.View.extend({

	template: window['JST']['app/templates/rate.tpl'],
	
	render: function(){
		this.$el.html(this.template());
		return this;
	}
});