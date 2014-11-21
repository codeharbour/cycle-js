(function() {
  'use strict';

  var getLocation = function(callback) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(callback);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }

  Parse.initialize(
    window.config.PARSE_APPLICATION_ID,
    window.config.PARSE_JAVASCRIPT_KEY
  );

  var addPlaces = function(map) {

    var Place = Parse.Object.extend("Place");
    var query = new Parse.Query(Place);

    query.find({
      success: function(results) {
        for (var i = 0; i < results.length; i++) {
          var place = results[i]
          var placeLocation = place.get('location');
          var placeName = place.get('name');
          var pos = new google.maps.LatLng(
            placeLocation.latitude,
            placeLocation.longitude
          );
          var marker = new google.maps.Marker({
            position: pos,
            map: map,
            title: placeName
          });
        }
      },
      error: function(error) {
        console.log("Error: " + error.code + " " + error.message);
      }
    });
  };


  getLocation(function(position) {
    var pos = new google.maps.LatLng(
      position.coords.latitude,
      position.coords.longitude
    );

    var mapOptions = {
      center: pos,
      zoom: 14
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    addPlaces(map);
  });



})();
