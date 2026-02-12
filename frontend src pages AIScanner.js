import React, { useState } from 'react';
import { Container, Button, Typography, Card, CardContent } from '@mui/material';

function AIScanner() {
  const [result, setResult] = useState('');

  const handleScan = () => {
    // Mock AI classification
    setResult('Plastic Bottle - Recycle in blue bin. +10 EcoPoints!');
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4">AI Waste Scanner</Typography>
      <Button variant="contained" onClick={handleScan}>Start Camera</Button>
      {result && <Card sx={{ mt: 2 }}><CardContent><Typography>{result}</Typography></CardContent></Card>}
    </Container>
  );
}

export default AIScanner;