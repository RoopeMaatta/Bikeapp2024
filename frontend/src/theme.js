import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: '"Figree", sans-serif', // Assuming Figree is the font-family
    h1: {
      fontSize: '35px',
      lineHeight: 1.34, // equivalent to -1.3% tracking
      letterSpacing: '-0.013em', // converted from -1.3%
      fontWeight: 600, // semibold is often represented as 600
    },
    h2: {
      fontSize: '28px',
      lineHeight: 1.36, // equivalent to -0.4% tracking
      letterSpacing: '-0.004em', // converted from -0.4%
      fontWeight: 600,
    },
    h3: {
      fontSize: '23px',
      lineHeight: 1.39, // equivalent to -0.8% tracking
      letterSpacing: '-0.008em', // converted from -0.8%
      fontWeight: 600,
    },
    body1: {
      fontSize: '17px',
      lineHeight: 1.65, // equivalent to 0% tracking for body
      fontWeight: 'normal', // often represented as 400
    },
    body2: {
      fontSize: '17px',
      lineHeight: 1.65,
      fontWeight: 600, // when you want semibold for body text
    },
    subtitle1: {
      fontSize: '15px',
      lineHeight: 1.6,
      fontWeight: 'normal',
    },
    subtitle2: {
      fontSize: '15px',
      lineHeight: 1.6,
      fontWeight: 600,
    },
    overline: {
      fontSize: '12px',
      lineHeight: 1.33,
      letterSpacing: '0.02em', // converted from 2%
      fontWeight: 600,
    },
  },
});

export default theme;
