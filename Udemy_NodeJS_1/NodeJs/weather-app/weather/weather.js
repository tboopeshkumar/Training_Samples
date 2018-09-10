const request = require('request');
const axios = require('axios');

var getWeather = function (latitude, longitude, callback) {
    request({
        url: `https://api.darksky.net/forecast/e740c6d8aad36db3b2f3621948c24a0d/${latitude},${longitude}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            })
        } else {
            callback('Unable to find weather')
        }
        });
    }

    var getWeatherpromise = function(latitude, longitude) {
        var weatherUrl = `https://api.darksky.net/forecast/e740c6d8aad36db3b2f3621948c24a0d/${latitude},${longitude}`;
        return axios.get(weatherUrl).then((response) => {
            console.log(`Current Temperatue is ${response.data.currently.temperature}. But it feels like ${response.data.currently.apparentTemperature}`);
        });
    }

    module.exports = {
        getWeather,
        getWeatherpromise
    }