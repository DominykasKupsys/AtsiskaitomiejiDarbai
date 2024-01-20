const express = require('express');
const VoteController = require("../Controllers/VoteController");
const router = express.Router();

router.get("/",VoteController.vote)
router.get("/result/:id",VoteController.result)

module.exports = router;