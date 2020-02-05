const express = require("express");
const morgan = require("morgan");
const Sequelize = require("sequelize");

const app = express();
const path = require("path");

const Shop = require("./models").Shop;
const Coffee = require("./models").Coffee;

Shop.create({
  name: "Starbucks"
}).then(shop => {
  shop
    .createCoffee({
      name: "Columbian",
      type: "Dark"
    })
    .then(() => console.log("worked!"));
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("combined"));

app.get("/user", (req, res) => {
  res.send("hello world");
});

app.listen(3000, () => {
  console.log("server has started");
});
