import PropTypes from 'prop-types';
import '../public/fonts/fonts.css';
import styled from 'styled-components';

import wrapper from '../store/configureStore';

const Header = styled.header`
  margin: auto;
  text-align: center;
  background-color: aqua;
`;

const CommonApp = ({ Component }) => {
  return (
    <>
      <Header>_app 공통</Header>

      <Component />
    </>
  );
};

CommonApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(CommonApp);
