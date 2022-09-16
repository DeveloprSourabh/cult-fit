const express = require("express");
const router = express.Router();

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
      }
      const user = new User({ name, email, phone, password, cpassword });
      user
        .save()
        .then(() => {
          res.status(201).json({ message: "User registered Successfuly" });
        })
        .catch((err) => res.status(500).json({ error: "Failed to registe" }));
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
//   }
// });

module.exports = router;
