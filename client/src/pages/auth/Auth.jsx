import { useState, useRef } from "react";
import "./auth.scss";

export default function Auth() {
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
        <div className='auth'>
            <div className="top">
                <div className="wrapper">
                    <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="" className="logo" />

                    <button className="loginButton">Sign In</button>
                </div>
            </div>

            <div className="container">
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>
                    Ready to watch? Enter your mail to create or restart your membership.
                </p>
                {!email ? (

                    <div className="input">
                        <input type="email" placeholder="email address" ref={emailRef}/>
                        <button className="registerButton" onClick={handleStart}>Get Started</button>
                    </div>
                ): (
                    <form className="input">
                        <input type="password" placeholder="password" ref={passwordRef}/>
                        <button className="registerButton" onClick={handleFinish}>Start</button>
                    </form>
                )}
            </div>
        </div>
    )
}
