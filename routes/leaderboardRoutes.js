const express = require("express");
const router = express.Router();
const leaderboardController = require("./../controllers/leaderboardController");

router.get("/leaderboard", leaderboardController.getLeaderboards);
module.exports = router;
