let buff = new Buffer.from("Sample data to be written in buffer !");
console.log("Buffer : ",buff);
console.log("String UTF-8: " + buff.toString('utf-8'));
console.log("String BASE 64: " + buff.toString('base64'));

let buffWithSize = new Buffer.alloc(250);
let len =buffWithSize.write("Hello Buffer!!!");
console.log("Actual length of Buffer : " ,len);
console.log("Total length of the Buffer : ", buffWithSize.length);

let buf1 = new Buffer.from("First line of the String!");
let buf2= new Buffer.from("Second line of string!");
let buf3 = Buffer.concat([buf1,buf2]);
console.log("Concated Buffer : "+ buf3.toString());