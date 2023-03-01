const uuid = require("uuid");
const userModel = require("../models/userModel");
const userPredictionModel = require("../models/userPredicationModel");

exports.postUsersChoice = async (req, res, next) => {
  const thisDay = new Date();
  const time = thisDay.getHours() + thisDay.getMinutes() / 60;

  var startOfDay = new Date(
    thisDay.getFullYear(),
    thisDay.getMonth(),
    thisDay.getDate()
  );
  const date = startOfDay / 1000;
  console.log(time);
  if (time < 16.5) {
    const { userid, predictedteam, matchid, result } = req.body;
    console.log(userid, date, predictedteam, matchid, result);
    const rowFields = {
      userid,
      date,
      predictedteam,
      matchid,
      result,
    };
    const rowCount = await userPredictionModel.insertUserChoice(rowFields);

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

exports.getUsersPredictions = async (req, res, next) => {
   const userId=req.body.userId;
    const totalPredictions = await userPredictionModel.getTotalPredictions(userId)
    let falsePredictions = await userPredictionModel.getFalsePredictions(userId)
    let truePredictions = await userPredictionModel.getTruePredictions(userId)
    
}
