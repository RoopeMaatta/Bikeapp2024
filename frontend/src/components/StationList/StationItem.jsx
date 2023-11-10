import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useTheme } from '@mui/material/styles';

const StationItem = ({ station }) => {
  const theme = useTheme();

  return (
    <ListItem
      disablePadding
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: `${theme.custom.spacing.small} ${theme.custom.spacing.medium}`,
        '&:hover': {
          backgroundColor: theme.custom.colors.lightGreyFocus,
          borderRadius: theme.custom.borderRadius.small,
        },
      }}
    >
      <Link to={`/stations/${station.id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
        <Typography variant="body1" component="p">
          {station.station_name}
        </Typography>
        <ListItemIcon sx={{ minWidth: 'auto' }}>
          <ArrowForwardIosIcon fontSize="inherit" sx={{ fontSize: theme.custom.iconSize.small, color: theme.custom.colors.middleGreyInfoElement }} />
        </ListItemIcon>
      </Link>
    </ListItem>
  );
};

StationItem.propTypes = {
  station: PropTypes.shape({
    id: PropTypes.number.isRequired,
    station_name: PropTypes.string.isRequired,
  }).isRequired,
};

export default StationItem;
