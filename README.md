cycle-js
========

# Building

Create app/scripts/config.js from app/scripts/config_example.js and fill in fields.

## For android

### First use

cordova platform add android
cordova plugin add org.apache.cordova.geolocatio

### Iterating

grunt cordova
cordova run android