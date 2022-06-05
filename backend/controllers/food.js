const _ = require("lodash");
const { Food } = require("../models/food.js");

exports.getFood = function (req, res) {
  res.status(200).send("Here to get food");
};

exports.postFood = async (req, res) => {
  //save the input
  console.log(req.body);
  const food = new Food(_.pick(req.body.data, ["name", "energy", "carbohydrates", "fat", "protein", "sugar", "fee"]));
  food.lastUpdated = new Date().toISOString().replace(/[T|Z]/g, "");
  await food.save();

  //return the input
  res.json(food);
};
