'use strict'
module.exports.process = function process(intentData,cb){
    if(intentData.intent[0].value !== 'time'){
        return cb(new Error(`Expected time intent , but got ${intentData.intent[0].value}`));
    }
    if(!intentData.location){
        return cb(new Error(`Missing location in the time intent`));
    }
    return(false,`I don't yet know the time in ${intentData.location[0].value}`);
}