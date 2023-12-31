import { useParams } from 'react-router-dom';
import useStationDetails from './useStationDetails';
import StationDetailsView from './StationDetailsView';

// Renders detailed information for a selected station based on its ID from URL parameters.

const StationDetails = () => {
  const { id } = useParams();
  const { stationDetails, loading, error } = useStationDetails(id);

  if (loading) return <p>Loading station details...</p>;
  if (error) return <p>Error fetching station details: {error}</p>;
  if (!stationDetails) return <p>No station details available.</p>;

  return <StationDetailsView stationDetails={stationDetails} />;
};

export default StationDetails;
