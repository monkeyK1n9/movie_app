import { axiosInstance } from "../../axios/axiosInstance";
import { createMovieFailure, createMovieStart, createMovieSuccess, deleteMovieFailure, deleteMovieStart, deleteMovieSuccess, getMoviesFailure, getMoviesStart, getMoviesSuccess } from "./MovieActions"


export const getMovies = async(dispatch) => {
    dispatch(getMoviesStart());
    try {
        const res = await axiosInstance.get("movies")
        dispatch(getMoviesSuccess(res.data));
    }
    catch (err) {
        dispatch(getMoviesFailure());
    }
}

export const deleteMovie = async (movieId, dispatch) => {
    dispatch(deleteMovieStart());
    try {
        await axiosInstance.delete("movies/" + movieId);
        dispatch(deleteMovieSuccess(movieId));
    }
    catch (err) {
        dispatch(deleteMovieFailure());
    }
}

export const createMovie = async (movie, dispatch) => {
    dispatch(createMovieStart());
    try {
        const res = await axiosInstance.post("movies", movie);
        dispatch(createMovieSuccess(res.data, dispatch));
    }
    catch(err) {
        dispatch(createMovieFailure());
    }
}