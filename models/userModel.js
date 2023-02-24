const knexConfigLegalSatta = {
    client: "postgresql",
    connection: {
      database: "legal_satta",
      user: "tnluser",
      password: null,
    },
    pool: {
      min: 2,
      max: 10,
      idleTimeoutMillis: 2000, // free resources are destroyed after this many milliseconds
      reapIntervalMillis: 1000, // how frequent to check for idle resources to destroy
    },
  };
  
 
  const knexLegalSatta= require("knex")(knexConfigLegalSatta);
  module.exports = knexLegalSatta;