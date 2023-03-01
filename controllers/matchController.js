const matchModel = require("./../models/matchModel");
const teamModel = require("./../models/teamModel");
const userPredictionModel = require("./../models/userPredicationModel");

exports.getLatestMatch = async (req, res, next) => {
  const now = new Date();

  var startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const timeStamp = startOfDay / 1000;
  //   console.log(timeStamp);

  const teamIdList = [];

  // console.log(queryField)
  const todayMatch = (await matchModel.getMatch({ date: timeStamp }))[0];
  // console.log(todayMatch)
  const team1Id = todayMatch.team1;
  const team2Id = todayMatch.team2;

  teamIdList.push(team1Id);
  teamIdList.push(team2Id);

  const teams = await teamModel.getTeams(teamIdList);

  todayMatch.team1 = teams.filter((e) => e.id === team1Id)[0];
  todayMatch.team2 = teams.filter((e) => e.id === team2Id)[0];

  res.status(200).json({
    status: "success",
    result: todayMatch,
  });
};

exports.getUpcomingMatch = async (req, res, next) => {
  const now = new Date();

  var startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const timeStamp = startOfDay / 1000;

  const upcommingMatch = await matchModel.getUpcomingMatches(timeStamp);
  const teamObject = {};

  upcommingMatch.forEach((element) => {
    const id1 = element.team1;
    const id2 = element.team2;
    teamObject[`${id1}`] = 1;
    teamObject[`${id2}`] = 1;
  });
  const teamList = Object.keys(teamObject);
  const teams = await teamModel.getTeams(teamList);

  upcommingMatch.forEach((element) => {
    element.team1 = teams.filter((e) => e.id === element.team1)[0];
    element.team2 = teams.filter((e) => e.id === element.team2)[0];
  });

  //   console.log(upcommingMatch);

  res.status(200).json({
    status: "success",
    result: upcommingMatch,
  });
};

exports.getMatchByDate = async (req, res, next) => {
  date = req.body.date;
  const teamIdList = [];

  // console.log(queryField)
  const matchOnDate = (await matchModel.getMatch({ date }))[0];
  // console.log(todayMatch)
  const team1Id = matchOnDate.team1;
  const team2Id = matchOnDate.team2;

  teamIdList.push(team1Id);
  teamIdList.push(team2Id);

  const teams = await teamModel.getTeams(teamIdList);

  matchOnDate.team1 = teams.filter((e) => e.id === team1Id);
  matchOnDate.team2 = teams.filter((e) => e.id === team2Id);

  res.status(200).json({
    status: "success",
    result: matchOnDate,
  });
};

exports.decideWinner = async (req, res, next) => {
  const now = new Date();

  var startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const timeStamp = startOfDay / 1000;
  console.log(timeStamp);

  winnerTeamId = req.body.winnerId;

  //   await matchModel.updateWinner(timeStamp, winnerTeamId);
  const prediction = await userPredictionModel.getd();
  console.log(prediction);
  res.status(201).json({
    status: "success",
    message: prediction,
  });
};
