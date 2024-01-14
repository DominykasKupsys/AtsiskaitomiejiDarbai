const Pets = require("../models/Pets");
const { bookValidation } = require("../request/PetsRequest");
var fs = require("node:fs/promises");
module.exports = {
  index: async (req, res) => {
    try {
      const [pets] = await Pets.getAll(req.db);
      res.render("Pets/index", { title: "Augintinių sąrašas", pets: pets });
    } catch (err) {
      console.log(err);
      res.status(500).send(`Serverio klaida: ${err.message}`);
    }
  },
  show: async (req, res) => {
    let id = req.params.id;
    try {
      const [pet] = await Pets.getById(req.db, id);
      if (pet) {
        res.render("Pets/show", { title: "Augintinių sąrašas", pet: pet });
      } else {
        res.status(404).send(`Nerastas augintinis: ${err.message}`);
      }
    } catch (err) {
      console.log(err);
      res.status(500).send(`Serverio klaida: ${err.message}`);
    }
  },
  createForm: (req, res) => {
    res.render("Pets/create", { messages: req.flash("validationCreate") });
  },
  create: async (req, res) => {
    const [pet, valid, messages] = bookValidation(req);
    if (valid) {
      try {
        const petId = await Pets.Create(req.db, pet);
        if (req.file) {
          const ext = {
            "image/webp": ".webp",
            "image/png": ".png",
            "image/jpeg": ".jpg",
          };
          let file_name =
            req.file.filename.slice(0, 6) +
            "_" +
            petId +
            ext[req.file.mimetype];
          await fs.rename(req.file.path, "public/images/" + file_name);
          await Pets.updateImage(req.db, petId, file_name);
        }
        res.redirect("Pets");
      } catch (err) {
        console.log(err);
        res.status(500).send(`Serverio klaida: ${err.message}`);
      }
    } else {
      req.flash("validationCreate", messages);
      if (req.file) {
        fs.rm(req.file.path);
      }
      res.redirect("/pets/create");
    }
  },
  delete: async (req, res) => {
    let id = req.params.id;
    try {
      const pet = await Pets.getById(req.db, id);
      if (pet) {
        await Pets.Delete(req.db, id);
        res.redirect("/pets");
      } else {
        res.status(404).send(`Nerastas augintinis: ${err.message}`);
      }
    } catch (err) {
      console.log(err);
      res.status(500).send(`Serverio klaida: ${err.message}`);
    }
  },
  updateForm: async (req, res) => {
    let id = req.params.id;
    try {
      const [pet] = await Pets.getById(req.db, id);
      if (pet) {
        res.render("Pets/edit", {
          title: "Augintinių sąrašas",
          pet: pet,
          messages: req.flash("validationUpdate"),
        });
      } else {
        res.status(404).send(`Nerastas augintinis: ${err.message}`);
      }
    } catch (err) {
      console.log(err);
      res.status(500).send(`Serverio klaida: ${err.message}`);
    }
  },
  update: async (req, res) => {
    const id = req.params.id;
    const [pet, valid, messages] = bookValidation(req);
    if (valid) {
      try {
        await Pets.Update(req.db, pet, id);
        if (req.file) {
          const ext = {
            "image/webp": ".webp",
            "image/png": ".png",
            "image/jpeg": ".jpg",
          };
          let file_name =
            req.file.filename.slice(0, 6) + "_" + id + ext[req.file.mimetype];
          await fs.rename(req.file.path, "public/images/" + file_name);
          await Pets.updateImage(req.db, id, file_name);
        }
        res.redirect("/Pets/" + id);
      } catch (err) {
        res.status(500).send(`Serverio klaida: ${err.message}`);
      }
    } else {
      req.flash("validationUpdate", messages);
      if (req.file) {
        fs.rm(req.file.path);
      }
      res.redirect(`/pets/${id}/edit`);
    }
  },
};
