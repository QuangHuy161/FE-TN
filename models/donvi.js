const mongoose = require('mongoose');

const donviSchema = new mongoose.Schema({
    ten: {
            type: String,
        required: true
    },
    ma: {
        type: String,
        required: true
    }
});

const Donvi = mongoose.model('Donvi', donviSchema);
module.exports = Donvi;