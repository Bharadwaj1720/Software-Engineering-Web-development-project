const express = require('express');
const {connectToDb,getDb} = require('./db')
//init app and middleware
const app = express(); // intialize the express app

//db connection
let db
connectToDb((err)=>{
    if(!err){
        app.listen(3000,()=>{
            console.log("listening to port 3000");
        }) 
        db = getDb()
    }
})


//routes and route handlers
//handling the requests

app.get('/books',(req,res)=>{
    db.collection('books')
    
    res.json({mssg: "Welcome to my API"})
})




