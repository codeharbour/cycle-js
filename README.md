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

#deploying site


Update config with a valid key for the remote site’s domain.

    grunt build
    divshot push --app fixie-app
