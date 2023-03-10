import React from 'react';
import AccordionComponent from './accordion-component';
import { Aside } from './components.styled';
import testGif from '../assets/rain-3582_256.gif';

const AsideComponent: React.FC = () => {
  return (
    <Aside sx={{ order: { xs: 1, md: 2 } }} item xs={12} md={3}>
      <AccordionComponent />
      <AccordionComponent />
      <div>
        <img src={testGif} alt="gif" />
      </div>
    </Aside>
  );
};

export default AsideComponent;
