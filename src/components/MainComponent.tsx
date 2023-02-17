import React from 'react';
import { MainComponentProps } from '../types/types';
import BoxCssAnimation from './BoxCssAnimation';
import BoxReactAnimation from './BoxReactAnimation';
import ChartLine from './ChartLine';
import { Content } from './components.styled';
import MemoCards from './MemoCards';
import SearchInput from './SearchInput';
import SingleCard from './SingleCard';

const MainComponent: React.FC<MainComponentProps> = ({
  setSingleChar,
  singleChar,
  cards,
  animationStarted,
  clearCharField,
  setClearCharField,
}) => {
  return (
    <Content sx={{ order: { xs: 2, md: 1 } }} item xs={12} md={9}>
      <SearchInput setClearCharField={setClearCharField} setSingleChar={setSingleChar} />
      <SingleCard
        singleChar={singleChar}
        clearCharField={clearCharField}
        setClearCharField={setClearCharField}
        setSingleChar={setSingleChar}
      />
      <ChartLine />
      <MemoCards cards={cards} />
      <BoxCssAnimation />
      <BoxReactAnimation animationStarted={animationStarted} />
    </Content>
  );
};

export default MainComponent;
