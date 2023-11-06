import React, { useState, useEffect } from 'react';
const apiUrl = import.meta.env.VITE_API_URL

const App = () => {
  const [stations, setStations] = useState([]); // State to hold stations data

  useEffect(() => {
    console.log('API URL:', apiUrl); // Check the API URL value
    const fetchStations = async () => {
      try {

        const response = await fetch(`${apiUrl}/api/stations`); // Make sure this URL is correct
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setStations(data);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    fetchStations();
  }, []);

  return (
    <div>
      <p>Hello World frontend</p>
      <ul>
        {stations.map((station, index) => (
          <li key={index}>{station.station_name}</li> // Using index as key, ensure station names are unique
        ))}
      </ul>
    </div>
  );
};

export default App;
