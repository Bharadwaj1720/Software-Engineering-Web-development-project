/*
string username:
string password:
string status:
*/
const password_module = require("../passwords")
const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;
 
const allowed_info = {"_id":1,"username":1,"status":1,"password":0}

recordRoutes.route("/general_accounts").get(function (req, res) {
 console.log("/library_accounts route connected to"); 
 let db_connect = dbo.getDb();
 db_connect
   .collection("library_accounts")
   .find({},allowed_info)
   .toArray(function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});

// This section will help you get a single record by id
recordRoutes.route("/general_accounts/:id").get(function (req, res) {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 db_connect
   .collection("general_accounts")
   .findOne(myquery,allowed_info, function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});

recordRoutes.route("/general_accounts/login").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect
    .collection("general_accounts")
    .findOne(myquery,allowed_info, function (err, result) {
      if (err) throw err;
      res.json(result);
    });
 });

recordRoutes.route("/general_accounts/add").post(function (req, response) {
    let db_connect = dbo.getDb();
    let myobj = {
      username: req.body.username,
      status: req.body.status,
      password: password_module.get_hash_and_salt(req.body.password_plaintext)
    }
    db_connect.collection("general_accounts").insertOne(myobj, function (err, res) {
      if (err) throw err;
      response.json(res);
    });
   });

   recordRoutes.route("general_accounts/update/:id").post(function (req, response) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    let newvalues = {
      $set: {
        username: req.body.username,
      status: req.body.status,
      password: password_module.get_hash_and_salt(req.body.password_plaintext)
      },
    };
    db_connect
      .collection("general_accounts")
      .updateOne(myquery, newvalues, function (err, res) {
        if (err) throw err;
        console.log("1 document updated");
        response.json(res);
      });
   });
  
   recordRoutes.route("genral_accounts/delete/:id").delete((req, response) => {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    db_connect.collection("library_accounts").deleteOne(myquery, function (err, obj) {
      if (err) throw err;
      console.log("1 document deleted");
      response.json(obj);
    });
   });

module.exports = recordRoutes;