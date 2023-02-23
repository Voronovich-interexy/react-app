import React from 'react';

import NavBarHeader from '../components/navbar-header';
import FooterComponent from '../components/footer-component';
import AsideComponent from '../components/aside-component';
import AllCharsComponent from '../components/all-chars-component';
import MainWrapper from '../components/wrappers/main-wrapper';

const AllCharsPage: React.FC = () => {
  const drawerWidth: number = 190;

  return (
    <>
      <NavBarHeader drawerWidth={drawerWidth} />
      <MainWrapper drawerWidth={drawerWidth}>
        <AllCharsComponent />
        <AsideComponent />
        <FooterComponent />
      </MainWrapper>
    </>
  );
};

export default AllCharsPage;
