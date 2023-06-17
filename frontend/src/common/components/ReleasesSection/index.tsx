import Spacer from '@components/shared/Atoms/Spacer';
import Section from '@components/shared/Section';
import Box from '@mui/material/Box';
import { colors } from '../../styles/colors';
import { bleedingBackground } from '@styles/bleedingBackground';
import { useRelease } from 'src/common/hooks/api/release';
import ReleaseCard from '@components/shared/Molecules/ReleaseCard';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { IRelease } from 'src/common/types/Release';

interface IProps {
  dark?: boolean;
  limit?: number;
}
export default function ReleasesSection({ limit, dark = false }: IProps) {
  const releases = useRelease();
  const renderReleases = (items: IRelease[], limit?: number) => {
    if (!limit)
      return items.map((release) => (
        <Grid item key={release.slug} xs={12} md={6} lg={4}>
          <ReleaseCard release={release}></ReleaseCard>
        </Grid>
      ));
    return items.slice(0, limit).map((release) => (
      <Grid item key={release.slug} xs={12} md={6} lg={4}>
        <ReleaseCard release={release}></ReleaseCard>
      </Grid>
    ));
  };
  if (releases.length === 0) return null;
  return (
    <>
      <Section>
        <>
          <Box
            sx={{
              paddingBottom: 8,
            }}
          >
            <Box
              sx={{
                height: '2px',
                width: '64px',
                backgroundColor: colors.dark,
                marginBottom: 2,
              }}
            />
            <Typography
              textTransform="uppercase"
              fontSize={22}
              fontWeight={700}
            >
              Newest Additions
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
                  {`Explore our Releases`}
                </Typography>
              </Grid>
              <Grid item xs={12} md={8}>
                <Spacer size={0.5} />

                <Typography fontSize={18} fontWeight={500}>
                  Stay in tune with our ever-growing and constantly expanding
                  collection of new releases that are carefully curated to
                  captivate and mesmerize all your senses, igniting a profound
                  and enchanting experience that will transport you to new
                  realms of delight and awe.
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Box
            sx={{
              color: dark ? colors.light : colors.dark,
              ...bleedingBackground(dark ? colors.dark : colors.light),
            }}
          >
            <Spacer size={8} />
            <Grid container spacing={4}>
              {renderReleases(releases, limit)}
            </Grid>
            <Spacer size={8} />
          </Box>
        </>
      </Section>
      <Spacer size={8} />
    </>
  );
}
