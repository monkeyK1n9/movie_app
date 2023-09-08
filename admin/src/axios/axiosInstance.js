import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_FETCH_URL,
    // baseURL: "http://localhost:8800/api/v1",
    headers: {
        Accept: "application/json",
        "Access-Control-Allow-Origin": "http://localhost:8800/api/v1",
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
    }
})