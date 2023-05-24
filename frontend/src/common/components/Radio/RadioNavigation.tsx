import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { SxProps, Theme } from '@mui/material/styles';
import { colors } from '@styles/colors';
import { useRouter } from 'next/router';

export default function RadioNavigation() {
  const router = useRouter();
  const style: SxProps<Theme> = {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    left: 0,
    width: '100%',
    height: '64px',
    paddingX: 4,
    backgroundColor: 'rgba(0,0,0,0.75)',
  };
  return (
    <Box sx={style}>
      <Stack
        direction="row"
        sx={{
          height: '100%',
          width: '100%',
        }}
      >
        <IconButton
          sx={{ color: colors.light, width: 'fit-content' }}
          onClick={() => router.back()}
        >
          <ArrowBackIcon fontSize="small" />
        </IconButton>
      </Stack>
    </Box>
  );
}
