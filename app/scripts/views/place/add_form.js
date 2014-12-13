window.PlaceAddFormView = Backbone.View.extend({

	template: window['JST']['app/templates/place/add_form.tpl'],

	initialize: function(options){
		this.router = options.router;
		Backbone.View.prototype.initialize.apply(this, arguments);
	},

	render: function(){
		this.$el.html(this.template());
		return this;
	}

});

_.extend(window.NearestView.prototype, MappableViewConcern);
