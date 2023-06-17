import Spacer from '@components/shared/Atoms/Spacer';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { colors } from '@styles/colors';
import { usePrivacyPolicies } from 'src/common/hooks/api/privacyPolicy';

export default function PrivacyContent() {
  const privacyPolicies = usePrivacyPolicies();
  return (
    <Stack spacing={4}>
      {privacyPolicies?.map((item, index) => (
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
