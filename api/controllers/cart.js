var express = require("express");
const app = express();

app.post("/", (req, res, next) => {
  console.log("save cart contents by userId in mongo", req.body);
  res.end("Saved your cart!");
});

module.exports = app;
