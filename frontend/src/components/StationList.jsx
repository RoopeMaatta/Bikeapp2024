import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const StationList = ({ stations }) => {
  return (
    <div style={{ padding: '16px' }}>
      <Typography variant="h1" component="h1" gutterBottom>
        Stations
      </Typography>
      <Paper elevation={1} sx={{ borderRadius: '8px', padding: '16px' }}>
        <List>
          {stations.map((station) => (
            <ListItem key={station.id} disablePadding>
              <Link to={`/stations/${station.id}`} style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
                <Typography variant="body1" component="p">
                  {station.station_name}
                </Typography>
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
