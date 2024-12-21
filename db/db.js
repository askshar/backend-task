const mongoose = require("mongoose");


function connectToDb() {
    try {
        const connectionInstance = mongoose.connect('mongodb://localhost:27017/backend');
        console.log('\n DB Connected\n');
    } catch (error) {
        console.error("MONGODB Connection error: ", error);
        process.exit(1);
    }
}

module.exports = connectToDb;