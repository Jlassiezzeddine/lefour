import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { SxProps, Theme } from '@mui/material/styles';
import { colors } from '@styles/colors';
import Spacer from '../Atoms/Spacer';

interface IProps {
  children: JSX.Element;
  title?: string;
}
export default function Section({ title, children }: IProps) {
  const titleWrapper: SxProps<Theme> = {
    overflow: 'hidden',
    position: 'relative',
  };
  return (
    <Container>
      {title && (
        <Box sx={titleWrapper}>
          <Typography
            component="h2"
            fontSize={{ xs: 32, md: 40 }}
            fontWeight={900}
            lineHeight={1}
            align="left"
            color={colors.dark}
            textTransform="uppercase"
            sx={
              {
                // '&::before, &::after': {
                //   content: `"${title} - ${title} - ${title} -"`,
                //   marginX: 2,
                // },
                // WebkitTextFillColor: 'transparent',
                // WebkitBackgroundClip: 'text',
                // WebkitTextStroke: `2px ${colors.dark}`,
              }
            }
          >
            {title}
          </Typography>

          <Spacer size={6} />
        </Box>
      )}
      {children}
    </Container>
  );
}
