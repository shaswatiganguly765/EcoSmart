import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import AIScanner from './pages/AIScanner';
import BinMap from './pages/BinMap';
import Rewards from './pages/Rewards';
import CarbonCalc from './pages/CarbonCalc';
import Profile from './pages/Profile';

const theme = createTheme({
  palette: {
    primary: { main: '#4CAF50' }, // Eco-green
    secondary: { main: '#81C784' },
  },
  typography: { fontFamily: 'Roboto, sans-serif' },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/scanner" element={<AIScanner />} />
          <Route path="/map" element={<BinMap />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/carbon" element={<CarbonCalc />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;