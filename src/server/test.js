const action = process.argv[2];
/*
create
login
logout
logout_all
request
purge
*/

const username = "Bharadwaj"
const password_plaintext = "dolor_sit_amet"
const status = "research"
const device_id = "device42"
const auth_token = "972b13342e8c51b6751936c3a84cd7e24572694113f33ad1b897f4fc56c4f21"

const RandomFunctions = require("./generator")
require("dotenv").config({ path: "./config.env" });
const dbo = require("./db/conn");
const axios = require('axios').default;
const Security = require("./security")


const url_login = 'http://localhost:5000/general_accounts/login'
const url_logout = 'http://localhost:5000/general_accounts/logout'
const url_create = 'http://localhost:5000/general_accounts/add'
const url_request = "http://localhost:5000/library_books"
const url_delete = "http://localhost:5000/general_accounts/delete"
const data_delete = {
    username: username
}
const data_create = {
    username: username,
    password_plaintext: password_plaintext,
    status: status
};
const data_login = {
    username: username,
    password_plaintext: password_plaintext,
    device_id: device_id
};
const data_logout = {
    username: username,
    device_id: device_id
}
const data_logout_all = {
    username: username,
    device_id: null
}
const data_request = {
    auth_token: auth_token
}



let url = "", data = "";
let to_post = true;
if (action === "create") { url = url_create; data = data_create; }
else if (action === "login") { url = url_login; data = data_login; }
else if (action === "logout") { url = url_logout; data = data_logout; }
else if (action === "logout_all") { url = url_logout; data = data_logout_all; }
else if (action === "request") { url = url_request; data = data_request; }
else if (action === "delete") { url = url_delete; data = data_delete; }
else if (action === "purge") {
    to_post = false
    dbo.connectToServer(function (err) {
        if (err) throw err;
        Security.force_logout();
    })
}
if (!to_post) return;

axios.post(url, data).then((res) => {
    console.log(`Status: ${res.status}`);
    console.log('Body: ', res.data);
}).catch((err) => {
    console.error(err);
});







/* testing for salt-hash system
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

}*/