var express = require('express');
var router = express.Router();

let products=[
  {name:"Mobile", price:20000},
  {name:"LED TV", price:100000},
  {name:"Laptop", price:300000}
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/products', (req,res,nxt)=>{
  res.render('products', {allProducts: products});
})
module.exports = router;
