window.NearestView = Backbone.View.extend({

	template: window.JST['app/templates/nearest.tpl'],

	initialize: function(options){
		Backbone.View.prototype.initialize.apply(this, arguments);
		this.places = new NearestPlacesCollection();
	},

	addPlaces: function() {
		console.log('addPlaces()');
		var instance = this;
		var bounds = new google.maps.LatLngBounds();
		bounds.extend(this.position.asGoogleMapsLatLng());
		this.places.each(function(model){
			instance.addPlace(model);
			bounds.extend(model.asGoogleMapsLatLng());
		});
		this.map.fitBounds(bounds);
	},

	addPlace: function(place){
		console.log('addPlace()');
		var pos = place.asGoogleMapsLatLng();
		var marker = new google.maps.Marker({
			position: pos,
			map: this.map,
			title: place.get('name')
		});
	},

	_fetchCollection: function(){
		this.places.position = this.position;
		var instance = this;
		this.places.fetch({
			success: function(collection){
				instance._fetchCollectionSuccess();
			},
			error: function(collection, error){
				console.log("Error: " + error.code + " " + error.message);
			}
		});
	},

	_fetchCollectionSuccess: function(){
		console.log('fetch collection sucess');
		this.addPlaces();
		var entry = this.$('ol.cafe-list');
		entry.empty();
		var instance = this;
		this.places.each(function(model){
			var placeSummaryView = new PlaceSummaryView({
				//el: 'ol.cafe-list',
				model: model,
				position: instance.position
			});
			placeSummaryView.render();
			entry.append(placeSummaryView.el);
		});
	},

	render: function(){
		this.$el.html(this.template());
		var instance = this;
		this.addLocationToMap(function(){
			console.log('in map callback');
			instance._fetchCollection();
		});
		return this;
	}

});

_.extend(window.NearestView.prototype, MappableViewConcern);
