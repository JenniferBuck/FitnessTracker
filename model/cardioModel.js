const mongoose = require("mongoose");
// Create table schema
let cardioSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },

    cardio_name: {
        type: String,

    },
    duration: {
        type: Number,

    },
    distance: {
        type: Number,

    },

})

module.exports = mongoose.model("cardio", cardioSchema);