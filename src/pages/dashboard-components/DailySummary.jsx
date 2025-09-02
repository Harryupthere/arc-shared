import React from 'react';
import { Paper, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';


import './DailySummary.scss';
import { BarChart, Info } from '@mui/icons-material';

const dailyData = [
  {
    date: '9 Jul',
    trades: 10,
    lots: 40.00,
    result: '-$1,640.20',
    negative: true
  },
  {
    date: '8 Jul',
    trades: 16,
    lots: 44.80,
    result: '$2,727.92',
    negative: false
  },
  {
    date: '7 Jul',
    trades: 2,
    lots: 6.00,
    result: '-$1,141.88',
    negative: true
  },
  {
    date: '4 Jul',
    trades: 6,
    lots: 12.33,
    result: '-$2,010.49',
    negative: true
  }
];

function DailySummary() {
  return (
    <Paper className="daily-summary main-paper">
      <Box className="header">
        <div variant="h6" className="title">
         <div className=' main-heading'><h2>Daily Summary </h2></div> 
          <Info className="info-icon" /> <BarChart className="chart-icon" />
        </div>
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Trades</TableCell>
              <TableCell>Lots</TableCell>
              <TableCell>Result</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dailyData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Typography variant="body2" className="date">
                    {row.date}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">
                    {row.trades}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">
                    {row.lots}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2" className={row.negative ? 'negative' : 'positive'}>
                    {row.result}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default DailySummary;