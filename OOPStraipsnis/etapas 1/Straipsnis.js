class Straipsnis {
  constructor(pavadinimas, antraštė, paveiksliukas, tekstas) {
    this.pavadinimas = pavadinimas;
    this.antraštė = antraštė;
    this.paveiksliukas = paveiksliukas;
    this.tekstas = tekstas;
  }

  generavimas() {
    return (
      `<h1>${this.pavadinimas}</h1>` +
      "<br>" +
      `<h2>${this.antraštė}</h2>` +
      "<br>" +
      '<img src="' +
      this.paveiksliukas +
      '" width="200" height="200">' +
      "<br>" +
      `<p>${this.tekstas}</p>`
    );
  }
}

/*const straipsnis = new Straipsnis(
  "pavadinimas",
  "antraštė",
  "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm00NTItcDItMDA1XzEucG5n.png",
  "tekstas"
);
document.getElementById("Straipsnis").innerHTML = straipsnis.generavimas();
*/