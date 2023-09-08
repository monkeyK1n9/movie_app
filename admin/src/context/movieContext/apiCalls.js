import { axiosInstance } from "../../axios/axiosInstance";
import { deleteMovieFailure, deleteMovieStart, deleteMovieSuccess, getMoviesFailure, getMoviesStart, getMoviesSuccess } from "./MovieActions"


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