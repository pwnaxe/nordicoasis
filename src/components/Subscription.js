import React from 'react';
import Container from '@mui/material/Container';
import SubscriptionCards from './SubscriptionCards';
import Box from '@mui/material/Box';
import '../App.css';

function Subscription() {
  return (
    <Box
      position="relative"
    >
      <div className="app-background">

        <Container maxWidth="md" sx={{ mt: 4, marginBottom: 15 }}>
          <h1>Innowacyjna metoda subskybcji usług kosmetycznych</h1>
          <SubscriptionCards />
        </Container>
      </div>
    </Box>
  );
}

export default Subscription;