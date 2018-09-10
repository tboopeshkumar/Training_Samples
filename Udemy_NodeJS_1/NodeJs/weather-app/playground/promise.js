const geocode = require('./../geocode/geocode');

var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        geocode.geoCodeAddress(address, (errorMessage, results) => {
            if (errorMessage) {
                reject(errorMessage);
            } else {
                resolve(results);
            }
        });
    });
}

geocodeAddress('erode').then((results => {
   console.log(`Address: ${results.address}`);
}, (err) =>{
    console.log('error');
}));