/*TODO
move add account to account manager, check to make sure usernames do not clash
add routes for change password and forgot password
incase of forgot password, new password is emailed and backend changes the password
*/


const password_module = require("../security")
const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const { ObjectID } = require("bson");
const ObjectId = require("mongodb").ObjectId;
 
const allowed_info = {"_id":1,"username":1,"status":1,"password":0}

// returns every username, status and _id of all accounts
recordRoutes.route("/general_accounts").post(function (req, res) {
 let db_connect = dbo.getDb();
 db_connect
   .collection("general_accounts")
   .find({},allowed_info)
   .toArray(function (err, result) {
     if (err) throw err;
     res.json(result);
     console.log("all general_accounts sent")
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
      console.log("account added: "+req.body.username)
    });
   });

recordRoutes.route("/general_accounts/login").post(function (req, response) {
  
  let db_connect = dbo.getDb();
  let myquery = { username: req.body.username };
  db_connect
    .collection("general_accounts")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      if(password_module.check_equality(req.body.password_plaintext,result.password.hash,result.password.salt))
      {
         const auth = password_module.generate_auth_token();
         const ahs = password_module.get_hash_and_salt(auth);
        let token = {hash:ahs.hash,salt:ahs.salt}
        let myobj = {
          status: result.status,
          token: token,
          username: result.username,
          device_id: req.body.device_id
        }
        db_connect.collection("authentication_tokens").insertOne(myobj, function (err, res) {
        if (err) throw err;
        response.json({auth_token:auth});
        });
        console.log(req.body.username+" has logged in");
        //
      }
      else response.json(req.body.username+"attempted to log in, but password incorrect");
    });
 });

 recordRoutes.route("/general_accounts/logout").post(function (req, res) {
  let db_connect = dbo.getDb();
  let all_devices = req.body.device_id === null;
  console.log(all_devices)
  let myquery = !all_devices?{username: req.body.username, device_id:req.body.device_id}:{username: req.body.username}
  db_connect
    .collection("authentication_tokens").deleteMany(myquery,function(err,result){
      if(err)throw err
      let message = "";
      if(result.deletedCount == 0)message = req.body.username+" was not logged in"
      else if(!all_devices)message = req.body.username+" has logged out of device: "+req.body.device_id
      else message = req.body.username+" has logged out of all devices"
      console.log(message);
      res.json(message);
    });
      
 });

module.exports = recordRoutes;
/*
general_accounts:

username
password: hash salt
status

authentication_tokens:

account_id
token: hash salt
*/