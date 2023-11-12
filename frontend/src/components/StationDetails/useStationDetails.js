import { useState, useEffect } from 'react';

/**
 * Custom hook for fetching and managing state of a specific station's details.
 * It handles data fetching, loading state, and error handling for station details based on a given station ID.
 */


const useStationDetails = (id) => {
  const [stationDetails, setStationDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchStationDetails = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/stations/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setStationDetails(data);
      } catch (error) {
        setError('There was a problem fetching station details.');
        console.error('Fetch error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStationDetails();
  }, [id]);

  return { stationDetails, loading, error };
};

export default useStationDetails;
