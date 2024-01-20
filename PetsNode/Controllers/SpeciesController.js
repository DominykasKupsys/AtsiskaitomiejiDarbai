const Species = require("../models/Species");
const { petValidation } = require("../request/PetsRequest");

module.exports = {
  index: async (req, res) => {
    try {
      const [species] = await Species.getAll(req.db);
      res.render("Species/index", { title: "species list", species: species });
    } catch (err) {
      console.log(err);
      res.status(500).send(`Serverio klaida: ${err.message}`);
    }
  },
  createForm: (req, res) => {
    res.render("Species/create", {
      messages: req.flash("validationCreateSpecies"),
      title: "Create species",
    });
  },
  create: async (req, res) => {
    const [species, valid, messages] = petValidation(req);
    if (valid) {
      try {
        await Species.Create(req.db, species);
        res.redirect("/species");
      } catch (err) {
        console.log(err);
        res.status(500).send(`Serverio klaida: ${err.message}`);
      }
    } else {
      req.flash("validationCreateSpecies", messages);
      res.redirect("/species/create");
    }
  },
};
