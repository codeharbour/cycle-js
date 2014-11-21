var runApp = function() {
  'use strict';

  window.app = new App();
};

if(window.cordova){
	console.log('running on device');
	document.addEventListener("deviceready", runApp, false);
}
else{
	console.log('running on browser');
	$(document).ready(function(){
		console.log('document is ready');
		runApp();
	});
}
