
const password_module = require("../security")
const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const { ObjectID } = require("bson");
const ObjectId = require("mongodb").ObjectId;







const allowed_info = { "_id": 0, "username": 1, "status": 1, "password": 0 }
// returns username, status of all accounts
recordRoutes.route("/general_accounts").get(function (req, res) {
  /*
  req: auth_token
  */
  function callback(is_valid, message) {
    if (!is_valid) { res.json("authentication failed:" + message); return; }
    //
    let db_connect = dbo.getDb();
    db_connect
      .collection("general_accounts")
      .find({}, allowed_info)
      .toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
        console.log("all general_accounts sent")
      });
    //
  }
  callback(true, "");
  //password_module.check_authentication(req.body.auth_token, ["root"], callback)
});





recordRoutes.route("/general_accounts/add").post(function (req, response) {
  /*
  req: username, password_plaintext, status
  */
  function callback(is_valid, message) {
    if (!is_valid) { res.json("authentication failed:" + message); return; }
    let db_connect = dbo.getDb();
    if (req.body.status === "root") {
      console.log("attempt to create root account")
      response.json("error: root accounts cannot be created")
      return;
    }
    let myobj = {
      username: req.body.username,
      status: req.body.status,
      password: password_module.get_hash_and_salt(req.body.password_plaintext)
    }
    db_connect.collection("general_accounts").find({ username: req.body.username }).toArray(function (err, res) {
      if (err) throw err;
      if (res.length > 0) {
        response.json("account with given username already exists");
        console.log("creation failed due to duplicate username: " + myobj.username);
        return;
      }
      db_connect.collection("general_accounts").insertOne(myobj, function (err, res) {
        if (err) throw err;
        response.json(res);
        console.log("account added: " + req.body.username)
      });
    })
  }
  password_module.check_authentication(req.body.auth_token, ["root"], callback)

});




recordRoutes.route("/general_accounts/delete").post((req, response) => {
  /*
  req: auth_token, username
  */
  function callback(is_valid, message) {
    if (!is_valid) { res.json("authentication failed:" + message); return; }
    //
    let db_connect = dbo.getDb();
    let myquery = { username: req.body.username };
    db_connect.collection("general_accounts").findOne(myquery, function (err, result) {
      if (err) throw err;
      if (result === null) {
        console.log("given username does not exist");
        response("non-existent account"); return;
      }
      if (result.status === "root") {
        console.log("attempt to delete root");
        response("gived account is root and cannot be deleted"); return;
      }
      db_connect.collection("general_accounts").deleteOne(myquery, function (err, obj) {
        if (err) throw err;
        console.log("account deleted: " + req.body.username);
        response.json(obj);
      });
    });
  }
  password_module.check_authentication(req.body.auth_token, ["root"], callback)
});






recordRoutes.route("/general_accounts/login").post(function (req, response) {
  console.log("Login requested");
  /*
  req: username, password_plaintext, device_id
  */
  let db_connect = dbo.getDb();
  let myquery = { username: req.body.username };
  db_connect
    .collection("general_accounts")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      if (result === null) { console.log("no such user"); return; }
      console.log(result)
      if (password_module
        .check_equality(req.body.password_plaintext, result.password.hash, result.password.salt)) {
        console.log("password correct")
        const auth = password_module.generate_auth_token();
        const ahs = password_module.get_hash_and_salt(auth);
        let token = { hash: ahs.hash, salt: ahs.salt }
        let myobj = {
          status: result.status,
          token: token,
          username: result.username,
          device_id: req.body.device_id
        }
        db_connect.collection("authentication_tokens").insertOne(myobj, function (err, res) {
          if (err) throw err;
          response.json({ auth_token: auth, account: result });
        });
        console.log(req.body.username + " has logged in");
        //
      }
      else {
        response.json(req.body.username + "attempted to log in, but password incorrect");
      }
    });
});






recordRoutes.route("/general_accounts/logout").post(function (req, res) {
  /*
  req: username, device_id (may be null for logout of all devices)
  */
  let db_connect = dbo.getDb();
  let all_devices = req.body.device_id === null;
  console.log(all_devices)
  let myquery = !all_devices ? { username: req.body.username, device_id: req.body.device_id } : { username: req.body.username }
  db_connect
    .collection("authentication_tokens").deleteMany(myquery, function (err, result) {
      if (err) throw err
      let message = "";
      if (result.deletedCount == 0) message = req.body.username + " was not logged in"
      else if (!all_devices) message = req.body.username + " has logged out of device: " + req.body.device_id
      else message = req.body.username + " has logged out of all devices"
      console.log(message);
      res.json(message);
    });
});




recordRoutes.route("/general_accounts/edit").post(function (req, res) {
  /*
  req: username, new_status
  */
  function callback(is_valid, message) {
    if (!is_valid) { res.json("authentication failed:" + message); return; }
    if (req.body.new_status === "root") {
      console.log("attempt to upgrade to root")
      res.json("error: ony one root may exist")
      return;
    }
    let db_connect = dbo.getDb();
    db_connect.collection("general_accounts").updateOne({ username: req.body.username },
      { $set: { status: req.body.new_status } }, function (err, result) {
        if (err) throw err;
        res.json(result);
      })
  }
  password_module.check_authentication(req.body.auth_token, ["root"], callback)
})






recordRoutes.route("general_accounts/force_logout").post(function (req, res) {
  /*
  req: auth_token
  */
  function callback(is_valid, message) {
    if (!is_valid) { res.json("authentication failed:" + message); return; }
    password_module.force_logout();
  }
  password_module.check_authentication(req.body.auth_token, ["root"], callback)
})





recordRoutes.route("/general_accounts/change_password").post(function (req, res) {
  /*
  req:  unsername, password_plaintext/auth_token, new_password_plaintext
  */
  let db_connect = dbo.getDb();
  let myquery = { username: req.body.username }
  db_connect
    .collection("general_accounts").findOne(myquery, function (err, result) {
      if (err) throw err
      let message = ""
      function action() {
        db_connect.collection("general_accounts")
          .updateOne({ username: result.username },
            { $set: { password: password_module.get_hash_and_salt(req.body.new_password_plaintext) } }
            , function (err, result) {
              if (err) throw err
              res.json(result)
            })
      }
      if (result === null) message = "username does not exist"
      if (typeof req.password_plaintext != "undefined") {
        if (password_module.check_equality(req.password_plaintext, result.password.hash, result.password.salt)) {
          console.log("password changed by user")
          action();
        }
      }
      else if (typeof req.auth_token != "undefined") {
        password_module.check_authentication(req.auth_token, ["root"], function (is_valid, message) {
          console.log("force change of password by root")
          action();
        })
      }
    });
});

module.exports = recordRoutes;