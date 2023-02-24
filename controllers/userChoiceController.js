const uuid = require("uuid");
const { insertUserChoice } = require("../models/usersChoiceModel");

async function postUsersChoice(req, res) {
  const { userid, date, predictedteam, matchid, result } = req.body;
  await insertUserChoice(userid, date, predictedteam, matchid, result);
  res.json({ data: "posten user's choice" });
}

module.exports = {
  postUsersChoice,
};
