var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', {title: 'Express1'});
// });
router.get('/', function(req, res, next) {
  res.render('index', {title: 'work',layout:'work'});
});
router.get('/post', function(req, res, next) {
  res.render('post', {title: '提交' });
});
router.get('/reg', function(req, res, next) {
  res.render('reg', { title: '用户' });
});
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express2' });
});
router.post('/login', function(req, res, next) {
  res.render('doLogin', { title: 'Express2' });
});
router.get('/logout', function(req, res, next) {
  res.render('logout', { title: 'Express2' });
});
router.post('/logout', function(req, res, next) {
  res.render('doLogout', { title: 'Express2' });
});
module.exports = router;
