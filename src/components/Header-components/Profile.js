import React from "react";

const Profile = ({ toggleProfilePopup }) => {
    return (
        <div className="profile-popup show" onClick={() => toggleProfilePopup(false)}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                <span className="close-profile-btn" onClick={() => toggleProfilePopup(false)}>×</span>
                <h3>User Profile</h3>
                <div className="profile-details">
                    <img src="user-avatar.jpg" alt="User Avatar" className="profile-avatar" />
                    <p><strong>Username:</strong> JohnDoe</p>
                    <p><strong>Email:</strong> johndoe@example.com</p>
                    <p><strong>Joined:</strong> January 2020</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;
