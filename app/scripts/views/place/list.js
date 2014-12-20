window.PlaceListView = Backbone.View.extend({

	template: window['JST']['app/templates/place/list.tpl'],
	
	render: function(){
		console.log('place list view render()');
		this.$el.html(this.template({
			collection: this.collection
		}));
		return this;
	}

});