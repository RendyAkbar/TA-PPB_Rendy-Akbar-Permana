import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ArchitecturePlacesPage = () => {
  const [placesData, setPlacesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // Coba ambil data dari cache
      if ('caches' in window) {
        const cache = await caches.open('architecture-places');
        const cachedResponse = await cache.match(
          'https://opentripmap-places-v1.p.rapidapi.com/en/places/bbox?lon_max=120&lat_min=7&lon_min=8&lat_max=60&limit=10&kinds=architecture'
        );
  
        if (cachedResponse) {
          const cachedData = await cachedResponse.json();
          setPlacesData(cachedData);
          setLoading(false);
          return;
        }
      }
  
      // Jika tidak ada di cache, coba fetch dari API
      const options = {
        method: 'GET',
        url: 'https://opentripmap-places-v1.p.rapidapi.com/en/places/bbox',
        params: {
          lon_max: '120',
          lat_min: '7',
          lon_min: '8',
          lat_max: '60',
          limit: '10',
          kinds: 'architecture',
        },
        headers: {
          'X-RapidAPI-Key': 'c1c3f89f25msh8511d6b603288aap1277f4jsna11c95d88eef',
          'X-RapidAPI-Host': 'opentripmap-places-v1.p.rapidapi.com',
        },
      };
  
      try {
        const response = await axios.request(options);
        setPlacesData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error.message);
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);
  

  return (
    <div style={{ maxWidth: '800px', margin: 'auto' }}>
      <h1 style={{ textAlign: 'center' }}>Tempat di India</h1>
      {loading ? (
        <p style={{ textAlign: 'center' }}>Loading...</p>
      ) : (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {placesData.features &&
            placesData.features.map((place) => (
              <li
                key={place.properties.xid}
                style={{
                  border: '1px solid #ddd',
                  padding: '10px',
                  margin: '5px 0',
                  borderRadius: '5px',
                  backgroundColor: '#f9f9f9',
                }}
              >
                {place.properties.name}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default ArchitecturePlacesPage;
