const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://Bootstrapparadox:Team09@cluster0.pinftg3.mongodb.net/bin_db",{ useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const express = require("express");
const bodyParser = require("body-parser");

const app = express();



const recordSchema = new mongoose.Schema({
    RollNo:{
        type: String,
        unique: true,
        required: [true,"Please enter your data"]
    },
    medicalrec:{
         bloodgroup:{
            type:String,
            required: [true,"Please enter your data"]
        },
        height:{
            type:Number,
            required: [true,"Please enter your data"]
        },
        weight:{
            type:Number,
            required: [true,"Please enter your data"]
        },
        gender:{
            type:String,
            required: [true,"Please enter your data"]
        },
        preexistinghealthissues:{
            type:String,
            required: [true,"Please enter your data"]
        }
    },
})

const preexistinghealthissues=['pet allergie','dust allergies','peanut allergies','diabetes','migraine','asthama','none'];
const rollno=['cs20b060','cs20b061','cs20b062','cs20b063','cs20b064','cs20b065','cs20b066','cs20b067','cs20b068','cs20b069','cs20b070'];
const characters='AB'
const characters2='+-'
function Bloodgroup()
{
    let result=characters.charAt(Math.floor(Math.random()*2))+characters2.charAt(Math.floor(Math.random()*2));
    return result;
}
function gender(){
    let result=Math.floor(Math.random()*2);
    if(result===1)return "Male";
    else return "Female";
}

function healthissues(){
    let result=Math.floor(Math.random()*6);
    return preexistinghealthissues[result];
}

function height()
{
    return 121+Math.floor(Math.random()*110);
}

function weight()
{
    return 50+ Math.floor(Math.random()*70);
}
string1="records"
const Record= mongoose.model("Record",recordSchema);

    
    const record1=new Record({
        RollNo:rollno[0],
        medicalrec:{
            bloodgroup:Bloodgroup(),
            height:height(),
            weight:weight(),
            gender:gender(),
            preexistinghealthissues:healthissues(), 
        }
    }); 
    const record2=new Record({
        RollNo:rollno[1],
        medicalrec:{
            bloodgroup:Bloodgroup(),
            height:height(),
            weight:weight(),
            gender:gender(),
            preexistinghealthissues:healthissues(), 
        }
    }); 
    // const record3=new Record({
    //     RollNo:rollno[2],
    //     medicalrec:{
    //         bloodgroup:Bloodgroup(),
    //         height:height(),
    //         weight:weight(),
    //         gender:gender(),
    //         preexistinghealthissues:healthissues(), 
    //     }
    // }); 
    const record4=new Record({
        RollNo:rollno[3],
        medicalrec:{
            bloodgroup:Bloodgroup(),
            height:height(),
            weight:weight(),
            gender:gender(),
            preexistinghealthissues:healthissues(), 
        }
    }); 
    const record5=new Record({
        RollNo:rollno[4],
        medicalrec:{
            bloodgroup:Bloodgroup(),
            height:height(),
            weight:weight(),
            gender:gender(),
            preexistinghealthissues:healthissues(), 
        }
    });
    const record6=new Record({
        RollNo:rollno[5],
        medicalrec:{
            bloodgroup:Bloodgroup(),
            height:height(),
            weight:weight(),
            gender:gender(),
            preexistinghealthissues:healthissues(), 
        }
    }); 
    const record7=new Record({
        RollNo:rollno[6],
        medicalrec:{
            bloodgroup:Bloodgroup(),
            height:height(),
            weight:weight(),
            gender:gender(),
            preexistinghealthissues:healthissues(), 
        }
    }); 
    
    record1.save();
    record2.save();
    //record3.save();
    record4.save();
    record5.save();
    record6.save();
    record7.save();
    
    


app.get("/", function(req, res){res.send("bye");});
app.listen(3000, function(){console.log("Server started on port 3000.");});