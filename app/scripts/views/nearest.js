window.NearestView = Backbone.View.extend({

	template: window['JST']['app/templates/nearest.tpl'],

	initialize: function(options){
		Backbone.View.prototype.initialize.apply(this, arguments);
		this.places = new NearestPlacesCollection()
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
		var instance = this;
		this.places.fetch({
			success: function(collection){
				instance._fetchCollectionSuccess();
			},
			error: function(error) {
				console.log("Error: " + error.code + " " + error.message);
			}
		});
	},

	_fetchCollectionSuccess: function(){
		console.log('fetch collection sucess');
		this.addPlaces();
		if(!this._placeListView){
			this._placeListView = new PlaceListView({
				el: 'ol.cafe-list',
				collection: this.places
			});
		}
		this._placeListView.render();
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
