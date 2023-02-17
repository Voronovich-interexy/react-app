import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import Box from '@mui/material/Box/Box';

const labels = ['January', 'February', 'March', 'April', 'May', 'June'];
Chart.register(...registerables);
const data = {
  labels: labels,
  datasets: [
    {
      label: 'Stuff',
      backgroundColor: '#01579b',
      borderColor: '#424242',
      data: [0, 10, 5, 2, 20, 30, 45],
    },
    {
      label: 'Other stuff',
      backgroundColor: '#e8eaf6',
      borderColor: '#26a69a',
      data: [3, 6, 2, 9, 24, 19, 14],
    },
  ],
};
const ChartLine = () => {
  return (
    <Box
      sx={{
        width: '95%',
        height: 'auto',
        backgroundColor: '#e3f2fd',
      }}
    >
      <div>
        <Line data={data} />
      </div>
    </Box>
  );
};

export default ChartLine;
