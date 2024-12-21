const panModel = require("../models/pan.model");
const {validationResult} = require("express-validator");

module.exports.addPan = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const {name, panNumber} = req.body;
    const existingPan = await panModel.findOne({panNumber});
    if (existingPan) {
        return res.status(400).json({ message: "PAN already exists" });
    }
    const newPan = new panModel({name, panNumber});
    await newPan.save();
    return res.status(201).json({ 
        message: "PAN added successfully",
        data: newPan
    });
};