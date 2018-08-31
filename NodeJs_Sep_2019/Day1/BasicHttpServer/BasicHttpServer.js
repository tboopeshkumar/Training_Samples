let http = require('http');
let fs = require('fs');

let server = http.createServer((req,res)=>{    
   
    fs.readFile('./index.html', (err,dataFromFile)=>{
        if(err){

        }
        else{
            res.setHeader('Content-Type','text/html');
            res.statusCode =200;
            res.end(dataFromFile.toString());
        }
    });
    
});

server.listen(3000,()=>{
    console.log('Server listening on port 3000!');
});