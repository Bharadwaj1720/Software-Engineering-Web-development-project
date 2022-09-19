const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;


// This section will help you get a list of all the records.
recordRoutes.route("/library_journals").get(function (req, res) {
    let db_connect = dbo.getDb();
    db_connect
        .collection("library_journals")
        .find({})
        .toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

// This section will help you get a single record by id
recordRoutes.route("/library_journals/:id").get(function (req, res) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    db_connect
        .collection("library_journals")
        .findOne(myquery, function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

recordRoutes.route("/library_journals/add").post(function (req, response) {
    let db_connect = dbo.getDb();
    let book = {
        title: req.body.title,
        author: req.body.author,
        ISBN: req.body.ISBN,
    };
    let myobj = { book: book, is_available: true, due_date: "", account: "" }
    db_connect.collection("library_journals").insertOne(myobj, function (err, res) {
        if (err) throw err;
        response.json(res);
    });
});

recordRoutes.route("library_journals/update/:id").post(function (req, response) {
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
        .collection("library_journals")
        .updateOne(myquery, newvalues, function (err, res) {
            if (err) throw err;
            console.log("1 document updated");
            response.json(res);
        });
});

recordRoutes.route("library_journals/delete/:id").delete((req, response) => {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    db_connect.collection("library_journals").deleteOne(myquery, function (err, obj) {
        if (err) throw err;
        console.log("1 document deleted");
        response.json(obj);
    });
});

module.exports = recordRoutes;