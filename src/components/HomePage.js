import React from 'react';
import Container from '@mui/material/Container';
import SubscriptionCards from './SubscriptionCards';
import ResponsiveAppBar from './ResponsiveAppBar'

function HomePage() {
  return (
    <>
      <ResponsiveAppBar />
      <div className="app-background">
      </div>
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <h1>Innowacyjna metoda subskybcji usług kosmetycznych</h1>
        <SubscriptionCards />
      </Container>
    </>
  );
}

export default HomePage;