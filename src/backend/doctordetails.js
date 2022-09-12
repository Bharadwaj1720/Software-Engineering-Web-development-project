const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');
//const uri = "mongodb+srv://Bootstrapparadox:Team09@cluster0.pinftg3.mongodb.net/exampledb";
mongoose.connect("mongodb+srv://Bootstrapparadox:Team09@cluster0.pinftg3.mongodb.net/bin_db",{ useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const detailschema = new mongoose.Schema({
    name:{
        type:String,
    },
    ID:{
        type:String,
    },

});
const Detail = new mongoose.model("Detail",detailschema);
const doctor=['kushwanth','vishnu','vardhan','bharadwaj','mathew','abhijeeth']
const ID=['MDDP22005','MDOP21006','MDCU22003','MDOP19007','MDDP15008','MDCU18009']
//DP=Drug prescriber , CU = check up,OP=operation,MD=Medical departmentsh
for(var i=0;i<doctor.length;i++) 
{
    const detail=new Detail({
        name:doctor[i],
        ID:ID[i],
    });
    detail.save();
}

app.get("/", function(req, res){res.send("bye");});
app.listen(3000, function(){console.log("Server started on port 3000.");});