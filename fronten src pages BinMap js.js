import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Container, Typography, Button } from '@mui/material';
import axios from 'axios';

function BinMap() {
  const [bins, setBins] = useState([]);
  const [satellite, setSatellite] = useState(false);

  useEffect(() => {
    axios.get('/api/bins').then(res => setBins(res.data));
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4">Smart Bin Map</Typography>
      <Button onClick={() => setSatellite(!satellite)}>Toggle Satellite</Button>
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '400px' }}>
        <TileLayer url={satellite ? 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}' : 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'} />
        {bins.map(bin => (
          <Marker key={bin._id} position={[bin.location.lat, bin.location.lng]}>
            <Popup>Status: {bin.status}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </Container>
  );
}

export default BinMap;