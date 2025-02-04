const express = require("express")
const app = express()
const mongoose = require("mongoose")
const connectDB = require("./config.js")

app.use(express.json())

app.get("/", () => {
    return res.status(200).send("Hello World")
})

connectDB()

app.listen(8000, () => {
    console.log("Listening on 8000")
})