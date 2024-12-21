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
                <div className="social-login">
                    {/* Social login buttons */}
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
