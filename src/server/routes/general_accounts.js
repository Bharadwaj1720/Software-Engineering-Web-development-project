const password_module = require("../passwords")
const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const { ObjectID } = require("bson");
const ObjectId = require("mongodb").ObjectId;
 
const allowed_info = {"_id":1,"username":1,"status":1,"password":0}

// returns every username, status and _id of all accounts
recordRoutes.route("/general_accounts").get(function (req, res) {
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

// get a single account by _id
recordRoutes.route("/general_accounts/:id").get(function (req, res) {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 db_connect
   .collection("general_accounts")
   .findOne(myquery,allowed_info, function (err, result) {
     if (err) throw err;
     res.json(result);
     console.log("specific general_account with id = "+req.params.id+" has been sent");
   });
});

// register new account
/*
body:
username
password (in plaintext)
status
*/
recordRoutes.route("/general_accounts/add").post(function (req, response) {
    let db_connect = dbo.getDb();
    let myobj = {
      username: req.body.username,
      status: req.body.status,
      password: password_module.get_hash_and_salt(req.body.password_plaintext)
    }
    console.log("object created")
    db_connect.collection("general_accounts").insertOne(myobj, function (err, res) {
      if (err) throw err;
      response.json(res);
      console.log("account added: "+req.body.username)
    });
   });

// update account
/*
can be done without old password
need to implement a forgot password? system
*/

// needs to be re-written to be more secure
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
        console.log("account updated: "+req.body.username)
      });
   });

   // needs to be re-written to be more secure
   recordRoutes.route("general_accounts/delete/:id").delete((req, response) => {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    db_connect.collection("library_accounts").deleteOne(myquery, function (err, obj) {
      if (err) throw err;
      response.json(obj);
      console.log("account deleted: "+req.body.username)
    });
   });


function check_authentication(general_account_id,auth_token,status)
{
   let db_connect = dbo.getDb();
   /*
   req must contain auth_token in body, account_id as a parameter
   */
   let myquery = {account_id:general_account_id};
   db_connect.collection("authentication_tokens").findOne(myquery, function (err, result) {
    if (err) throw err;
    const auth_hash = result.token.hash;
    const auth_salt = result.token.salt;
    if(!password_module.check_equality(auth_token,auth_hash,auth_salt))return false;

    db_connect.collection("general_accounts").findOne({_id:result._id},function (err,result){
        return (result.status === status);
    })
  });
}

recordRoutes.route("/general_accounts/login").post(function (req, response) {
  /*
  check if password is valid
  then generate an authentication token
  store it against account_id in authentication_tokens collection
  return the authentication token

  body:
  username
  password_plaintext
  */
  let db_connect = dbo.getDb();
  let myquery = { username: req.body.username };
  db_connect
    .collection("general_accounts")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      //check if password is correct
      if(password_module.check_equality(req.body.password_plaintext,result.password.hash,result.password.salt))
      {
         const auth = password_module.generate_auth_token();
         const ahs = password_module.get_hash_and_salt(auth);
        //
        let token = {hash:ahs.hash,salt:ahs.salt}
        let myobj = {
          account_id: result._id,
          token: token,
        }
        db_connect.collection("authentication_tokens").insertOne(myobj, function (err, res) {
          if (err) throw err;

        // return authentication token  
        response.json(auth);
        });
        console.log(req.body.username+"has logged in");
        //
      }
      else response.json(req.body.username+"attempted to log in, but password incorrect");
    });
 });

 recordRoutes.route("/general_accounts/logout").post(function (req, res) {
  /*
  delete all entrys for the user with in authentication_tokens collection
  
  body:
  username

  find _id of username
  search authentication_tokens for _id
  delete all entries with that _id
  */
  let db_connect = dbo.getDb();
  let myquery = { username: req.body.username };
  db_connect
    .collection("general_accounts")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
        db_connect.collection("authentication_tokens").insertOne(myobj, function (err, res) {
          if (err) throw err;
        });
        //
       });

       db_connect.collection("general_accounts").deleteMany({account_id:result._id}, function (err, obj) {
        if (err) throw err;
        console.log("1 document deleted");
        response.json(obj);
      });
      console.log(req.body.username+"has logged out and all authentication tokens have been deleted");
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