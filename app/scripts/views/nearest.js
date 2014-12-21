window.NearestView = Backbone.View.extend({

	template: window.JST['app/templates/nearest.tpl'],

	initialize: function(options){
		Backbone.View.prototype.initialize.apply(this, arguments);
		this.places = new NearestPlacesCollection();
	},

	addPlaces: function() {
		console.log('addPlaces()');
		var instance = this;
		this.places.each(function(model){
			instance.addPlace(model);
		});
	},

	addPlace: function(place){
		console.log('addPlace()');
		var placeLocation = place.get('location');
		var placeName = place.get('name');
		var pos = new google.maps.LatLng(
			placeLocation.latitude,
			placeLocation.longitude
		);
		var marker = new google.maps.Marker({
			position: pos,
			map: this.map,
			title: placeName
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
		this.places.each(function(model){
			var placeSummaryView = new PlaceSummaryView({
				//el: 'ol.cafe-list',
				model: model
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
