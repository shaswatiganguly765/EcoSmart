import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { Line } from 'react-chartjs-2';

function CarbonCalc() {
  const [waste, setWaste] = useState(0);
  const [carbon, setCarbon] = useState(0);

  const calculate = () => setCarbon(waste * 0.5); // Mock calc

  const chartData = { labels: ['Week 1', 'Week 2'], datasets: [{ label: 'Carbon Saved', data: [10, carbon] }] };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4">Carbon Footprint Calculator</Typography>
      <TextField label="Waste Generated (kg)" value={waste} onChange={e => setWaste(e.target.value)} />
      <Button onClick={calculate}>Calculate</Button>
      <Typography>Carbon Saved: {carbon} kg</Typography>
      <Box sx={{ height: 300 }}><Line data={chartData} /></Box>
    </Container>
  );
}

export default CarbonCalc;