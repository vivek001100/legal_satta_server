const { knexLegalSatta: db } = require("./../libraries/psql");

exports.getMatch = (queryField) => {
  return db("match").select("*").where(queryField);
};

exports.getUpcomingMatches = (queryfield) => {
  return db("match").select("*").where("date", ">", queryfield);
};

exports.getPlayedMatches = (queryField) => {
  return db("match")
    .select("*")
    .whereNotNull("winner")
    .orderBy("date", "desc")
    .limit(1);
};
