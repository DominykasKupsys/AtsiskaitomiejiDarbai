const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 50,
  host: "localhost",
  user: "root",
  password: "",
  database: "augintiniai",
});

module.exports = {
  index: (req, res) => {
    pool.getConnection((err, connection) => {
      if (err) throw err;
      connection.query("SELECT * FROM pets", (err, rows) => {
        connection.release();

        if (!err) {
          res.render("pets/index", { rows });
        } else {
          console.log(err);
        }
      });
    });
  },
  show: (req, res) => {
    pool.getConnection((err, connection) => {
      if (err) throw err;
      connection.query(
        "SELECT * FROM pets WHERE ID = ?",
        [req.params.id],
        (err, rows) => {
          connection.release();
          if (!err) {
            res.render("pets/show", { rows });
          } else {
            console.log(err);
          }
          console.log(rows);
        }
      );
    });
  },
  create: (req, res) => {
    res.render("pets/create");
  },
  store: (req, res) => {
    const { species_ID, name, foto, email } = req.body;
    pool.getConnection((err, connection) => {
      if (err) throw err;
      connection.query(
        "INSERT INTO pets (species_ID, name, foto, email, created_at) VALUES (?,?,?,?,NOW())",
        [species_ID, name, foto, email],
        (err, rows) => {
          connection.release();
          if (!err) {
            res.redirect("/pets");
          } else {
            console.log(err);
          }
        }
      );
    });
  },
  edit: (req, res) => {
    pool.getConnection((err, connection) => {
      if (err) throw err;
      connection.query("SELECT * FROM pets WHERE ID = ?",[req.params.id], (err, rows) => {
        connection.release();
        let id = req.params.id
        if (!err) {
          res.render("pets/edit", { rows, id});
        } else {
          console.log(err);
        }
      });
    });
  },
  update: (req, res) => {
    const { species_ID, name, foto, email } = req.body;
    pool.getConnection((err, connection) => {
      if (err) throw err;
      connection.query("UPDATE pets Set species_ID = ?, name = ?, foto = ?, email = ? WHERE ID = ?",[species_ID, name, foto, email, req.params.id], (err, rows) => {
        connection.release();
        let id = req.params.id
        if (!err) {
          res.redirect("/pets/"+ id)
        } else {
          console.log(err);
        }
      });
    });
  },
  delete: (req, res) => {
    pool.getConnection((err, connection) => {
      if (err) throw err;
      connection.query("DELETE FROM pets WHERE ID = ?",[req.params.id], (err, rows) => {
        connection.release();
        if (!err) {

          res.redirect("/pets")
        } else {
          console.log(err);
        }
      });
    });
  },
};
