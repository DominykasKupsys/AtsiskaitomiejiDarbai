const { Session } = require("express-session");
const Pets = require("../models/Pets");
var htmlspecialchars = require("htmlspecialchars");
const session = require("express-session");

function validateText(txt, default_txt = "") {
  if (txt == undefined) {
    return default_txt;
  } else {
    return htmlspecialchars(txt.trim());
  }
}

function petValidate(req, pet = {}) {
  let valid = true;
  const messages = [];

  if (pet) {
    pet.species_ID = validateText(req.body.species_ID, pet.species_ID);
    pet.name = validateText(req.body.name, pet.name);
    pet.foto = validateText(req.body.foto, pet.foto);
    pet.email = validateText(req.body.email, pet.email);
    pet.created_at = validateText(req.body.created_at, pet.created_at);
  } else {
    pet.species_ID = validateText(req.body.species_ID);
    pet.name = validateText(req.body.name);
    pet.foto = validateText(req.body.foto);
    pet.email = validateText(req.body.email);
    pet.created_at = validateText(req.body.created_at)
  }

  if ( !pet.species_ID) {
    messages.push("Nenurodytas rūšies numeris");
    valid = false;
  }
  if (!pet.name) {
    messages.push("Nenurodytas gyvūnėlio vardas");
    valid = false;
  }
  if (!pet.foto) {
    messages.push("Nenurodyta gyvūnėlio nuotrauka");
    valid = false;
  }
  if (!pet.email) {
    messages.push("Nenurodytas šeimininko elektroninis paštas");
    valid = false;
  }
  if (!pet.created_at) {
    messages.push("Nenurodyta sukūrimo data");
    valid = false;
  }

  return [pet, valid, messages];
}
function speciesValidate(req, species = {}) {
  let valid = true;
  const messages = [];

  if (species) {
    species.Name = validateText(req.body.Name, species.Name);
  } else {
    species.Name = validateText(req.body.Name);
  }

  if (!species.Name) {
    messages.push("Nenurodytas rūšies vardas");
    valid = false;
  }

  return [species, valid, messages];
}

module.exports = {
  index: async function (req, res, next) {
    try {
      const [pets, fields] = await Pets.getAll(req.db)
      res.render("Pets/index", { title: "Augintinių sąrašas", pets: pets });
    } catch (err) {
      console.log(err);
      res.status(500).send("Serverio klaida");
    }
  },
  indexSpecies: async function (req, res, next) {
    try {
      const [species, fields] = await Pets.getAllSpecies(req.db)
      res.render("Pets/indexSpecies", { title: "Rūšių sąrašas", species:species });
    } catch (err) {
      console.log(err);
      res.status(500).send("Serverio klaida");
    }
  },
  show: async function (req, res, next) {
    let id = req.params.id;
    try {
      const [pet, fields] = await Pets.getById(req.db, id);
      if (pet) {
        res.render("Pets/show", { title: "Gyvūnėlio puslapis", pet: pet});
      } else {
        res.status(404).send("Not Found");
      }
    } catch (err) {
      console.log(err);
      res.status(500).send("Serverio klaida");
    }
  },
  createPets: function (req, res, next) {

    const old = req.session.old;
    const messages = req.session.messages;
    delete req.session.old;
    delete req.session.messages;
    res.render("Pets/create", { old: old, messages: messages });
  },
  storePets: async function (req, res, next) {
    const [pet, valid, messages] = petValidate(req);

    if (valid) {
      try {
        const petId = await Pets.createPets(req.db,pet);
        if(petId){
        res.redirect("/pets");
        }
      } catch (err) {
        console.log(err);
        res.status(500).send("Serverio klaida");
      }
    } else {
      req.session.old = pet ;
      req.session.messages = messages;
      res.redirect("/pets/create");
    }
  },
  createSpecies: function (req, res, next) {
    const old = req.session.old;
    const messages = req.session.messages;
    delete req.session.old;
    delete req.session.messages;
    res.render("Pets/createSpecies", { old: old, messages: messages });
  },
  storeSpecies: async function (req, res, next) {
    const [species, valid, messages] = speciesValidate(req);

    if (valid) {
      try {
        const speciesId = await Pets.createSpecies(req.db,species);
        if(speciesId){
        res.redirect("/pets/species");
        }
      } catch (err) {
        console.log(err);
        res.status(500).send("Serverio klaida");
      }
    } else {
      req.session.old = species ;
      req.session.messages = messages;
      res.redirect("/pets/createSpecies");
    }
  }
};