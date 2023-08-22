import "./auth.scss";

export default function Auth() {
    return (
        <div className='auth'>
            <div className="top">
                <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="" className="logo" />

                <button className="loginButton">Sign In</button>
            </div>

            <div className="container">
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>
                    Ready to watch? Enter your mail to create or restart your membership.
                </p>
                <div className="input">
                    <input type="email" placeholder="email address"/>
                    <button className="registerButton">Get Started</button>
                </div>
            </div>
        </div>
    )
}
