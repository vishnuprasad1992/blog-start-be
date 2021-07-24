const { addNewUser, getUserCheck, getUser, gettingAllUser } = require("../helpers/userHelper");
const bcrypt = require("bcrypt");


const registerNewUser = async (req, res) => {
    try {
        const { name, email, mobile, address, password, cPassword } = req.body
        const check = await getUserCheck(email);
        if (check === true) {
            return res.status(401).json({
                status: "error",
                message: " User already exists"
            })
        }
        else {
            if (password === cPassword) {
                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(password, salt)
                const dataToRegsiter = {
                    name,
                    email,
                    mobile,
                    address,
                    password: hashedPassword
                }
                const userDetails = await addNewUser(dataToRegsiter)
                if (userDetails) {
                    return res.status(201).json({
                        status: "success",
                        message: " User Register successfully"
                    })
                } else {
                    return res.status(500).json({
                        status: "error",
                        message: "something went wrong"
                    })
                }
            }
            else {
                return res.status(500).json({
                    status: "error",
                    message: "Passwords not matching"
                })
            }
        }
    } catch (error) {
        console.log(error)
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await getUser(email);
        if (user.email === email) {
            const verifiedPassword = await bcrypt.compare(password, user.password)
            if (verifiedPassword) {

                const dataToBeSend = {
                    _id: user._id,
                    name: user.name,
                    email: user.email
                }

                return res.status(201).json({
                    status: "success",
                    message: " logged in successfully",
                    authUser: dataToBeSend
                })
            } else {
                return res.status(401).json({
                    status: "error",
                    message: "invalid credentials"
                })
            }
        }
        else {
            return res.status(401).json({
                status: "error",
                message: "invalid credentials"
            })
        }
    } catch (error) {
        console.log(error)
    }
}


const getAllUsers = async (req, res) => {
    try {
        const users = await gettingAllUser();
        if (users) {
            return res.status(201).json({
                status: "success",
                users
            })
        }
        else {
            return res.status(401).json({
                status: "error",
                message: "invalid credentials"
            })
        }
    } catch (error) {
        console.log(error)
    }
}




module.exports = {
    registerNewUser,
    loginUser,
    getAllUsers
}