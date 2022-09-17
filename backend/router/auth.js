const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

require("../db/conn");
const User = require("../models/userSchema");
//////////////////////////Using Promises/////////////////////////////////////////////////////

router.post("/register", (req, res) => {
  const { name, email, phone, password, cpassword } = req.body;

  if (!name || !email || !phone || !password || !cpassword) {
    return res.status(422).json({ error: "Please filled the field properly" });
  }
  User.findOne({ email: email })
    .then((userExist) => {
      if (userExist) {
        return res.status(422).json({ error: "Email already exist" });
      } else if (password != cpassword) {
        return res.status(422).json({ error: "Password are not matching" });
      }
      const user = new User({ name, email, phone, password, cpassword });
      user
        .save()
        .then(() => {
          res.status(201).json({ message: "User registered Successfuly" });
        })
        .catch((err) => res.status(500).json({ error: "Failed to register" }));
    })
    .catch((err) => {
      console.log(err);
    });
});

// //////////////////////  Await Async//////////////////////////////////////////////////////
// router.post("/register", async (req, res) => {
//   const { name, email, phone, password, cpassword } = req.body;

//   if (!name || !email || !phone || !password || !cpassword) {
//     return res.status(422).json({ error: "Please filled the field properly" });
//   }

//   try {
//     const userExist = await User.findOne({ email: email });
//     if (userExist) {
//       return res.status(422).json({ error: "Email already exist" });
//     }
//     const user = new User({ name, email, phone, password, cpassword });

//     const userRegister = await user.save();
//     if (userRegister) {
//       res.status(201).json({ message: "User registered Successfuly" });
//     } else {
//       res.status(500).json({ error: "Failed to registe" });
//     }
//   } catch (error) {
//     console.log(error);
//    }
// });

// //////////////  //////   Login Route   //////  ///////////// //
router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Please Filled the data" });
    }
    const userLogin = await User.findOne({ email: email });
    // console.log(userLogin);

    if (userLogin) {
      const ismatch = await bcrypt.compare(password, userLogin.password);

      const token = await userLogin.generateAuthToken();
      console.log(token);
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });
      if (!ismatch) {
        res.status(400).json({ message: "Invalid Credientials" });
      } else {
        res.json({ message: "User Signin Successful" });
      }
    } else {
      res.status(400).json({ message: "Invalid Credientials" });
    }
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
