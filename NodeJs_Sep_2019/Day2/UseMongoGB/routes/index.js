let express = require('express');
let mongoDB = require('mongodb');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

let url ='mongodb://localhost:27017/';
let mongoClient = mongoDB.MongoClient;
//connect to MongoDB
//MongoClient -> mongodb package!
// get the records from DB and pass it to view to render!

router.get('/products',(req,res,next)=>{
  mongoClient.connect(url,(err,db)=>{
      if(err){
        console.log(err);
      }else{
        let dbo = db.db('products');
        let collection = dbo.collection('productlist');
        //find all records
        collection.find({}).toArray((err,result)=>{
          if(err){
            console.log(err);
          }else if(result.length){
            res.render('products',{allProducts : result})
          }
        });
      }
  });
  //res.render('products',{});
});




module.exports = router;
