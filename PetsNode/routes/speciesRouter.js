const express = require('express');
const SpeciesController = require("../Controllers/SpeciesController");
const PetsRequest = require("../request/PetsRequest")
const router = express.Router();

router.get('/',SpeciesController.index)
router.get('/create',SpeciesController.createForm)
router.post('/',PetsRequest.createSpeciesValidation, SpeciesController.create)

module.exports = router;