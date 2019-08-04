const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    }
    // tambahan geo location
});

//membuat model berdasarkan Schema
const Digiers = mongoose.model('digiers', DigiersSchema);

module.exports = Digiers;