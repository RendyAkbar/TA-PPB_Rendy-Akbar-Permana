// Home.js

import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" />


const Home = () => {
  return (
    <div className="home-container">
      <h2>Selamat datang di Halaman Utama!</h2>
      <p>Mulailah hari dengan suapan informasi</p>
      <img
        className="home-image"
        src="https://asset-2.tstatic.net/batam/foto/bank/images/jalan-di-google-maps_20170621_080302.jpg" 
        alt="Perjalanan Impian"
      />
      <p>Temukan informasi mengenai detail lokasi suatu negara di sini.</p>
      <Link to="/Destination" className="cta-button">
        Jelajahi Sekarang
      </Link>
    </div>
  );
};

export default Home;
