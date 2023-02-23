import React from 'react';

import NavBar from '../components/navbar-header';
import FooterComponent from '../components/footer-component';
import AsideComponent from '../components/aside-component';
import MainComponent from '../components/main-component';

import MainWrapper from '../components/wrappers/main-wrapper';
const HomePage: React.FC = () => {
  const drawerWidth: number = 190;

  return (
    <>
      <NavBar drawerWidth={drawerWidth} />
      <MainWrapper drawerWidth={drawerWidth}>
        <MainComponent />
        <AsideComponent />
        <FooterComponent />
      </MainWrapper>
    </>
  );
};

export default HomePage;
