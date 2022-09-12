const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');
//const uri = "mongodb+srv://Bootstrapparadox:Team09@cluster0.pinftg3.mongodb.net/exampledb";
mongoose.connect("mongodb+srv://Bootstrapparadox:Team09@cluster0.pinftg3.mongodb.net/bin_db",{ useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const bookschema = mongoose.Schema({
    bookname:{
        type:String,
        unique:true,
    },
    authorname:{
        type:String,
    },
});

const Book = new mongoose.model("Book",bookschema);

const Book1=new Book({
    bookname:'Harry potter',
    authorname:'JK Rowling',
});
Book1.save();

const Book2=new Book({
    bookname:'Persy jackson',
    authorname:'rick riordan',
});
Book2.save();

const character = 'abcdefghijklmnopqrstuvwxyxABCDEFGHIJKLMNOPQRSTUVWXYz '
function getbookAuthorname(length){
    result=' ';
    for(let i=0; i<length; i++){    result += character[Math.floor(Math.random()*character.length)]; }
    return result;
}

function getrandomnumber(){
    return Math.floor(Math.random()*10)+5;    
}

const Book3=new Book({
    bookname:getbookAuthorname(getrandomnumber()),
    authorname:getbookAuthorname(getrandomnumber()),
});
Book3.save();

const Book4=new Book({
    bookname:getbookAuthorname(getrandomnumber()),
    authorname:getbookAuthorname(getrandomnumber()),
});
Book4.save();

const Book5=new Book({
    bookname:getbookAuthorname(getrandomnumber()),
    authorname:getbookAuthorname(getrandomnumber()),
});
Book5.save();

const Book6=new Book({
    bookname:getbookAuthorname(getrandomnumber()),
    authorname:getbookAuthorname(getrandomnumber()),
});
Book6.save();

const Book7=new Book({
    bookname:getbookAuthorname(getrandomnumber()),
    authorname:getbookAuthorname(getrandomnumber()),
});
Book7.save();
app.get("/", function(req, res){res.send("bye");});
app.listen(3000, function(){console.log("Server started on port 3000.");});