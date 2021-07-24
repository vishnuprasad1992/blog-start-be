const posts = require('../models/postModel');

const addNewPost = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const newPost = await posts(data);
            await newPost.save();
            resolve(newPost)
        } catch (error) {
            reject(error.message)
        }
    })
}

const getAllPosts = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allPosts = await posts.find();
            resolve(allPosts)
        } catch (error) {
            reject(error.message)
        }
    })
}


const getSinglePost = (_id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const post = await posts.findById(_id);
            resolve(post)
        } catch (error) {
            reject(error.message)
        }
    })
}

const postToBeUpdated = (_id,data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const updatedPost = await posts.findByIdAndUpdate({_id},{
                $set:data
            },{new:true});
            resolve(updatedPost)
        } catch (error) {
            reject(error.message)
        }
    })
}



// const getUserCheck = (email) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             const extUsers = await users.findOne({ email });
//             if (extUsers === null) {
//                 return resolve(false)
//             }
//             if (extUsers.email) {
//                 return resolve(true)
//             }
//         } catch (error) {
//             reject(error.message)
//         }
//     })

// }

module.exports = {
    addNewPost,
    getAllPosts,
    getSinglePost,
    postToBeUpdated
    // getUserCheck
}