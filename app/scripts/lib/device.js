window.Device = {
	
	alert: function(message){
		if(window.cordova){	//on mobile device
			navigator.notification.alert(message);
		}
		else{	//on browser
			window.alert(message);
		}
	}
}