const express = require("express");
const app = express();
let ejs = require("ejs");
const port = 8080;
var { prekes } = require("./prekes");



app.use(express.static("public"));

app.get("/", (req, res) => {
  ejs.renderFile(
    "templates/prekes.ejs",
    {
      title: "Prekių sąrašas",
      content: "Prekių sąrašas",
      prekes: prekes
    },
    function (err, str) {
      if (err) {
        console.log(err);
        res.status(500).send("Server error");
      } else {
        res.send(str);
      }
    }
  );
});

app.get("/prekes/:pavadinimas", (req, res) => {
  let pavadinimas = req.params["pavadinimas"];
  if (prekes[pavadinimas]) {
    ejs.renderFile(
      "templates/preke.ejs",
      {
        title: "Prekės sąrašas",
        content: "Prekės sąrašas",
        prekes: prekes, //priskiriame ejs failuose prekes objektą
        pavadinimas: pavadinimas //priskiriame ejs failuose prekes objektą
      },
      function (err, str) {
        if (err) {
          console.log(err);
          res.status(500).send("Server error");
        } else {
          res.send(str);
        }
      }
    );
  } else {
    res.status(404).send("Prekės nerado");
  }
});

app.listen(port, () => {
  console.log(`Programa veikia per port ${port}`);
  console.log(`http://localhost:${port}`);
});

