import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const StationList = ({ stations }) => {
  return (
    <div>
      <h1>Stations</h1>
      <ul>
        {stations.map((station) => (
          <li key={station.id}>
            <Link to={`/stations/${station.id}`}>{station.station_name}</Link>
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
      station_name: PropTypes.string.isRequired
    })
  ).isRequired
};

export default StationList;
