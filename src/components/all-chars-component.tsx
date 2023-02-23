import React from 'react';

// ================== Styled Components ==================
import { Content } from './components.styled';

// ================== React Components ==================
import MemoCardsAll from './memo-cards-all';

const AllCharsComponent: React.FC = () => {
  return (
    <Content sx={{ order: { xs: 2, md: 1 } }} item xs={12} md={9}>
      <MemoCardsAll />
    </Content>
  );
};

export default AllCharsComponent;
