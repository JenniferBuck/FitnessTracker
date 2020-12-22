// require mongoose and setup the Schema
const mongoose = require("mongoose");

// connect to mongoDB
let url = 'mongodb://localhost:27017/ExerciseDB';
mongoose.connect(url, { userNewUrlParser: true }, (err) => {
    if (!err) {
        console.log("mongoDB connected successful")
    } else { console.log('failed to connect' + err) }
})



let exerciseSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },

    name: {
        type: String,

    },

    weight: {
        type: Number,

    },
    sets: {
        type: Number,

    },
    reps: {
        type: Number,

    },

    resistance_duration: {
        type: Number,

    },

})



module.exports = mongoose.model("Exercise", exerciseSchema);