import  Straipsnis  from "../etapas1/Straipsnis.js"


class StraipsnisRubrika extends Straipsnis {

    constructor(pavadinimas, antraste, paveiksliukas, tekstas, rubrikos_pavadinimas, rubrikos_paveiksliukas ,nuoroda) {
      super(pavadinimas, antraste, paveiksliukas, tekstas);
      this.rubrikos_pavadinimas = rubrikos_pavadinimas;
      this.rubrikos_paveiksliukas = rubrikos_paveiksliukas
      this.nuoroda = nuoroda
    }
    generavimas() {
      return (
        `<h1>${this.pavadinimas}</h1>` +
        "<br>" +
        `<h2>${this.antraste}</h2>` +
        "<br>" +
        '<img src="' +
        this.paveiksliukas +
        '" width="400" height="300">' +
        "<br>" +
        `<p>${this.tekstas}</p>`
      );
    }

    generavimas_rubrikos(){
      let antraste = this.antraste.split(' ');
      let replaceWith = "...";
      for (let i = 9; i < antraste.length; i++) {
      antraste[i] = replaceWith;
      if (i > antraste.length) {
      break;
      }
      }
      this.antraste = antraste.splice(10)
      this.antraste = antraste.join(" ")
      
      return (
      `<h1>${this.rubrikos_pavadinimas}</h1>`  +
      "<br>" +
      `<h2>${this.antraste}</h2>` +
      `<div> <img src="${this.rubrikos_paveiksliukas}" width="100" height="75" style="text-align: center;" ></img> </div>`+
      "<br>" + `<a href="${this.nuoroda}">Skaityti plačiau</a>`
      )
    }
  }

  export default StraipsnisRubrika;



