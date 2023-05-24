import Box from '@mui/material/Box';
import { colors } from '@styles/colors';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function PageTransition() {
  const router = useRouter();
  const [isRouteChanging, setIsRouteChanging] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const onPageLoad = () => {
      setIsLoading(false);
    };

    // Check if the page has already loaded
    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, []);
  useEffect(() => {
    router.events.on('routeChangeStart', () => setIsRouteChanging(true));
    router.events.on('routeChangeComplete', () => setIsRouteChanging(false));
  }, [router.events]);
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 10,
        opacity: isLoading || isRouteChanging ? 1 : 0,
        visibility: isLoading || isRouteChanging ? 'visible' : 'hidden',
        pointerEvents: isLoading || isRouteChanging ? 'all' : 'none',
        backgroundColor: colors.light,
        transition: 'all .3s cubic-bezier(.25,1,.75,1)',
      }}
    />
  );
}
