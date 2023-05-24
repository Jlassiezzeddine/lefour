import Box from '@mui/material/Box';
import { SxProps, Theme } from '@mui/material/styles';
import { colors } from '@styles/colors';

interface IProps {
  size: number;
  vertical?: boolean;
  divider?: boolean;
}
const Spacer = ({ size, vertical = false, divider = false }: IProps) => {
  const spacerStyles: SxProps<Theme> = vertical
    ? { paddingX: size / 2, height: '100%' }
    : { paddingY: size / 2 };
  const dividerStyles: SxProps<Theme> = {
    backgroundColor: colors.lightGrey,
    height: vertical ? '100%' : '1px',
    width: vertical ? '1px' : '100%',
  };
  return <Box sx={spacerStyles}>{divider && <Box sx={dividerStyles} />}</Box>;
};

export default Spacer;
