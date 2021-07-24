const mongoose = require("mongoose");

const imageSchema = mongoose.Schema({
    filename: {
        type: String,
        required: true
    },
    filepath: {
        type: String,
        required: true
    },
    filetype: {
        type: String,
        required: true
    },
    filesize: {
        type: String,
        required: true
    }
}, {timestamps:true})

const postSchema = mongoose.Schema({
    title : {
        type: String,
        required : true,
    },
    category : {
        type: String,
        required : true
    },
    content : {
        type: String,
        required : true
    },
    status : {
        type: String,
        required : true,
        default: "draft"
    },
    slug : {
        type: String,
        required : true,
        unique:true
    },
    metaKey : {
        type: String,
        required : true
    },
    metaContent : {
        type: String,
        required : true
    },
    categorySlug : {
        type: String,
        required : true
    },
    author : {
        type: String,
        default:''
    },
    file : {
        type: imageSchema,
    }
},{timestamps:true});

const posts = mongoose.model("posts",postSchema);

module.exports = posts;