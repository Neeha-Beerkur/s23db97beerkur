const mongoose = require("mongoose")
const GadjetsSchema = mongoose.Schema({
Gadjet_Type: String,
Gadjet_Name: String,
Gadjet_Price:{type: Number, min:0, max:70000 },
})
module.exports = mongoose.model("Gadjets",GadjetsSchema)
