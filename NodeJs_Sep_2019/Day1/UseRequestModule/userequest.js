let req = require('request');
req('http://www.google.com',(err,res,body)=>{
    console.log('error:', err);
    console.log('statuscode',res && res.statusCode);
    console.log('body', body);
})