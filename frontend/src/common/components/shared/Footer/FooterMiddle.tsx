import Link from '@components/shared/Atoms/Link';
import { Logo } from '@components/shared/Navigation/Logo';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/system/Stack';

import Spacer from '@components/shared/Atoms/Spacer';
import Box from '@mui/material/Box';
import { colors } from '@styles/colors';
import useLinksMap from 'src/common/hooks/useLinks';
import { useContact } from 'src/common/hooks/api/contact';

const FooterMiddle = () => {
  const navigationLinks = useLinksMap();
  const { address, email, googleMapsLocation, phone } = useContact();
  return (
    <Box>
      <Spacer size={4} />
      <Grid
        container
        justifyContent="space-between"
        spacing={{ xs: 5, sm: 5, md: 4 }}
      >
        <Grid item xs={12} md="auto">
          <Logo color={colors.dark} />
          <Spacer size={2} />
          <Typography fontSize={14} fontWeight={500} maxWidth="35ch">
            Our studio is a hub for creative collaboration, with a network of
            artists coming to us to enhance their sound and reach the next level
            in their careers.
          </Typography>
          <Spacer size={4} />
        </Grid>
        <Grid item xs={12} md="auto">
          <Typography fontSize={16} fontWeight={700}>
            Site map
          </Typography>
          <Spacer size={2} />
          <Stack alignItems="right" spacing={1}>
            {navigationLinks.navigation.map(({ path, label }) => (
              <Link
                key={path}
                fontSize={14}
                fontWeight={500}
                path={path}
                label={label}
              />
            ))}
          </Stack>
        </Grid>
        <Grid item xs={12} md="auto">
          <Typography fontSize={16} fontWeight={700}>
            Useful links
          </Typography>
          <Spacer size={2} />
          <Stack alignItems="right" spacing={1}>
            {navigationLinks.footer.map(({ path, label }) => (
              <Link
                key={path.replace('/', '')}
                fontSize={14}
                fontWeight={500}
                path={path}
                label={label}
              />
            ))}
          </Stack>
        </Grid>
        <Grid item xs={12} md="auto">
          <Typography fontSize={16} fontWeight={700}>
            Contact Details
          </Typography>
          <Spacer size={2} />
          <Stack alignItems="right" spacing={1}>
            {googleMapsLocation && address && <Link
              fontSize={14}
              fontWeight={500}
              path={googleMapsLocation}
              label={address}
              external
            />}
            {phone && <Link
              fontSize={14}
              fontWeight={500}
              path={`tel:${phone}`}
              label={phone}
            />}
            {email && <Link
              fontSize={14}
              fontWeight={500}
              path={`mailto:${email}`}
              label={email}
            />}
          </Stack>
          <Spacer size={2} />
        </Grid>
      </Grid>
      <Spacer size={4} />
    </Box>
  );
};

export default FooterMiddle;
