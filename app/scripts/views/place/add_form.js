window.PlaceAddFormView = Backbone.View.extend({

	template: window['JST']['app/templates/place/add_form.tpl'],

	initialize: function(options){
		this.router = options.router;
		Backbone.View.prototype.initialize.apply(this, arguments);
	},

	render: function(){
		this.$el.html(this.template());
		var instance = this;
		this.addLocationToMap(function(){
			console.log('in map callback');
		});
		return this;
	}

});

_.extend(window.PlaceAddFormView.prototype, MappableViewConcern);
