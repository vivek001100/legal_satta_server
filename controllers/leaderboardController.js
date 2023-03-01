const leaderboardModel = require("./../models/leaderboardModel");
const matchModel = require("./../models/matchModel");

exports.getLeaderboards = async (req, res, next) => {
  const leaderboard = await leaderboardModel.getLeaderboard();
  const lastMatchQuery = await matchModel.getLastPlayedMatch();
  const lastMatch = lastMatchQuery[0];

  const team1Id = lastMatch.team1;
  const team2Id = lastMatch.team2;

  teamIdList.push(team1Id);
  teamIdList.push(team2Id);

  const teams = await teamModel.getTeams(teamIdList);

  lastMatch.team1 = teams.filter((e) => e.id === team1Id)[0];
  lastMatch.team2 = teams.filter((e) => e.id === team2Id)[0];

  console.log(lastMatch);

  res.status(200).json({
    status: "success",
    result: {
      lastMatch,
      leaderboard,
    },
  });
};
