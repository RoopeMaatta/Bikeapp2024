const apiUrl = import.meta.env.VITE_API_URL;

// API utility functions for fetching station data

// Fetch the list of all stations
const fetchStations = async () => {
  const response = await fetch(`${apiUrl}/api/stations`);
  if (!response.ok) {
    throw new Error(`HTTP error! with fetchStations status: ${response.status}`);
  }
  return response.json();
};

// Fetch details for a single station by its ID
const fetchStationDetails = async (stationId) => {
  const response = await fetch(`${apiUrl}/api/stations/${stationId}`);
  if (!response.ok) {
    throw new Error(`HTTP error! with fetchStationDetails status: ${response.status}`);
  }
  return response.json();
};

export { fetchStations, fetchStationDetails };
