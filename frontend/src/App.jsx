import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StationList from './components/StationList'; // Assuming you have this component
import StationDetails from './components/StationDetails'; // Assuming you have this component
const apiUrl = import.meta.env.VITE_API_URL;

const App = () => {
  const [stations, setStations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStations = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${apiUrl}/api/stations`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setStations(data);
      } catch (error) {
        setError('There was a problem fetching stations.');
        console.error('Fetch error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStations();
  }, []);

  if (loading) return <p>Loading stations...</p>;
  if (error) return <p>Error fetching stations: {error}</p>;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<StationList stations={stations} />} />
        <Route path="/station/:id" element={<StationDetails />} />
      </Routes>
    </Router>
  );
};

export default App;



// import { useState, useEffect } from 'react';
// const apiUrl = import.meta.env.VITE_API_URL

// const App = () => {
//   const [stations, setStations] = useState([]); // State to hold stations data

//   useEffect(() => {
//     const fetchStations = async () => {
//       try {

//         const response = await fetch(`${apiUrl}/api/stations`); // Make sure this URL is correct
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         setStations(data);
//       } catch (error) {
//         console.error('There was a problem with the fetch operation:', error);
//       }
//     };

//     fetchStations();
//   }, []);

//   return (
//     <div>
//       <p>Hello World frontend</p>
//       <ul>
//         {stations.map((station, index) => (
//           <li key={index}>{station.station_name}</li> // Using index as key, ensure station names are unique
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;
