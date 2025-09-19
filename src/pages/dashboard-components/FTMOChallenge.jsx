import React from 'react';
import { Paper, Typography, Box, Button } from '@mui/material';
import './FTMOChallenge.scss';
import { Download, Info } from '@mui/icons-material';

function FTMOChallenge() {
  return (
    <>
     <div className='main-heading'>
        <h2>ARC Account</h2>
      </div>
    <Paper className="ftmo-challenge main-paper">
      <Box className="challenge-details">
        <Box className="detail-row">
          <Typography variant="body2" className="label">Status</Typography>
          <Typography variant="body2" className="value active">Active</Typography>
        </Box>
        <Box className="detail-row">
          <Typography variant="body2" className="label">Start</Typography>
          <Typography variant="body2" className="value">
            4 Jul 2025 <Info className="info-icon" />
          </Typography>
        </Box>
        <Box className="detail-row">
          <Typography variant="body2" className="label">End</Typography>
          <Typography variant="body2" className="value">Unlimited</Typography>
        </Box>
        <Box className="detail-row">
          <Typography variant="body2" className="label">Account Size</Typography>
          <Typography variant="body2" className="value">$50,000.00</Typography>
        </Box>
        <Box className="detail-row">
          <Typography variant="body2" className="label">Account Type</Typography>
          <Typography variant="body2" className="value">ARC Funding</Typography>
        </Box>
        <Box className="detail-row">
          <Typography variant="body2" className="label">Platform (cTrader)</Typography>
          <Button variant="text" size="small" className='value'>
            <Download /> Download
          </Button>
        </Box>
        <Box className="detail-row">
          <Typography variant="body2" className="label">Last updated</Typography>
          <Typography variant="body2" className="value">
            9 Jul 2025 04:50:50 <Info className="info-icon" />
          </Typography>
        </Box>
      </Box>
    </Paper>
    </>
  );
};

export default FTMOChallenge;