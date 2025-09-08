import React from 'react';
import { Paper, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';

import './Objectives.scss';
import { useNavigate } from 'react-router-dom';
import { Cancel, CheckCircle, Info } from '@mui/icons-material';

const objectivesData = [
  {
    objective: 'Minimum 4 Trading Days',
    result: '4',
    summary: 'Passed',
    status: 'passed'
  },
  {
    objective: 'Max Daily Loss -$2,500',
    result: '-$2,010.49 (-4.02%)',
    summary: 'Passing',
    status: 'passing'
  },
  {
    objective: 'Max Loss -$5,000',
    result: '-$4,320.71 (-8.64%)',
    summary: 'Passing',
    status: 'passing'
  },
  {
    objective: 'Profit Target $5,000',
    result: '-$2,064.65 (-4.12%)',
    summary: 'Not passing',
    status: 'not-passing'
  }
];

function Objectives() {
  const navigate = useNavigate()
  return (
    <div className="objectives ">
        <div className="main-heading">
          <h2>Objectives</h2>
        </div>
      <Paper className='object-card main-paper'>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Trading Objectives</TableCell>
                <TableCell>Results</TableCell>
                <TableCell>Summary</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {objectivesData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell className="objective-cell">
                    <Typography variant="body2" className="objective-text">
                      {row.objective}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" className="result-text">
                      {row.result}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Box className="summary-cell">
                      {row.status === 'passed' && <CheckCircle className="icon passed" />}
                      {row.status === 'passing' && <CheckCircle className="icon passing" />}
                      {row.status === 'not-passing' && <Cancel className="icon not-passing" />}
                      <Typography variant="body2" className={`summary-text ${row.status}`}>
                        {row.summary}
                      </Typography>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <Box className="button-group dark-card">
        <div className='button-box' >
          <h4>Today's permitted loss <Info fontSize='small'/></h4>
          $500.00
        </div>
        <div className='button-box' >
          <h4>Max permitted loss <Info fontSize='small'/></h4>
          $2,309.03
        </div>
        <div className='button-box'  >
          <h4>Today's profit<Info fontSize='small'/></h4>
         $0.00
        </div>
      
      </Box>
    </div>
  );
};

export default Objectives;