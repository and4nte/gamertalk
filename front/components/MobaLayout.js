import PropTypes from 'prop-types';

const MobaLayout = ({ children }) => {
  return (
    <div>
      <div>Mobile Layout Here</div>
      {children}
    </div>
  );
};

MobaLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MobaLayout;
