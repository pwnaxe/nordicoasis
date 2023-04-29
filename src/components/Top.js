import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Top() {
  const videomain = '/assets/videomain.mp4';

  const handleVideoLoad = () => {
    console.log('Wideo załadowane');
  };

  return (
    <Box width="100%" height="100%" sx={{ display: 'flex' }}>
      <Box sx={{ textAlign: 'left', m: 5, ml: 10, mt: 10, flexGrow: 1 }}>
        <Typography
          component="span"
          sx={{
            fontFamily: 'Monospace',
            lineHeight: 2,
            fontSize: 45,
            letterSpacing: 10,
            textTransform: 'uppercase',
            display: 'block',
          }}
        >
          Poczuj
        </Typography>
        <Typography
          component="span"
          sx={{
            fontFamily: 'Monospace',
            lineHeight: 2,
            fontSize: 45,
            letterSpacing: 10,
            textTransform: 'uppercase',
            display: 'block',
          }}
        >
          piękno
        </Typography>
        <Typography
          component="span"
          sx={{
            fontFamily: 'Monospace',
            lineHeight: 2,
            fontSize: 45,
            letterSpacing: 10,
            textTransform: 'uppercase',
            display: 'block',
            ml: 10,
          }}
        >
          z
        </Typography>
        <Typography
          component="span"
          sx={{
            fontFamily: 'Monospace',
            lineHeight: 2,
            fontSize: 45,
            letterSpacing: 10,
            textTransform: 'uppercase',
            display: 'block',
          }}
        >
          naturą
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1, position: 'relative', overflow: 'hidden' }}>
        <video
          src={videomain}
          autoPlay
          loop
          muted
          playsInline
          onLoadedMetadata={handleVideoLoad}
          style={{
            position: 'absolute',
            width: '100%',
            left: '50%',
            top: '50%',
            height: '100%',
            objectFit: 'cover',
            transform: 'translate(-50%, -50%)',
            zIndex: '-1',
          }}
        ></video>
      </Box>
    </Box>
  );
}
