const { knexLegalSatta: db } = require("./../libraries/psql");

exports.getMatch =  (queryField) => {
  return db("match").select("*").where(queryField);
};
