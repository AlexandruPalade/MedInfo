const express = require("express");
const router = express.Router();
const User = require("../models/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const mongoose = require("mongoose");

//getting all users
router.get("", authenticateToken, async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//login
router.post("/login", async (req, res) => {
  const [foundUser] = await User.find({ email: req.body.email });

  if (foundUser == null) {
    return res.status(400).send("cannot find user");
  }
  try {
    if (await bcrypt.compare(req.body.password, foundUser.password)) {
      const token = jwt.sign(foundUser.id, process.env.ACCESS_TOKEN);
      res.send({ token: token, foundUser });
    } else {
      res.send("not good");
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  return foundUser;
});

//register
router.post("/register", async (req, res) => {
  const [isEmailAlreadyThere] = await User.find({ email: req.body.email });

  if (isEmailAlreadyThere != null) {
    return res.status(400).send("email already exists");
  }

  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = new User({
      email: req.body.email,
      password: hashedPassword,
      username: req.body.username,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      age: req.body.age
    });
    const newUser = await user.save();

    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//update one
router.put("/update/:id", getUser, async (req, res) => {
  if (req.body.email != null) {
    res.user.email = req.body.email;
  }
  if (req.body.username != null) {
    res.user.username = req.body.username;
  }
  if (req.body.age != null) {
    res.user.age = req.body.age;
  }

  try {
    const updatedUser = await res.user.save();
    console.log(updatedUser);
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

async function getUser(req, res, next) {
  console.log("a ajuns");
  let user;
  try {
    user = await User.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: "cannot find user" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.user = user;
  next();
}

function authenticateToken(req, res, next) {
  console.log("request recieved");
  const authHeader = req.headers["authorization"];

  console.log("authHeader ", authHeader);
  if (authHeader == null) res.sendStatus(403);

  const token = authHeader && authHeader.split(" ")[1];
  if (token === null || token === "") return res.sendStatus(401);
  console.log("token ", token);

  jwt.verify(token, process.env.ACCESS_TOKEN, (err) => {
    console.log(err);
    if (err) return res.sendStatus(403);
    next();
  });
}

module.exports = router;
