window.App = Parse.View.extend({

	initialize: function(){
		
		Parse.initialize(
			window.config.PARSE_APPLICATION_ID,
			window.config.PARSE_JAVASCRIPT_KEY
		);

		console.log('starting app');

		this.router = new Router(this);
		Backbone.history.start();
	}
});