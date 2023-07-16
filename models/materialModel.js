const mongoose = require("mongoose")

const materialSchema = mongoose.Schema(
    {
        ten:  String,
        donvi:String,
        nhomvattu:String,
        img:String,
        soluong:Number,
        tien:Number,
        time:Date
    }
)

module.exports = materialSchema