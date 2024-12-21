const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const panController = require("../controllers/pan.controller");

router.post("/addPan", [
    body("name").notEmpty(),
    body("panNumber").isLength({ min: 10, max: 10 }),
], panController.addPan);

module.exports = router;