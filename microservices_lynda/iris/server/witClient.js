'use strict'
const axios = require('axios');
module.exports = (token) =>{
    const ask = (message,cb)=>{
        console.log(`ask ${message}`);
        console.log(`token ${token}`);
        axios.default.get('https://api.wit.ai/message',{
            headers: { 'Authorization': 'Bearer '+token},
            params:{
                v: '20180909',
                q: message
            }
        }).then((res)=>{
            if(res.status != 200 ) return cb(`Expected status 200 but got${res.status}`);
            const witResponse = handleWitResponse(res.data);
            return cb(null,witResponse);
        }).catch((reason)=>{
            cb(reason)
        })
    }

    const handleWitResponse = (res)=>{
        return res.entities;
    }
    return {
        ask 
    }
}