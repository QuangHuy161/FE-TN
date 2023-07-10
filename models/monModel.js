const mongoose = require("mongoose")

const monSchema = mongoose.Schema(
    {
        tenmon:String,
        nguyenlieu:[Object]
    }
)

module.exports = monSchema