const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;
const security = require("../security.js");


recordRoutes.route("/test_route").post(function (req, res) {
    console.log("/test_accounts route connected to"); 
    //console.log(req);
    console.log(req.body);
    console.log(req.params);
    res.json("acknowledged");
});

module.exports = recordRoutes;