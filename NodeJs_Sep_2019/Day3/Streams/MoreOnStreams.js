let fs = require('fs');

let readableStream  = fs.createReadStream('./input.txt');
let writableStream = fs.createWriteStream('./output.txt');

readableStream.pipe(writableStream);