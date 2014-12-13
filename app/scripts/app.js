window.App = Backbone.View.extend({

	initialize: function(){
		
		Parse.initialize(
			window.config.PARSE_APPLICATION_ID,
			window.config.PARSE_JAVASCRIPT_KEY
		);

		console.log('starting app');

		this.router = new Router({
			app: this
		});
		Backbone.history.start();
		
		//Load the Google map once
		this.once('mapLoaded', function(){
			console.log('mapLoaded event');
			this.haveMap = true;
		}, this);
		this._loadMap();

		this._checkLogin();
	},
	
	switchPage: function(view){
		console.log('switchPage()');
		var inactive = $('section.active')
		inactive.attr('class', 'inactive')
		view.render();
		view.$el.attr('class', 'active')
	},
	
	_checkLogin: function(){
		var currentUser = UserModel.current();
		if(!currentUser){
			console.log('not logged in');
			this.router.navigate('user/loginForm',{
				trigger: true
			});
		}
	},

	_loadMap: function() {
		console.log('loading map now');
		var instance = this;
		window.mapLoaded = function(){
			console.log('about to trigger event');
			instance.trigger('mapLoaded');
		};

		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&' +
		'callback=mapLoaded&key=' + window.config.GOOGLE_API_KEY;
		document.body.appendChild(script);
	}


});