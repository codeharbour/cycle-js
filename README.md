cycle-js
========

# Installation

    bower install
    cordova plugin add org.apache.cordova.geolocation
    cordova plugin add navigator.notification.alert
    cordova platform add android

Create app/scripts/config.js from app/scripts/config_example.js and fill in fields.

# Building for android

    grunt cordova
    cordova run android

# deploying site


Update config with a valid key for the remote site’s domain.

    grunt build
    divshot push --app fixie-app


# logout

    window.localStorage.clear()

# notes

* Will wait up to 10 seconds to get a geolocation fix.
* Will use a previous geolocation fix if one has been found in the last 20 seconds.

# todo

* Finish nearest cafe page
* Add cafe functionality

# bugs

* No caching of data for better mobile data usage
* No form validation
* Places and ratings should be stored for offline use.
* Fix JST build task
* Resolve some of the jsint warnings
* Views should persist for the life of the app.
