import Box from '@mui/material/Box';
import React from 'react';

export default React.memo(function MapView() {
  return (
    <Box borderRadius={2} overflow="hidden" width="100%" height="100%">
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        id="gmap_canvas"
        src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=1%20Sumach%20Street,%20M5A%204P6%20Toronto,%20Ontario%20+()&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
    </Box>
  );
});
