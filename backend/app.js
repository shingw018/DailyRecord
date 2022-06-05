require("dotenv").config();

const express = require("express");
const app = express();

//loading startup modules
require("./startup/routes.js")(express, app);
require("./startup/db.js")();

//server
const port = process.env.PORT || 3000;
const server = app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = server;
