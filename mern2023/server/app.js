const dotenv = require("dotenv");
const express = require("express");
const User = require("./model/userSchema");
const app = express();
app.use(express.json());
require("dotenv").config();
require("./db/conn"); //connection database

app.use(require("./router/auth.js"));

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server is running at port no `);
});
