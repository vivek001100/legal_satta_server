const express = require("express");
const router = express.Router();
const y = require("./../controllers/authControllers");

router.post("/signup", authController.signup);
router.post("registation", authController.registration);
module.exports = router;

// const express = require("express");
// const router = express.Router();
// const userController = require("./../controllers/userController");

// router.get('/user-exist/:username',userController.checkUserNameAvailable)
// module.exports = router;
