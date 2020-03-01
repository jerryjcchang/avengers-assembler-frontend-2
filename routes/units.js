const express = require("express");
const router = express.Router();
const { getUnits, getCarol } = require("../controllers/units");

// router.get("/", (req, res) => res.send("Hello"));
router.route("/").get(getUnits);
router.route("/unlock").get(getCarol);

module.exports = router;
