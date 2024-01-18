const Pets = require("../models/Pets");
const { petValidation } = require("../request/PetsRequest");
var fs = require("node:fs/promises");

module.exports = {
  index: async (req, res) => {
    try {
      const [pets] = await Pets.getAll(req.db);
      console.log(pets)
      res.render("Pets/index", { title: "Pet list", pets: pets });
    } catch (err) {
      console.log(err);
      res.status(500).send(`Serverio klaida: ${err.message}`);
    }
  },
  indexSpecies: async (req, res) => {
    try {
      const [species] = await Pets.getAllSpecies(req.db);
      res.render("Pets/species", { title: "species list", species:species });
    } catch (err) {
      console.log(err);
      res.status(500).send(`Serverio klaida: ${err.message}`);
    }
  },
  show: async (req, res) => {
    let id = req.params.id;
    try {
      const [pet] = await Pets.getById(req.db, id);
      console.log(pet)
      if (pet) {
        res.render("Pets/show", { title: "Pet profile", pet: pet });
      } else {
        res.status(404).send(`Nerastas augintinis: ${err.message}`);
      }
    } catch (err) {
      console.log(err);
      res.status(500).send(`Serverio klaida: ${err.message}`);
    }
  },
  createForm: (req, res) => {
    res.render("Pets/create", { messages: req.flash("validationCreate"),title: "Create pet" });
  },
  create: async (req, res) => {
    const [pet, valid, messages] = petValidation(req);
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
  createSpeciesForm: (req, res) => {
    res.render("Pets/createSpecies", { messages: req.flash("validationCreateSpecies"),title: "Create pet" });
  },
  createSpecies: async (req, res) => {
    const [species, valid, messages] = petValidation(req);
    if (valid) {
      try {
        await Pets.CreateSpecies(req.db, species);
        res.redirect("/pets/species");
      } catch (err) {
        console.log(err);
        res.status(500).send(`Serverio klaida: ${err.message}`);
      }
    } else {
      req.flash("validationCreateSpecies", messages);
      res.redirect("/pets/createSpecies");
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
          title: "Edit pet",
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
  voteBattle: async (req, res) => {
    try {

      const [pet1, pet2] = await Pets.randomPet(req.db);
      req.session.old = [];
      req.session.old.push(pet1, pet2);
      
      let oldPetId = req.session.oldPetId || [];
      delete req.session.oldPetId

      let previousWinner =  req.session.previousWinners || []

      if (pet1 && pet2) {
        if (oldPetId.length > 0 && previousWinner.length > 0) {
          const [oldpet1, oldpet2] = await Pets.getTwoPets(req.db, oldPetId);
          const Winnerpet = await Pets.getById(req.db, previousWinner[0])
          res.render("Vote/battleWithResults", {
            title: "Pet battle",
            pet1: pet1,
            pet2: pet2,
            oldpet1: oldpet1,
            oldpet2: oldpet2,
            winnerpet: Winnerpet
          });
        } else {
          res.render("Vote/battle", {
            title: "Pet battle",
            pet1: pet1,
            pet2: pet2,
          });
        }
      } else {
        res.status(404).send(`Nerastas augintinis: ${err.message}`);
      }
    } catch (err) {
      console.log(err);
      res.status(500).send(`Serverio klaida: ${err.message}`);
    }
  },
  battleResult: async (req, res) => {
    let backURL = req.header("Referer") || "/";
    const old = req.session.old;
    const WinnerID = req.params.id;
    delete req.session.old
    
    const petID = [];
    petID.push(old[0].ID, old[1].ID);
    req.session.oldPetId = petID;

    req.session.previousWinners = [WinnerID];

    try {
      await Pets.Result(req.db, old, WinnerID);
      res.redirect(backURL);
    } catch (err) {
      console.log(err);
      res.status(500).send(`Serverio klaida: ${err.message}`);
    }
  },
  recordHolders: async (req, res) => {
    try {
      const [dailywinner] = await Pets.DailyWinner(req.db);
      const [weeklywinner] = await Pets.WeeklyWinner(req.db);
      const [monthlywinner] = await Pets.WeeklyWinner(req.db);
      const [dailyloser] = await Pets.DailyLoser(req.db);
      const [weeklyloser] = await Pets.WeeklyLoser(req.db);
      const [monthlyloser] = await Pets.MonthlyLoser(req.db);
      res.render("Stats/Records", {
        title: "Todays records",
        dailywinner:dailywinner,
        dailyloser:dailyloser,
        weeklywinner:weeklywinner,
        weeklyloser:weeklyloser,
        monthlywinner:monthlywinner,
        monthlyloser:monthlyloser,
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(`Serverio klaida: ${err.message}`);
    }
  },
  speciesRecords : async(req,res) => {
    try {
      const [speciesPets] = await Pets.speciesWithTheMostPets(req.db);
      const [speciesWins] = await Pets.speciesWithTheMostWins(req.db);
      console.log(speciesWins)
      console.log(speciesPets)
      res.render("Stats/SpeciesRecords", { title: "Species records", speciesPets:speciesPets, speciesWins:speciesWins });
    } catch (err) {
      console.log(err);
      res.status(500).send(`Serverio klaida: ${err.message}`);
    }
  },
  
};
