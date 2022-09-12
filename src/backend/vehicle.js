const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');
//const uri = "mongodb+srv://Bootstrapparadox:Team09@cluster0.pinftg3.mongodb.net/exampledb";
mongoose.connect("mongodb+srv://Bootstrapparadox:Team09@cluster0.pinftg3.mongodb.net/bin_db",{ useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const vehicleschema = mongoose.Schema({
    name:{
        type:String,
    },
    city:{
        from:{
            type:String,
        },
        to:{
            type:String,
        }
    },
    date:{
        start:{
            type:String,
        },
        end:{
            type:String,
        }
    },
    mode:{
        type:String,
    },
    aprovedBy:{
        type:String,
    }
})
const transport=['car','flight'];
function getTransport()
{
    return transport[Math.floor(Math.random()*2)];
}
const character ='abcdefghijklmnopqrstuvwxyxABCDEFGHIJKLMNOPQRSTUVWXYZ'
function getGuestname(length){
    result=' ';
    for(let i=0; i<length; i++){    result += character[Math.floor(Math.random()*character.length)]; }
    return result;
}
function getfaculty(length){
    result=' ';
    for(let i=0; i<length; i++){    result += character[Math.floor(Math.random()*character.length)]; }
    return result;
}
const city=['delhi','mumbai','kolkata','Dhanbad','Banglore'];
function getcity()
{
    return city[Math.floor(Math.random()*5)];
}
const startdate=['5/12/2020','6/10/2020','7/10/2020','8/10/2020','9/10/2020'];
const enddate=['9/12/2020','11/10/2020','12/10/2020','13/10/2020','14/10/2020'];

function getstartdate(){
    return startdate[Math.floor(Math.random()*5)];
}


function getenddate(){
    return enddate[Math.floor(Math.random()*5)];
}

const Vehicle = mongoose.model('Vehicle',vehicleschema);

const vehicle2=new Vehicle({
    name:getGuestname(Math.floor(Math.random()*5)+4),
    city:{
        from:getcity(),
        to:'Tirupathi',
    },
    date:{
        start:getstartdate(),
        end:getenddate(),
    },
    mode:getTransport(),
    aprovedBy:getGuestname(Math.floor(Math.random()*5)+4),
})
const vehicle3=new Vehicle({
    name:getGuestname(Math.floor(Math.random()*5)+4),
    city:{
        from:getcity(),
        to:'Tirupathi',
    },
    date:{
        start:getstartdate(),
        end:getenddate(),
    },
    mode:getTransport(),
    aprovedBy:getGuestname(Math.floor(Math.random()*5)+4),
})
const vehicle4=new Vehicle({
    name:getGuestname(Math.floor(Math.random()*5)+4),
    city:{
        from:getcity(),
        to:'Tirupathi',
    },
    date:{
        start:getstartdate(),
        end:getenddate(),
    },
    mode:getTransport(),
    aprovedBy:getGuestname(Math.floor(Math.random()*5)+4),
})
const vehicle5=new Vehicle({
    name:getGuestname(Math.floor(Math.random()*5)+4),
    city:{
        from:getcity(),
        to:'Tirupathi',
    },
    date:{
        start:getstartdate(),
        end:getenddate(),
    },
    mode:getTransport(),
    aprovedBy:getGuestname(Math.floor(Math.random()*5)+4),
})
const vehicle6=new Vehicle({
    name:getGuestname(Math.floor(Math.random()*5)+4),
    city:{
        from:getcity(),
        to:'Tirupathi',
    },
    date:{
        start:getstartdate(),
        end:getenddate(),
    },
    mode:getTransport(),
    aprovedBy:getGuestname(Math.floor(Math.random()*5)+4),
})
const vehicle7=new Vehicle({
    name:getGuestname(Math.floor(Math.random()*5)+4),
    city:{
        from:getcity(),
        to:'Tirupathi',
    },
    date:{
        start:getstartdate(),
        end:getenddate(),
    },
    mode:getTransport(),
    aprovedBy:getGuestname(Math.floor(Math.random()*5)+4),
})

//vehicle1.save();
vehicle2.save();
vehicle3.save();
vehicle4.save();
vehicle5.save();
vehicle6.save();
vehicle7.save();

app.get("/", function(req, res){res.send("bye");});
app.listen(3000, function(){console.log("Server started on port 3000.");});