let request=require('request');
let fs = require('fs');

let evtEmtr = request("http://www.google.com");
let response='';
evtEmtr.on('data',(chunk)=>{
    console.log('chunk received');
    response += chunk;
});

evtEmtr.on('error',(err)=>{
    console.log(err);
});

evtEmtr.on('end', ()=>{
    console.log('Request ended !');
    fs.writeFile('./mygoogleresonse.html',response,()=>{
        
    });
});

