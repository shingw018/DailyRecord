const express = require("express");
const router = express.Router();
const { getTransport, postTransport } = require("../controllers/transport.js");

router.get("/", getTransport);
router.post("/", postTransport);

module.exports = router;
