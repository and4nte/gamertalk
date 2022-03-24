import PropTypes from 'prop-types';
import '../public/fonts/fonts.css';

const CommonApp = ({ Component }) => {
  return (
    <>
      <div>공통App</div>
      <Component />
    </>
  );
};

CommonApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default CommonApp;
