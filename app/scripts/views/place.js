window.PlaceView = Backbone.View.extend({

	template: window['JST']['app/templates/place.tpl'],

	render: function(){
		this.$el.html(this.template());
		return this;
	}
});