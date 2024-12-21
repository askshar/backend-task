const mongoose = require("mongoose");

const panSchema = new mongoose.Schema({
    panNumber: {
        type: String,
        required: true,
        unique: true,
        match: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/
    },
    name: {
        type: String,
        required: true
    }
});

const panModel = mongoose.model("pan", panSchema);
module.exports = panModel;