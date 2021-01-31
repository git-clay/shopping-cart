var express = require("express");
var initialProducts = require("../mock_db/product/initialProducts.json");

const app = express();

app.get("/", (req, res, next) => {
  res.json(initialProducts);
});

module.exports = app;
