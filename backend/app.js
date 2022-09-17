const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

dotenv.config({ path: "./config.env" });

require("./db/conn");

app.use(express.json());

app.use(require("./router/auth"));

app.get("/home", (req, res) => {
  res.cookie("Test", 'sain')
  res.send("What Are You Doing Today");
});
app.listen(3001, () => {
  console.log("Good Evening");
});
