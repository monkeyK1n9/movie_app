const User = require("../models/User");
const CryptoJS = require("crypto-js");

const updateUser = async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        if (req.body.password) {
            req.body.password = CryptoJS.AES.encrypt(
                req.body.password,
                process.env.SECRET_KEY
            ).toString();
        }

        try {
            //updat user in database
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, {
                new: true
            })

            res.status(200).json(updatedUser);
        }
        catch (err) {
            res.status(500).json({msg: "Error updating user with error: " + err.message});
        }
    }
    else {
        res.status(403).json({msg: "You can only update your account"})
    }

}

const deleteUser = async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {

        try {
            //Delete user in database
            await User.findByIdAndDelete(req.params.id)

            res.status(200).json({msg: "User has been deleted"});
        }
        catch (err) {
            res.status(500).json({msg: "Error deleting user with error: " + err.message});
        }
    }
    else {
        res.status(403).json({msg: "You can only delete your account"})
    }
}

const getUser = async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {

        try {
            //get user in database
            const user = await User.findById(req.params.id)

            const {password, ...userInfo} = user._doc;
            res.status(200).json(userInfo);
        }
        catch (err) {
            res.status(500).json({msg: "Error getting user with error: " + err.message});
        }
    }
    else {
        res.status(403).json({msg: "You can only get your account"})
    }
}

const getAllUsers = async (req, res) => {
    const query = req.query.new; //if query containes new keyword ( ?new=true)
    if (req.user.isAdmin) {

        try {
            //get all users in database
            const users = query ? await User.find().limit(5).sort({_id: -1}) : await User.find();

            res.status(200).json(users);
        }
        catch (err) {
            res.status(500).json({msg: "Error getting all users with error: " + err.message});
        }
    }
    else {
        res.status(403).json({msg: "You can only get your account"})
    }
}

const getUsersStats = async (req, res) => {
    const today = new Date();
    const lastYear = today.setFullYear(today.setFullYear() - 1);

    const monthsArr = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]

    try {
        const data = await User.aggregate([
            {
                $project: {
                    month: {
                        $month: "$createdAt"
                    }
                }
            }, 
            {
                $group: {
                    _id: "$month",
                    total: {
                        $sum: 1
                    }
                }
            }
        ]);

        res.status(200).json(data);
    }
    catch(err) {
        res.status(500).json({msg: "Failed to get users stats with error: " + err.message})
    }
}

module.exports = {
    updateUser,
    deleteUser,
    getUser,
    getAllUsers,
    getUsersStats,
}