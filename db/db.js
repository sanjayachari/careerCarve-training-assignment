const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "unlcokno010203",
  database: "test",
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("DATABASE CONNECTED");
  }
});

module.exports = connection;
