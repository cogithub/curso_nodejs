var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let variable = 'Hello, World!';
  res.render('index', { title: 'variable' });
});

module.exports = router;
