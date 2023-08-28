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
 
            </div>
        </div>
    )
}
