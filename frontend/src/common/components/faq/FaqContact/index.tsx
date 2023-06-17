import Link from '@components/shared/Atoms/Link';
import Spacer from '@components/shared/Atoms/Spacer';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { SxProps, Theme } from '@mui/material/styles';
import { boxShadow } from '@styles/boxShadow';
import { colors } from '@styles/colors';
import { useContact } from 'src/common/hooks/api/contact';

export default function FaqContact() {
  const { phone, email } = useContact();
  const contactStyle: SxProps<Theme> = {
    border: `1px solid transparent`,
    borderRadius: 2,
    padding: 4,
    transition: 'all .3s ease',
    '&:hover': {
      border: `1px solid ${colors.lightGrey}`,
      boxShadow: boxShadow,
    },
  };
  return (
    <Stack alignItems="center">
      <Typography fontSize={32} fontWeight={900} lineHeight={1} align="center">
        You still have a question?
      </Typography>
      <Spacer size={2} />
      <Typography
        fontSize={16}
        fontWeight={500}
        align="center"
        maxWidth={'640px'}
      >
        If you cannot find answer to your question in our FAQ, you can always
        contact us. We will answer to you shortly!
      </Typography>
      <Spacer size={6} />
      {email && phone && (
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Link path={`tel:${phone}`} label={phone} sx={contactStyle}>
              <Stack alignItems="center">
                <PhoneInTalkIcon fontSize="large" />
                <Spacer size={2} />
                <Typography fontSize={18} fontWeight={600}>
                  {phone}
                </Typography>
                <Spacer size={1} />
                <Typography
                  fontSize={16}
                  fontWeight={500}
                  align="center"
                  maxWidth={'640px'}
                  color={colors.grey}
                >
                  We are always happy to help.
                </Typography>
              </Stack>
            </Link>
          </Grid>
          <Grid item xs={12} md={6}>
            <Link path={`mailto:${email}`} label={email} sx={contactStyle}>
              <Stack alignItems="center">
                <MailOutlineIcon fontSize="large" />
                <Spacer size={2} />
                <Typography fontSize={18} fontWeight={600}>
                  {email}
                </Typography>
                <Spacer size={1} />
                <Typography
                  fontSize={16}
                  fontWeight={500}
                  align="center"
                  maxWidth={'640px'}
                  color={colors.grey}
                >
                  The best way to get answer faster;
                </Typography>
              </Stack>
            </Link>
          </Grid>
        </Grid>
      )}
    </Stack>
  );
}
