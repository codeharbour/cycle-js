window.PlaceAddFormView = Backbone.View.extend({

	template: window['JST']['app/templates/place/add_form.tpl'],

	events: {
		'click button#addPlace': '_add'
	},

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
	},

	_add: function(){
		console.log('add');
		var name = this.$('#cafe-name').val();
		var currentUser = UserModel.current();
		var place = new PlaceModel();
		var userRelation = place.relation('createdBy');
		userRelation.add(currentUser);
		place.set('name', name);
		place.set('location', this.position.asGeoPoint());
		var instance = this;
		place.save(null, {
			success: function(place){
				console.log('success');
				instance._addRating(place);
			},
			error: function(stuff, error){
				// Execute any logic that should take place if the save fails.
				// error is a Parse.Error with an error code and message.
				Device.alert('Failed to create place, with error code: ' + error.message);
			}
		});
	},

	//FIXME move this to the model
	_addRating: function(place){
		var currentUser = UserModel.current();
		var stars = parseInt(this.$('#cafe-rating').val(), 10);
		var comment = this.$('#cafe-comment').val();

		var rating = new RatingModel();
		rating.set('stars', stars);
		rating.set('comment', comment);
		var userRelation = rating.relation('user');
		userRelation.add(currentUser);
		var placeRelation = rating.relation('place');
		placeRelation.add(place);

		rating.save(null, {
			success: function(rating){
				// Execute any logic that should take place after the object is saved.
				console.log('success');
				Device.alert('Thank you for your rating');
				window.location = "#"	//FIXME use the router here
			},
			error: function(stuff, error){
				// Execute any logic that should take place if the save fails.
				// error is a Parse.Error with an error code and message.
				Device.alert('Failed to create rating, with error code: ' + error.message);
			}
		});

	}

});

_.extend(window.PlaceAddFormView.prototype, MappableViewConcern);
