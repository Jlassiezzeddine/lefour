import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { colors } from '@styles/colors';
import { MouseEventHandler } from 'react';

interface IProps {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  active: boolean;
  dark?: boolean;
}
export const BurgerButton = ({ onClick, active, dark = false }: IProps) => {
  return (
    <IconButton
      onClick={onClick}
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
        {active ? <CloseIcon /> : <MenuIcon />}
      </Stack>
    </IconButton>
  );
};
