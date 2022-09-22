const RandomFunctions = require("./generator")
require("dotenv").config({ path: "./config.env" });
const axios = require('axios');
/*


const url='http://localhost:5000/library_accounts/add'
const data = {
    "name":"Mathew",
    "id":"Student"
};

axios.post(url, data)
    .then((res) => {
        console.log(`Status: ${res.status}`);
        console.log('Body: ', res.data);
    }).catch((err) => {
        console.error(err);
    });

*/
const password_module = require("./passwords")

for(var i =0;i< 10;i++)
{
    const plaintext = RandomFunctions.random_name(10);
    //const salt = RandomFunctions.random_name(10);
    //const hash = password_module.hash(plaintext,salt);
    //console.log(hash === password_module.hash(plaintext,salt));

    const p = password_module.get_hash_and_salt(plaintext);
    //console.log(p.hash === password_module.hash(plaintext,p.salt));
    console.log(password_module.check_equality(plaintext,p.hash,p.salt));

}