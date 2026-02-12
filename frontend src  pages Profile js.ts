import React from 'react';
import { Container, Typography, Card, CardContent, TextField, Button } from '@mui/material';

function Profile() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4">User Profile</Typography>
      <Card><CardContent>
        <TextField label="Name" defaultValue="John Doe" />
        <TextField label="Email" defaultValue="john@example.com" />
        <Button variant="contained" sx={{ mt: 2 }}>Save</Button>
      </CardContent></Card>
    </Container>
  );
}

export default Profile;