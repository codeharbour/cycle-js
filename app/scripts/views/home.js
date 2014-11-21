window.HomeView = Backbone.View.extend({

	template: window['JST']['app/templates/home.tpl'],
	
	render: function(){
		this.$el.html(this.template());
		return this;
	}
});