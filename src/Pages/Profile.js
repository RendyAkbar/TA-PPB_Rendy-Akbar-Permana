// Profile.js

import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <div className="profile-card">
        <img
          className="profile-image"
          src="FOTO FORMAL-removebg-preview - Copy.jpg"
          alt="Profil"
        />
        <div className="profile-info">
          <h3>Rendy Akbar Permana</h3>
          <p>NIM: 21120122140123</p>
          <br></br>
          <p>Email: example@example.com</p>
        </div>
      </div>
      <p>Dibuat oleh Rendy</p>
    </div>
  );
};

export default Profile;
