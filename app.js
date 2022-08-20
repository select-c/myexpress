//数据库
var MongoStore=require('connect-mongo');
var settings = require('./settings');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//路由
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
var expressLayouts = require('express-ejs-layouts');
const session  = require('express-session');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//app.set('view options',{layout:true});

app.use(expressLayouts);
//app.set('layout','views/layout')
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.set(express.bodyParser());
//app.set(express.methodOveride());
app.use(cookieParser());
app.use(session ({
  secret:settings.cookieParser,
  store:MongoStore.create({
    mongoUrl: 'mongodb://localhost/test-app',
    ttl: 14 * 24 * 60 * 60 // = 14 days. Default
  })
}));
app.use(express.static(path.join(__dirname, 'public')));
//jquery
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/'));
//var bootstrap = require('bootstrap');

app.use('/', indexRouter);
app.use('/users', usersRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

