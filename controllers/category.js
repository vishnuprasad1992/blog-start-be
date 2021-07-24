const { addNewCategory, getCategories } = require("../helpers/categoryHelpers")

const addCategory = async (req,res)=>{
    try {
        const { category,metaContent,metaKey,pagename } = req.body
        const catData = await addNewCategory({
            category,metaContent,metaKey,pagename
        })
        if(catData){
            return res.status(201).json({
                status :"success",
                message :" category created successfully"
            })
        }else{
            return res.status(500).json({
                status :"error",
                message :"something went wrong"
            })
        }
    } catch (error) {
        console.log(error)       
    }
}


const getAllCategories = async (req,res)=>{
    try {
        const categories = await getCategories()
        if(categories.length > 0){
            return res.status(201).json({
                status :"success",
                categories
            })
        }else{
            return res.status(500).json({
                status :"error",
                message :"No categories found"
            })
        }
    } catch (error) {
        console.log(error)       
    }
}
module.exports = {
    addCategory,
    getAllCategories
}