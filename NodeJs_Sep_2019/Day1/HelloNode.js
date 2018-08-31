// Built-in Modules
let os = require('os');
let toMB = function(totalBytes){
    return Math.round((totalBytes/1024/1024)*100/100);
}

console.log("Total Memory in RAM :" + toMB(os.totalmem()));