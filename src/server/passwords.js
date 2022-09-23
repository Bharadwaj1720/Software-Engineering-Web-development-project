const crypto = require("crypto");
require("dotenv").config({ path: "./config.env" });

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

module.exports = {
    get_hash_and_salt,
    check_equality,
    hash,
    generate_auth_token
}