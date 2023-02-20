import React from 'react';
import { useAppSelector } from '../store/hooks/reduxTypescriptHooks';
import BoxCssAnimation from './BoxCssAnimation';
import BoxReactAnimation from './BoxReactAnimation';
import ChartLine from './ChartLine';
import { Content } from './components.styled';
import FormComponent from './Form/FormComponent';
import FormData from './FormData';
import MemoCards from './MemoCards';
import SearchInput from './SearchInput';
import SingleCard from './SingleCard';

const MainComponent = () => {
  const formData = useAppSelector((state) => state.formDataReducer);
  return (
    <Content sx={{ order: { xs: 2, md: 1 } }} item xs={12} md={9}>
      <FormComponent />
      {formData.dataFromForm.login && formData.dataFromForm.password && <FormData />}
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
