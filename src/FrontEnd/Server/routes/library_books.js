const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;
 
 
// This section will help you get a list of all the records.
recordRoutes.route("/library_books").get(function (req, res) {
 let db_connect = dbo.getDb();
 db_connect
   .collection("library_books")
   .find({})
   .toArray(function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
 
// This section will help you get a single record by id
recordRoutes.route("/library_books/:id").get(function (req, res) {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 db_connect
   .collection("library_books")
   .findOne(myquery, function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});

recordRoutes.route("/library_books/add").post(function (req, response) {
    let db_connect = dbo.getDb();
    let book = {
      title: req.body.title,
      author: req.body.author,
      ISBN: req.body.ISBN,
    };
    let myobj = {book:book,is_available:true,due_date:"",account:""}
    db_connect.collection("library_books").insertOne(myobj, function (err, res) {
      if (err) throw err;
      response.json(res);
    });
   });

module.exports = recordRoutes;