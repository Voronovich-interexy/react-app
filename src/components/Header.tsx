import { Button, Menu } from '@mui/material';
import MenuItem from '@mui/material/MenuItem/MenuItem';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import { red } from '@mui/material/colors';
import styled from '@emotion/styled';

const Header = () => {
  function handleClick(event: React.MouseEvent<HTMLElement>) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget as HTMLButtonElement);
    }
  }
  function handleClose() {
    setAnchorEl(null);
  }

  const actions = [
    { icon: <FileCopyIcon />, name: 'Copy' },
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' },
  ];

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  return (
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
  );
};

export default Header;
