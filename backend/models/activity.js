const mongoose = require("mongoose");

const activitySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  remark: {
    type: String,
  },
  lastUpdated: {
    type: String,
    required: true,
  },
});

const Activity = mongoose.model("Activity", activitySchema);

exports.Activity = Activity;
exports.activitySchema = activitySchema;
