import CellTowerIcon from '@mui/icons-material/CellTower';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { colors } from '@styles/colors';
import { useRouter } from 'next/router';

interface IProps {
  href?: string;
  dark?: boolean;
}
const RadioButton = ({ href = '/radio', dark = false }: IProps) => {
  const router = useRouter();
  const handleClick = () => router.push(href);
  return (
    <IconButton
      size="medium"
      sx={{
        color: dark ? colors.light : colors.dark,
        borderRadius: 8,
        '&:hover': { opacity: 0.7 },
      }}
      onClick={handleClick}
      disableRipple
    >
      <Stack
        direction="row"
        alignItems="center"
        sx={{ cursor: 'pointer' }}
        spacing={1}
      >
        <CellTowerIcon />
        <Typography
          fontSize={14}
          display={{ xs: 'none', md: 'block' }}
          fontWeight={500}
        >
          Live
        </Typography>
      </Stack>
    </IconButton>
  );
};

export default RadioButton;
