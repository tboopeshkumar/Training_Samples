let express = require('express');
let router = express.Router();
let products=[
    {name:"Mobile", price:20000},
    {name:"LED TV", price:100000},
    {name:"Laptop", price:300000}
];

router.route('/products').get((req,res)=>{
    //res.set('Content-Type','application/json');
   res.render('index', {message :'Rendered using PUG engine!!!'});
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
module.exports = router;