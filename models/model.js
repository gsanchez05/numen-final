const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const storeSchema = new Schema({
    country: {
        type: String,
        required: true,
        unique: true,
    },
    alpha2: {
        type: String,
        required: true,
        unique: true,
    },
    alpha3: {
        type: String,
        required: true,
        unique: true,
    },
    uncode: {
        type: Number,
        required: true,
        unique: true,
    }
});
const Pais = mongoose.model('numenfinal', storeSchema);

module.exports = { Pais }
