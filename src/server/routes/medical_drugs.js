const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

const security = require("../security.js");
 
 
// This section will help you get a list of all the records.
recordRoutes.route("/medical_drugs").get(function (req, res) {
  function callback(is_valid,message){
 let db_connect = dbo.getDb();
 db_connect
   .collection("medical_drugs")
   .find({})
   .toArray(function (err, result) {
     if (err) throw err;
     res.json(result);
   });}
   security.check_authentication(req.body.auth_token,["all","medical"],callback)
});
