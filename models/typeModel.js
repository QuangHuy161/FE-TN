const mongoose = require('mongoose');

const TypeSchema = new mongoose.Schema({
        _id:String,
        ten : String,
        tenphu:String,
});

module.exports = TypeSchema;