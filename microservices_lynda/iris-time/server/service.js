'use strict'

const express = require('express');
const service = express();
const axios = require('axios').default;
const moment = require('moment');

service.get('/service/:location',(req,res,next)=>{
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(req.params.location)}`)
        .then((response)=>{
            console.log("GeoAPI response" ,response);
            const location = response.data.results[0].geometry.location;
            const timestamp = +moment().format("X");
            axios.get(`https://maps.googleapis.com/maps/api/timezone/json?location=${location.lat},${location.lng}&timestamp=${timestamp}`)
                .then((tres)=>{
                    const result = tres.data;
                    const timeString = moment.unix(timestamp+result.dstOffset+result.rawOffset).utc().format('dddd, MMMM Do YYYY, h:mm:ss a');
                    res.json({result : timeString});
                }).catch((err)=>{
                    console.log(err);
                    res.sendStatus(500);
                });
        })
        .catch((err)=>{
            console.log(err);
            res.sendStatus(500);
        });
})

module.exports =service;