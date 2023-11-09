import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const StationDetails = () => {
  const [stationDetails, setStationDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
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

  if (loading) return <p>Loading station details...</p>;
  if (error) return <p>Error fetching station details: {error}</p>;
  if (!stationDetails) return <p>No station details available.</p>;

  return (
    <div>
      <h1>{stationDetails.stationName}</h1>
      <p>Address: {stationDetails.stationAddress}</p>
      <p>Total Journeys from Station: {stationDetails.journeysFromStation}</p>
      <p>Total Journeys to Station: {stationDetails.journeysToStation}</p>
      <p>Average Distance of Journeys starting from station: {stationDetails.averageDistance} meters</p>
      <p>Average Duration of Journeys starting from station: {stationDetails.averageDuration} seconds</p>
    </div>
  );
};

export default StationDetails;
