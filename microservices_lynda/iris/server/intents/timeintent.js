'use strict'
const axios = require('axios').default;
module.exports.process = function process(intentData, registry,cb){
    console.log(`Getting time details...`)
    if(intentData.intent[0].value !== 'time'){
        return cb(new Error(`Expected time intent , but got ${intentData.intent[0].value}`));
    }
    if(!intentData.location){
        return cb(new Error(`Missing location in the time intent`));
    }
    const location  = intentData.location[0].value;
    const service = registry.get('time');
    if(!service) return cb(false,'No service available for time intent');
    axios.get(`http://${service.ip}:${service.port}/service/${location}`).
    then((tres)=>{
        if(tres.status != 200 || !tres.data.result){
            console.log(tres.status);
            console.log(tes.data);
            return cb(false, `I had a problem finding out time in ${location}`);
        }
        return cb(false,`In ${location}, it is now ${tres.data.result}`);
    }).catch((err)=>{
            console.log(err);
            return cb(false, `I had a problem finding out time in ${location}`);
    })
}