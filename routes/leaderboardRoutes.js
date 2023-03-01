const express = require("express");
const router = express.Router();
const leaderboardController = require("./../controllers/leaderboardController");

router.get("/get", leaderboardController.getLeaderboards);
module.exports = router;
