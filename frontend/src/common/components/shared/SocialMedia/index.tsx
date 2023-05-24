import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import IconButton from '@mui/material/IconButton';
import { colors } from '@styles/colors';
import NextLink from 'next/link';
import { SocialMediaType } from 'src/common/types/SocialMedia';

// eslint-disable-next-line no-unused-vars
const ICONS_MAP: { [key in SocialMediaType]: JSX.Element } = {
  instagram: <InstagramIcon />,
  youtube: <YouTubeIcon />,
};

interface IProps {
  type: SocialMediaType;
  path: string;
  color: string;
}
const SocialMedia = ({ type, path, color = colors.dark }: IProps) => {
  return (
    <IconButton size="small" sx={{ color }}>
      <NextLink href={path} target="_blank" style={{ color: color }}>
        {ICONS_MAP[type]}
      </NextLink>
    </IconButton>
  );
};
export default SocialMedia;
