import PropTypes from 'prop-types';
import styled from 'styled-components';

import AppHeader from './AppHeader';
import AppBottomNav from './AppBottomNav';
import { devices } from './styled/common';

const AppLayout = ({ children }) => {
  return (
    <Layout>
      <AppHeader />
      <AppMain>{children}</AppMain>
      <AppBottomNav />
    </Layout>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0 auto;
  width: 100%;
  height: 100vh;

  background-color: gray;

  @media ${devices.mobile} {
    flex-direction: row;
    justify-content: center;
    max-width: 800px;
    background-color: orange;
  }

  @media ${devices.tablet} {
    max-width: 1200px;
    background-color: yellow;
  }
`;

const AppMain = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;
`;
