import Image from 'next/image';
import Link from '@components/shared/Atoms/Link';
import Spacer from '@components/shared/Atoms/Spacer';
import Typography from '@mui/material/Typography';
import { colors } from '@styles/colors';
import Marquee from 'react-fast-marquee';
import { useAbout } from 'src/common/hooks/api/about';
import useLinksMap from 'src/common/hooks/useLinks';
import Box from '@mui/material/Box';
import Section from '@components/shared/Section';
import { useWindowSize } from 'usehooks-ts';

export default function AboutSection() {
  const { navigation } = useLinksMap();
  const about = useAbout();
  const { width } = useWindowSize();
  if (!about) return null;
  return (
    <>
      <Spacer size={6} />
      <Marquee
        gradient={false}
        speed={width * 0.05 || 20}
        style={{ overflowY: 'hidden' }}
      >
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

      <Section
        title={about.title}
        slogan={about.slogan}
        description={about.description}
      >
        <>
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
        </>
      </Section>
    </>
  );
}
