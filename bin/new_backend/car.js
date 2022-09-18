
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
//app.use(bodyParser.json());
const Car = mongoose.model('Car',carschema);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
const number='0123456789'



app.get("/:caravailable",function(req,res)
{
Car.find(function(err,cars)
{
    var array=[]
    if(err)console.log(err);
    else 
    {
        cars.forEach(function(car)
        {
            if(car.available===req.params.caravailable)
            array.push(car);
        })
        res.send(array);
        //console.log(array[1].car_number);
    }
}
)})

app.post("/",function(req,res){
    
    //console.log("Req Body:",req.body);
    const car10 = new Car({id:req.body.id,car_number:req.body.car_number,available:req.body.available,condition:req.body.condition});
    car10.save();
    // console.log(car10);
    res.send(req.body.id);
})

app.delete("/",function(req, res){
    Car.deleteMany(function(err){if(err)console.log(err)})
})

app.put("/:id",function(req, res){
   // res.send(req.body.car_number);
Car.replaceOne({id:req.params.id},{id:req.body.id,car_number:req.body.car_number},function(err){if(err)console.log(err);
   // else res.send("hi")
//console.log("hi")
});
}
)

app.listen(5000, function(){console.log("Server started on port 3000.");});

