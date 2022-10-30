const RandomFunctions = require("./generator")
require("dotenv").config({ path: "./config.env" });
const security = require("./security.js");
const dbo = require("./db/conn");
dbo.connectToServer(function (err) {
    // this is the callback. Everything mentioned here happens after the connection is made
    if (err) console.error(err);
    db = dbo.getDb();
    clear("open_projects");
    load_research(10);
    clear("library_books");
    load_library_books(10,2,4);
    clear("medical_drugs");
    load_medical_drugs(10);
    clear("library_journals");
    load_library_journals(10,2,4);
    clear("general_accounts");
    load_root_account(process.env.ROOT_USERNAME,process.env.ROOT_PASSWORD);
    // add actions here to autogenerate other things
    console.log("generation complete")
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
function load_research(n) 
{
    console.log("collection open projects has been filled with randomly generated records")
    const coll = db.collection("open_projects");
    for(let i=0;i<n;i++)
    {
        const project = {
            project_name:RandomFunctions.random_project(),
            project_description:"lorem ipsum",
            discipline:[RandomFunctions.random_projectarr()],
            closed:false,
            project_duration:RandomFunctions.random_duration(),
            max_number:RandomFunctions.random(4,11),
            members:[]
        }
        coll.insertOne(project);
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

function load_library_journals(n,lower,upper) // n unique titles, randomly coose lower to upper copies of each title
{
    console.log("collection library_journals has been filled with randomly generated records")
    const coll = db.collection('library_journals');
    for(let i=0;i<n;i++)
    {
        const book = 
            {title:RandomFunctions.random_book_name(),
            author:RandomFunctions.random_personal_name()+" "+RandomFunctions.random_personal_name()+" "+RandomFunctions.random_personal_name(),
            ISBN:RandomFunctions.random_ISBN_number()}
        const no_of_books = RandomFunctions.random(lower,upper);
        for(let j=0;j<no_of_books;j++)
        {
            const book_obj = {book:book,is_available:true,due_date:null,account:null}
            coll.insertOne(book_obj);
        }
    }
}

// medical_drugs

function load_medical_drugs(n,lower,upper)
{
    console.log("collection medical_drugs has been filled with randomly generated records")
    const coll = db.collection('medical_drugs');
    for(let i=0;i<n;i++)
    {
        const drug = 
            {name:RandomFunctions.random_name(RandomFunctions.random(5,10)),
            iso_id:RandomFunctions.random_ISO_drug(),
            no_of_doses:RandomFunctions.random(lower,upper),
            expiry_date: new Date()
        }
        coll.insertOne(drug);
    }
}

function load_root_account(name, password_plaintext)
{
    console.log("root user has been created");
    const coll = db.collection('general_accounts');
    coll.insertOne({
        username: name,
        status: "root",
        password: security.get_hash_and_salt(password_plaintext)
    });
}
