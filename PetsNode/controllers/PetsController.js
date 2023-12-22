const Pets = require("../models/Pets");

module.exports = {
  show: async function (req, res, next) {
    let id = req.params.id;
    try {
      const [pet, fields] = await Pets.getById(req.db, id);
      const [species] = await Pets.getSpeciesById(req.db, id)
      if (pet && species) {
        res.render("Pets/show", { title: "Gyvūnėlio puslapis", pet: pet , species: species});
      } else {
        res.status(404).send("Not Found");
      }
    } catch (err) {
      console.log(err);
      res.status(500).send("Serverio klaida");
    }
  },
};