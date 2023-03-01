const { knexLegalSatta: db } = require("./../libraries/psql");

exports.insertUserChoice = (rowFields) => {
  return knex("users_prediction")
    .insert(rowFields)
    .then((result) => result.rowCount);
};

exports.getd=(winnerId)=>{
    return db("users_prediction").select("*").where({result:null,predictedteam:winnerId})
}