import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { colors } from '@styles/colors';
import { useRouter } from 'next/router';

interface IProps {
  dark?: boolean;
}
export const BackButton = ({ dark = false }: IProps) => {
  const router = useRouter();
  return (
    <IconButton
      onClick={() => router.back()}
      sx={{
        height: 'fit-content',
        color: dark ? colors.light : colors.dark,
        borderRadius: 8,
        display: { xs: 'block', sm: 'none', md: 'none' },
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        sx={{ cursor: 'pointer' }}
        spacing={1}
      >
        <ChevronLeftIcon />
      </Stack>
    </IconButton>
  );
};
