//GET
export const getMoviesStart = () => ({
    type: "GET_MOVIES_START",
});

export const getMoviesSuccess = (movies) => ({
    type: "GET_MOVIES_SUCCESS",
    payload: movies
});

export const getMoviesFailure = () => ({
    type: "GET_MOVIES_FAILURE",
});

//DELETE
export const deleteMovieStart = () => ({
    type: "DELETE_MOVIES_START",
});

export const deleteMovieSuccess = (movieId) => ({
    type: "DELETE_MOVIES_SUCCESS",
    payload: movieId
});

export const deleteMovieFailure = () => ({
    type: "DELETE_MOVIES_FAILURE",
});