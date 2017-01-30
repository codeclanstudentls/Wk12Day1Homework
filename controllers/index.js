var express = require('express');
var router = express.Router();

router.use(require('./client/build/src/models/films.js'));

router.get('/', function(req res){
  res.json( {data: 'Welcome to our API!'} );
});

router.get('/about', function(req, res){
  res.json( {data: 'All about us!'});
});

module.exports = router;