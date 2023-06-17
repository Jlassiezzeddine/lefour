import Image from 'next/image';
import Link from '@components/shared/Atoms/Link';
import Spacer from '@components/shared/Atoms/Spacer';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { bleedingBackground } from '@styles/bleedingBackground';
import { colors } from '@styles/colors';
import Marquee from 'react-fast-marquee';
import { useAbout } from 'src/common/hooks/api/about';
import useLinksMap from 'src/common/hooks/useLinks';
import Box from '@mui/material/Box';

export default function AboutSection() {
  const { navigation } = useLinksMap();
  const about = useAbout();

  if (!about) return null;
  return (
    <>
      <Spacer size={6} />
      <Marquee gradient={false} speed={60} style={{ overflowY: 'hidden' }}>
        {navigation
          .find((el) => el.children)
          ?.children?.map((item) =>
            item.children?.map((service) => (
              <Link key={service.slug} path={service.path} label={''}>
                <Typography
                  key={service.slug}
                  fontSize={56}
                  fontWeight={900}
                  lineHeight={1}
                  paddingX={4}
                  textTransform="uppercase"
                  sx={{
                    WebkitTextFillColor: 'transparent',
                    WebkitBackgroundClip: 'text',
                    WebkitTextStroke: `2px ${colors.dark}`,
                  }}
                >
                  {service.label}
                </Typography>
              </Link>
            ))
          )}
      </Marquee>
      <Spacer size={6} />
      <Container style={{ ...bleedingBackground(colors.light) }}>
        <Grid container color={colors.dark} spacing={{ xs: 6, md: 0 }}>
          <Grid item xs={12} md={10} order={{ xs: 2, md: 1 }}>
            <Stack
              sx={{
                padding: { xs: 0, md: '40px 0 40px 32px' },
                webkitBackdropFilter: 'blur(30px)',
                backdropFilter: 'blur(30px)',
                border: { xs: 'none', md: `1px solid ${colors.lightGrey}` },
                borderRight: 'none !important',
              }}
              alignItems="start"
              height="100%"
            >
              <Typography fontWeight={700}>{about.title}</Typography>
              <Spacer size={2} />
              <Typography>{about.description}</Typography>
              {/* <Spacer size={4} />
              <Button variant="tertiary" label={'Learn More'} href='/about' /> */}
            </Stack>
          </Grid>
          <Grid item xs={12} md={2}>
            <Stack
              alignItems={{ xs: 'start', md: 'end' }}
              sx={{
                webkitBackdropFilter: 'blur(30px)',
                backdropFilter: 'blur(30px)',
                padding: { xs: 0, md: '40px 32px 40px 0' },
                border: { xs: 'none', md: `1px solid ${colors.lightGrey}` },
                borderLeft: 'none !important',
                borderRight: 'none !important',
              }}
              width="100%"
              height="100%"
            >
              <Typography
                fontSize={40}
                fontWeight={900}
                textAlign="left"
                lineHeight={1}
                textTransform="uppercase"
                maxWidth="12ch"
              >
                {about.slogan}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
        {about.media && (
          <Box
            sx={{
              width: '100%',
              height: 'fit-content',
              minHeight: '420px',
              position: 'relative',
            }}
          >
            <Image
              src={about.media?.url}
              alt={about.media?.alt}
              quality={100}
              layout="fill"
              objectFit="cover"
              style={{ zIndex: -2 }}
            />
          </Box>
        )}
        <Spacer size={16} />
      </Container>
    </>
  );
}
