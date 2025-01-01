import React from "react";

const Register = ({ toggleLoginPopup, setRegisterPopupVisible }) => {
    const closeRegisterPopup = () => {
        setRegisterPopupVisible(false); // إغلاق نافذة الـ Register
    };
    return (
        <div className="register-popup show">
            <div className="popup-content">
                <span className="close-register-btn" onClick={closeRegisterPopup}>×</span>
                <h3>Sign Up</h3>
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
                    <input
                        type="text"
                        placeholder="Username..."
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email Address..."
                        required
                    />
                    <input
                        type="password"
                        placeholder="Create Password..."
                        required
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password..."
                        required
                    />
                    <button type="submit" className="btn">Sign Up</button>
                </form>

                <p>Already have an account? <a href="#" onClick={toggleLoginPopup}>Log in</a></p>
            </div>
        </div>
    );
};

export default Register;
