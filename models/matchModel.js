const { knexLegalSatta: db } = require("./../libraries/psql");

exports.getMatch = async (queryField) => {
  return db("match").select("*").where(queryField);
};
