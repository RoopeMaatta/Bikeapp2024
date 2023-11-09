import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';

const StationList = ({ stations }) => {
  return (
    <div>
      <Typography variant="h1" component="h1" gutterBottom>
        Stations
      </Typography>
      <ul>
        {stations.map((station) => (
          <li key={station.id}>
            <Link to={`/stations/${station.id}`}>
              <Typography variant="body1" component="p">
                {station.station_name}
              </Typography>
            </Link>
          </li>
        ))}
      </ul>
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
