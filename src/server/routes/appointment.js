const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');
//const uri = "mongodb+srv://Bootstrapparadox:Team09@cluster0.pinftg3.mongodb.net/exampledb";
mongoose.connect("mongodb+srv://<username>:<password>@cluster0.pinftg3.mongodb.net/bin_db",{ useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");



const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))
app.use(cors());

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
function doctor(date,time1)
{
    const doctor=['kushwanth','vishnu','vardhan','mathew','abhijeeth','bharadwaj']
    let l=0;
    const date1 =  new Date("1/1/2022");
    const date2 = new Date(date);
    const day = (date2.getTime() - date1.getTime())/1000*60*60*24;
    if(day%7<5&&day%7>0)l=0;
    else l=3;
    let var1=time1[0]+time1[1]
    if(var1<"08")return doctor[l];
    else if("08"<var1<"16")return doctor[l+1];
    else if("16"<var1<"24")return doctor[l+1];
    

    return '';
}

app.post('/new',function(req,res){
    console.log("Attempt to access new");
    const appointment1=new Appointment({
        ID:random(6),
        date:req.body.date,
        time:req.body.time,
        cause:req.body.cause,
        doctor:req.body.doctor,

    })
    appointment1.save(function(err)
    {
        if(err)res.send(err)
        else console.log(appointment1)
    })
    res.send(appointment1)

});

app.delete("/deleteID",function(req, res){
    Appointment.deleteOne({ID:req.body.ID},function(err){
        if(err)console.log(err); 
        else res.send("Your appointment is succesfully cancelled")})
})

app.get('/appointments',function(req,res){
    Appointment.find(function(err,appointments)
    {
        var array=[]
        if(err)console.log(err);
        else 
        {
            appointments.forEach(function(appointment)
            {
                array.push(appointment);
            })
            res.json({name:array});
            //res.send({array});
        }
    })
})
app.post('/particular',function(req,res){
    Appointment.find(function(err,appointments)
    {
        var array=[]
        if(err)console.log(err);
        else 
        {
            appointments.forEach(function(appointment)
            {
                if(appointment.ID===req.body.ID)
                array.push(appointment);
            })
            //res.json(array);
            res.send(array);
        }
    })

})
app.post('/update',function(req,res)
{
    Appointment.updateOne({ID:req.body.ID},{time:req.body.time},function(err,docs){
        if(err)console.log(error);
        else console.log(req.body.time);
    });
    Appointment.find(function(err,appointments)
    {
        //var array=[]
        let l=0
        if(err)console.log(err);
        else 
        {
            appointments.forEach(function(appointment)
            {
                if(appointment.ID===req.body.ID){
                    l=1;
                    console.log("hi")
                    res.send(appointment);}
                //array.push(appointment);
            })
            //res.json(array);
            // res.send(array);
        }
        if(l===0)res.send("Was not able to update");
        
    })
})
    app.listen(5000, function(){console.log("Server started on port 5000.");} )
