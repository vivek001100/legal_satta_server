const express = require("express");
const router = express.Router();
const authController = require("./../controllers/authControllers");

router.post("/signup",authController.signup);
router.post('registation',authController.registration);
module.exports = router;
