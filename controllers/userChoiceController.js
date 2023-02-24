const uuid = require("uuid");
const { insertUserChoice } = require("../models/usersChoiceModel");

exports.postUsersChoice = async (req, res, next) => {
  const { userid, date, predictedteam, matchid, result } = req.body;
  const rowFields = {
    userid,
    date,
    predictedteam,
    matchid,
    result,
  };
  await insertUserChoice(rowFields);
  res.status(201).json({ status: "success", msg: "posten user's choice" });
};
