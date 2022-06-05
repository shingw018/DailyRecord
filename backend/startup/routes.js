const home = require("../routes/home.js");
const food = require("../routes/food.js");
const transport = require("../routes/transport.js");
const activity = require("../routes/activity.js");

module.exports = function (express, app) {
  app.use(express.json());
  app.use("/", home);
  app.use("/api/food", food);
  app.use("/api/transport", transport);
  app.use("/api/activity", activity);
};
