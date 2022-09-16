const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");

const app = express();

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE;
const PORT = process.env.PORT;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Port Is Running On Port ${PORT}`);
});
