var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/404.html', function(req, res, next) {
  res.render('404');
});

router.get('/contacts.html', function(req, res, next) {
  res.render('contacts');
});

router.get('/login.html', function(req, res, next) {
  res.render('login');
});

router.get('/register.html', function(req, res, next) {
  res.render('register');
});

module.exports = router;
