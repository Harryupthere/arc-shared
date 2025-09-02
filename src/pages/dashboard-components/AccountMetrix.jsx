import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import {
  BarChart,
  ContactSupport,
  Edit,
  Close,
  Share,
  Refresh,
  Key
} from '@mui/icons-material';

import './AccountMetrix.scss';
import { GraphUp } from '../../icons/icon';

function AccountMetrix() {
  return (
    <Paper className="account-metrix">
      <Box className="header-section main-paper">
        <Typography variant="h6" className="title">
          <GraphUp className="title-icon" />
          Account Metrix
        </Typography>
      </Box>
        <Box className="button-group">
          <Button variant="outlined" size="medium" startIcon={<Key />}>
            Credentials
          </Button>
          <Button variant="outlined" size="medium" startIcon={<ContactSupport />}>
            Contact us
          </Button>
          <Button variant="outlined" size="medium" startIcon={<Refresh />}>
            Refresh
          </Button>
          <Button variant="outlined" size="medium" startIcon={<Share />}>
            Share
          </Button>
          <Button variant="outlined" size="medium" startIcon={<BarChart />}>
            Old Metrix
          </Button>
        <Button variant="outlined" size="small" startIcon={<Edit />}>
          Modify Account
        </Button>
        </Box>
    </Paper>
  );
};

export default AccountMetrix;