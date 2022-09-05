const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');
//const uri = "mongodb+srv://Bootstrapparadox:Team09@cluster0.pinftg3.mongodb.net/exampledb";
mongoose.connect("mongodb+srv://Bootstrapparadox:Team09@cluster0.pinftg3.mongodb.net/bin_db",{ useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const drugschema = new mongoose.Schema({
    drug:{
        Name:{
                type:String,
        },
        ISO_ID:{
                type:String,
        },
    },
    exp_date:{
        type:String,
    }
})
const character ='123467890'
function generateISO(length){
    result='ISO '
    for(var i=0; i<length; i++){
        result+=character[Math.floor(Math.random()*character.length)];
}
return result;
}
const character1='abcdefghijklmnopqrstuvwxyxABCDEFGHIJKLMNOPQRSTUVWXY1234567890'
function generatename(length){
    result='ISO'
    for(var i=0; i<length; i++){
        result+=character1[Math.floor(Math.random()*character1.length)];
}
return result;
}
const Drug = mongoose.model('Drug',drugschema);

const drug1 = new Drug({
  drug:{
    Name:generatename(10),
    ISO_ID:generateISO(10),
  },
  exp_date:'29/02/2024',
})
const drug2 = new Drug({
    drug:{
      Name:generatename(10),
      ISO_ID:generateISO(10),
    },
    exp_date:'29/02/2024',
  })
  const drug3 = new Drug({
    drug:{
      Name:generatename(10),
      ISO_ID:generateISO(10),
    },
    exp_date:'29/02/2024',
  })
  const drug4 = new Drug({
    drug:{
      Name:generatename(10),
      ISO_ID:generateISO(10),
    },
    exp_date:'29/02/2024',
  })
  drug1.save();
  drug2.save();
  drug3.save();
  drug4.save();
 // Drug.deleteMany([drug1,drug2,drug3,drug4],function(err){if(err){console.log(err);}});
app.get("/", function(req, res){res.send("bye");});
app.listen(3000, function(){console.log("Server started on port 3000.");});