import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <a href="#">.LOGO</a>
                </div>
                <div className="footer-links">
                    <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-social">
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-google"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-github"></i></a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; . All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
