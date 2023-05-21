const mongoose = require('mongoose');

const TypeSchema = new mongoose.Schema({
        _id:Number,
        ten : String,
        ma: String
});

module.exports = TypeSchema;