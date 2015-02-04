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
		console.log('getLocation()');
		if(navigator.geolocation){
			navigator.geolocation.getCurrentPosition(
				callback,
				function(error){
					console.log('got error: ', error);
					Device.alert('Geolocation problem: ' + error.message);
				},
				{
					timeout: 10000,	//wait for 10 second to get a fix
					enableHighAccuracy: true,
					maximumAge: 20000
				}
			);
		}
		else{
			Device.alert("Geolocation is not supported");
		}
	}

};