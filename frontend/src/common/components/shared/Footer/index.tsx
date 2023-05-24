import Spacer from '@components/shared/Atoms/Spacer';
import Container from '@mui/material/Container';
import { SxProps, Theme } from '@mui/material/styles';
import { bleedingBackground } from '@styles/bleedingBackground';
import { colors } from '@styles/colors';
import FooterBottom from './FooterBottom';
import FooterMiddle from './FooterMiddle';

const Footer = () => {
  const style: SxProps<Theme> = {
    color: colors.dark,
    backgroundColor: bleedingBackground(colors.light),
    borderTop: `1px solid ${colors.lightGrey}`,
  };
  return (
    <>
      <Container sx={style}>
        <Spacer size={8} />
        <FooterMiddle />
        <Spacer size={8} divider />
        <FooterBottom />
      </Container>
    </>
  );
};

export default Footer;
