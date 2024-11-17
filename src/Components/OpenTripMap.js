// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const OpenTripMapPage = () => {
//   const [places, setPlaces] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://opentripmap-places-v1.p.rapidapi.com/en/places/geoname', {
//           params: { name: 'Pakistan' },
//           headers: {
//             'X-RapidAPI-Key': 'c1c3f89f25msh8511d6b603288aap1277f4jsna11c95d88eef',
//             'X-RapidAPI-Host': 'opentripmap-places-v1.p.rapidapi.com',
//           },
//         });

//         console.log(response.data); // Logging untuk melihat struktur respons

//         if (response.data.places) {
//           setPlaces(response.data.places);
//           setLoading(false);
//         } else {
//           console.error('Invalid response format:', response.data);
//           setLoading(false);
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Places in Pakistan</h1>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <ul>
//           {places.map((place) => (
//             <li key={place.id}>{place.name}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default OpenTripMapPage;
