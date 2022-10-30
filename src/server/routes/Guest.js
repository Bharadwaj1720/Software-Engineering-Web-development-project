const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');



mongoose.connect("mongodb+srv://Bootstrapparadox:ASMKJPVVUKVB@cluster0.pinftg3.mongodb.net/bin_db",{ useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const express = require("express");
const bodyParser = require("body-parser");
const { request } = require('express');
const e = require('express');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const guestSchema = new mongoose.Schema({ 
    name:{type:String,},
    transport:{ mode:{type:String,},
                cost:{type:String,},
            },
    reason:{type:String,},
    durationfrom:{type:String,},
    durationto : {type:String,},
    approvedby:{type:String,},
    count:{type:Number,},
    availableCars:{type:String,},
    guesthouse:{type:String,},
    guestvehicle:{type:String,}
})
const Guest = mongoose.model('Guest',guestSchema);

const carSchema = new mongoose.Schema({
    carId:{type:String,},
    number:{type:String,},
    condition:{type:String,},
    available:{type:String,}
})
const Car = mongoose.model('Car',carSchema);

const roomSchema = new mongoose.Schema({
    roomId:{type:String,},
    capacity:{type:Number,},
    acOrNot:{type:String,},
    condition:{type:String,},
    available:{type:String,}
})
const Room = mongoose.model('Room',roomSchema);
//room id regex {block-name}{floor-number}{room-number}{capacity}{AC Or Not}

//app.use(require("D:\\CS20B050\\SEProject\\prototype\\appointment.js"));

app.get("/",function(req,res){

    var array=[]
    var l=0;
    Car.find(function(err,cars)
    {
    if(err)console.log(err);
    else 
    {
        cars.forEach(function(car)
        {
            if(car.available==='yes'&&car.condition==='good')
            array.push(car.number);
            l=1;
        })
    }
    if(l==0)array.push("We were sorry to inform that all the cars were either booked or in bad condition.If you insist we will inform to management to take required measures");
    res.send(array);
    })
});
app.post('/allot-room',function(req,res)
{   
    console.log(req.body.guest)
    const guest1 = new Guest({
        name:req.body.name,
        durationfrom:req.body.durationfrom,
        durationto:req.body.durationto,
        guesthouse:req.body.guesthouse,
    })
    guest1.save(function(err)
    {
        if(err)res.send(err)
        else console.log(guest1)
    })
    Room.find(function(err,rooms)
    {
        const array1=[]
        if(err)console.log(err);
        else{
            rooms.forEach(function(room)
            {
                array1.push(room.roomId);
                console.log(room.roomId);
            })
        }
        res.send(array1)
    })

})

app.post("/",function(req,res){
    const Guest1 = new Guest({
        name:req.body.name,
        transport:{mode:req.body.mode,cost:req.body.cost,},
        reason:req.body.reason,
        duration:{from:req.body.from, to:req.body.to,},
        guesthouse:req.body.guesthouse,
        guestvehicle:req.body.availableCars,
    });
    Guest1.save();
    res.send(Guest1);
});
app.post('/roomBook',function(req,res){
    var array1=[]
    var l=0
    var isAC=0
    var isNotAc=0
    var isNotGood=0
    console.log(req.body.acOrNot+" "+req.body.capacity)
    if(req.body.capacity>4)
    {
        array1.push("There are only 4 bed room rooms please select multiple rooms ");

    }
    Room.find(function(err,rooms){
        if(err)console.log(err);
        else{
            rooms.forEach(function(room)
            {
                if(room.acOrNot==='AC')isAC=1
                if(room.acOrNot==='NAC')isNotAC=1
                if(room.condition==='good')isNotGood=1
                if(room.acOrNot===req.body.acOrNot&&room.capacity>=req.body.capacity&&room.condition==='good')
                {
                    array1.push(room.roomId);
                    console.log(room.roomId);
                    console.log(array1)
                    l=1
                }
                if(req.body.capacity>4)
                {
                    if(room.acOrNot===req.body.acOrNot&&room.condition==='good')
                          array1.push(room.roomId);
                    l=1
                }
            })
            if(l===0)
            {
                array1.push("We were sorry to inform tht no rooms were available as of now due to ");
                if(req.body.acOrNot==='AC'&&isAC===0)array1.push("no AC rooms are available");
                if(req.body.acOrNot==='NAC'&&isNotAC===0)array1.push("no non-AC rooms are available");
                if(isNotGood===0)array1.push("no rooms avaiable are in good condition");
            }
            res.send(array1);
        }

    })
});
app.listen(5000,function(res,req)
{
    console.log("Server running successfully");
});