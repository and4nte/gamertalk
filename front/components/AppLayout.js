import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import AppHeader from './AppHeader';
import AppNavBottom from './AppNavBottom';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;
const sizes = {
  mobile: '500px', // nav at bottom
  tablet: '1000px', // nav at left side
  desktop: '2560px',
};
export const devices = {
  mobile: `(min-width: ${sizes.mobile})`,
  tablet: `(min-width: ${sizes.tablet})`,
  desktop: `(min-width: ${sizes.desktop})`,
};

const Responsive = styled.div`
  margin: 0 auto;
  max-width: ${sizes.tablet};
  background-color: red;

  @media ${devices.mobile} {
    width: 100%;
    background-color: orange;
  }

  @media ${devices.tablet} {
    background-color: yellow;
  }

  @media ${devices.desktop} {
    background-color: green;
  }
`;

const AppLayout = ({ children }) => {
  return (
    <Responsive>
      <Layout>
        <AppHeader />
        {children}
        <AppNavBottom />
      </Layout>
    </Responsive>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
