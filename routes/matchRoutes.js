const express = require("express");
const router = express.Router();
const matchController = require("./../controllers/matchController");

router.get("/latest",matchController.getLatestMatch);
router.get("/upcoming",matchController.getUpcomingMatch);

module.exports = router;
