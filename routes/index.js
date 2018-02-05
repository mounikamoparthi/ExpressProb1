var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { message: 'Hello World' });
});
router.get('/:userName', function(req, res, next) {
  console.log(req.params)
  req.params['greeting'] = "Hello"
  res.render('index', req.params);
});
router.get('/:greeting/:userName', function(req, res, next) {
  console.log(req.params)
  res.render('index', req.params);
});

module.exports = router;
