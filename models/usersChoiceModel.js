const knex = require("../libraries/db");

exports.insertUserChoice = (rowFields) => {
 return knex("users_prediction")
    .returning("*")
    .insert(rowFields)
    .then((rows) => rows[0]);
};
