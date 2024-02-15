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
            <p><strong>First Name:</strong> {/*user.firstName*/}</p>
            <p><strong>Last Name:</strong> {/*user.lastName*/}</p>
            <p><strong>Email:</strong> {/*user.email*/}</p>
            <p><strong>Mobile:</strong> {/*user.mobile*/}</p>
            <p><strong>Address:</strong> {/*user.address*/}</p>
            <p><strong>DOB:</strong> {/*user.dob*/}</p>
            <p><strong>Qualification:</strong> {/*user.qualification*/}</p>
            <p><strong>Gender:</strong> {/*user.gender*/}</p>
            <button className="button">Edit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

