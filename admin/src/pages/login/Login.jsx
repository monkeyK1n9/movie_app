import { useContext, useState } from "react"
import "./login.css"
import { AuthContext } from "../../context/authContext/AuthContext";
import { login } from "../../context/authContext/apiCalls";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {isFetching, dispatch} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        try {
            e.preventDefault()
            await login({email, password}, dispatch);
            navigate("/");
        }
        catch (err) {
            console.log("Error login with error: " + err)
        }
    }

    return (
        <div className='login'>
            <form className="loginForm">
                <input 
                    type="text" 
                    className="loginInput"
                    placeholder="email"
                    onChange={e => setEmail(e.target.value)}
                />
                <input 
                    type="password" 
                    className="loginInput"
                    placeholder="password"
                    onChange={e => setPassword(e.target.value)}
                />
                <button 
                    className="loginButton"
                    onClick={handleLogin}
                    disabled={isFetching}
                >
                    Login
                </button>
            </form>
        </div>
    )
}
