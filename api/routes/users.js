const { 
    updateUser, 
    deleteUser, 
    getUser,
    getAllUsers,
    getUsersStats,
} = require('../middlewares/users');

const router = require('express').Router();
const verify = require("../verifyToken");



//UPDATE
router.put("/:id", verify, updateUser)

//DELETE
router.delete("/:id", verify, deleteUser)

//GET
router.get("/find/:id", verify, getUser)

//GET ALL
router.get("/", verify, getAllUsers)

//GET USER STATS
router.get("/stats", verify, getUsersStats);

module.exports = router;