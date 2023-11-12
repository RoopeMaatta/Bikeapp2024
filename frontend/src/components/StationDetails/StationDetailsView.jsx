import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import StyledInfo from './StyledInfo';
import { formatDistance, formatDuration } from '../utils/conversion';
import { useTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import SwipeRightAltOutlinedIcon from '@mui/icons-material/SwipeRightAltOutlined';
import SwipeLeftAltOutlinedIcon from '@mui/icons-material/SwipeLeftAltOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import SectionTitle from "./SectionTitle"
import Button from '@mui/material/Button'


// Component to display detailed information about a specific station including arrivals, departures, and average journey metrics.


const paperStyle = (theme) => ({
  borderRadius: theme.custom.borderRadius.medium,
  overflow: 'hidden',
  padding: theme.custom.spacing.medium
});

const StationDetailsView = ({ stationDetails }) => {
  const theme = useTheme();


  return (
    <div style={{ padding: theme.custom.spacing.medium }}>
      <Button
        component={RouterLink}
        to="/"
        variant="outlined"
        startIcon={<ArrowBackIosNewOutlinedIcon />}
        sx={{
          marginBottom: 3, // Adjust the value as needed
        }}
      >
      Back to Stations
      </Button>

      <Typography variant="h1" component="h1">
        {stationDetails.stationName}
      </Typography>
      <Typography variant="body1" component="p" gutterBottom color={theme.custom.colors.middleGreyInfoElement}>
        {stationDetails.stationAddress}
      </Typography>

      <div style={{ display: 'flex', flexDirection: 'column', gap: theme.custom.spacing.medium }}>
        <Paper elevation={0} sx={paperStyle(theme)}>
          <SectionTitle IconComponent={SwipeRightAltOutlinedIcon} title="Arrivals" />
          <StyledInfo title="Total Journeys" value={stationDetails.journeysToStation} />
        </Paper>

        <Paper elevation={0} sx={paperStyle(theme)}>
          <SectionTitle IconComponent={SwipeLeftAltOutlinedIcon} title="Departures" />
          <StyledInfo title="Total Journeys" value={stationDetails.journeysFromStation} />
          <div style={{ display: 'flex', flexDirection: 'row', gap: theme.custom.spacing.medium }}>
            <StyledInfo title="Distance (avg.)" value={formatDistance(stationDetails.averageDistance)} />
            <StyledInfo title="Duration (avg.)" value={formatDuration(stationDetails.averageDuration)} />
          </div>
        </Paper>
      </div>
    </div>
  );
};

// Defining prop types
StationDetailsView.propTypes = {
  stationDetails: PropTypes.shape({
    stationName: PropTypes.string.isRequired,
    stationAddress: PropTypes.string.isRequired,
    journeysFromStation: PropTypes.number.isRequired,
    journeysToStation: PropTypes.number.isRequired,
    averageDistance: PropTypes.number.isRequired,
    averageDuration: PropTypes.number.isRequired
  }).isRequired,
};



export default StationDetailsView;