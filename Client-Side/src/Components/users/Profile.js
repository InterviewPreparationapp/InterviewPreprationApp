import Navbar from "../users/Navbar1";
import "../css/UserProfile.css"
// UserProfile.js

import React from 'react';


const Profile = ({ user }) => {
  return (
    <>
    <Navbar/>
    <div className="profile-container">
      <div className="profile-header">
        <h2>User Profile</h2>
      </div>
      <div className="profile-content">
        <div className="profile-avatar">
          <img src="" alt="User Avatar" />
        </div>
        <div className="profile-details">
          <p><strong>Username:</strong> </p>
          <p><strong>Email:</strong> </p>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default Profile;
