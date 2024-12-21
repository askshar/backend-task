const ipoStatusModel = require("../models/ipo.model");

module.exports.selectIpo = async (req, res, next) => {
    const {ipoId, ipoName, panNumber} = req.body;
    console.log(ipoId, ipoName, panNumber);
    if (!ipoId || !ipoName || !panNumber) {
        return res.status(400).json({ message: "Please provide all required fields" });
    }
    const existingIpo = await ipoStatusModel.findOne({ipoId, panNumber});
    if (existingIpo) {
        return res.status(400).json({ message: "IPO already selected" });
    }
    const newIpo = new ipoStatusModel({ipoId, ipoName, panNumber});
    await newIpo.save();
    return res.status(201).json({ 
        message: "IPO selected successfully",
        data: newIpo
    });
};