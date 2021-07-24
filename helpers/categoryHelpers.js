const categoryModel = require("../models/categoryModel")

const addNewCategory = (data)=>{
    return new Promise(async (resolve,reject)=>{
        try {
            const added = await new categoryModel(data);
             await added.save();
             resolve(added)
        } catch (error) {
            reject(error.message)
        }
    })
}



const getCategories = ()=>{
    return new Promise(async (resolve,reject)=>{
        try {
            const foundCats = await categoryModel.find();
             resolve(foundCats)
        } catch (error) {
            reject(error.message)
        }
    })
}

module.exports ={
    addNewCategory,
    getCategories
}