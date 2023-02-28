const express = require("express");
const router = express.Router();
const matchController = require("./../controllers/matchController");


router.get('/latest',matchController.getTodayMatchDetail);

module.exports = router;
