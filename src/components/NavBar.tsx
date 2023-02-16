import React, { useState } from 'react';
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
  Button,
  Menu,
  MenuItem,
} from '@mui/material';

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
const NavBar = ({ drawerWidth }: any) => {
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  function handleClick(
    event: React.MouseEvent<HTMLElement> | React.MouseEvent<HTMLHeadingElement>,
  ) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget as any);
    }
  }
  function handleClose() {
    setAnchorEl(null);
  }

  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <>
      {' '}
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
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <div className="header_content">
            <h1>HEADER</h1>
            <div className="dropdowns">
              {['q', 'w', 'e'].map((e) => (
                <Button
                  key={e}
                  aria-owns={anchorEl ? 'simple-menu' : undefined}
                  aria-haspopup="true"
                  onClick={handleClick}
                  onMouseOver={handleClick}
                  sx={{ color: 'white' }}
                >
                  Open Menu
                </Button>
              ))}

              <Menu
                sx={{ padding: '0 !important', margin: '0 !important' }}
                id="q"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                MenuListProps={{ onMouseLeave: handleClose }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </div>
          </div>
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
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default NavBar;
