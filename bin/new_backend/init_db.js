const RandomFunctions = require("./generator")
require("dotenv").config({ path: "./config.env" });
const dbo = require("./db/conn");
dbo.connectToServer(function (err) {
    // this is the callback. Everything mentioned here happens after the connection is made
    if (err) console.error(err);
    db = dbo.getDb();
    clear("library_books");
    load_library_books(10,2,4);
    clear("library_accounts");
    load_library_accounts(10);
    // add actions here to autogenerate other things
    console.log("generation_complete")
})
var db;

function load_library_accounts(n) // n different accounts
{
    console.log("collection library_accounts has been filled with randomly generated records")
    const coll = db.collection("library_accounts");
    for(let i=0;i<n;i++)
    {
        const account = {
            name:RandomFunctions.random_personal_name(),
            ID:RandomFunctions.random_roll_number()
        }
        coll.insertOne(account);
    }
}
function clear(collname)
{
    console.log("collection "+collname+" has been cleared");
    const coll = db.collection(collname);
    coll.deleteMany({});
}
function load_library_books(n,lower,upper) // n unique titles, randomly coose lower to upper copies of each title
{
    console.log("collection library_books has been filled with randomly generated records")
    const coll = db.collection('library_books');
    for(let i=0;i<n;i++)
    {
        const book = 
            {title:RandomFunctions.random_book_name(),
            author:RandomFunctions.random_personal_name(),
            ISBN:RandomFunctions.random_ISBN_number()}
        const no_of_books = RandomFunctions.random(lower,upper);
        for(let j=0;j<no_of_books;j++)
        {
            const book_obj = {book:book,is_available:true,due_date:"",account:""}
            coll.insertOne(book_obj);
        }
    }
}
