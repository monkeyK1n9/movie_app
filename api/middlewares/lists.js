const List= require("../models/List");
const CryptoJS = require("crypto-js");

const createList = async (req, res) => {
    if (req.user.isAdmin) {
        const newList = new List(req.body);

        try {
            const list = await newList.save();

            res.status(200).json(list);
        }
        catch (err) {
            res.status(500).json({msg: "Error creating list with error: " + err.message});
        }
    }
    else {
        res.status(403).json({msg: "You are not allowed to create a list"})
    }

}

const updateList = async (req, res) => {
    if (req.user.isAdmin) {

        try {
            const updatedList = await List.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, {
                new: true,
            });

            res.status(200).json(updatedList);
        }
        catch (err) {
            res.status(500).json({msg: "Error updating list with error: " + err.message});
        }
    }
    else {
        res.status(403).json({msg: "You are not allowed to update a list"})
    }
}

const deleteList = async (req, res) => {
    if (req.user.isAdmin) {

        try {
            await List.findByIdAndDelete(req.params.id);

            res.status(200).json({msg: "You deleted the list"});
        }
        catch (err) {
            res.status(500).json({msg: "Error deleting list with error: " + err.message});
        }
    }
    else {
        res.status(403).json({msg: "You are not allowed to delete a list"});
    }
}

const getList = async (req, res) => {
    const typeQuery = req.query.type;
    const genreQuery = req.query.genre;

    let list = [];

    try {
        if (typeQuery) {
            if (genreQuery) {
                list = await List.aggregate([
                    {
                        $sample: {
                            size: 10
                        }
                    },
                    {
                        $match: {
                            type: typeQuery,
                            genre: genreQuery,
                        }
                    }
                ])
            }
            else {
                list = await List.aggregate([
                    {
                        $sample: {
                            size: 10
                        }
                    },
                    {
                        $match: {
                            type: typeQuery
                        }
                    }
                ])
            }
        }
        else {
            list = await List.aggregate([
                {
                    $sample: {
                        size: 10
                    }
                }
            ])
        }

        res.status(200).json(list);
    }
    catch (err) {
        res.status(500).json({msg: "Error getting the list with error: " + err.message})
    }

}


module.exports = {
    createList,
    updateList,
    deleteList,
    getList,
}