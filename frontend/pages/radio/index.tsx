import Player from '@components/Radio/Player';
import RadioBackground from '@components/Radio/RadioBackground';
import RadioNavigation from '@components/Radio/RadioNavigation';
import PageTransition from '@components/shared/PageTransition';
import SeoHeader from '@components/shared/SeoHeader';
import Box from '@mui/material/Box';
import { SxProps, Theme } from '@mui/material/styles';
import type { NextPage } from 'next';

const Radio: NextPage = () => {
  const radioWrapperStyle: SxProps<Theme> = {
    height: '100vh',
    width: '100vw',
    backgroundColor: 'red',
    position: 'relative',
  };
  return (
    <>
      <SeoHeader />
      <PageTransition />
      <Box sx={radioWrapperStyle}>
        <RadioNavigation />
        <RadioBackground />
        <Player />
      </Box>
    </>
  );
};

export default Radio;
