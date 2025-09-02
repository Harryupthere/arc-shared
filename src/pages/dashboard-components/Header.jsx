import React from 'react';
import { Breadcrumbs, Typography, Box } from '@mui/material';

import './Header.scss';
import { ChevronRight, Home } from '@mui/icons-material';

function Header() {
  return (
    <Box className="header">
      <Breadcrumbs 
        separator={<ChevronRight fontSize="small" />} 
        aria-label="breadcrumb"
        className="breadcrumbs"
      >
        <Typography color="inherit" className="breadcrumb-item">
          <Home fontSize="small" /> Trader
        </Typography>
        <Typography color="inherit" className="breadcrumb-item">
          Accounts Overview
        </Typography>
        <Typography color="primary" className="breadcrumb-item">
          Account Metrix 7404591
        </Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default Header;