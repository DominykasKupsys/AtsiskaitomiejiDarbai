var express = require('express');
var path = require('path')
var sessions = require("express-sessions")
var db = require("./db/db")

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var petsRouter = require('./routes/pets')

const bodyParser = require('body-parser');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(sessions({
  secret: 'refwkefuwefgwfewfwfwet',
  saveUninitialized: true,
  cookie: { maxAge: 1000 * 60 * 60 * 24 },
  resave: false,
}))

app.use(function (req, res, next) {
  req.db = db;
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/pets', petsRouter)

module.exports = app;
