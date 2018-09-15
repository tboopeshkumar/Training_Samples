'use strict';
const service = require('../server/service');
const http = require('http');
const axios = require('axios').default;
const server = http.createServer(service);

server.listen();
server.on('listening',()=>{
    console.log(`iris-time is listening on ${server.address().port} in ${service.get('env')}`);
    const announce = () =>{
        axios.put(`http://127.0.0.1:3000/service/time/${server.address().port}`)
            .then((res)=>{
                console.log(res.data);

            }).catch((err)=>{
                console.log(err);
                console.log('Error connecting Iris');
                return;
            })
    }

    announce();
    setInterval(announce, 15*1000);
});