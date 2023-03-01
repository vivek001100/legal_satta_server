
const { knexLegalSatta: db } = require("./../libraries/psql");

exports.saveUserDetails = (rowFields) => {
  return db("users")
    .insert(rowFields)
    .then((result) => result.rowCount);
};

exports.getUser = (queryField) => {
  return db("users")
    .select("*")
    .where(queryField)
    .then((result) => result)
    .catch((e) => null);
};

exports.insertUserChoice = (rowFields) => {
  return db("users_prediction")
     .insert(rowFields)
     .then((result) => result.rowCount);
 };

 exports.getUsersChoice = (queryField) => {
  return db("users_prediction")
     .select("*")
     .where(queryField)
     .then((result) => result)
     .catch((e) => null);
 }
 