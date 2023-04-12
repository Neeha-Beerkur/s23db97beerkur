const mongoose = require("mongoose")
const GadjetsSchema = mongoose.Schema({
Gadjet_Type: String,
Gadjet_Name: String,
Gadjet_Price: Number
})
module.exports = mongoose.model("Gadjets",
GadjetsSchema)
