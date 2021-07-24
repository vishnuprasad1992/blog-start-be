const express = require("express");
const { addCategory, getAllCategories } = require("../controllers/category");
const router = express.Router();


router.post("/add-category" , addCategory);

router.get("/get-all-categories" , getAllCategories);


module.exports = router;