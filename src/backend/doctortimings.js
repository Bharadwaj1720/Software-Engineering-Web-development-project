const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');
//const uri = "mongodb+srv://Bootstrapparadox:Team09@cluster0.pinftg3.mongodb.net/exampledb";
mongoose.connect("mongodb+srv://Bootstrapparadox:Team09@cluster0.pinftg3.mongodb.net/bin_db",{ useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const timeSchema=new mongoose.Schema({
    name:{
        type: String,
    },
    Intime:{
        type:String,
    },
    Outtime:{
        type:String,
    }
});
const Time = new mongoose.model("Time",timeschema);
const doctor =['kushwanth','vishnu','vardhan','bharadwaj','mathew','abhijeeth']

const time1=new Time({
    name:'kushwanth',
    Intime:'12AM',
    Outtime:'4AM',
});
const time2=new Time({
    name:'vishnu',
    Intime:'4AM',
    Outtime:'8AM',
});
const time3=new Time({
    name:'vardhan',
    Intime:'8AM',
    Outtime:'12pM',
});
const time4=new Time({
    name:'bharadwaj',
    Intime:'12pM',
    Outtime:'4pM',
});
const time5=new Time({
    name:'mathew',
    Intime:'4pM',
    Outtime:'8pM',
});
const time6=new Time({
    name:'abhijeeth',
    Intime:'8pM',
    Outtime:'12pM',
});


app.get("/", function(req, res){res.send("bye");});
app.listen(3000, function(){console.log("Server started on port 3000.");});