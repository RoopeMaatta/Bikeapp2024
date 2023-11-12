import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import StyledInfo from './StyledInfo';
import { formatDistance, formatDuration } from '../utils/conversion';
import { useTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


const StationDetailsView = ({ stationDetails }) => {
  const theme = useTheme();

  return (
    <div>
      <Typography variant="h1" component="h1">
        {stationDetails.stationName}
      </Typography>
      <Typography variant="body1" component="p" gutterBottom color={theme.custom.colors.middleGreyInfoElement}>
        {stationDetails.stationAddress}
      </Typography>



      <Paper elevation={0} sx={{ borderRadius: theme.custom.borderRadius.medium, overflow: 'hidden' }}>
        <Typography variant="body1" component="p" gutterBottom fontStyle="bold">
        Departures
        </Typography>
        <StyledInfo title="Total Journeys" value={stationDetails.journeysToStation} />
      </Paper>


      <Paper elevation={0} sx={{ borderRadius: theme.custom.borderRadius.medium, overflow: 'hidden' }}>
        <Typography variant="body1" component="p" gutterBottom fontStyle="bold">
        Arrivals
        </Typography>
        <StyledInfo title="Total Journeys" value={stationDetails.journeysFromStation} />
        <StyledInfo title="Distance (avg.)" value={formatDistance(stationDetails.averageDistance)} />
        <StyledInfo title="Duration (avg.)" value={formatDuration(stationDetails.averageDuration)} />
      </Paper>

    </div>
  );
};

// Defining prop types
StationDetailsView.propTypes = {
  stationDetails: PropTypes.shape({
    stationName: PropTypes.string.isRequired,
    stationAddress: PropTypes.string.isRequired, // ensure this matches the prop passed to the component
    journeysFromStation: PropTypes.number.isRequired,
    journeysToStation: PropTypes.number.isRequired,
    averageDistance: PropTypes.number.isRequired,
    averageDuration: PropTypes.number.isRequired
  }).isRequired,
};



export default StationDetailsView;
