const mongoose = require("mongoose")

const materialSchema = mongoose.Schema(
    {
        _id:String,
        ten:  String,
        donvi:String,
        nhomvattu:String,
        img:String,
        giatri:Number,
        gia:Number
    }
)

module.exports = materialSchema