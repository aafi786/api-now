let mongoose = require("mongoose");

//Article shcema
let dataSchema = mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    design: {
        type: Array,
        required: true
    },
    data: {
        type: Array,
        required: false
    },

});

let Data = (module.exports = mongoose.model("Data", dataSchema));
