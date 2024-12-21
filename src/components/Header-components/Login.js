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
                <div className="social-login">
                    {/* Social login buttons */}
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
