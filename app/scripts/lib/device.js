window.Device = {
	
	alert: function(message){
		if(window.cordova){	//on mobile device
			navigator.notification.alert(message);
		}
		else{	//on browser
			window.alert(message);
		}
	},

	getLocation: function(callback){
		if(navigator.geolocation){
			navigator.geolocation.getCurrentPosition(callback);
		}
		else{
			Device.alert("Geolocation is not supported by this browser.");
		}
	}

}