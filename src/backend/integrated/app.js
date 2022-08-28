const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');
//const uri = "mongodb+srv://Bootstrapparadox:Team09@cluster0.pinftg3.mongodb.net/exampledb";
mongoose.connect("mongodb+srv://Bootstrapparadox:Team09@cluster0.pinftg3.mongodb.net/hidb",{ useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
//const client = new MongoClient(uri, { useNew UrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
const express = require("express");
const bodyParser = require("body-parser");

const app = express();


const bookSchema = new mongoose.Schema({
    RollNo:{
        type: String,
        unique: true,
        required: [true,"Please enter your data"]
    },
    password:String,
    BookStatus:String
});

const Book = mongoose.model("Book",bookSchema);

const book0 = new Book({
    RollNo:"example11",
    password:"xxxx",
    BookStatus:"4 books to submit"
});


const book1 = new Book({
    RollNo:"example2",
    password:"yyyy",
    BookStatus:"no books were taken"
});

const fry="Hello";
const fry1="Success";
const book2= new Book({
    RollNo:fry,
    password:"zzzz",
    BookStatus:"1 book overdue"
});
const book4 = new Book({
    RollNo:"example4",
    password:"aaaaa",
    BookStatus:"Lost book reported"
});    
const book3= new Book({RollNo:"try",    password:"lllll", BookStatus:"No books"});

Book.insertMany([book1,book0,book2,book3,book4],function(err){if(err){console.log(err);}else{console.log("Inserted");}});


Book.find(function(err,books){if(err){console.log(err);}else{console.log(books ); }
    
    books.forEach(function(book){
        console.log(books.RollNo);
    });
});
// Example.deleteMany({RollNo:"example11"},function(err){if(err){console.log(err);}else{console.log("deleted");}});
// Example.deleteMany({RollNo:"Hello"},function(err){if(err){console.log(err);}else{console.log("deleted");}});
// Example.deleteMany({RollNo:"example2"},function(err){if(err){console.log(err);}else{console.log("deleted");}});
Book.find(function(err,books){
    if(err)
    {console.log(err);}
 
    else{
    books.forEach(function(book){
        book.save();
    });
}
});

app.get("/", function(req, res){res.send("bye");});
app.listen(3000, function(){console.log("Server started on port 3000.");});