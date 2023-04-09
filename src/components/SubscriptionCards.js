import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const plans = [
  {
    title: 'Plan Podstawowy',
    price: '99.99',
    features: ['Manicure', 'Pedicure', 'Henna brwi i rzęs'],
  },
  {
    title: 'Plan Standard',
    price: '149.99',
    features: ['Pakiet Podstawowy', 'Pełen pakiet masaży', 'Depilacja laserowa', 'Drenaż limfatyczny'],
  },
  {
    title: 'Plan Diament',
    price: '229.99',
    features: ['Pakiet Standard', 'Mezoterapia', 'Mikrodermabrazja', 'Endermologia', 'Zniżka na zabiegi medycyny estetycznej 25%'],
  },
];

function SubscriptionCards() {
  return (
    <Grid container spacing={4}>
      {plans.map((plan, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                {plan.title}
              </Typography>
              <Typography variant="h6">
                {plan.price} zł / miesiąc
              </Typography>
              <ul>
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <Typography>{feature}</Typography>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardActions>
              <Button size="small" variant="contained" color="primary">
                Subskrybuj
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default SubscriptionCards;
