import { axiosInstance } from "../../axios/axiosInstance";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";

export const login = async (user, dispatch) => {
    dispatch(loginStart());
    try {
        const res = await axiosInstance.post("auth/login", user);
        res.data.isAdmin && dispatch(loginSuccess(res.data));
    }
    catch (err) {
        dispatch(loginFailure());
    }
}

export const logout = async () => {
    localStorage.removeItem("user")
}