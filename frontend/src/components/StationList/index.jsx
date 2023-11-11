import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { groupStations } from '../utils/groupStations';
import StationGroup from './StationGroup';
import SearchBar from './SearchBar';

const StationList = ({ stations }) => {
  const theme = useTheme();
  const groupedStations = groupStations(stations);

  const handleStationSelect = (stationId) => {
    // Implement your logic for when a station is selected
    console.log('Selected Station ID:', stationId);
  };

  return (
    <div style={{ padding: theme.custom.spacing.medium }}>
      <Typography variant="h1" component="h1" gutterBottom>
        Stations
      </Typography>

      <div style={{ marginBottom: theme.spacing(2) }}>
        <SearchBar onStationSelect={handleStationSelect} />
      </div>

      <Paper elevation={1} sx={{ borderRadius: theme.custom.borderRadius.medium, overflow: 'hidden' }}>
        {Object.keys(groupedStations).sort().map((letter) => (
          <StationGroup key={letter} letter={letter} stations={groupedStations[letter]} />
        ))}
      </Paper>

    </div>
  );
};

StationList.propTypes = {
  stations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      station_name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default StationList;
