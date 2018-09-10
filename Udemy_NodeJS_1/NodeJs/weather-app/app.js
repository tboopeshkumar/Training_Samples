
const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true,
            default: 'India'
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

//Asynchronous Call
// geocode.geoCodeAddress(argv.a, (errorMessage, results) => {
//     if (errorMessage) {
//         console.log(errorMessage);
//     } else {
//         console.log(`Address: ${results.address}`);
//         weather.getWeather(results.latitude, results.longitude, (errorMessage, results) => {
//             if (errorMessage) {
//                 console.log(errorMessage);
//             } else {
//                 console.log(`Current Temperatue is ${results.temperature}. But it feels like ${results.apparentTemperature}`);
//             }
//         });
//     }
// });

//Promise Call (Synchronous)
geocode.geoCodeAddressPromise(argv.a).catch((e) => {
    if(e.code === 'ENOTFOUND') {
            console.log('Unable to Connect to server.');
        } else {
        console.log(e.Message);
        }
});
