import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';

const CustomPopUPPaper = (props) => (
  <Paper
    {...props}
    elevation={0}
    style={{
      boxShadow: `
      0px 10px 20px rgba(0,0,0,0.1), /* Minor shadow */
      0px 50px 200px rgba(0,0,0,0.2) /* Major shadow */
      `,
      position: 'relative', // Needed for the gradient pseudo-element
    }}
  >
    {props.children}
    <div style={{ // White gradien to the bottom of pop-up list
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: '7%',
      backgroundImage: 'linear-gradient(to top, white, rgba(255,255,255,0))',
      pointerEvents: 'none',
    }}/>
  </Paper>
);

CustomPopUPPaper.propTypes = {
  children: PropTypes.node,
};

export default CustomPopUPPaper;
