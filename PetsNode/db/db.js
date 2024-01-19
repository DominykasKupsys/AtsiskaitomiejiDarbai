const mysql = require("mysql2/promise")

const db = mysql.createPool({
    waitForConnections:true,
    queueLimit:0,
    connectionLimit:50,

    host:"localhost",
    user:"root",
    password:"",
    database:"pets"
});

module.exports = db