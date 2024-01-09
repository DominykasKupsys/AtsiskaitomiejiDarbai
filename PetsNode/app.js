var express = require('express');
var BodyParser = require('body-parser')
var path = require('path')
var mysql = require("mysql")

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var petsRouter = require('./routes/pets')

const bodyParser = require('body-parser');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const pool = mysql.createPool({
  connectionLimit: 50,
  host      : "localhost",
  user      : "root",
  password  : "",
  database  : "augintiniai",
})

pool.getConnection((err,connection) =>{
  if(err) throw err
  console.log("database connected")
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/pets', petsRouter)

module.exports = app;
