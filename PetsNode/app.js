var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var methodOverride = require("method-override");
var session = require("express-session");
var db = require("./db/mysql");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var petsRouter = require('./routes/PetsRouter');

var app = express();

app.use(function(req, res, next) {
  req.db = db;
  next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  methodOverride((req) => {
    return req.body._method;
  })
);

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(
  session({
    secret: "asdlkf.adsjfasddfkaū9įkdsjfalkdsfds",
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
    resave: false,
  })
);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/pets', petsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;