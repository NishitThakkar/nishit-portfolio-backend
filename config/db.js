const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://nishitthakkar:tpADHRYXJS832uvt@cluster0.uycncqf.mongodb.net/user", { useNewUrlParser: true, useUnifiedTopology: true }
        )
        console.log('db connected');
    } catch (error) {
        console.log('err--------', error);
    }
}

module.exports = connectDB;