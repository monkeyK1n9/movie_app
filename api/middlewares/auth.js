/**
 * Registering the user when he provided he filled the form
 */

const User = require("../models/User")
const CryptoJS = require("crypto-js")
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
    
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),
    })

    try {
        const user = await newUser.save();
        res.status(200).json(user);
    }
    catch (err) {
        res.status(500).json(err);
    }
}

const loginUser = async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email,
        })

        if (!user) {
            return res.status(401).json({msg: "Wrong password or username"})
        }

        //decrypt the password
        const decryptedPassword = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY).toString(CryptoJS.enc.Utf8);

        if (decryptedPassword !== req.body.password) {
            return res.status(401).json({msg: "Wrong password or username"})
        }
        
        const accessToken = jwt.sign(
            {id: user._id, isAdmin: user.isAdmin}, 
            process.env.SECRET_KEY,
            {expiresIn: "5d"}
        )
        //removing password from the data we send back to the client
        const {password, ...userInfo} = user._doc;

        res.status(200).json({...userInfo, accessToken})
    }
    catch (err) {
        res.status(500).json(err);
    }
}

module.exports = {
    registerUser,
    loginUser,
}