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
async function connect()
{
    await client.connect();
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
async function add_book(name, ISBN, author)
{
    const coll = client.db(db).collection('books');
    const book = 
    {
        title:title,
        author: author,
        ISBN: ISBN
    }
    const book_obj = {book:book,is_available:true,due_date:"",account:""}
    await coll.insertOne(book_obj);
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
async function find_books_ISBN(ISBN)
{
    const coll = client.db(db).collection('books');
    return coll.find({"book.ISBN":ISBN}).toArray();
}
async function find_books_account()
{
    
}
async function find_books_in_account(account)
{
    const coll = client.db(db).collection('books');
    return coll.find({"book.account":account}).toArray();
}
async function find_available_books(ISBN)
{
    const coll = client.db(db).collection('books');
    return coll.find({"book.ISBN":ISBN, is_available:true}).toArray();
}
async function test()
{
    connect();
    await load_books();
    disconnect();
}
test();