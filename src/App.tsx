import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Transition } from 'react-transition-group';

import { Grid } from '@mui/material';

const StyledDrawer = styled(Drawer)`
  & .MuiDrawer-paperAnchorLeft {
    background-color: #ef9a9a;
    width: 170px;
    border-right: none;
    min-height: 100vh;
    align-items: flex-start;
    padding: 0 !important;
  }
`;

const StyledGrid = styled(Grid)`
  min-height: 100vh;
  padding: 0;
  margin: 0;
`;

const GridContainer = styled(Grid)`
  min-height: 100vh;
  padding: 0;
  margin: 0;
  align-content: space-between;
`;

const Content = styled(Grid)`
  min-height: 100vh;
  background: #ffe0b2;
  padding: 20px 10px 0 10px !important;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

const Aside = styled(Grid)`
  min-height: 100vh;
  background: #bbdefb;
  padding: 0 !important;
`;

const Header = styled(Grid)`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 10;
  padding: 0 !important;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f06292;
`;

const Footer = styled(Grid)`
  padding: 0 !important;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ce93d8;
`;

export default function ResponsiveDrawer() {
  const drawer = (
    <List>
      {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );

  const [animationStarted, setAnimationStarted] = useState<boolean | undefined>(false);

  useEffect(() => {
    setAnimationStarted(true);
  }, []);

  return (
    <StyledGrid container spacing={2} columns={16}>
      <Grid item sx={{ minWidth: 200, background: '#ef9a9a', padding: '0 !important' }} xs={3}>
        <StyledDrawer variant="permanent" anchor="left">
          {drawer}
        </StyledDrawer>
      </Grid>
      <Grid
        item
        sx={{ minHeight: '100%', padding: '0 0 0 170px !important', minWidth: '100%' }}
        xs={13}
      >
        <Box
          sx={{
            flexGrow: 1,
            width: '100%',
            minHeight: '100vh',
            background: 'red',
          }}
        >
          <GridContainer container spacing={2}>
            <Header item xs={12} md={12}>
              <div>HEADER</div>
            </Header>
            <Content item xs={9} md={9}>
              <Box
                sx={{
                  width: '100%',
                  maxWidth: 400,
                  height: 'auto',
                  maxHeight: 300,
                  backgroundColor: '#40c4ff',
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sed, necessitatibus
                consectetur quis delectus assumenda id distinctio non eveniet nulla, optio nihil
                vero expedita et obcaecati sequi totam eligendi commodi.
              </Box>

              <Box
                sx={{
                  width: '100%',
                  maxWidth: 400,
                  height: 'auto',
                  maxHeight: 300,
                  backgroundColor: '#40c4ff',
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sed, necessitatibus
                consectetur quis delectus assumenda id distinctio non eveniet nulla, optio nihil
                vero expedita et obcaecati sequi totam eligendi commodi.
                <div className="square__container">
                  <div className="running__square"></div>
                </div>
              </Box>
              <Box
                sx={{
                  width: '100%',
                  maxWidth: 400,
                  height: 'auto',
                  maxHeight: 300,
                  backgroundColor: '#40c4ff',
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sed, necessitatibus
                consectetur quis delectus assumenda id distinctio non eveniet nulla, optio nihil
                vero expedita et obcaecati sequi totam eligendi commodi.
                <div className="square__container-frame">
                  <Transition in={animationStarted} timeout={0}>
                    {(state) => <div className={`running__square-frame ${state}`} />}
                  </Transition>
                </div>
              </Box>
              <Box
                sx={{
                  width: '100%',
                  maxWidth: 400,
                  height: 'auto',
                  maxHeight: 300,
                  backgroundColor: '#40c4ff',
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sed, necessitatibus
                consectetur quis delectus assumenda id distinctio non eveniet nulla, optio nihil
                vero expedita et obcaecati sequi totam eligendi commodi.
                <div className="square__container-js">
                  <Transition in={animationStarted} timeout={0}>
                    {(state) => <div className={`running__square-js ${state}`} />}
                  </Transition>
                </div>
              </Box>
            </Content>
            <Aside item xs={3} md={3}>
              <div>ASIDE</div>
            </Aside>
            <Footer item xs={12} md={12}>
              <div>FOOTER</div>
            </Footer>
          </GridContainer>
        </Box>
      </Grid>
    </StyledGrid>
  );
}
