const dotenv = require("dotenv");
const express = require("express");
const app = express();
const mongoose = require("mongoose");

require("dotenv").config();

const DB = process.env.DATABASE;

mongoose
  .connect(DB)
  .then(() => {
    console.log("connection is successfull");
  })
  .catch((err) => console.log("no connection"));

app.get("/", (req, res) => {
  res.send("Welcome to the Home Page!");
});

// Define the about route
app.get("/about", (req, res) => {
  res.send("About Us");
});

// Define the contact route
app.get("/contact", (req, res) => {
  res.send("Contact Us");
});

// Signin route
app.get("/signin", (req, res) => {
  res.send("Signin  logic");
});

// Signup route
app.get("/signup", (req, res) => {
  res.send("Signup logic");
});

app.listen(3000, () => {
  console.log(`server is running at port no `);
});
