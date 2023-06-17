import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { SxProps, Theme } from '@mui/material/styles';
import Container from '@mui/system/Container';
import { bleedingBackground } from '@styles/bleedingBackground';
import { colors } from '@styles/colors';
import { NextRouter, useRouter } from 'next/router';
import { useMemo } from 'react';
import Button from '../Atoms/Button';

interface ICallToActionVariant {
  display: boolean;
  title: string;
  text?: string;
  buttons: {
    primary: {
      label: string;
      path: string;
    };
    secondary?: {
      label: string;
      path: string;
    };
  };
}

const VARIANTS: { [key: string]: ICallToActionVariant } = {
  getQuote: {
    display: true,
    title: 'Ready to start a project?',
    text: 'Unleash your musical potential and bring your sound to life at our state-of-the-art music studio.',
    buttons: {
      primary: {
        label: 'Get a Quote',
        path: '/contact?view=quote&step=1',
      },
    },
  },
  getInTouch: {
    display: true,
    title:
      'Join the ranks of successful artists who have recorded at Le Four studio',
    text: 'Get in touch today to schedule your session.',
    buttons: {
      primary: {
        label: "Let's collaborate",
        path: '/contact?view=quote&step=1',
      },
    },
  },
  pricing: {
    display: true,
    title: 'Want to know more about our pricing?',
    text: 'View our options and find the best fit for you.',
    buttons: {
      primary: {
        label: 'Pricing',
        path: '/pricing',
      },
    },
  },
  combined: {
    display: true,
    title: 'Get in touch today.',
    text: 'Transform your music with the help of the talented team at Le Four studio',
    buttons: {
      primary: {
        label: "Let's collaborate",
        path: '/contact?view=quote&step=1',
      },
      // secondary: {
      //   label: "Pricing",
      //   path: "/pricing",
      // },
    },
  },
  none: {
    display: false,
    title: 'Oops !',
    text: 'Something went wrong',
    buttons: {
      primary: {
        label: 'Home',
        path: '/',
      },
      // secondary: {
      //   label: "Pricing",
      //   path: "/pricing",
      // },
    },
  },
};

const CallToAction = () => {
  const router = useRouter();
  const style: SxProps<Theme> = {
    backgroundColor: bleedingBackground(colors.dark),
    color: colors.light,
    paddingY: 24,
  };

  const getVariant = (router: NextRouter) => {
    //TODO Transform this logic to mapping
    switch (true) {
      case router.asPath === '/':
        return 'getInTouch';
      // case router.asPath === '/contact':
      //   return 'pricing';
      case router.asPath.startsWith('/services') ||
        router.asPath.startsWith('/releases'):
        return 'getInTouch';
      case router.asPath === '/faq':
        return 'getQuote';
      default:
        return 'none';
    }
  };
  const { display, text, buttons } = useMemo(
    () => VARIANTS[getVariant(router)],
    [router]
  );
  return (
    <>
      {display && (
        <Container>
          <Stack
            alignItems={{ xs: 'start', md: 'center' }}
            sx={style}
            direction={{ xs: 'column', md: 'row' }}
            justifyContent="space-between"
            spacing={4}
          >
            <Stack>
              {/* <Typography
                fontSize={32}
                fontWeight={900}
                lineHeight={1}
                align="left"
              >
                {title}
              </Typography>
              <Spacer size={2} /> */}
              <Typography
                fontSize={32}
                fontWeight={900}
                lineHeight={1}
                align="left"
                textTransform="uppercase"
              >
                {text}
              </Typography>
            </Stack>
            <Stack
              direction={{ xs: 'column', sm: 'column', md: 'row' }}
              spacing={2}
            >
              {buttons.secondary && (
                <Button
                  variant="secondary"
                  label={buttons.secondary.label}
                  onClick={() =>
                    buttons.secondary && router.push(buttons.secondary.path)
                  }
                />
              )}
              <Button
                dark
                variant="secondary"
                label={buttons.primary.label}
                onClick={() => router.push(buttons.primary.path)}
              />
            </Stack>
          </Stack>
        </Container>
      )}
    </>
  );
};

export default CallToAction;
