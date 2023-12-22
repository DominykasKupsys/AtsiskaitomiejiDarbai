const express = require("express");
const router = express.Router();
const PetsController = require("../controllers/PetsController");

router.get("/:id", PetsController.show);
module.exports = router;