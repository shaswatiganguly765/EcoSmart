import React, { useState } from 'react';
import { Container, Typography, Card, CardContent, Button } from '@mui/material';

function Rewards() {
  const [points, setPoints] = useState(150);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4">Rewards & EcoPoints</Typography>
      <Card><CardContent><Typography>EcoPoints: {points}</Typography></CardContent></Card>
      <Button variant="contained" sx={{ mt: 2 }}>Redeem Reward</Button>
    </Container>
  );
}

export default Rewards;