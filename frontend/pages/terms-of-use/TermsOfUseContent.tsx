import Spacer from '@components/shared/Atoms/Spacer';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { colors } from '@styles/colors';
import { getTermsOfUse } from 'src/common/queries/TermsOfUse';

export default function TermsOfUseContent() {
  const termsOfUse = getTermsOfUse();
  return (
    <Stack spacing={4}>
      <Typography
        fontSize={16}
        fontWeight={400}
        lineHeight={1.2}
        color={colors.dark}
      >
        Welcome to the Terms of Use page for Le Four Studio. These terms and
        conditions outline the rules and regulations for the use of our website,
        services, and facilities. By accessing our website or using our
        services, you agree to comply with and be bound by these terms and
        conditions. If you do not agree with any of these terms, please do not
        access our website or use our services.
      </Typography>
      {termsOfUse.map((item, index) => (
        <Stack key={item.slug} id={item.slug}>
          <Typography fontSize={18} fontWeight={700} lineHeight={1}>
            {index + 1}
            {'. '}
            {item.title}
          </Typography>
          <Spacer size={2} />
          <Typography
            fontSize={16}
            fontWeight={400}
            lineHeight={1.2}
            color={colors.dark}
          >
            {item.content}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
}
