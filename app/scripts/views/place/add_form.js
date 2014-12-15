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
			instance.addMarker();
		});
		return this;
	},

	addMarker: function(){
		var pos = new google.maps.LatLng(this.position.coords.latitude, this.position.coords.longitude);
		var myMarker = new google.maps.Marker({
			map: this.map,
			position: pos,
			label: 'You are here',
			draggable: true
		});
	}

});

_.extend(window.PlaceAddFormView.prototype, MappableViewConcern);
