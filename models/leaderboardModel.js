const { knexLegalSatta: db } = require("./../libraries/psql");

exports.getLeaderboard = async () => {
  return db("users").select("username", "score").orderBy("score", "desc");
};


