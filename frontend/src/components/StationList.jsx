import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const StationList = ({ stations }) => {
  return (
    <div style={{ padding: '16px' }}>
      <Typography variant="h1" component="h1" gutterBottom>
        Stations
      </Typography>
      <Paper elevation={1} sx={{ borderRadius: '8px', overflow: 'hidden' }}>
        <List sx={{ padding: 0 }}>
          {stations.map((station) => (
            <ListItem
              key={station.id}
              disablePadding
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '8px 16px',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.04)',
                  borderRadius: '10px',
                },
              }}
            >
              <Link to={`/stations/${station.id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
                <Typography variant="body1" component="p">
                  {station.station_name}
                </Typography>
                <ListItemIcon sx={{ minWidth: 'auto' }}>
                  <ArrowForwardIosIcon fontSize="inherit" sx={{ fontSize: '0.8rem', color: 'rgba(0, 0, 0, 0.4)' }} />
                </ListItemIcon>
              </Link>
            </ListItem>
          ))}
        </List>
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
