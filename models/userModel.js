const { knexLegalSatta: db } = require("./../libraries/psql");

exports.saveUserDetails =async (rowFields) => {
  return db("users")
    .insert(rowFields)
    .then((result) => result.rowCount);
};


