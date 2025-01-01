import React, { useState, useEffect } from "react";
import Login from "./Header-components/Login"; // استيراد مكون الـ Login
import Register from "./Header-components/Register"; // استيراد مكون الـ Register
import Profile from "./Header-components/Profile"; // استيراد مكون الـ Profile
import "../style.css";

const Header = () => {
    const [isProfilePopupVisible, setProfilePopupVisible] = useState(false);
    const [isLoginPopupVisible, setLoginPopupVisible] = useState(false);
    const [isRegisterPopupVisible, setRegisterPopupVisible] = useState(false);
    const [isMenuVisible, setMenuVisible] = useState(false); // حالة لعرض الهامبرجر منيو


    const toggleProfilePopup = () => {
        setProfilePopupVisible((prev) => !prev);
    };

    const toggleLoginPopup = () => {
        setLoginPopupVisible((prev) => !prev);
        setRegisterPopupVisible(false); // إغلاق نافذة الـ Register عند فتح نافذة الـ Login
    };

    const toggleRegisterPopup = () => {
        setRegisterPopupVisible((prev) => !prev);
        setLoginPopupVisible(false); // إغلاق نافذة الـ Login عند فتح نافذة الـ Register
    };

    const toggleMenu = () => {
        setMenuVisible((prev) => !prev); // التبديل بين إظهار وإخفاء الهامبرجر منيو
    };

    useEffect(() => {
        const handleEscapeKey = (event) => {
            if (event.key === "Escape") {
                setProfilePopupVisible(false);
                setLoginPopupVisible(false);
                setRegisterPopupVisible(false);
                setMenuVisible(false);
            }
        };

        document.addEventListener("keydown", handleEscapeKey);

        return () => {
            document.removeEventListener("keydown", handleEscapeKey);
        };
    }, []);

    return (
        <header className="header">
            <div className="logo">
                <a href="#">.LOGO</a>
            </div>

            <div className="hamburger-menu" onClick={toggleMenu}>
                <i className="fas fa-bars"></i>
            </div>

            <nav className={`nav-bar ${isMenuVisible ? "show-menu" : ""}`}>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Our Team</a></li>
                    <li><a href="#" >Services</a></li>
                    <li><a href="#" id="loginF-btn" onClick={toggleLoginPopup}>Login</a></li>
                </ul>
            </nav>

            <div className="header-icons">
                <a href="#" className="cart-icon" title="login"><i className="fas fa-shopping-cart"></i></a>
                <a href="#" className="user-icon" title="profile" onClick={toggleProfilePopup}><i className="fas fa-user"></i></a>
                <a href="#" className="login-icon" title="login" id="login-icon" onClick={toggleLoginPopup}>
                    <i className="fas fa-sign-in-alt"></i>
                </a>
            </div>

            {/* Profile Popup */}
            {isProfilePopupVisible && <Profile toggleProfilePopup={toggleProfilePopup} />}

            {/* Login Popup */}
            {isLoginPopupVisible && <Login setLoginPopupVisible={setLoginPopupVisible} toggleRegisterPopup={toggleRegisterPopup} />}

            {/* Register Popup */}
            {isRegisterPopupVisible && <Register setRegisterPopupVisible={setRegisterPopupVisible} toggleLoginPopup={toggleLoginPopup} />}
        </header>
    );
};

export default Header;
