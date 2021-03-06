const _ = require("lodash");
const { Transport } = require("../models/transport.js");

exports.getTransport = function (req, res) {
  res.status(200).send("Here to get transport");
};

exports.postTransport = async (req, res) => {
  //save the input
  const transport = new Transport(_.pick(req.body.data, ["from", "to", "machine", "fee"]));
  transport.lastUpdated = new Date().toISOString().replace(/[T]/g, " ");
  transport.lastUpdated = transport.lastUpdated.replace(/[Z]/g, "");
  await transport.save();

  //return the input
  res.json(transport);
};
