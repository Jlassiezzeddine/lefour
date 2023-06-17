import Button from '@components/shared/Atoms/Button';
import Link from '@components/shared/Atoms/Link';
import Spacer from '@components/shared/Atoms/Spacer';
import Section from '@components/shared/Section';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { boxShadow } from '@styles/boxShadow';
import { useRef } from 'react';
import useLinksMap from 'src/common/hooks/useLinks';
import clampText from 'src/common/utils/clampText';
import { colors } from '../../styles/colors';
import { bleedingBackground } from '@styles/bleedingBackground';

interface IProps {
  dark?: boolean
}
export default function ServicesSection({dark = false}: IProps) {
  const services = useLinksMap().navigation.find((el) => el.children)?.children;
  const boxRef = useRef<HTMLDivElement>(null);

  return (
    <Section>
      <Box sx={{  color: dark ? colors.light : colors.dark, ...bleedingBackground(dark ? colors.dark : colors.light) }}>
        <Spacer size={16} />
        <Box
              sx={{
                height: '2px',
                width: '64px',
                backgroundColor: colors.dark,
                marginBottom: 2,
              }}
            />
        <Box
          sx={{
            paddingBottom: 8,
          }}
        >
          <Typography textTransform="uppercase" fontSize={22} fontWeight={700}>
            Our Services
          </Typography>
          <Spacer size={1} />
          <Grid container spacing={2} alignItems="start">
            <Grid item color={colors.dark} xs={12} md={4}>
              <Typography
                maxWidth="15ch"
                textTransform="uppercase"
                fontSize={40}
                fontWeight={900}
                lineHeight={1.1}
                color={dark ? colors.light : colors.dark}
              >
                {`What Services We're Offering`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <Spacer size={0.5} />

              <Typography fontSize={18} fontWeight={500}>
                Our music studio offers a wide range of services including audio
                production, recording, mixing, mastering, video shooting, video
                editing, and event services such as live sound, lighting, and DJ
                services.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={2}
          sx={{
            width: '100%',
            aspectRatio: '5 / 2',
          }}
        >
          {services?.map((item) => (
            <Box
              ref={boxRef}
              key={item.slug}
              sx={{
                width: '100%',
                height: '100%',
                minHeight: '300px',
                borderRadius: 0.5,
                color: colors.light,
                boxShadow,
                transition: 'all .3s ease',
                overflow: 'hidden',
              }}
            >
              <Link
                path={item.path}
                label={'Services'}
                sx={{
                  height: '100%',
                  width: '100%',
                  position: 'relative',
                  color: colors.light,
                  '& button': {
                    '& svg': {
                      xs: {
                        marginLeft: 2,
                        maxWidth: 'fit-content',
                        opacity: 1,
                        transform: 'translateX(0)',
                      },
                    },
                  },
                  '& .heading': {
                    position: 'absolute',
                    bottom: 32,
                    left: 32,
                    textShadow: `2px 3px 3px ${colors.dark}80`,
                    transition: 'transform .3s ease-in-out ',
                    transform: {
                      xs: 'translateY(-130px)',
                      md: 'translateY(0)',
                    },
                  },
                  '& .content': {
                    padding: 4,
                    width: '100%',
                    translate: { xs: 0, md: '0 100%' },
                    transition: 'translate .3s ease-in-out ',
                    textShadow: `2px 3px 3px ${colors.dark}20`,
                  },
                  '& button svg': {
                    transitionDelay: '.1s',
                  },
                  '&:hover': {
                    '&::after': {
                      backgroundPosition: '50% 100%',
                      transform: 'scale(1.1)',
                    },
                    '&::before': { opacity: 1 },
                    '& .heading': {
                      transform: 'translateY(-130px)',
                    },
                    '& .content': {
                      translate: 0,
                    },
                    '& button': {
                      '& svg': {
                        marginLeft: 2,
                        maxWidth: 'fit-content',
                        opacity: 1,
                        transform: 'translateX(0)',
                      },
                    },
                  },

                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    opacity: { xs: 1, md: 0 },
                    height: '100%',
                    width: '100%',
                    background: `linear-gradient(
                    rgba(0, 0, 0, 0) 0%,
                    rgba(0, 0, 0, 0.5) 50%,
                    rgba(0, 0, 0, 1) 70%
                  )`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    transition: 'all .3s ease',
                    zIndex: -1,
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '100%',
                    width: '100%',
                    background: `url(${item.image?.url})`,
                    backgroundSize: 'cover',
                    backgroundPosition: '50% 50%',
                    backgroundRepeat: 'no-repeat',
                    transition: 'all .3s ease-in-out',
                    zIndex: -2,
                  },
                }}
              >
                <Stack
                  sx={{ height: '100%', width: '100%' }}
                  justifyContent="end"
                  alignItems="start"
                >
                  <Typography
                    className="heading"
                    component="h4"
                    fontSize={{ xs: 32}}
                    fontWeight={700}
                    lineHeight={1.2}
                  >
                    {item.label}
                  </Typography>

                  <Box className="content">
                    <Typography
                      component="p"
                      fontSize={16}
                      color={colors.light}
                      sx={{ ...clampText(2) }}
                    >
                      {item.description}
                    </Typography>
                    <Spacer size={4} />
                    <Button dark variant="tertiary" label="Learn More" />
                  </Box>
                </Stack>
              </Link>
            </Box>
          ))}
        </Stack>
        <Spacer size={16} />
      </Box>
    </Section>
  );
}
