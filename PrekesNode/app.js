const express = require("express");
const app = express();
const port = 8080;
var { prekes } = require("./prekes");

let html = (content) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prekes</title>
    <link href="/style.css" rel="stylesheet">
</head>
<body>
    ${content}
</body>
</html>`;
};

app.use(express.static("public"));

app.get("/", (req, res) => {
  let rezultatas = "";
  for (let i in prekes) {
    // padarome skirtingus div paveiksleliui,pavadinimui,kainai. Taip pat padarome paveiksleli ir pavadinima linkais.
    // linkus padaro prie /prekes/ pridedami objekto raktus.
    rezultatas += 
    `<div class="preke">
    <a class="paveiksliukas" href="/prekes/${i}">
    <img src="${prekes[i].paveiksliukas}" width="200px" height="200px">
  </a>
      <div class="kaina" >${prekes[i].kaina}&euro;</div>
      <div class="pavadinimas"><a href="/prekes/${i}">${prekes[i].pavadinimas}</a></div> 
    </div>`;
  }
  res.send(html(`<h1>Visos prekės</h1>
  <div class="prekes">${rezultatas}</div>`));
});

app.get("/prekes/:pavadinimas", (req, res) => {
  let pavadinimas = req.params["pavadinimas"];
  if (prekes[pavadinimas]) {
    res.send(
      html(
        `<h1>Prekės puslapis</h1>
        <div class="preke_ind">
        <div>Prekės pavadinimas: ${prekes[pavadinimas].pavadinimas}</div>
        <div class="kaina">Kaina: ${prekes[pavadinimas].kaina}</div>
        <div>Aprašymas: ${prekes[pavadinimas].aprasymas}</div>
        <img src="${prekes[pavadinimas].paveiksliukas}" width="300px" height="300px">
        <p><a href="/">Grįžti į pradžią</a></p>
        </div>`
      )
    );
  } else {
    res.status(404).send("Prekės nerado");
  }
});

app.listen(port, () => {
  console.log(`Programa veikia per port ${port}`);
  console.log(`http://localhost:${port}`);
});
