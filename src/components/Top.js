import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import background from '../assets/landscape.png';

const CustomTypography = (props) => (
  <Typography
    component="span"
    sx={{
      fontFamily: "Monospace",
      lineHeight: 2,
      fontSize: 45,
      letterSpacing: 10,
      textTransform: "uppercase",
      display: "block",
      ml: props.ml || 0,
    }}
  >
    {props.children}
  </Typography>
);

export default function Top() {
  return (
    <Box width="100%" height="100vh" sx={{ position: 'relative', mb: 15, mt: 10 }}>
      <Box
        width="100%"
        height="100%"
        sx={{
          position: 'absolute',
          top: "-25vh",
          left: 0,
          zIndex: 3,
          background: `url(${background}) no-repeat center center`,
          backgroundSize: 'cover',
          opacity: 0.6,
        }}
      />
      <Box
        width="100%"
        height="100%"
        sx={{
          zIndex: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          paddingBottom: '30px',
        }}
      >
        <Box sx={{ m: 5, ml: 20 }}>
          <CustomTypography>Poczuj piękno</CustomTypography>
          <CustomTypography ml={10}>z naturą</CustomTypography>
        </Box>
      </Box>
    </Box>
  );
}
