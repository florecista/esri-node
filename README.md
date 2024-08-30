# ESRI ArcGIS API for JavaScript with NodeJS

This example uses ESRI's ArcGIS API for JavaScript with NodeJS to plot a vehicle on a map.

The geolocation is published by a REST service and the client webpage polls for that position every 10 seconds.

![image](https://github.com/user-attachments/assets/26d43652-57d7-478d-a66a-6eb96f529f51)

Follow commands needed to run this are:
```
npm init -y
npm install express request cors
node server.js
```

Disclaimer: there's a little more work on the path updates. I'm working on an updates locationService in Python.
