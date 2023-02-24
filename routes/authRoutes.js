const express = require("express");
const router = express.Router();

router.post("/signup", (req, res, nxt) => {
  console.log("auth_route");
  res.send("h");
});

router.get("/", (req, res, nxt) => {
  console.log("auth_route");
  res.send("hiiiiii");
});
module.exports = router;
