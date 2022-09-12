const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');
//const uri = "mongodb+srv://Bootstrapparadox:Team09@cluster0.pinftg3.mongodb.net/exampledb";
mongoose.connect("mongodb+srv://Bootstrapparadox:Team09@cluster0.pinftg3.mongodb.net/bin_db",{ useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const guesthouseschema = mongoose.Schema({
    name:{
        type:String,
    },
    date:{
        from:{
            type:String,
        },
        to:{
            type:String,
        },
    },
    HouseID:{
        type:String,
    },
})
const block ='ABCDEFGH';
function gethouseid()
{
    return block[Math.floor(Math.random()*5)]+Math.floor(Math.random()*5)+Math.floor(Math.random()*20)
}
const startdate=['5/12/2020','6/10/2020','7/10/2020','8/10/2020','9/10/2020'];
const enddate=['9/12/2020','11/10/2020','12/10/2020','13/10/2020','14/10/2020'];

function getstartdate(){
    return startdate[Math.floor(Math.random()*5)];
}

const character = 'abcdefghijklmnopqrstuvwxyxABCDEFGHIJKLMNOPQRSTUVWXYz'
function getGuestname(length){
    result=' ';
    for(let i=0; i<length; i++){    result += character[Math.floor(Math.random()*character.length)]; }
    return result;
}

function getenddate(){
    return enddate[Math.floor(Math.random()*5)];
}

const House = mongoose.model('House',guesthouseschema);
const house1=new House({
    name:getGuestname(Math.floor(Math.random()*5) + 4),
    date:{
        from:getstartdate(),
        to:getenddate(),
    },
    HouseID:gethouseid(),
});
const house2=new House({
    name:getGuestname(Math.floor(Math.random()*5) + 4),
    date:{
        from:getstartdate(),
        to:getenddate(),
    },
    HouseID:gethouseid(),
});
const house3=new House({
    name:getGuestname(Math.floor(Math.random()*5) + 4),
    date:{
        from:getstartdate(),
        to:getenddate(),
    },
    HouseID:gethouseid(),
});
const house4=new House({
    name:getGuestname(Math.floor(Math.random()*5) + 4),
    date:{
        from:getstartdate(),
        to:getenddate(),
    },
    HouseID:gethouseid(),
});
const house5=new House({
    name:getGuestname(Math.floor(Math.random()*5) + 4),
    date:{
        from:getstartdate(),
        to:getenddate(),
    },
    HouseID:gethouseid(),
});
const house6=new House({
    name:getGuestname(Math.floor(Math.random()*5) + 4),
    date:{
        from:getstartdate(),
        to:getenddate(),
    },
    HouseID:gethouseid(),
});
house1.save();
house2.save();
house3.save();
house4.save();
house5.save();
house6.save();
app.get("/", function(req, res){res.send("bye");});
app.listen(3000, function(){console.log("Server started on port 3000.");});