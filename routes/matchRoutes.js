const express = require("express");
const router = express.Router();
const matchController = require("./../controllers/matchController");

router.get("/latest",matchController.getLatestMatch);
module.exports = router;
