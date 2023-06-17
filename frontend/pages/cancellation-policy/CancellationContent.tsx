import Spacer from '@components/shared/Atoms/Spacer';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { colors } from '@styles/colors';
import { useCancellationPolicies } from 'src/common/hooks/api/cancellationPolicy';

export default function CancellationContent() {
  const cancellationPolicies = useCancellationPolicies();
  return (
    <Stack spacing={4}>
      {cancellationPolicies?.map((item, index) => (
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
