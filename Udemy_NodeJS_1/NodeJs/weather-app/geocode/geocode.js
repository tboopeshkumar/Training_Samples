const request = require('request');
const axios = require('axios');
const weather = require('./../weather/weather');

var geoCodeAddress = function (address, callback) {
    var encodedAddress = encodeURIComponent(address);
   

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
        }, (error, response, body) => {
            var errorMessage = undefined;
            var results = undefined;
            if(error) {
                errorMessage = 'Unable to conenct to google servers.';
            } else if (body.status === 'ZERO_RESULTS') {
                errorMessage = 'Unable to find that address.';
            } else if (body.status === 'OK') {
                results = {
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                }
            }
            callback(errorMessage, results);
        }
    );
}

var geoCodeAddressPromise = function (address) {
    var encodedAddress = encodeURIComponent(address);
    var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;
     return axios.get(geocodeUrl).then((response) => {
        if(response.data.status === 'ZERO_RESULTS') {
            throw new Error('Unable to find that address.');
        } else if(response.data.status === 'OK') {
            var latitude = response.data.results[0].geometry.location.lat;
            var longitude = response.data.results[0].geometry.location.lng;
            console.log(`Address: ${response.data.results[0].formatted_address}`);
            return weather.getWeatherpromise(latitude, longitude);
        }
     })
}

module.exports = {
    geoCodeAddress,
    geoCodeAddressPromise
}