require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

//loading startup modules
require("./startup/routes.js")(express, app);
require("./startup/db.js")();

//server
const port = 4000;
const server = app.listen(port, () => console.log(`Listening on port ${port}`));

console.log(process.env);
console.log(process.env.MongoDBUsername);
console.log(process.env.MongoDBPassword);

module.exports = server;
