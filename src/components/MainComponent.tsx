import React from 'react';
import BoxCssAnimation from './BoxCssAnimation';
import BoxReactAnimation from './BoxReactAnimation';
import ChartLine from './ChartLine';
import { Content } from './components.styled';
import MemoCards from './MemoCards';
import SearchInput from './SearchInput';
import SingleCard from './SingleCard';

const MainComponent = () => {
  return (
    <Content sx={{ order: { xs: 2, md: 1 } }} item xs={12} md={9}>
      <SearchInput />
      <SingleCard />
      <ChartLine />
      <MemoCards />
      <BoxCssAnimation />
      <BoxReactAnimation />
    </Content>
  );
};

export default MainComponent;
