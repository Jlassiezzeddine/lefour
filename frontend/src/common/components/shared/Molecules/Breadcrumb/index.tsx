import Link from '@components/shared/Atoms/Link';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { capitalize } from '@mui/material';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import { colors } from '@styles/colors';
import { useRouter } from 'next/router';

export default function BreadCrumb() {
  const router = useRouter();

  let items = router.asPath
    .split('/')
    .filter((item) => item !== '')
    .map((item, index, arr) => {
      const href = `/${arr.slice(0, index + 1).join('/')}`;
      return { label: item, href };
    });
  items = [{ label: 'Home', href: '/' }, ...items];
  if (router.asPath === '/') return null;
  return (
    <Box sx={{ paddingY: 2 }}>
      <Breadcrumbs separator={<KeyboardArrowRightIcon fontSize="small" />}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          if (item.href && !isLast) {
            return (
              <Link
                path={item.href}
                key={item.label}
                label={capitalize(item.label)}
              />
            );
          } else {
            return (
              <Typography
                fontWeight={600}
                color={isLast ? colors.grey : colors.darkGrey}
                key={item.label}
              >
                {capitalize(item.label.split('?')[0])}
              </Typography>
            );
          }
        })}
      </Breadcrumbs>
    </Box>
  );
}
