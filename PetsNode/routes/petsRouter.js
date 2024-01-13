const express = require('express');
const PetsController = require('../Controllers/PetsController');
const router = express.Router();

router.get('/',PetsController.index)
router.get('/create',PetsController.createForm)
router.get('/:id',PetsController.show)
router.post('/',PetsController.create)
router.get("/:id/delete",PetsController.delete)
router.get("/:id/edit",PetsController.updateForm)
router.post("/:id",PetsController.update)
  
module.exports = router;