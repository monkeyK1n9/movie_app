import { useState, useRef } from "react";
import "./login.scss";

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const handleStart = () => {
        setEmail(emailRef.current?.value)
    }

    const handleFinish = () => {
        setPassword(passwordRef.current?.value);
    }

    return (
        <div className='login'>
            <div className="top">
                <div className="wrapper">
                    <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="" className="logo" />

                </div>
            </div>

            <div className="container">
                <form>
                    <h1>Sign In</h1>
                    <input type="email" placeholder="Email or phone number" />
                    <input type="password" placeholder="Password" />
                    <button className="loginButton">Sign In</button>
                    <span>New to Netflix? <b>Sign up now.</b></span>
                    <small>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. <b>Learn more</b>.
                    </small>
                </form>
            </div>
        </div>
    )
}
