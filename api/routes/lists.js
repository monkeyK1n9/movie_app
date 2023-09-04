const { 
    createList, 
    updateList,
    deleteList,
    getList,
    getAllLists,
    getRandomList,
} = require('../middlewares/lists');

const router = require('express').Router();
const verify = require("../verifyToken");


//CREATE
router.post("/", verify, createList);

//UPDATE
router.put("/:id", verify, updateList)

//DELETE
router.delete("/:id", verify, deleteList)

//GET
router.get("/", verify, getList)


module.exports = router;