const mongoose = require("mongoose");
const express = require("express");
const app = express();
const DB =
  "mongodb+srv://cultfit:cultfit1234@cluster0.ywrjqzs.mongodb.net/cultfit?retryWrites=true&w=majority";
mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => console.log(err));

app.listen(3001, () => {
  console.log("Good Evening");
});
