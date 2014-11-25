cycle-js
========

# Installation

   bower install
   cordova platform add android
   cordova plugin add org.apache.cordova.geolocatio

Create app/scripts/config.js from app/scripts/config_example.js and fill in fields.

# Building for android

   grunt cordova
   cordova run android

#deploying site

   grunt build
   divshot push --app fixie-app