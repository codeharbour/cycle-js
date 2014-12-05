window.RateView = Backbone.View.extend({

	template: window['JST']['app/templates/rate.tpl'],

	render: function(){
		var nearby = [{},{}];
		this.$el.html(this.template({
			nearby: nearby
		}));
		return this;
	}
});