const apiUrl = import.meta.env.VITE_API_URL;

// Fetch the list of all stations
const fetchStations = async () => {
  const response = await fetch(`${apiUrl}/api/stations`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  console.log(response.body)
  return response.json();
};

// Fetch details for a single station by its ID
const fetchStationDetails = async (stationId) => {
  const response = await fetch(`${apiUrl}/api/stations/${stationId}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

export { fetchStations, fetchStationDetails };
