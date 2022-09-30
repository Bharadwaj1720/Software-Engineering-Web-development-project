const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

function logger(req, res, next)
{
    console.log("\nconnection made");
    next();
}
app.use(logger);

app.use(require("./routes/library_books"));
app.use(require("./routes/library_journals"));
app.use(require("./routes/general_accounts"));
app.use(require("./routes/test_route"));
// do not make a route for authentication_tokens. this will compromise security
//app.use(require("./routes/medical_drugs"));
// get driver connection
const dbo = require("./db/conn");



app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});

app.on('connection', function (client) {
  console.log("connection made")
});