var runApp = function(){
	console.log('\'Allo \'Allo!');
};

if(window.cordova){
	console.log('running on device');
	document.addEventListener("deviceready", runApp, false);
}
else{
	console.log('running on browser');
	runApp();
}