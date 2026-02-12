import React, { useEffect, useState } from 'react';
import { Container, Grid, Card, CardContent, Typography, Box } from '@mui/material';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

function Dashboard() {
  const [stats, setStats] = useState({ recycled: 0, carbon: 0, alerts: [] });

  useEffect(() => {
    axios.get('/api/dashboard').then(res => setStats(res.data)); // Mock API
  }, []);

  const chartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [{ label: 'Carbon Saved (kg)', data: [10, 15, 12, 18, 20], borderColor: '#4CAF50' }],
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Welcome, Citizen!</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card><CardContent><Typography>Recycled Items: {stats.recycled}</Typography></CardContent></Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card><CardContent><Typography>Carbon Saved: {stats.carbon} kg</Typography></CardContent></Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card><CardContent><Typography>Alerts: {stats.alerts.length}</Typography></CardContent></Card>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ height: 300 }}><Line data={chartData} /></Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;