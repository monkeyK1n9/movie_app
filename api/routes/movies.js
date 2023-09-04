const { 
    createMovie, 
    updateMovie,
    deleteMovie,
    getMovie,
    getAllMovies,
    getRandomMovie,
} = require('../middlewares/movies');

const router = require('express').Router();
const verify = require("../verifyToken");


//CREATE
router.post("/", verify, createMovie);

//UPDATE
router.put("/:id", verify, updateMovie)

//DELETE
router.delete("/:id", verify, deleteMovie)

//GET
router.get("/find/:id", verify, getMovie)

//GET RANDOM
router.get("/random", verify, getRandomMovie);

//GET ALL
router.get("/", verify, getAllMovies)

//GET USER STATS
// router.get("/stats", verify, getMoviesStats);

module.exports = router;