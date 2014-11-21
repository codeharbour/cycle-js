window.App = Parse.View.extend({

	initialize: function(){
		console.log('starting app');
		
		this.router = new Router(this);
		Parse.history.start();
	}
});