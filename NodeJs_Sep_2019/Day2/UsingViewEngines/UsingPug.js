let express = require('express');
let bodyPareser = require('body-parser');
let path = require('path');
let router = require('./routes/products');
let app = express();

//set the view engine
app.set('views',path.join(__dirname,"views"));
app.set('view engine','pug');

app.use(bodyPareser.urlencoded({extended:true}));

app.use('/',router);  //app.use('/api',router);

app.use((req,res)=>{

    res.statusCode = 404;
    res.sendFile('errorpage.htm', {root :__dirname});
});
app.listen(3000,()=>{
    console.log("Server listening in port 3000!");
})