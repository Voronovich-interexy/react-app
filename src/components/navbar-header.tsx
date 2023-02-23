import React from 'react';

// ================== MUI ==================
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Toolbar,
  List,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  ListItem,
  AppBar,
  IconButton,
  Drawer,
  Box,
} from '@mui/material';

// ================== React Components ==================
import Header from './header';

// ================== Types ==================
import { INavBarProps } from '../types/types';

// ================== Redux actions ==================
import { toggleMobileOpen } from '../redux/booleans/booleans.actions';

// ================== Redux selectors ==================
import { useBooleansSelector } from '../redux/booleans/booleans.selectors';

// ================== Redux dispatch ==================
import { useAppDispatch } from '../redux/hooks/redux-typescript-hooks';

const drawer = (
  <List>
    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
      <ListItem key={text} disablePadding>
        <ListItemButton>
          <ListItemIcon>
            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      </ListItem>
    ))}
  </List>
);

const NavBarHeader: React.FC<INavBarProps> = ({
  drawerWidth,
}: INavBarProps) => {
  const { mobileOpen } = useBooleansSelector();
  const dispatch = useAppDispatch();

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          padding: '0 !important',
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={() => dispatch(toggleMobileOpen())}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Header />
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={() => dispatch(toggleMobileOpen())}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default NavBarHeader;
