import React from 'react';

// ================== Styled Components ==================
import { Content } from './components.styled';

// ================== React Components ==================
import BoxCssAnimation from './box-css-animation';
import BoxReactAnimation from './box-react-animation';
import ChartLine from './chart-line';
import FormComponent from './Form/form-component';
import FormData from './form-data';
import MemoCards from './memo-cards';
import SearchInput from './search-input';
import SingleCard from './single-card';

// ================== Redux dispatch ==================
import { useAppSelector } from '../redux/hooks/redux-typescript-hooks';

const MainComponent: React.FC = () => {
  const formData = useAppSelector((state) => state.formDataReducer);
  return (
    <Content sx={{ order: { xs: 2, md: 1 } }} item xs={12} md={9}>
      <FormComponent />
      {formData.dataFromForm.login && formData.dataFromForm.password && (
        <FormData />
      )}
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
