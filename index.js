// Build simple web applications using Express.js

const express = require("express");
const { auth } = require("./midleware/midleware");
const con = require('./db/db')
const app = express();

// middleware exampl
app.use(auth);
app.use(express.json())
app.use("/", require("./routes/route"));


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`SERVER RUNNING AT ${PORT}`);
});
