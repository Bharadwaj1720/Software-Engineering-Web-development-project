const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');
//const uri = "mongodb+srv://Bootstrapparadox:Team09@cluster0.pinftg3.mongodb.net/exampledb";
mongoose.connect("mongodb+srv://Bootstrapparadox:Team09@cluster0.pinftg3.mongodb.net/bin_db",{ useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

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
})
const character ='abcdefghijklmnopqrstuvwxyxABCDEFGHIJKLMNOPQRSTUVWXY1234567890-='
function generateID(length)
{
    let result=' ';
    for(var i=0; i<length; i++)
    {
        result += character[Math.floor(Math.random()*character.length)];
    }
    return result;
}

const doctor =['kushwanth','vishnu','vardhan','bharadwaj','mathew','abhijeeth']
const cause=['head ache','fever','muscle dislocated','body pains','cold']
const Appointment= mongoose.model("Appointment",appointmentschema);

const appointment1 = new Appointment({
    ID: generateID(5),
    date: '5/09/2022',
    doctor:doctor[0],
    time:'5:40',
    cause:cause[0],
});
const appointment2 = new Appointment({
    ID: generateID(5),
    date: '5/09/2022',
    doctor:doctor[2],
    time:'5:40',
    cause:cause[2],
});
const appointment5 = new Appointment({
    ID: generateID(5),
    date: '5/09/2022',
    doctor:doctor[3],
    time:'5:40',
    cause:cause[3],
});
const appointment3 = new Appointment({
    ID: generateID(5),
    date: '5/09/2022',
    doctor:doctor[4],
    time:'5:40',
    cause:cause[4],
});

const appointment4 = new Appointment({
    ID: generateID(5),
    date: '5/09/2022',
    doctor:doctor[5],
    time:'5:40',
    cause:cause[5],

});
const appointment6 = new Appointment({
    ID: generateID(5),
    date: '5/09/2022',
    doctor:doctor[6],
    time:'5:40',
    cause:cause[5],
});

appointment1.save();
appointment2.save();
appointment3.save();
appointment4.save();
appointment5.save();
appointment6.save();
app.get("/", function(req, res){res.send("bye");});
app.listen(3000, function(){console.log("Server started on port 3000.");});