const mongoose = require("mongoose")
const GadjetsSchema = mongoose.Schema({
Gadjet_Type: {type: String, minLength:[4,'itemtype']},
Gadjet_Name: {type: String, maxLength:[8,'itemname']},
Gadjet_Price:{type: Number, min:0, max:70000 },
})
module.exports = mongoose.model("Gadjets",GadjetsSchema)
