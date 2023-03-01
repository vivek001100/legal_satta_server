const { knexLegalSatta: db } = require("./../libraries/psql");

exports.insertUserChoice = (rowFields) => {
  return db("users_prediction")
    .insert(rowFields)
    .then((result) => result.rowCount);
};

exports.setTruePrediction = (winnerId) => {
  return db("users_prediction")
    .where({ result: null, predictedteam: winnerId })
    .update({ result: true })
    .returning("*");
};

exports.setFalsePrediction = (winnerId) => {
  return db("users_prediction")
    .where("result", null)
    .whereNot("predictedteam", winnerId)
    .update({ result: false });
};
