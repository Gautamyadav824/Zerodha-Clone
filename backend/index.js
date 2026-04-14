require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const dns = require("dns");

dns.setServers([
    '1.1.1.1', 
    '8.8.8.8'
])

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL || 'mongodb://localhost:27017/zerodha_db';
// const uri1 = 'mongodb+srv://zerodha:zerodha@cluster0.9iwqt5z.mongodb.net/?appName=Cluster0'

const app = express();
app.listen(PORT, () => {
    console.log("App started");
    mongoose.connect(uri)
        .then(() => console.log("DB Connected"))
        .catch((err) => console.error("DB Connection Error:", err.message));
});