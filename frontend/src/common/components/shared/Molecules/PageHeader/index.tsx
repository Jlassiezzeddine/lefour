import Spacer from '@components/shared/Atoms/Spacer';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { colors } from '@styles/colors';
import { useRouter } from 'next/router';
import BreadCrumb from '../Breadcrumb';
interface IProps {
  title: string;
  subtitle?: string;
}
export default function PageHeader({ title, subtitle }: IProps) {
  const router = useRouter();
  if (router.asPath === '/') return null;
  return (
    <Container>
      <Box
        sx={{
          paddingY: 4,
          borderBottom: `1px solid ${colors.lightGrey}`,
        }}
      >
        <Typography
          fontSize={32}
          fontWeight={900}
          lineHeight={1}
          textAlign={{ xs: 'left', md: 'center' }}
        >
          {title}
        </Typography>
        <Spacer size={2} />
        {subtitle && (
          <Typography
            fontSize={16}
            fontWeight={400}
            lineHeight={1}
            textAlign={{ xs: 'left', md: 'center' }}
            color={colors.dark}
          >
            {subtitle}
          </Typography>
        )}
      </Box>
      <BreadCrumb />
    </Container>
  );
}
