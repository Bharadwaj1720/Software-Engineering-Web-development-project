const { ObjectID, ObjectId } = require('mongodb');
const express = require('express')
const { connectToDb , getDb }=require('./db')
//init app and middleware
const app = express();
app.use(express.json());
//db connection
let db
connectToDb((err)=>{
  if(!err){ 
    app.listen(3000,()=>{
        console.log('we are listnening to port 3000');
    })
    db = getDb();
  }
})
//routes  
app.get('/books',(req,res)=>{
  const page = req.query.p||0
  const booksPerPage = 3
  let books = []
  db.collection('books')
    .find() //cursor toArray forEach
    .sort({pages:1})
    .skip(page*booksPerPage)
    .limit(booksPerPage)
    .forEach(book => books.push(book))
    .then(()=>{
      res.status(200).json(books)
    })
    .catch(()=>{
      res.status(500).json({error: "Documents not fetched!"})
    })
})

app.get('/books/:id',(req,res)=>{

  if(ObjectId.isValid(req.params.id)){
    db.collection('books')
    .findOne({_id: ObjectID(req.params.id)})
    .then(doc => {
      res.status(200).json(doc)
    })
    .catch(err => {
      req.status(500).json({error:"error"})
    })
  }
  else{
    res.status(500).json({error: "Not a valid document!"});
  }
})

app.post('/books',(req,res)=>{
  const book = req.body;
  db.collection('books')
    .insertOne(book)
    .then(result =>{
      res.status(201).json(result);//successfully added a resource.
    })
    .catch(err =>{
      res.status(500).json({err: "Couldn't create it"})
    })
})

app.delete('/books/:id',(req,res)=>{
  if(ObjectId.isValid(req.params.id)){
    db.collection('books')
    .deleteOne({_id: ObjectID(req.params.id)})
    .then(result => {
      res.status(200).json(result)
    })
    .catch(err => {
      req.status(500).json({error:"Couldn't delete the document!"})
    })
  }
  else{
    res.status(500).json({error: "Not a valid document!"});
  }
})

app.patch('/books/:id',(req,res)=>{
  const updates = req.body;
  if(ObjectId.isValid(req.params.id)){
    db.collection('books')
    .updateOne({_id: ObjectID(req.params.id)},{$set: updates})
    .then(result => {
      res.status(200).json(result)
    })
    .catch(err => {
      req.status(500).json({error:"Couldn't update the document!"})
    })
  }
  else{
    res.status(500).json({error: "Not a valid document!"});
  }
})