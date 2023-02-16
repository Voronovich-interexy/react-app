import Grid from '@mui/material/Grid';
import styled from '@emotion/styled';
import Card from '@mui/material/Card';

export const GridContainer = styled(Grid)`
  width: 100% !important;
  @media screen and (max-width: 867.5px) {
    padding: 150px 0 0 0;
  }
  min-height: 100vh;
  padding: 80px 0 0 0;
  margin: 0;
  align-content: space-between;
`;

export const CustomCard = styled(Card)`
  & .MuiCardHeader-root {
    background: rgb(147, 247, 255);
    background: linear-gradient(
      188deg,
      rgba(147, 247, 255, 0.7372198879551821) 0%,
      rgba(255, 255, 255, 1) 80%
    );
  }
  & .MuiCardContent-root {
    background: rgb(255, 255, 255);
    background: linear-gradient(
      188deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(147, 247, 255, 0.7372198879551821) 60%
    );
  }

  & .MuiTypography-root.MuiCardHeader-title {
  }
`;

export const StyledGrid = styled(Grid)`
  min-height: 100vh;
  padding: 0;
  margin: 0;
`;

export const Content = styled(Grid)`
  min-height: 100vh;
  background: #ffe0b2;
  padding: 20px 10px !important;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Aside = styled(Grid)`
  //   min-height: 100vh;
  background: #bbdefb;
  padding: 0 !important;
`;

export const Footer = styled(Grid)`
  padding: 0 !important;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ce93d8;
`;
