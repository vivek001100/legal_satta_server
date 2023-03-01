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
