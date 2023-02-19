import { GridContainer, StyledGrid, GridItem, ContentBox } from './components/components.styled';
import { Box } from '@mui/material';
import NavBar from './components/NavBarHeader';
import FooterComponent from './components/FooterComponent';
import AsideComponent from './components/AsideComponent';
import MainComponent from './components/MainComponent';
export default function App() {
  const drawerWidth: number = 190;
  return (
    <Box sx={{ display: 'flex' }}>
      <NavBar drawerWidth={drawerWidth} />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 0, width: { md: `calc(100% - ${drawerWidth}px)` } }}
      >
        <StyledGrid container>
          <GridItem item>
            <ContentBox>
              <GridContainer container sx={{ width: '100%', flexGrow: 1 }}>
                <MainComponent />
                <AsideComponent />
                <FooterComponent />
              </GridContainer>
            </ContentBox>
          </GridItem>
        </StyledGrid>
      </Box>
    </Box>
  );
}
