import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Destination.css'; // File CSS yang disertakan di sini
import { Link } from 'react-router-dom';

const OpenTripMapPlaces = () => {
  const [placeData, setPlaceData] = useState([]);
  const [isDetailVisible, setIsDetailVisible] = useState({});
  
  useEffect(() => {
    const countries = ['Pakistan', 'Indonesia', 'United States', 'India'];
    const cachedData = localStorage.getItem('placeData');
  
    if (cachedData) {
      // Gunakan data dari localStorage jika ada
      setPlaceData(JSON.parse(cachedData));
    } else {
      const fetchData = async () => {
        const requests = countries.map((country) =>
          axios.request({
            method: 'GET',
            url: 'https://opentripmap-places-v1.p.rapidapi.com/en/places/geoname',
            params: { name: country },
            headers: {
              'X-RapidAPI-Key': 'c1c3f89f25msh8511d6b603288aap1277f4jsna11c95d88eef',
              'X-RapidAPI-Host': 'opentripmap-places-v1.p.rapidapi.com',
            },
          })
        );
  
        try {
          const responses = await Promise.all(requests);
          const data = responses.map((response, index) => ({
            country: countries[index],
            ...response.data,
          }));
          setPlaceData(data);
          localStorage.setItem('placeData', JSON.stringify(data)); // Simpan data di localStorage
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
    }
  }, []);
   // Empty dependency array karena inisialisasi hanya perlu dilakukan sekali

  const handleCardClick = (country) => {
    setIsDetailVisible((prevVisibility) => ({
      ...prevVisibility,
      [country]: !prevVisibility[country],
    }));
  };

  return (
    <div className="place-container">
      <h1>Informasi Lokasi</h1>
      {placeData.length > 0 ? (
        placeData.map((data) => (
          <div className="place-card" key={data.name} onClick={() => handleCardClick(data.country)}>
            <h2>{data.name}</h2>
            {isDetailVisible[data.country] && (
              <>
                <p>Negara: {data.country}</p>
                <p>Latitude: {data.lat}</p>
                <p>Longitude: {data.lon}</p>
                <p>Populasi: {data.population}</p>
                <p>Zona Waktu: {data.timezone}</p>
                <p>Status: {data.status}</p>
                <Link to={`/Destination/${data.country.toLowerCase()}`}>
                  <button>Lihat Destinasi</button>
                </Link>
              </>
            )}
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default OpenTripMapPlaces;
