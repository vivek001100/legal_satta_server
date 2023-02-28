const { knexLegalSatta: db } = require("./../libraries/psql");

exports.saveUserDetails = async (rowFields) => {
  return db("users")
    .insert(rowFields)
    .then((result) => result.rowCount);
};

exports.isUserExist = async (username) => {
  return db("users")
    .select("username")
    .where({ username })
    .then((result) => result.length !== 0);
};
