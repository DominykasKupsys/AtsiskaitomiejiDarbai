const express = require('express');
const PetsController = require('../Controllers/PetsController');
const PetsRequest = require("../request/PetsRequest")
const router = express.Router();

router.get('/',PetsController.index)
router.get('/species',PetsController.indexSpecies)
router.get('/create',PetsController.createForm)
router.get('/createSpecies',PetsController.createSpeciesForm)
router.get("/battle",PetsController.voteBattle)
router.get("/records",PetsController.recordHolders)
router.get("/recordsSpecies",PetsController.speciesRecords)
router.get('/:id',PetsController.show)
router.post('/',PetsRequest.createValidation, PetsController.create)
router.post('/species',PetsRequest.createSpeciesValidation, PetsController.createSpecies)
router.get("/:id/edit",PetsController.updateForm)
router.post("/:id",PetsRequest.editValidation,PetsController.update)
router.get("/:id/delete",PetsController.delete)
router.get("/result/:id", PetsController.battleResult)
  
module.exports = router;