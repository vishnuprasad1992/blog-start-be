const express = require("express");
const { addPost, gettingAllPosts, gettingSinglePost, updatePost } = require("../controllers/posts");
const { upload } = require("../helpers/multerHelper");
const router = express.Router();

router.post("/add-post",upload.single("file"),addPost);
router.get("/get-all-posts",gettingAllPosts)
router.get("/get-post/:id",gettingSinglePost)
router.put("/update-post/:id",upload.single("file"),updatePost)


module.exports = router