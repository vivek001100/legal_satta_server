const knex = require("../libraries/db");

function insertUserChoice(userid, date, predictedteam, matchid, result) {
  knex("users_prediction")
    .returning("*")
    .insert({
      userid,
      date,
      predictedteam,
      matchid,
      result,
    })
    .then((rows) => rows[0]);
}

module.exports = {
  insertUserChoice,
};
