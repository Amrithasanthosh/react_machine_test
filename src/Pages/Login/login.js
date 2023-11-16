import React from "react";
import { useNavigate } from "react-router-dom";
import "./login.css"

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        navigate("/home");

    }

    return <div className="login-container">
        <div>
            <form className="input-container" onSubmit={handleLogin}>
                <div className="signup-title">Sign In</div>
                <div className="new-user">
                    <div className="new-user-text">New user?</div>
                    <div className="create-account-text">Create an account</div>
                </div>
                <input type="text" placeholder="Username or email" required />
                <input type="text" placeholder="Password" required />
                <div className="checkbox">
                    <input type="checkbox" />
                    <div className="checkbox-label">Keep me signed in</div>
                </div>
                <button type="submit">Sign In</button>
                <div className="sigin-with">
                    <div className="border"></div>
                    <div className="signin-with-text">Or Sign In With</div>
                    <div className="border"></div>
                </div>
                <div className="images">
                    <img alt="img" title="Google" src="/assets/google.png" />
                    <img alt="img" title="Facebook" src="/assets/facebook.png" />
                    <img alt="img" title="LinkedIn" src="/assets/linkedIn.png" />
                    <img alt="img" title="Twitter" src="/assets/twitter.png" />
                </div>
            </form>
        </div>
        <div className="login-img">
            <img src="/assets/login.png" alt="img" />
        </div>
    </div>
}

export default Login;