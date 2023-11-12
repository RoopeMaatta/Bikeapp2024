import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import StyledInfo from './StyledInfo';
import { formatDistance, formatDuration } from '../utils/conversion';
import { useTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import SwipeRightAltOutlinedIcon from '@mui/icons-material/SwipeRightAltOutlined';
import SwipeLeftAltOutlinedIcon from '@mui/icons-material/SwipeLeftAltOutlined';

const StationDetailsView = ({ stationDetails }) => {
  const theme = useTheme();

  return (
    <div style={{ padding: theme.custom.spacing.medium }}>
      <Typography variant="h1" component="h1">
        {stationDetails.stationName}
      </Typography>
      <Typography variant="body1" component="p" gutterBottom color={theme.custom.colors.middleGreyInfoElement}>
        {stationDetails.stationAddress}
      </Typography>

      <div style={{ display: 'flex', flexDirection: 'column', gap: theme.custom.spacing.medium }}>
        <Paper elevation={0} sx={{
          borderRadius: theme.custom.borderRadius.medium,
          overflow: 'hidden',
          padding: theme.custom.spacing.medium
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            gap: theme.custom.spacing.mini,
            alignItems: 'center'  // Align items vertically
          }}>
            <SwipeRightAltOutlinedIcon
              sx={{
                fontSize: "1.8rem",
                color: theme.custom.colors.middleGreyInfoElement,
                transform: "translateY(-3px)"
              }}
            />

            <Typography variant="body1" component="p" gutterBottom fontWeight="bold">
            Arrivals
            </Typography>
          </div>


          <StyledInfo title="Total Journeys" value={stationDetails.journeysToStation} />
        </Paper>

        <Paper elevation={0} sx={{
          borderRadius: theme.custom.borderRadius.medium,
          overflow: 'hidden',
          padding: theme.custom.spacing.medium
        }}>

          <div style={{
            display: 'flex',
            flexDirection: 'row',
            gap: theme.custom.spacing.mini,
            alignItems: 'center'  // Align items vertically
          }}>
            <SwipeLeftAltOutlinedIcon
              sx={{
                fontSize: "1.8rem",
                color: theme.custom.colors.middleGreyInfoElement,
                transform: "translateY(-3px)"
              }}
            />

            <Typography variant="body1" component="p" gutterBottom fontWeight="bold">
            Departures
            </Typography>
          </div>

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
    stationAddress: PropTypes.string.isRequired, // ensure this matches the prop passed to the component
    journeysFromStation: PropTypes.number.isRequired,
    journeysToStation: PropTypes.number.isRequired,
    averageDistance: PropTypes.number.isRequired,
    averageDuration: PropTypes.number.isRequired
  }).isRequired,
};



export default StationDetailsView;
