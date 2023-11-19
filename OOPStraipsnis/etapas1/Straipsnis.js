class Straipsnis {
  constructor(pavadinimas, antraste, paveiksliukas, tekstas) {
    this.pavadinimas = pavadinimas;
    this.antraste = antraste;
    this.paveiksliukas = paveiksliukas;
    this.tekstas = tekstas;
  }

  generavimas() {
    return (
      `<h1>${this.pavadinimas}</h1>` +
      "<br>" +
      `<h2>${this.antraste}</h2>` +
      "<br>" +
      '<div><img src="' +
      this.paveiksliukas +
      '" width="200" height="200"></div>' +
      "<br>" +
      `<p>${this.tekstas}</p>`
    );
  }
}

export default Straipsnis;