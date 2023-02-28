const leaderboardModel = require("./../models/leaderboardModel");

exports.getLeaderboards = async (req, res, next) => {
  
  const leaderboard = await leaderboardModel.getLeaderboard();

  res.status(200).json({
    status: "success",
    result: leaderboard,
  });
};
