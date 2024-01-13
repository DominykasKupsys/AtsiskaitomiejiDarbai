const express = require("express");
const router = express.Router();
const petsController = require("../Controllers/petController")

router.get("/",petsController.index)
router.get("/create",petsController.create)
router.get("/:id",petsController.show)
router.post("/",petsController.store)
router.get("/:id/edit",petsController.edit)
router.post("/:id",petsController.update)
router.get("/delete/:id",petsController.delete)

module.exports = router;