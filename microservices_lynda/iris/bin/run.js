'use strict';
const service = require('../server/service');
const http = require('http');
const slackClient = require('../server/slackClient');
const witToken ='M5OTUCLEY4T62ALFFLMUFCE5SCLZJLAG';
const witClient =require('../server/witClient')(witToken);

const serviceRegistry = service.get('serviceRegistry');

// An access token (from your Slack app or custom integration - usually xoxb)
const token = 'xoxb-406466494004-431190337313-lNJEIZAjJ2hDaSup5oFKCxat';
const slackLogLevel ='info';
const rtm = slackClient.init(token,slackLogLevel,witClient,serviceRegistry);
rtm.start();

const server = http.createServer(service);
slackClient.addAuthenticatedHandler(rtm,()=>{
    
})
server.listen(3000);
server.on('listening',()=>{
    console.log(`iris is listening on ${server.address().port} in ${service.get('env')}`);
});