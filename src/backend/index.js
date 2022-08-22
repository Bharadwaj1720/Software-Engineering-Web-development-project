const RandomFunctions = require('./generator')
const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
const uri = 'mongodb://localhost:27017';



const client = new MongoClient(uri);
const test = client.db("test");
const coll = test.collection('names');
async function student_list() 
{
  try 
  { 
    const record = await coll.find({}).toArray();
    return record;
  } 
  finally 
  {
    await client.close();
  }
}
async function insert_student()
{
    try
    {
        //const record = await coll.
    }
    finally
    {

    }
}
student_list().catch(console.dir);