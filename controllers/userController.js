const uuid = require("uuid");
const userModel = require("../models/userModel");

exports.postUsersChoice = async (req, res, next) => {
  const thisDay = new Date();
  const time = thisDay.getHours() + thisDay.getMinutes() / 60;

  if (time < 16.5) {
    const { userid, date, predictedteam, matchid, result } = req.body;
    console.log(userid, date, predictedteam, matchid, result);
    const rowFields = {
      userid,
      date,
      predictedteam,
      matchid,
      result,
    };
    const rowCount = await userModel.insertUserChoice(rowFields);

    if (rowCount) {
      res.status(201).json({ status: "success", predictedteam: predictedteam });
    } else {
      res.status(501).json({ status: "fail", message: "server fail" });
    }
  } else {
    res.status(404).json({
      status: "fail",
      message: "Prediction not allowed after 4:30 PM",
    });
  }
};
