import { styled } from '@mui/system';
import PropTypes from 'prop-types'; // Import PropTypes

const InfoContainer = styled('div')(({ theme }) => ({
  marginBottom: theme.custom.spacing.small,
}));

const InfoTitle = styled('h3')(({ theme }) => ({
  ...theme.typography.overline, // Using overline styles from the theme
  marginBottom: theme.custom.spacing.small,
  color: theme.custom.colors.middleGreyInfoElement,
}));

const InfoValue = styled('div')(({ theme }) => ({
  ...theme.typography.h3 // Using h3 styles from the theme
}));

const StyledInfo = ({ title, value }) => {
  return (
    <InfoContainer>
      <InfoTitle>{title}</InfoTitle>
      <InfoValue>{value}</InfoValue>
    </InfoContainer>
  );
};

// Defining prop types
StyledInfo.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element]).isRequired,
};

export default StyledInfo;
