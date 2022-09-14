
const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');
//const uri = "mongodb+srv://Bootstrapparadox:Team09@cluster0.pinftg3.mongodb.net/exampledb";
mongoose.connect("mongodb+srv://Bootstrapparadox:Team09@cluster0.pinftg3.mongodb.net/bin_db",{ useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const Schema=mongoose.Schema;
const Detail=mongoose.model("Detail",new Schema({}),"details");
//Detail.find({},function(err,details){console.log(details)})
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const carschema =new mongoose.Schema({
    id:{
        type:String,
    },
    car_number:{
        type:String,
    },
    condition:{
        type:String,
    },
    available:{
        type:String,
    },
});
const number='0123456789'

function getcarnamenumber(length)
{
    result=''
    for(let i=0; i<length; i++)
    {    
        result += number[Math.floor(Math.random()*number.length)]; 
    }
    return result;
}

const character = 'ABCDEFGHIJKLMNOPQRSTUVWXYz '
function getcarnamestring(length){
    result=' ';
    for(let i=0; i<length; i++)
    {    
        result += character[Math.floor(Math.random()*character.length)]; 
    }
    return result;
}

function getcarname()
{
    result='AP'+getcarnamenumber(2)+getcarnamestring(2)+getcarnamenumber(3);
    return result;
}

const condition =['good','bad','average']

function getcondition()
{
    result=condition[Math.floor(Math.random()*condition.length)]
    return result;
}

const isavailable=["available","not available"]
function getavailable()
{
    result=isavailable[Math.floor(Math.random()*isavailable.length)]
    return result;
}
const Car = new mongoose.model('Car', carschema);
 
const car1=new Car({
    id: 'car1',
    car_number:getcarname(),
    condition:getcondition(),
    available:getavailable(),

});
const car2=new Car({
    id: 'car2',
    car_number:getcarname(),
    condition:getcondition(),
    available:getavailable(),

});
const car3=new Car({
    id: 'car3',
    car_number:getcarname(),
    condition:getcondition(),
    available:getavailable(),

});
const car4=new Car({
    id: 'car4',
    car_number:getcarname(),
    condition:getcondition(),
    available:getavailable(),

});
const car5=new Car({
    id: 'car5',
    car_number:getcarname(),
    condition:getcondition(),
    available:getavailable(),

});
const car6=new Car({
    id: 'car6',
    car_number:getcarname(),
    condition:getcondition(),
    available:getavailable(),

});

app.listen(3000, function(){console.log("Server started on port 3000.");});
app.get("/", function(req, res){res.send("bye");});