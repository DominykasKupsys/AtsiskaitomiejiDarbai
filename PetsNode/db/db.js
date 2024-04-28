const mysql = require("mysql2/promise");

const db = mysql.createPool({
  waitForConnections: true,
  queueLimit: 0,
  connectionLimit: 50,

  //reikia nurodyt konteinerio prisijungimo host
  // host: 'host.docker.internal',
  host: "localhost",
  user: "root",
  password: "root",
  database: "pets",
});

module.exports = db;
