import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import { useTheme } from '@mui/material/styles';
import StationItem from './StationItem';

const StationGroup = ({ letter, stations }) => {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Typography
        variant="overline"
        display="block"
        sx={{
          paddingLeft: theme.custom.spacing.medium,
          paddingTop: theme.custom.spacing.small,
          color: theme.custom.colors.middleGreyInfoElement
        }}
      >
        {letter}
      </Typography>
      <List sx={{ padding: 0 }}>
        {stations.map(station => (
          <StationItem key={station.id} station={station} />
        ))}
      </List>
      <div style={{ height: theme.custom.spacing.medium }}></div>
    </React.Fragment>
  );
};

StationGroup.propTypes = {
  letter: PropTypes.string.isRequired,
  stations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      station_name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default StationGroup;
