window.UserLoginFormView = Backbone.View.extend({

	template: window['JST']['app/templates/user/login_form.tpl'],

	events: {
		'click button[data-url]': '_route'
	},

	initialize: function(options){
		this.router = options.router;
		Backbone.View.prototype.initialize.apply(this, arguments);
	},
	
	render: function(){
		this.$el.html(this.template());
		return this;
	},

	_route: function(e){
		console.log('_route');
		route = e.currentTarget.getAttribute('data-url');
		console.log("routing to: ", route);
		this.router.navigate(route, {
			trigger: true
		});
	}
});