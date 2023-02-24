const { knexLegalSatta: db } = require("./../libraries/psql");
 
exports.saveAuthEmailDetails=(rowFields)=>{
    return db("auth_email")
    .insert(rowFields)
    .then((result) => result.rowCount);
}