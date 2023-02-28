const knex = require("../libraries/db");

exports.insertUserChoice = (rowFields) => {
 return knex("users_prediction")
    .insert(rowFields)
    .then((result) => result.rowCount);
};
