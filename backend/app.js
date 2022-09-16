const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

dotenv.config({ path: "./config.env" });

require("./db/conn");

app.get("./", (req, res) => {
  res.send("Hello World");
});

app.listen(3005, () => {
  console.log("Good Evening");
});
