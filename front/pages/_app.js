import PropTypes from 'prop-types';
import '../public/fonts/fonts.css';
import styled, { createGlobalStyle } from 'styled-components';

import wrapper from '../store/configureStore';

const Header = styled.header`
  margin: auto;
  text-align: center;
  background-color: aqua;
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overscroll-behavior-y: none;
    font-family: 'DungGeunMo' !important;
  }
`;

const CommonApp = ({ Component }) => {
  return (
    <>
      <GlobalStyle />
      <Header>_app 공통</Header>

      <Component />
    </>
  );
};

CommonApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(CommonApp);
