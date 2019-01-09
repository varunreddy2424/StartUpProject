var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({ title: 'Post value' });
});

router.post('/info', function(req, res, next) {
  // res.send('respond with a resource');
  console.log("Hitting server side..!", req.body);
  res.setHeader('Access-Control-Allow-Origin','*')
  res.send(JSON.stringify({ title: 'Post value' }));
  
  var url = "mongodb://localhost:27017/";
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("meandb");
    dbo.collection("users").insertOne(req.body, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });
});

module.exports = router;
