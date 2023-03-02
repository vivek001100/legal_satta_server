const uuid = require("uuid");
const userModel = require("../models/userModel");
const userPredictionModel = require("../models/userPredicationModel");
const matchModel = require("./../models/matchModel");
const teamModel = require("./../models/teamModel");

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
  const userId = req.body.id;

  const predictions = await userPredictionModel.getTotalPredictions;

  for (var i = 0; i < predictions.length; i++) {
    const teamIdList = [];
    const { matchid, predictedteam } = predictions[i];
    const match = (await matchModel.getMatch({ date: timeStamp }))[0];
    const { team1Id, team2Id } = match;

    teamIdList.push(team1Id);
    teamIdList.push(team2Id);

    const teams = await teamModel.getTeams(teamIdList);

    match.team1Img = teams.filter((e) => e.id === team1Id)[0].coverimg;
    match.team2Img = teams.filter((e) => e.id === team2Id)[0].coverimg;
    predictions.match=match
  }

  // const totalPredictions = await userPredictionModel.getTotalPredictions(
  //   userId
  // );
  // const winningPredictions = await userPredictionModel.getTruePredictions(
  //   userId
  // );

  // console.log(totalPredictions[0].count);
  res.status(200).json({
    status: "success",
    result:predictions
  });
};

// exports.getTotalPredictionResultsOfMatch = async (req, res, next) => {
//   const thisDay = new Date();  
//   var startOfDay = new Date(
//     thisDay.getFullYear(),
//     thisDay.getMonth(),
//     thisDay.getDate()
//   );
//   const date = startOfDay / 1000;

//   const totalBetters = await userPredictionModel.getAllBetters(date);
//   const winners = await userPredictionModel.getAllWinners(date);

//   console.log(totalBetters[0].count);
//   res.status(200).json({
//     status: "success",
//     result: {
//       total: totalBetters[0].count,
//       winners: winners[0].count,
//       losers: totalBetters[0].count - winners[0].count
//     },
//   });
// };
