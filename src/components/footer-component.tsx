import React from 'react';

// ================== Styled Components ==================
import { Footer } from './components.styled';

const FooterComponent: React.FC = () => {
  return (
    <Footer sx={{ order: 3 }} item xs={12} md={12}>
      <div>FOOTER</div>
    </Footer>
  );
};

export default FooterComponent;
