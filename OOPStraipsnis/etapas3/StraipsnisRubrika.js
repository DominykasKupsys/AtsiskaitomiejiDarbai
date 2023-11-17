import  Straipsnis  from "../etapas1/Straipsnis.js"


class StraipsnisRubrika extends Straipsnis {

    constructor(pavadinimas, antraste, paveiksliukas, tekstas, rubrikos_pavadinimas ,nuoroda) {
      super(pavadinimas, antraste, paveiksliukas, tekstas);
      this.rubrikos_pavadinimas = rubrikos_pavadinimas;
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
        '" width="200" height="200">' +
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
      `<img src="${this.paveiksliukas}" width="50" height="50"></img>`+
      "<br>" + `<a href="${this.nuoroda}">Skaityti plačiau</a>`
      )
    }
  }

  export default StraipsnisRubrika;

/*const Rubrika = new StraipsnisRubrika(
"Straipsnis 1",
"bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla",
"https://www.newsinlevels.com/wp-content/uploads/2023/11/Depositphotos_649420092_L.jpg",
"bla bla",
"Rubrika",
"https://www.w3schools.com/",
)

document.getElementById("Straipsnis").innerHTML = Rubrika.generavimas() + Rubrika.generavimas_rubrikos()*/


