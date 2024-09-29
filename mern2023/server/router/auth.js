const express = require("express");
const User = require("../model/userSchema");
const bcrypt = require("bcrypt");

const router = express.Router();
require("../model/userSchema");

router.get("/", (req, res) => {
  res.send("hello worled router js ");
});

/////////////method by promise//////////////////////////
// router.post("/register", (req, res) => {
//   const { name, email, phone, work, password, cpassword } = req.body;
//   if (!name || !email || !phone || !work || !password || !cpassword) {
//     return res.status(422).json({ error: "pls filled the field properl" });
//   }
//   User.findOne({ email: email })
//     .then((userExist) => {
//       if (userExist) {
//         return res.status(422).json({ error: "This email is already exist" });
//       }
//       const user = new User({ name, email, phone, work, password, cpassword });
//       user
//         .save()
//         .then(() => {
//           res.status(201).json({ message: "user registered successfully" });
//         })
//         .catch((err) => res.status(500).json({ error: "failed to registerd" }));
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

///////////method async

router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "Please fill the fields properly" });
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "Email already exists" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "password are not matching" });
    } else {
      const user = new User({ name, email, phone, work, password, cpassword });

      // pre middleware work here

      await user.save();

      res.status(201).json({ message: "User registered successfully" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" }); // Optional: send an error response
  }
});

// Define the contact route
router.get("/contact", (req, res) => {
  res.cookie("test", "qavi");
  res.send("Contact Us");
});

// Signin route
router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "plz filled the data " });
    }
    const userLogin = await User.findOne({ email: email });

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      const token = await userLogin.generateAuthToken();
      console.log(token);

      res.cookie("jwttoken", token, {
        expires: new Date(Date.now() + 25800),
        httpOnly: true,
      });

      if (!isMatch) {
        res.status(400).json({ error: "invalid email and pass  " });
      } else {
        res.json({ message: "user sigin successfully" });
      }
    } else {
      res.status(400).json({ error: "invalid credientials " });
    }
  } catch (error) {
    console.log("error in sigin/");
  }

  //   console.log(req.body);
  //   res.json({ message: "awesome" });
});

// Signup route
router.get("/signup", (req, res) => {
  res.send("Signup logic");
});

module.exports = router;
