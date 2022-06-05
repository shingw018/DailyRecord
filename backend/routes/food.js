const express = require("express");
const router = express.Router();
const { getFood, postFood } = require("../controllers/food.js");

router.get("/", getFood);
router.post("/", postFood);

module.exports = router;
