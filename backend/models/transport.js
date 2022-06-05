const mongoose = require("mongoose");

const transportSchema = mongoose.Schema({
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  machine: {
    type: String,
    required: true,
  },
  fee: {
    type: Number,
    required: true,
  },
  lastUpdated: {
    type: String,
    required: true,
  },
});

const Transport = mongoose.model("Transport", transportSchema);

exports.Transport = Transport;
exports.transportSchema = transportSchema;
