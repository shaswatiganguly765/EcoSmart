import React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>EcoSmart</Typography>
        <Button color="inherit" component={Link} to="/">Dashboard</Button>
        <Button color="inherit" component={Link} to="/scanner">AI Scanner</Button>
        <Button color="inherit" component={Link} to="/map">Bin Map</Button>
        <Button color="inherit" component={Link} to="/rewards">Rewards</Button>
        <Button color="inherit" component={Link} to="/carbon">Carbon Calc</Button>
        <Button color="inherit" component={Link} to="/profile">Profile</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;