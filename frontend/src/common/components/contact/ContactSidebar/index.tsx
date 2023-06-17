import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { colors } from '@styles/colors';
import { useRouter } from 'next/router';
import { useWindowSize } from 'usehooks-ts';
import ContactSidebarItem, { ISidebarItem } from './ContactSidebarItem';
import { useContact } from 'src/common/hooks/api/contact';

export default function ContactSidebar() {
  const { query } = useRouter();
  const { email, address, phone } = useContact();
  const { width, height } = useWindowSize();
  const theme = useTheme();
  const ITEMS_MAP: ISidebarItem[] = [
    {
      slug: 'quote',
      title: 'Get A Quote',
      subtitle: 'Start your project now',
      content: '',
    },
    {
      slug: 'contact',
      title: 'Chat to us',
      subtitle: 'Our friendly team is here to help.',
      content: email,
    },

    {
      slug: 'map',
      title: 'Studio',
      subtitle: 'Come say Hello at our studio',
      content: address,
    },
    {
      slug: 'phone',
      title: 'Call us',
      subtitle: 'Mon-Fri from 8am to 5pm',
      content: phone,
    },
  ];

  return (
    <Stack
      spacing={2}
      sx={{ height: `calc(${height}px - 96px - 128px)`, minHeight: '600px' }}
    >
      {ITEMS_MAP.map((item) => (
        <Box key={item.slug}>
          <ContactSidebarItem
            key={item.slug}
            item={item}
            isActive={
              width > theme.breakpoints.values.md && !query.view
                ? item.slug === 'contact'
                : query.view === item.slug
            }
          />
          {item.slug === 'quote' && (
            <Box mt={2}>
              <Divider>
                <Typography color={colors.grey}>Or</Typography>
              </Divider>
            </Box>
          )}
        </Box>
      ))}
    </Stack>
  );
}
