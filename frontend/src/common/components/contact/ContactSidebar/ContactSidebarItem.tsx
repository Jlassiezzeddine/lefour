import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { SxProps, Theme, lighten } from '@mui/material/styles';
import { ContactView } from '..';
import { colors } from '../../../styles/colors';
import Link from '../../shared/Atoms/Link';
import Spacer from '../../shared/Atoms/Spacer';
import { useContact } from 'src/common/hooks/api/contact';
export interface ISidebarItem {
  slug: ContactView | 'phone';
  title: string;
  subtitle?: string;
  content?: string;
}
interface IProps {
  isActive: boolean;
  item: ISidebarItem;
}
export default function ContactSidebarItem({ isActive, item }: IProps) {
  const { phone } = useContact();
  const { slug, title, subtitle, content } = item;
  const style: SxProps<Theme> = {
    display: 'block',
    padding: 2,
    border: `1px solid ${isActive ? colors.grey : colors.lightGrey}`,
    borderRadius: 2,

    backgroundColor: isActive ? lighten(colors.lightGrey, 0.8) : 'transparent',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: lighten(colors.lightGrey, 0.8),
      border: `1px solid ${colors.grey}`,
    },
  };

  const renderIcon = (slug: ContactView | 'phone') => {
    switch (true) {
      case slug === 'contact':
        return <ChatOutlinedIcon />;
      case slug === 'quote':
        return <CampaignOutlinedIcon />;
      case slug === 'map':
        return <PlaceOutlinedIcon />;
      case slug === 'phone':
        return <LocalPhoneOutlinedIcon />;

      default:
        return null;
    }
  };
  return (
    <Link
      path={
        slug === 'quote'
          ? `/contact?view=${slug}&step=1`
          : slug === 'phone'
          ? `tel:${phone}`
          : `/contact?view=${slug}`
      }
      sx={style}
      label={slug}
    >
      <Stack direction="row" spacing={2}>
        <Box pt={slug === 'contact' ? 0.25 : 0}>{renderIcon(slug)}</Box>
        <Stack textAlign="start">
          <Typography fontSize={16} fontWeight={600} color={colors.dark}>
            {title}
          </Typography>
          {subtitle && (
            <Typography fontSize={14} fontWeight={400} color={colors.grey}>
              {subtitle}
            </Typography>
          )}
          <Spacer size={1} />
          {content && (
            <Typography fontSize={14} fontWeight={600} color={colors.dark}>
              {content}
            </Typography>
          )}
        </Stack>
      </Stack>
    </Link>
  );
}
