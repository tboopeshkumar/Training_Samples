let express = require('express');
let bodyPareser = require('body-parser');
let app = express();
app.use(bodyPareser.urlencoded({extended:true}));
let router = express.Router();

let products=[
    {name:"Mobile", price:20000},
    {name:"LED TV", price:100000}
];

router.route('/products').get((req,res)=>{
    //res.set('Content-Type','application/json');
    res.json(products);
});

router.route('/products/:name').get((req,res)=>{
   
    let pName = req.params.name;
    var product = products.find(prodct=>prodct.name == pName);
    if(product){
        res.json(product);
    }else{
        res.redirect('/products');
    }

});


app.use('/',router);  //app.use('/api',router);

app.get('/',(req,res)=>{
    //res.send("<h1>Hello Express!</h1>");
    res.sendFile('./index.htm',{root:__dirname})
    // let produces=[
    //     {name:"Mobile", price:20000},
    //     {name:"LED TV", price:100000}
    // ];
    // res.set('Content-Type','application/json');
    // res.json(produces);
});

app.post('/login', (req,res)=>{
    console.log(req.body);
    console.log('Within Post!');
    res.send('success');
    //res.sendFile('dashboard.htm', {root:__dirname});
});

app.use((req,res)=>{

    res.statusCode = 404;
    res.sendFile('errorpage.htm', {root :__dirname});
});
app.listen(3000,()=>{
    console.log("Server listening in port 3000!");
})