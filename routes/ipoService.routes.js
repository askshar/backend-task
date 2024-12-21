const express = require("express");
const router = express.Router();
const ipoService = require("../controllers/ipoService.controller");
const ipoController = require("../controllers/ipo.controller");
const allotmentCheck = require("../controllers/allotmentCheck.controller");

router.post("/fetchIpo", ipoService.fetchIpoList);

router.post("/selectIpo", ipoController.selectIpo);
router.get("/checkAllotment", allotmentCheck.checkAllotment);

module.exports = router;