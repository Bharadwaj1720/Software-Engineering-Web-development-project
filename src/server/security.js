const crypto = require("crypto");
require("dotenv").config({ path: "./config.env" });
const dbo = require("./db/conn");
const ObjectId = require("mongodb").ObjectId;

function hash(plaintext, salt)
{
    return crypto.createHash(process.env.HASH_TYPE).update(plaintext+salt).digest(process.env.BASE);
}
function get_hash_and_salt(plaintext)
{
    const salt = crypto.randomBytes(Number(process.env.SALT_BYTES)).toString(process.env.BASE);
    //console.log("chosen salt:"+salt);
    return {hash:hash(plaintext,salt),salt:salt}
}
function check_equality(plaintext,hashval,salt)
{
    return (hashval===hash(plaintext,salt));
}
function generate_auth_token()
{
    return crypto.randomBytes(Number(process.env.AUTH_BYTES)).toString(process.env.BASE);
}

function check_authentication(auth_token,statuses,callback)
{
    let db_connect = dbo.getDb();
    const result = db_connect.collection("authentication_tokens").find({})
    .toArray(function(err,result){
        if(err)throw err;
        let flag = false
        for(var i=0;i<result.length;i++)
        {
            if(check_equality(auth_token,result[i].token.hash,result[i].token.salt)){flag=true;break;}
        }
        if(!flag)
        {
            const message = "invalid token"
            console.log(message);
            callback(false,message);
            return;
        }
        const s = result[i].status;
        for(var i=0;i<statuses.length;i++)if(s===statuses[i])
        {
            console.log("request acknowledged");
            callback(true);
            return;
        }
        const message = "status not in allowlist"
        console.log(message)
        callback(false,message);
   });
}

function force_logout()
{
    let db_connect = dbo.getDb();
    db_connect.collection("authentication_tokens").deleteMany({},function(err,result){
        if(err)throw err;
        console.log("all authentication tokens have been retired\nall accounts have been logged out");
    });
}

module.exports = {
    get_hash_and_salt,
    check_equality,
    hash,
    generate_auth_token,
    check_authentication,
    force_logout
}

