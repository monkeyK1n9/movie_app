const Movie = require("../models/Movie");
const CryptoJS = require("crypto-js");

const createMovie = async (req, res) => {
    if (req.user.isAdmin) {
        const newMovie = new Movie(req.body);

        try {
            const movie = await newMovie.save();

            res.status(200).send(movie);
        }
        catch (err) {
            res.status(500).json({msg: "Error creating movie with error: " + err.message});
        }
    }
    else {
        res.status(403).json({msg: "You are not allowed to create a movie"})
    }

}

const updateMovie = async (req, res) => {
    if (req.user.isAdmin) {

        try {
            const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, {
                new: true,
            });

            res.status(200).send(updatedMovie);
        }
        catch (err) {
            res.status(500).json({msg: "Error updating movie with error: " + err.message});
        }
    }
    else {
        res.status(403).json({msg: "You are not allowed to create a movie"})
    }
}

const deleteMovie = async (req, res) => {
    if (req.user.isAdmin) {

        try {
            await Movie.findByIdAndDelete(req.params.id);

            res.status(200).json({msg: "You deleted the movie"});
        }
        catch (err) {
            res.status(500).json({msg: "Error deleting movie with error: " + err.message});
        }
    }
    else {
        res.status(403).json({msg: "You are not allowed to delete a movie"});
    }
}

const getMovie = async (req, res) => {
    if (req.user.isAdmin) {

        try {
            const movie = await Movie.findById(req.params.id);

            res.status(200).send(movie);
        }
        catch (err) {
            res.status(500).json({msg: "Error getting the movie with error: " + err.message})
        }
    }
    else {
        res.status(403).json({msg: "You are not allowed to get this movie"});
    }
}

const getAllMovies = async (req, res) => {
    if (req.user.isAdmin) {

        try {

        }
        catch (err) {
            res.status(500).json({msg: "Error getting the movies with error: " + err.message});
        }
    }
    else {
        res.status(403).json({msg: "You are not allowed to get the movies"})
    }
}

module.exports = {
    createMovie,
    updateMovie,
    deleteMovie,
    getMovie,
    getAllMovies
}