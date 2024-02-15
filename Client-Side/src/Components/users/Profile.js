import React from 'react';
import Navbar from "../users/Navbar1";
import "../css/UserProfile.css";
import img from "../images/Profile.jpg";

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
            <img src={img} alt="User Avatar"/>
          </div>
          <div className="profile-details">
            <p> First Name: </p>
            <p> Last Name:  </p>
            <p> Email: </p>
            <p> Mobile:</p>
            <p> Address:</p>
            <p>DOB:</p>
            <p> Qulification:</p>
            <p> Gender:</p>
            <button className="button">Edit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

