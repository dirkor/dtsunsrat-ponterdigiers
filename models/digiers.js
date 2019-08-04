const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//membuat GeoLocation Schema "GeoSchema"
const GeoSchema = new Schema({
    type: {
        type: String,
        default: "Point"
    },
    coordinates: {
        type: [Number],
        index: "2dsphere"
    }
});

//membuat Schema dan Model "digiers"
const DigiersSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Kolom nama tidak boleh kosong']
    },
    tema: {
        type: String
    },
    available: {
        type: Boolean,
        default: false
    },
    geometry: GeoSchema
});

//membuat model berdasarkan Schema
const Digiers = mongoose.model('digiers', DigiersSchema);

module.exports = Digiers;