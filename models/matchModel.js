const { knexLegalSatta: db } = require("./../libraries/psql");

exports.selectTodayMatch = async (rowFields) => {
  return db("match")
    .select("*")
    .where(rowFields)
    .then((result) => result[0]);
};
