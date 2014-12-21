window.RateView = Backbone.View.extend({

	template: window.JST['app/templates/rate.tpl'],

	initialize: function(){
		Backbone.View.prototype.initialize.apply(this, arguments);
		this._collection = [];
	},

	setNearby: function(collection){
		this._collection = collection;
	},

	render: function(){
		this.$el.html(this.template({
			nearby: this._collection
		}));
		return this;
	}
});