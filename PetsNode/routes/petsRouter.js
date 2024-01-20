const express = require('express');
const PetsController = require('../Controllers/PetsController');
const PetsRequest = require("../request/PetsRequest")
const router = express.Router();

router.get('/',PetsController.index)
router.get('/create',PetsController.createForm)
router.get('/:id',PetsController.show)
router.post('/',PetsRequest.createValidation, PetsController.create)
router.get("/:id/edit",PetsController.updateForm)
router.post("/:id",PetsRequest.editValidation,PetsController.update)
router.get("/:id/delete",PetsController.delete)
  
module.exports = router;