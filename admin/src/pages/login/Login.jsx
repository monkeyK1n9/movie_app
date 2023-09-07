import { useState } from "react"
import "./login.css"

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        try {
            e.preventDefault()
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
                >
                    Login
                </button>
            </form>
        </div>
    )
}
