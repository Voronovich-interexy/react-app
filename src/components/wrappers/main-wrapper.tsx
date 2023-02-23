import React from 'react';

// ================== MUI ==================
import { Box } from '@mui/material';

// ================== Styled Components ==================
import {
  ContentBox,
  GridContainer,
  GridItem,
  StyledGrid,
} from '../components.styled';

// ================== Types ==================
import { ChildrenPropsMainComponent } from '../../types/types';

const MainWrapper: React.FC<ChildrenPropsMainComponent> = (props) => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 0,
        width: { md: `calc(100% - ${props.drawerWidth}px)` },
      }}
    >
      <StyledGrid container>
        <GridItem item>
          <ContentBox>
            <GridContainer container sx={{ width: '100%', flexGrow: 1 }}>
              {props.children}
            </GridContainer>
          </ContentBox>
        </GridItem>
      </StyledGrid>
    </Box>
  );
};

export default MainWrapper;
