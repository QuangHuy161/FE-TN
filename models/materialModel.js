const mongoose = require('mongoose');

const materialSchema = new mongoose.Schema({
    ten: {
            type: String,
        required: true
    },
    donvi: {
        type: String,
        required: true
    }
});

const Material = mongoose.model('material', materialSchema);
module.exports = Material;