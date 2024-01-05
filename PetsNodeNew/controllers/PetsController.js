const Pet = require("../models/pet");

module.exports = {
  index: async function (req, res) {
    try {
      const [pets] = await Pet.getAllPets(req.db);
      console.log(pets);
      res.render("Pets/index", { title: "Augintinių sąrašas", pets: pets });
    } catch (err) {
      console.log(err);
      res.status(500).send("Serverio klaida");
    }
  },
  show: async function (req, res) {
    try {
      let id = req.params.id;
      const [pet] = await Pet.getByIdPets(req.db, id);
      console.log(pet)
      if(pet){
        res.render("Pets/show", { title: "Augintinis", pet: pet });
      } else{
        console.log(err);
        res.status(404).send("Toks augintinis nerastas")
      }
    } catch (err) {
      console.log(err);
      res.status(500).send("Serverio klaida");
    }
  }

};
