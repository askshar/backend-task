const ipoStatusModel = require("../models/ipo.model");
const { checkAllotmentForPan } = require("../services/checkAllotment.service");

module.exports.checkAllotment = async (req, res, next) => {
    const { ipoId } = req.query;
    console.log(req.query, typeof ipoId)
    if (!ipoId) {
        return res.status(400).json({ message: "Please provide all required fields" });
    }
    const records = await ipoStatusModel.find({ ipoId: Number(ipoId) });
    if (!records.length) {
        return res.status(400).json({ message: "No records found" });
    }
    const updatedRecords = [];

    for (const record of records) {
        try {
            const status = await checkAllotmentForPan(ipoId, record.panNumber);

            record.status = status;
            record.lastChecked = new Date();
            await record.save();

            updatedRecords.push(record);
        } catch (error) {
            console.error(`Error processing PAN: ${record.panNumber}`, error.message);

            record.status = 'Invalid';
            record.lastChecked = new Date();
            await record.save();

            updatedRecords.push(record);
        }
    }

    return res.status(200).json({ message: "Allotment check completed", data: updatedRecords });
}