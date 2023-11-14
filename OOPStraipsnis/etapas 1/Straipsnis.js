
class Straipsnis {
    constructor(pavadinimas, antraštė, paveiksliukas, tekstas){
        this.pavadinimas = pavadinimas
        this.antraštė = antraštė
        this.paveiksliukas = paveiksliukas
        this.tekstas = tekstas
        }

        generavimas() {
            return this.pavadinimas + "<br>" + this.antraštė + "<br>" + '<img src="' + this.paveiksliukas +
            '" width="200" height="200">' + "<br>" + this.tekstas
        }
    }
//const straipsnis = new Straipsnis('pavadinimas','antraštė','https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/The_Indianapolis_Star%2C_2011.jpg/1200px-The_Indianapolis_Star%2C_2011.jpg','tekstas')
//document.getElementById("Straipsnis").innerHTML = straipsnis.generavimas()
            