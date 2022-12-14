const { MongoClient } = require("mongodb");
const Db = process.env.IS_LOCAL==="true"?process.env.LOCAL:process.env.ATLAS_PREFIX+process.env.ATLAS_PASSWORD+process.env.ATLAS_SUFFIX;
console.log("address is: "+Db)
  const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
 
var _db;
 
module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) { // this is actually an async function, it takes time to complete
      // Verify we got a good "db" object
      if (db)
      {
        _db = db.db(process.env.DB_NAME); // main_db is the name of the database we are using
        console.log("Successfully connected to MongoDB"); 
      }
      return callback(err);
         });
  },
 
  getDb: function () { // should be used only after connection is complete, to ensure that undefined is not returned.
    return _db;
  },
}