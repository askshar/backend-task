const express = require("express");
const app = express();
const cors = require("cors");
const connectToDb = require("./db/db");
const cookieParser = require('cookie-parser')
const panRoutes = require("./routes/pan.routes");
const ipoServiceRoutes = require("./routes/ipoService.routes");

connectToDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/api/pan", panRoutes);
app.use("/api/ipoService", ipoServiceRoutes);

module.exports = app;