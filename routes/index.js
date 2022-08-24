var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', {title: 'Express1'});
// });
router.get('/', function (req, res, next) {
  res.render('index', { title: 'work', layout: 'work' });
});
router.get('/post', function (req, res, next) {
  res.render('post', { title: '提交' });
});
router.get('/reg', function (req, res, next) {
  res.render('reg', { title: '用户', layout: 'work' });
});
router.post('/reg', function (req, res) {
  //检验用户两次输入的口令是否一致
  if (req.body['password-repeat'] != req.body['password']) {
    req.flash('error', '两次输入的口令不一致');
    return res.redirect('/reg');
  }
  //生成口令的散列值
  var md5 = crypto.createHash('md5');
  var password = md5.update(req.body.password).digest('base64');

  var newUser = new User({
    name: req.body.username,
    password: password,
  });

  //检查用户名是否已经存在
  User.get(newUser.name, function (err, user) {
    if (user)
      err = 'Username already exists.';
    if (err) {
      req.flash('error', err);
      return res.redirect('/reg');
    }
    //如果不存在则新增用户
    newUser.save(function (err) {
      if (err) {
        req.flash('error', err);
        return res.redirect('/reg');
      }
      req.session.user = newUser;
      req.flash('success', '注册成功');
      res.redirect('/');
    });
  });
});
router.get('/login', function (req, res, next) {
  res.render('login', { title: 'Express2' });
});
router.post('/login', function (req, res, next) {
  res.render('doLogin', { title: 'Express2' });
});
router.get('/logout', function (req, res, next) {
  res.render('logout', { title: 'Express2' });
});
router.post('/logout', function (req, res, next) {
  res.render('doLogout', { title: 'Express2' });
});
module.exports = router;
