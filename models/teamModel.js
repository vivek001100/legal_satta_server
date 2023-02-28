const { knexLegalSatta: db } = require("./../libraries/psql");

exports.getTeams=async(teamIdList)=>{
   return db("teams").select("*").whereIn('id', teamIdList);
}