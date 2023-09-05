import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_FETCH_URL,
    // baseURL: "http://localhost:8800/api/v1",
    headers: {
        Accept: "application/json",
        "Access-Control-Allow-Origin": "http://localhost:8800/api/v1",
        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZjVkMzU5YmU0MGFjZDJmM2UxMTRkYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MzgzNDI4NiwiZXhwIjoxNjk0MjY2Mjg2fQ.sbS0L51NRqGUBH-CJaFlIpZ47YHwYgNwxvelKDyVkAA"
    }
})