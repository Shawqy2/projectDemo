import React from "react";

const Login = ({ toggleRegisterPopup, setLoginPopupVisible }) => {
    const closeLoginPopup = () => {
        setLoginPopupVisible(false); 
    };

    return (
        <div className="login-popup show">
            <div className="popup-content">
                <span className="close-login-btn" onClick={closeLoginPopup}>×</span>
                <h3>Login</h3>
                <div class="social-login">
                        <a
                            href="https://accounts.google.com/o/oauth2/auth?client_id=YOUR_GOOGLE_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=email"
                            class="social-icon google"
                            target="_blank">
                            <i class="fab fa-google"></i>
                        </a>
                        <a
                            href="https://www.facebook.com/v10.0/dialog/oauth?client_id=YOUR_FACEBOOK_APP_ID&redirect_uri=YOUR_REDIRECT_URI&state=YOUR_STATE_PARAM"
                            class="social-icon facebook"
                            target="_blank">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a
                            href="https://github.com/login/oauth/authorize?client_id=YOUR_GITHUB_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI"
                            class="social-icon github"
                            target="_blank">
                            <i class="fab fa-github"></i>
                        </a>
                    </div>
                <form>
                    <input type="text" placeholder="Username..." required />
                    <input type="password" placeholder="Enter your password" required />
                    <button type="submit" className="btn">Login</button>
                </form>
                <p>
                    Don't have an account? <a href="#" onClick={toggleRegisterPopup}>Sign up</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
