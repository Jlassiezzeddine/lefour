import Button from '@components/shared/Atoms/Button';
import CallMadeIcon from '@mui/icons-material/CallMade';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { SxProps, Theme, keyframes } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import useMousePosition from 'src/common/hooks/useMousePosition';
import { colors } from '../../styles/colors';
import Link from '../shared/Atoms/Link';
import Spacer from '../shared/Atoms/Spacer';
import { useHero } from 'src/common/hooks/api/hero';
import { IHeroItem } from 'src/common/types/Hero';
import { useWindowSize } from 'usehooks-ts';
import theme from '@styles/theme';
import Video from '@components/shared/Molecules/Video';

const Hero = () => {
  const heroList = useHero();
  const [slide, setSlide] = useState<number>(0);
  const [x, y] = useMousePosition();
  const { width } = useWindowSize();
  const zoomOut = keyframes({
    from: { transform: 'scale(1.2)' },
    to: { transform: 'scale(1)' },
  });

  const heroStyle: SxProps<Theme> = {
    height: `fit-content`,

    color: colors.light,
    background: `linear-gradient(
      rgba(0, 0, 0, 0.25),
      rgba(0, 0, 0, 0.25)
      ),url(data:image/png;base64,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)`,
  };
  const renderBackground = (hero: IHeroItem) => {
    const { background, backgroundMobile } = hero;
    if (background.type === 'image') {
      return (
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            transitionProperty:
              'opacity, backgroundPositionX, backgroundPositionY ',
            transitionDuration: '2s',
            transitionTimingFunction: 'cubic-bezier(.25,1,.75,1)',
            animation: `${zoomOut} 9s backwards ease-out`,
            background: `url(${background.url})`,
            backgroundPositionX: { md: `${x * -1 * 0.05}px` },
            backgroundPositionY: { md: `${y * -1 * 0.05}px` },
            backgroundSize: { md: '105% 105%' },
            backgroundRepeat: 'no-repeat',
          }}
        />
      );
    } else {
      return (
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
          }}
        >
          <Video
            url={
              width < theme.breakpoints.values.sm && backgroundMobile.url
                ? backgroundMobile.url
                : background.url
            }
          />
        </Box>
      );
    }
  };
  useEffect(() => {
    if (heroList && heroList.length > 1) {
      const interval = setInterval(() => {
        setSlide((prev) => (prev + 1) % heroList.length);
      }, 8000);

      return () => clearInterval(interval);
    }
  }, [heroList]);
  if (!heroList)
    return (
      <Box
        sx={{
          minHeight: { xs: '100vh', md: '85vh' },
          backgroundColor: colors.light,
        }}
      />
    );
  return (
    <Box position="relative" overflow="hidden" sx={heroStyle}>
      {heroList && heroList[slide] && renderBackground(heroList[slide])}
      <Container sx={{ height: '100%' }}>
        <Stack
          justifyContent="flex-end"
          sx={{ minHeight: { xs: '100vh', md: '85vh' } }}
        >
          <Stack
            spacing={2}
            justifyContent={{ xs: 'space-between', md: 'end' }}
            alignItems={{ xs: 'start', md: 'end' }}
            py={8}
            height="100%"
          >
            <Link path={'/contact?view=map'} label={'location'}>
              <Stack
                direction="row"
                justifyContent="end"
                alignItems="center"
                color={colors.light}
                sx={{
                  '& > svg': {
                    opacity: 0,
                    marginLeft: -2,
                    transition: 'all .3s ease',
                  },
                  '&:hover > svg': {
                    opacity: 1,
                    marginLeft: 2,
                  },
                }}
              >
                <Stack
                  direction={{ xs: 'column', md: 'row' }}
                  alignItems={{ xs: 'start', md: 'center' }}
                  spacing={1}
                >
                  <PlaceOutlinedIcon />
                  <Typography
                    fontSize={{ xs: 20, md: 24 }}
                    sx={{ textShadow: `1px 1px 4px ${colors.dark}` }}
                    fontWeight={600}
                  >
                    Downtown Toronto, Canada.
                  </Typography>
                </Stack>
                <CallMadeIcon sx={{ display: { xs: 'none', md: 'block' } }} />
              </Stack>
            </Link>
            <Typography
              fontSize={{ xs: 40, md: 72 }}
              fontWeight={900}
              textAlign={{ xs: 'left', md: 'right' }}
              lineHeight={1}
              maxWidth="15ch"
              sx={{ textShadow: `2px 3px 3px ${colors.dark}20` }}
            >
              {heroList[slide].title}
            </Typography>
            <Typography
              fontSize={20}
              fontWeight={500}
              textAlign={{ xs: 'left', md: 'right' }}
              sx={{
                maxWidth: '60ch',
                textShadow: `2px 3px 3px ${colors.dark}20`,
              }}
            >
              {heroList[slide].description}
            </Typography>
            <Spacer size={1} />
            <Stack
              width={{ xs: '100%', md: 'auto' }}
              direction={{ xs: 'column', md: 'row' }}
              spacing={2}
            >
              {heroList[slide].cta.map((el, index) => (
                <Button
                  key={el.id}
                  dark
                  variant={
                    heroList[slide].cta.length - 1 == index
                      ? 'primary'
                      : 'secondary'
                  }
                  fullWidth={false}
                  label={el.label}
                  href={el.url}
                />
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
