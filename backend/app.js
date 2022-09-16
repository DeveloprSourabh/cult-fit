const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

dotenv.config({ path: "./config.env" });

require("./db/conn");

app.use(express.json());

app.use(require("./router/auth"));

app.listen(3005, () => {
  console.log("Good Evening");
});
