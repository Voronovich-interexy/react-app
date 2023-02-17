import { useEffect, useState } from 'react';
import {
  GridContainer,
  StyledGrid,
  Content,
  Aside,
  Footer,
  GridItem,
  ContentBox,
} from './components/components.styled';
import { Box } from '@mui/material';
import { fetchFourChars } from './api/characters';
import { SingleChar, ArrayOfChars } from './types/types';
import NavBar from './components/NavBarHeader';
import SearchInput from './components/SearchInput';
import SingleCard from './components/SingleCard';
import ChartLine from './components/ChartLine';
import MemoCards from './components/MemoCards';
import BoxCssAnimation from './components/BoxCssAnimation';
import BoxReactAnimation from './components/BoxReactAnimation';
import AccordionComponent from './components/AccordionComponent';
export default function ResponsiveDrawer() {
  const drawerWidth: number = 190;
  const [animationStarted, setAnimationStarted] = useState<boolean>(false);
  const [singleChar, setSingleChar] = useState<SingleChar>();
  const [cards, setCards] = useState<ArrayOfChars[]>([]);

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
                <Content sx={{ order: { xs: 2, md: 1 } }} item xs={12} md={9}>
                  <SearchInput setSingleChar={setSingleChar} />
                  <SingleCard singleChar={singleChar} />
                  <ChartLine />
                  <MemoCards cards={cards} />
                  <BoxCssAnimation />
                  <BoxReactAnimation animationStarted={animationStarted} />
                </Content>
                <Aside sx={{ order: { xs: 1, md: 2 } }} item xs={12} md={3}>
                  <AccordionComponent />
                  <AccordionComponent />
                </Aside>
                <Footer sx={{ order: 3 }} item xs={12} md={12}>
                  <div>FOOTER</div>
                </Footer>
              </GridContainer>
            </ContentBox>
          </GridItem>
        </StyledGrid>
      </Box>
    </Box>
  );
}
