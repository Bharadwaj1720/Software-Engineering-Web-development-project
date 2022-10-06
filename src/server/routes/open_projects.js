const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;
const security = require("../security.js");
 

recordRoutes.route("/open_projects").post(function (req, res) {
  console.log("request made to ./open_projects")
  function callback(is_valid,message) {
    if(!is_valid){res.json("authentication failed:"+message);return;}
    let db_connect = dbo.getDb();
    db_connect
   .collection("open_projects")
   .find({})
   .toArray(function (err, result) {
     if (err) throw err;
     res.json(result);
   });
  }
  security.check_authentication(req.body.auth_token,["all","none"],callback)
});
 
recordRoutes.route("/open_projects/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect
    .collection("open_projects")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    });
 });

recordRoutes.route("/open_projects/add").post(function (req, response) {
    let db_connect = dbo.getDb();
    let project = {
            project_name:req.body.project_name,
            project_description:req.body.project_description,
            discipline:req.body.project_discipline,
            closed:req.body.closed,
            max_number:req.body.max_number,
            members:[]
    };
    db_connect.collection("open_projects").insertOne(project, function (err, res) {
      if (err) throw err;
      response.json(res);
    });
   });

   
   /*
   recordRoutes.route("open_projects/update/:id").post(function (req, response) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    let book = {
      title: req.body.title,
      author: req.body.author,
      ISBN: req.body.ISBN,
    };
    let newvalues = {
      $set: {
        book: book,
        is_available: req.body.is_available,
        due_date: req.body.due_date,
        account: req.body.account
      },
    };
    db_connect
      .collection("open_projects")
      .updateOne(myquery, newvalues, function (err, res) {
        if (err) throw err;
        console.log("1 document updated");
        response.json(res);
      });
   });
  */

   recordRoutes.route("open_projects/delete/:id").delete((req, response) => {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    db_connect.collection("open_projects").deleteOne(myquery, function (err, obj) {
      if (err) throw err;
      console.log("1 open project deleted!");
      response.json(obj);
    });
   });

module.exports = recordRoutes;