var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({ title: 'Post value' });
});

router.post('/info', function(req, res, next) {
  // res.send('respond with a resource');
  console.log("Hitting server side..!");
  res.setHeader('Access-Control-Allow-Origin','*')
  res.send(JSON.stringify({ title: 'Post value' }));
  
});

module.exports = router;
