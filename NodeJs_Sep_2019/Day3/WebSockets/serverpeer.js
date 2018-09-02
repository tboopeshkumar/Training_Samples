let socket = require('socket.io');
let http = require('http');
let fs= require('fs');

let server = http.createServer((req,res)=>{
    fs.readFile(__dirname+"/clientpeer.html", (err,data)=>{
        if(err){

        }else{
            res.writeHead(200,{'Content-Type': 'text/html'});
            res.end(data);
        }
    });
});

server.listen(4000,'127.0.0.1',()=>{
    console.log('Server running at port 4000');
});

let io = socket.listen(server);
io.sockets.on('connection',(skt)=>{
    setInterval(()=>{
        let dataToBeSent = new Date();
        console.log('Emitting data for client');
        skt.emit('messageForClient',dataToBeSent)
    },2000);
    skt.on('messageFromClient',(dataFromClient)=>{
        console.log('Data Received : '+ dataFromClient);
    });
})