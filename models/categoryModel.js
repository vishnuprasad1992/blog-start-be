const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
    category : {
        type: String,
        required : true,
        unique: true
    },
    metaContent : {
        type: String,
        required : true
    },
    metaKey : {
        type: String,
        required : true
    },
    pagename : {
        type: String,
        required : true
    },
},{timestamps:true});

const category = mongoose.model("category",categorySchema);

module.exports = category;