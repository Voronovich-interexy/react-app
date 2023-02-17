import { useEffect, useState } from 'react';
import { GridContainer, StyledGrid, GridItem, ContentBox } from './components/components.styled';
import { Box } from '@mui/material';
import { fetchFourChars } from './api/characters';
import { SingleChar, ArrayOfChars } from './types/types';
import NavBar from './components/NavBarHeader';
import FooterComponent from './components/FooterComponent';
import AsideComponent from './components/AsideComponent';
import MainComponent from './components/MainComponent';
export default function ResponsiveDrawer() {
  const drawerWidth: number = 190;
  const [animationStarted, setAnimationStarted] = useState<boolean>(false);
  const [singleChar, setSingleChar] = useState<SingleChar>();
  const [cards, setCards] = useState<ArrayOfChars[]>([]);
  const [clearCharField, setClearCharField] = useState<boolean>(true);

  useEffect(() => {
    setAnimationStarted(true);
    fetchFourChars([1, 2, 3, 4]).then((cards) => setCards(cards));
  }, []);

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
                <MainComponent
                  clearCharField={clearCharField}
                  setClearCharField={setClearCharField}
                  animationStarted={animationStarted}
                  setSingleChar={setSingleChar}
                  singleChar={singleChar}
                  cards={cards}
                />
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
