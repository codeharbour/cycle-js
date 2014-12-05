window.UserSignUpFormView = Backbone.View.extend({

	template: window['JST']['app/templates/user/sign_up_form.tpl'],

	events: {
		'click button#signUp': '_signUp'
	},

	render: function(){
		this.$el.html(this.template());
		return this;
	},

	_signUp: function(){
		console.log('_signUp');
		
		var email = this.$('#email').val();
		var username = this.$('#username').val();
		var password = this.$('#password').val();
		
		var user = new UserModel();
		user.set("username", username);
		user.set("password", password);
		user.set("email", email);
		
		user.signUp(null, {
			success: function(user){
				console.log('success');
				window.location = "#";	//FIXME go back to start
			},
			error: function(user, error){
				// Show the error message somewhere and let the user try again.
				alert("Error: " + error.code + " " + error.message);
			}
		});
	}
});