const express = require('express');
const products = require('./data/products.js');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

// GET PRODUCT ROUTE

app.get("/api/products", (req, res) => {
  res.json(products);
});
// GET ROUTE...
app.get("/", (req, res) => {
  res.send("API is Running....");
});

app.get("/api/product/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});
const port = 5000;

app.listen(
  port,
  console.log(`Server running in ${process.env.NODE_ENV} mode on PORT ${port}`)
);
