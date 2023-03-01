const leaderboardModel = require("./../models/leaderboardModel");
const matchModel = require("./../models/matchModel");
exports.getLeaderboards = async (req, res, next) => {
  const leaderboard = await leaderboardModel.getLeaderboard();
  const lastMatch = await matchModel.getLastPlayedMatch();
  console.log(lastMatch);
  res.status(200).json({
    status: "success",
    result: leaderboard,
  });
};
