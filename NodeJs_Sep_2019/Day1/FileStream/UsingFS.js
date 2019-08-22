let fs = require('fs');
fs.readFile('./data.txt', (error,dataFromFile)=>{
    if(error){
        console.log(`error: ${error}`);
    }
    else{
        console.log(`Reading the file async : ${dataFromFile.toString()}`);
    }

});

let content = fs.readFileSync('./data.txt',"UTF-8");
console.log(content.toString());
console.log("Program Ended!");