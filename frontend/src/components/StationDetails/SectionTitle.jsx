import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';


const SectionTitle = ({ IconComponent, title }) => {
  const theme = useTheme();

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      gap: theme.custom.spacing.mini,
      alignItems: 'center'
    }}>
      <IconComponent
        sx={{
          fontSize: "1.8rem",
          color: theme.custom.colors.middleGreyInfoElement,
          transform: "translateY(-3px)"
        }}
      />
      <Typography variant="body1" component="p" gutterBottom fontWeight="bold">
        {title}
      </Typography>
    </div>
  );
};

SectionTitle.propTypes = {
  IconComponent: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
};

export default SectionTitle;
