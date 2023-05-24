import Spacer from '@components/shared/Atoms/Spacer';
import SocialMedia from '@components/shared/SocialMedia';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { colors } from '@styles/colors';
import { getSocialMedia } from 'src/common/queries/Globals';
const FooterBottom = () => {
  const socialMediaList = getSocialMedia();
  return (
    <>
      <Grid
        container
        spacing={1}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={12} md="auto">
          <Typography
            fontSize={14}
            fontWeight={500}
          >{`© ${new Date().getFullYear()} Le Four Studio. All rights reserved.`}</Typography>
        </Grid>
        <Grid item xs={0} md="auto"></Grid>
        <Grid item xs={12} md="auto">
          <Stack direction="row" alignItems="center" spacing={2}>
            {socialMediaList.map(
              ({ name, link }) =>
                link && (
                  <SocialMedia
                    key={name}
                    type={name}
                    path={link}
                    color={colors.dark}
                  />
                )
            )}
          </Stack>
        </Grid>
      </Grid>
      <Spacer size={4} />
    </>
  );
};

export default FooterBottom;
