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
			instance._addMarker();
		});
		return this;
	},

	_addMarker: function(){
		var pos = new google.maps.LatLng(this.position.get('latitude'), this.position.get('longitude'));
		var marker = new google.maps.Marker({
			map: this.map,
			position: pos,
			label: 'You are here',
			draggable: true
		});
		var instance = this;
		google.maps.event.addListener(marker, 'dragend', function(event){
			instance._dragMarker(event);
		});
	},

	_dragMarker: function(event){
		this._updatePosition(event.latLng.lat(), event.latLng.lng());
	}

});

_.extend(window.PlaceAddFormView.prototype, MappableViewConcern);
