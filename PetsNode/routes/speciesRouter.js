const express = require('express');
const SpeciesController = require("../Controllers/SpeciesController");
const SpeciesRequest = require("../request/SpeciesRequest")
const router = express.Router();

router.get('/',SpeciesController.index)
router.get('/create',SpeciesController.createForm)
router.post('/',SpeciesRequest.createValidation, SpeciesController.create)

module.exports = router;