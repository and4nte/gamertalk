import { useState } from 'react';
import PropTypes from 'prop-types';

import { Layout } from './styled/AppLayout.style';
import { AppMain } from './styled/AppMain.style';
import AppHeader from './AppHeader';
import AppNavBottom from './AppNavBottom';

const AppLayout = ({ children }) => {
  return (
    <Layout>
      <AppHeader />
      <AppMain>{children}</AppMain>
      <AppNavBottom />
    </Layout>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
