const express = require('express');
const StatsController = require("../Controllers/StatsController");
const router = express.Router();

router.get("/pets",StatsController.petStats)
router.get("/species",StatsController.speciesStats)

module.exports = router;