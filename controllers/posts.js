const { addNewPost, getAllPosts, getSinglePost, postToBeUpdated } = require("../helpers/postHelper")
const multer = require("multer");

const addPost = async (req, res) => {
    try {
        const { title,
            metaContent,
            metaKey,
            content,
            status,
            category,
            slug,
            author,
            categorySlug } = req.body
        
        const file = {
            filename: req.file.filename,
            filepath: req.file.path,
            filesize: ((req.file.size) / 1000) + "kb",
            filetype: req.file.mimetype
        };


        const postData = await addNewPost({
            title,
            metaContent,
            metaKey,
            content,
            file,
            status,
            category,
            slug,
            author,
            categorySlug
        })
        console.log(postData)

        if (postData) {
            return res.status(201).json({
                status: "success",
                message: " Post created successfully"
            })
        } else {
            return res.status(500).json({
                status: "error",
                message: "something went wrong"
            })
        }
    } catch (error) {
        console.log(error)
    }
}

const updatePost = async (req, res) => {

    try {
        const {id}=req.params

        console.log(req.file);
        console.log(req.body);
        const { title,
            metaContent,
            metaKey,
            content,
            status,
            category,
            slug,
            author,
            categorySlug } = req.body     
            

        const file = {
            filename: req.file.filename,
            filepath: req.file.path,
            filesize: ((req.file.size) / 1000) + "kb",
            filetype: req.file.mimetype
        };

        const postData = await postToBeUpdated(id,{
            title,
            metaContent,
            metaKey,
            content,
            file,
            status,
            category,
            slug,
            author,
            categorySlug
        })
        if (postData) {
            return res.status(201).json({
                status: "success",
                message: " Post updated successfully"
            })
        } else {
            return res.status(500).json({
                status: "error",
                message: "something went wrong"
            })
        }
    } catch (error) {
        console.log(error)
    }
}


const gettingAllPosts = async (req, res) => {
    try {
        const posts = await getAllPosts()
        if (posts.length > 0) {
            return res.status(201).json({
                status: "success",
                posts
            })
        } else {
            return res.status(500).json({
                status: "error",
                message: "No posts found"
            })
        }
    } catch (error) {
        console.log(error)
    }
}

const gettingSinglePost = async (req, res) => {
    try {
        const { id } = req.params
        const post = await getSinglePost(id)
        if (post._id) {
            return res.status(201).json({
                status: "success",
                post
            })
        } else {
            return res.status(500).json({
                status: "error",
                message: "No post found"
            })
        }
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    addPost,
    gettingAllPosts,
    gettingSinglePost,
    updatePost
}