const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;
 
 
// This section will help you get a list of all the records.
recordRoutes.route("/library_accounts").get(function (req, res) {
 let db_connect = dbo.getDb();
 db_connect
   .collection("library_accounts")
   .find({})
   .toArray(function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
 
// This section will help you get a single record by id
recordRoutes.route("/library_accounts/:id").get(function (req, res) {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 db_connect
   .collection("library_accounts")
   .findOne(myquery, function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});

module.exports = recordRoutes;