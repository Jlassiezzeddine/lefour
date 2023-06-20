import Section from '@components/shared/Section';
import Box from '@mui/material/Box';
import { colors } from '../../styles/colors';
import { bleedingBackground } from '@styles/bleedingBackground';
import { useRelease } from 'src/common/hooks/api/release';
import ReleaseCard from '@components/shared/Molecules/ReleaseCard';
import Grid from '@mui/material/Grid';
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
      <Section
        title="EXPLORE OUR RELEASES"
        slogan="NEWEST ADDITIONS"
        description="Stay in tune with our ever-growing and constantly expanding collection of new releases that are carefully curated to captivate and mesmerize all your senses, igniting a profound and enchanting experience that will transport you to new realms of delight and awe."
      >
        <>
          <Box
            sx={{
              color: dark ? colors.light : colors.dark,
              ...bleedingBackground(dark ? colors.dark : colors.light),
            }}
          >
            <Grid container spacing={4}>
              {renderReleases(releases, limit)}
            </Grid>
          </Box>
        </>
      </Section>
    </>
  );
}
