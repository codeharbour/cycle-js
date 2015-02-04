cycle-js
========

# Installation

    npm install
    bower install
    cordova plugin add org.apache.cordova.geolocation
    cordova plugin add org.apache.cordova.dialogs
    cordova platform add android
    cordova platform add ios

Create app/scripts/config.js from app/scripts/config_example.js and fill in fields.

# Building for apps

    grunt cordova
    cordova etc..

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

* No caching of data for better mobile data usage
* No form validation
* Places and ratings should be stored for offline use.
* Fix JST build task
* Resolve some of the jsint warnings
* Views should persist for the life of the app.
* switch to native maps for cordova app
* Create SVG for app icons