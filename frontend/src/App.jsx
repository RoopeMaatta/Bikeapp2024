import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StationList from './components/StationList/index';
import StationDetails from './components/StationDetails/index';
import { fetchStations } from './services/stationService';


// Main component of the application with routing and station data fetching logic


const App = () => {
  const [stations, setStations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getStations = async () => {
      setLoading(true);
      try {
        const data = await fetchStations();
        setStations(data);
      } catch (error) {
        setError('There was a problem fetching stations.');
        console.error('Fetch error:', error);
      } finally {
        setLoading(false);
      }
    };

    getStations();
  }, []);

  if (loading) return <p>Loading stations...</p>;
  if (error) return <p>Error fetching stations: {error}</p>;

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<StationList stations={stations} />} />
          <Route path="/stations/:id" element={<StationDetails />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;