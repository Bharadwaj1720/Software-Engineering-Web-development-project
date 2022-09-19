<<<<<<< HEAD:bin/new_backend/appointment.js
const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');
//const uri = "mongodb+srv://Bootstrapparadox:Team09@cluster0.pinftg3.mongodb.net/exampledb";
mongoose.connect("mongodb+srv://Bootstrapparadox:Team09@cluster0.pinftg3.mongodb.net/bin_db", { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const express = require("express");
const bodyParser = require("body-parser");


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const appointmentschema = new mongoose.Schema({
    ID: {
        type: String,
        unique: true,
    },
    date: {
        type: String,
    },
    doctor: {
        type: String,
    },
    time: {
        type: String,
    },
    visit: {
        type: String,
    },
    cause: {
        type: String,
    }
})
const detailschema = new mongoose.Schema({
    name: {
        type: String,
    },
    ID: {
        type: String,
    },
})
const Detail = mongoose.model('Detail', detailschema);

const Appointment = mongoose.model('Appointment', appointmentschema);
function random(length) {
    let character = 'abcdefghijklmnopqrstuvwxyxABCDEFGHIJKLMNOPQRSTUVWXYz0123456789'
    result = ''
    for (var i = 0; i < length; i++)result = result + character[Math.floor(Math.random() * character.length)];
    return result;
}
function doctor(date, time) {
    const doctor = ['kushwanth', 'vishnu', 'vardhan', 'mathew', 'abhijeeth', 'bharadwaj']
    let l = 0;
    const date1 = new Date("1/1/2022");
    const date2 = new Date(date);
    const day = (date2.getTime() - date1.getTime()) / 1000 * 60 * 60 * 24;
    if (day % 7 < 5 && day % 7 > 0) l = 0;
    else l = 3;
    if (time[time.length - 2] == 'a' && time[0] < '8') return doctor[l];
    if (time[time.length - 2] == 'a' && time[0] > '8') return doctor[l + 1];
    if (time[time.length - 2] == 'p' && time[0] < '4') return doctor[l + 1];
    if (time[time.length - 2] == 'p' && time[0] > '4') return doctor[l + 2];

    return '';
}

app.post('/', function (req, res) {
    const appointment1 = new Appointment({
        ID: random(6),
        date: req.body.date,
        doctor: doctor(req.body.date, req.body.time),
        time: req.body.time,
        visit: req.body.visit,
        cause: req.body.cause

    })
    appointment1.save(function (err) {
        if (err) res.send(err)
        else console.log(appointment1)
    })
    res.send(appointment1)

});

app.delete("/:ID", function (req, res) {
    Appointment.deleteMany({ ID: req.params.ID }, function (err) {
        if (err) console.log(err);
        else res.send("Your appointment is succesfully cancelled")
    })
})

app.get('/', function (req, res) {
    Appointment.find(function (err, appointments) {
        var array = []
        if (err) console.log(err);
        else {
            appointments.forEach(function (appointment) {
                array.push(appointment);
            })
            res.send(array);
        }
    })
})
app.listen(6000, function () { console.log("Server started on port 6000."); });
=======
const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');
//const uri = "mongodb+srv://Bootstrapparadox:Team09@cluster0.pinftg3.mongodb.net/exampledb";
mongoose.connect("mongodb+srv://Bootstrapparadox:Team09@cluster0.pinftg3.mongodb.net/bin_db",{ useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const express = require("express");
const bodyParser = require("body-parser");


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const appointmentschema = new mongoose.Schema({
    ID:{
        type:String,
        unique:true,
    },
    date:{
        type:String,
    },
    doctor:{
        type:String,
    },
    time:{
        type:String,
    },
    visit:{
        type:String,
    },
    cause:{
        type:String,
    }
})
const detailschema = new mongoose.Schema({
    name:{
        type:String,
    },
    ID:{
        type:String,
    },
})
const  Detail = mongoose.model('Detail', detailschema);

const Appointment = mongoose.model('Appointment',appointmentschema);
function random(length)
{
    let character='abcdefghijklmnopqrstuvwxyxABCDEFGHIJKLMNOPQRSTUVWXYz0123456789'
    result=''
    for(var i=0; i<length ;i++)result=result+character[Math.floor(Math.random()*character.length)];
    return result;
}
function doctor(date,time)
{
    const doctor=['kushwanth','vishnu','vardhan','mathew','abhijeeth','bharadwaj']
    let l=0;
    const date1 =  new Date("1/1/2022");
    const date2 = new Date(date);
    const day = (date2.getTime() - date1.getTime())/1000*60*60*24;
    if(day%7<5&&day%7>0)l=0;
    else l=3;
    if(time[time.length-2]=='a'&&time[0]<'8')return doctor[l];
    if(time[time.length-2]=='a'&&time[0]>'8')return doctor[l+1];
    if(time[time.length-2]=='p'&&time[0]<'4')return doctor[l+1];
    if(time[time.length-2]=='p'&&time[0]>'4')return doctor[l+2];

    return '';
}

app.post('/',function(req,res){
    const appointment1=new Appointment({
        ID:random(6),
        date:req.body.date,
        doctor:doctor(req.body.date,req.body.time),
        time:req.body.time,
        visit:req.body.visit,
        cause:req.body.cause

    })
    appointment1.save(function(err)
    {
        if(err)res.send(err)
        else console.log(appointment1)
    })
    res.send(appointment1)

});

app.delete("/:ID",function(req, res){
    Appointment.deleteMany({ID:req.params.ID},function(err){
        if(err)console.log(err); 
        else res.send("Your appointment is succesfully cancelled")})
})


    app.listen(5000, function(){console.log("Server started on port 5000.");} );
>>>>>>> ee20d2a8560ea89b3d54d8a53a674a343f185428:bin/new_backend/routes/appointment.js
