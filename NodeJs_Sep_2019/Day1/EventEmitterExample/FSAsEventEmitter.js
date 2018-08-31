let fs = require('fs');

let readableStream  = fs.createReadStream('./input.txt');
let writableStream = fs.createWriteStream('./output.txt');
let allData='';

//fired whenever emit('data') is called by fs!
readableStream.on('data',(chunk)=>{
allData+=chunk;
console.log("read chunk of data");
writableStream.write(chunk);
});

//fired whenever emit('end') is called by fs!
readableStream.on('end',()=>{
console.log(allData.toString());
writableStream.end();
});