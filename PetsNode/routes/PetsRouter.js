const express = require("express");
const router = express.Router();
const PetsController = require("../controllers/PetsController");

router.get("/", PetsController.index);
router.get("/species", PetsController.indexSpecies);
router.get("/createSpecies",PetsController.createSpecies)
router.get("/create", PetsController.createPets);
router.get("/:id", PetsController.show);
router.post("/species",PetsController.storeSpecies)
router.post("/", PetsController.storePets);
module.exports = router;