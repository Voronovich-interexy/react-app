import React from 'react';
import AccordionComponent from './AccordionComponent';
import { Aside } from './components.styled';

const AsideComponent = () => {
  return (
    <Aside sx={{ order: { xs: 1, md: 2 } }} item xs={12} md={3}>
      <AccordionComponent />
      <AccordionComponent />
    </Aside>
  );
};

export default AsideComponent;
