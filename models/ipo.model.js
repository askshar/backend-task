const mongoose = require("mongoose");

const ipoStatusSchema = new mongoose.Schema({
    ipoName: {
        type: String,
        required: true,
    },
    ipoId: {
        type: Number,
        required: true,
    },
    panNumber: {
        type: String,
        required: true,
        ref: 'PAN',
    },
    status: {
        type: String,
        enum: ['Not Checked', 'Allotted', 'Not Allotted', 'Invalid'],
        default: 'Not Checked',
    },
    lastChecked: {
        type: Date,
        default: Date.now,
    },
});

const ipoStatusModel = mongoose.model('IPOStatus', ipoStatusSchema);
module.exports = ipoStatusModel;