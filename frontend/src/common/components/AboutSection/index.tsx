import Button from '@components/shared/Atoms/Button';
import Spacer from '@components/shared/Atoms/Spacer';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { colors } from '@styles/colors';
import Marquee from 'react-fast-marquee';
import useLinksMap from 'src/common/hooks/useLinks';

export default function AboutSection() {
  const { navigation } = useLinksMap();
  return (
    <>
      <Container>
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
              <Typography fontWeight={700}>
                Welcome to Le Four Studio, here passion and expertise come
                together to create unforgettable audio experiences.
              </Typography>
              <Spacer size={2} />
              <Typography>
                Our devoted music lovers dedicated their hearts and souls to
                each project, they attempted to create a high-quality recording
                that was specific to your music. With a strong motivation and
                dedication, we endeavor to maintain pace with industry trends
                and produce exceptional results. At Le Four Studio, we are more
                than just a recording studio - we are a community of musicians
                who enjoy music. Contact us today to learn more about how we can
                assist you in bringing music to life.
              </Typography>
              <Spacer size={4} />
              <Button variant="tertiary" label={'Learn More'} />
            </Stack>
          </Grid>
          <Grid item xs={12} md={2}>
            <Stack
              alignItems={{ xs: 'start', md: 'end' }}
              sx={{
                webkitBackdropFilter: 'blur(30px)',
                backdropFilter: 'blur(30px)',
                borderRadius: '8px 0 0 8px',
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
                We love what we do
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Spacer size={16} />
      <Marquee gradient={false} speed={120} style={{ overflowY: 'hidden' }}>
        {navigation
          .find((el) => el.children)
          ?.children?.map((item) =>
            item.children?.map((service) => (
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
            ))
          )}
      </Marquee>
    </>
  );
}
