import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CulturalPlacesPage = () => {
  const [placesData, setPlacesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://opentripmap-places-v1.p.rapidapi.com/en/places/bbox',
        params: {
          lon_max: '123',
          lat_min: '9',
          lon_min: '5',
          lat_max: '43',
          limit: '10',
          kinds: 'cultural',
        },
        headers: {
          'X-RapidAPI-Key': 'c1c3f89f25msh8511d6b603288aap1277f4jsna11c95d88eef',
          'X-RapidAPI-Host': 'opentripmap-places-v1.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response);
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
      <h1 style={{ textAlign: 'center' }}>Cultural Places Page</h1>
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

export default CulturalPlacesPage;
