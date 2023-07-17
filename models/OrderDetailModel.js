const mongoose = require("mongoose")

const OrderDetailSchema = mongoose.Schema(
    {
        tenkhachhang:String,
        sdt:String,
        tiendua:Number,
        gia:Number,
        tienthoi:Number,
        order:[{}],
        time:Date
    }
)

module.exports = OrderDetailSchema