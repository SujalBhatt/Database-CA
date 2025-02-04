const mongoose = require("mongoose")

const connectDB = async (req, res) => {
    try {
        await mongoose.connect("mongodb+srv://vimlabhatt97:KVSs75@cluster0.q8t0m.mongodb.net/CA")
        console.log("MongoDB connected")
    } catch (error) {
        console.error(error.message)
    }
}

module.exports = connectDB