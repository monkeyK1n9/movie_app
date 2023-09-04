const Movie = require("../models/Movie");
const CryptoJS = require("crypto-js");

const createMovie = async (req, res) => {
    if (req.user.isAdmin) {
        const newMovie = new Movie(req.body);

        try {
            const movie = await newMovie.save();

            res.status(200).json(movie);
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

            res.status(200).json(updatedMovie);
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

    try {
        const movie = await Movie.findById(req.params.id);

        res.status(200).json(movie);
    }
    catch (err) {
        res.status(500).json({msg: "Error getting the movie with error: " + err.message})
    }

}

const getRandomMovie = async (req, res) => {
    const type = req.query.type; // if type is provided as a query parameter (?type=series), then it will fetch a random movie/series in that category
    let movie;
    try {
        if (type === "series") {
            movie = await Movie.aggregate([
                {
                    $match: {
                        isSeries: true,
                    },
                },
                {
                    $sample: {
                        size: 1
                    }
                }
            ])

        }
        else {
            movie = await Movie.aggregate([
                {
                    $match: {
                        isSeries: false,
                    },
                },
                {
                    $sample: {
                        size: 1
                    }
                }
            ])

        }
        res.status(200).json(movie);
    }
    catch (err) {
        res.status(500).json({msg: "Error getting the movie with error: " + err.message});
    }
}

const getAllMovies = async (req, res) => {
    if (req.user.isAdmin) {

        try {
            const movies = await Movie.find();

            res.status(200).send(movies.reverse());
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
    getRandomMovie,
    getAllMovies
}