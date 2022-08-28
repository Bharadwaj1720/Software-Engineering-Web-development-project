const is_local = true;
const db = 'bin_db';
const uri_local = 'mongodb://localhost:27017';
const uri_atlas = "mongodb+srv://Bootstrapparadox:Team09@cluster0.pinftg3.mongodb.net/bin_db"
const { MongoClient } = require("mongodb");
const uri = is_local?uri_local:uri_atlas;
const client = new MongoClient(uri);

async function disconnect()
{
    await client.close();
}
const RandomFunctions = require('./generator')
async function load_accounts()
{
    const coll = client.db(db).collection('accounts');
    await coll.deleteMany({});
    for(let i=0;i<100;i++)
    {
        const account = {name:RandomFunctions.random_personal_name(),institute_id:RandomFunctions.random_roll_number()}
        await coll.insertOne(account);
    }
}
async function load_books()
{
    const coll = client.db(db).collection('books');
    await coll.deleteMany({});
    for(let i=0;i<10;i++)
    {
        const book = 
            {title:RandomFunctions.random_book_name(),
            author:RandomFunctions.random_personal_name(),
            ISBN:RandomFunctions.random_ISBN_number()} 
        const no_of_books = RandomFunctions.random(5,10);
        for(let j=0;j<no_of_books;j++)
        {
            const book_obj = {book:book,is_available:true,due_date:"",account:""}
            await coll.insertOne(book_obj);
        }
    }
}
async function find_books(ISBN)
{
    const coll = client.db(db).collection('books');
    return coll.find({ISBN:ISBN}).toArray();
}
async function test()
{
    await load_books();
    disconnect();
}
test();

