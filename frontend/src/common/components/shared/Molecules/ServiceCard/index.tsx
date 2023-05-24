import Button from '@components/shared/Atoms/Button';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import EventIcon from '@mui/icons-material/Event';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import MicNoneOutlinedIcon from '@mui/icons-material/MicNoneOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import SpeakerOutlinedIcon from '@mui/icons-material/SpeakerOutlined';
import TuneIcon from '@mui/icons-material/Tune';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { SxProps, Theme, lighten } from '@mui/material/styles';
import { colors } from '@styles/colors';
import { ILink } from 'src/common/types/Link';
import Link from '../../Atoms/Link';
import Spacer from '../../Atoms/Spacer';

export const renderServiceIcon = (icon?: string) => {
  switch (true) {
    case icon === 'audio':
      return <HeadphonesOutlinedIcon />;
    case icon === 'music-production':
      return <MusicNoteOutlinedIcon />;
    case icon === 'recording':
      return <MicNoneOutlinedIcon />;
    case icon === 'mixing':
      return <TuneIcon />;
    case icon === 'mastering':
      return <GraphicEqIcon />;
    case icon === 'video':
      return <VideocamOutlinedIcon />;
    case icon === 'video-shooting':
      return <VideocamOutlinedIcon />;
    case icon === 'video-editing':
      return <ContentCutIcon />;
    case icon === 'events':
      return <EventIcon />;
    case icon === 'events-organization':
      return <EventIcon />;
    case icon === 'live-performances':
      return <SpeakerOutlinedIcon />;
    case icon === 'other':
      return <AutoAwesomeOutlinedIcon />;

    default:
      return null;
  }
};

interface IProps {
  service: ILink;
  dark?: boolean;
}
export default function ServiceCard({ service, dark = false }: IProps) {
  const style: SxProps<Theme> = {
    border: `1px solid ${colors.lightGrey}`,
    borderRadius: 2,
    padding: 2,
    width: '100%',
    color: dark ? colors.light : colors.dark,
    '& .icon': {
      border: `1px solid ${dark ? colors.light : colors.dark}`,
      borderRadius: 200,
      padding: 1,
      width: 'fit-content',
      aspectRatio: '1 / 1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      '&: svg': {
        color: dark ? colors.light : colors.dark,
      },
    },
    '&:hover': {
      '& .icon': {
        border: `1px solid ${colors.dark}`,
      },
      '& p': {
        color: colors.dark,
      },
      '& svg': {
        color: colors.dark,
      },
      '& button': {
        color: colors.dark,
        '& svg': {
          color: colors.dark,
          marginLeft: 2,
          maxWidth: 'fit-content',
          opacity: 1,
          transform: 'translateX(0)',
        },
      },
    },
  };
  return (
    <Link
      label="Learn more"
      path={service.path}
      sx={{
        borderRadius: 2,
        transition: 'all.3s ease',
        '&:hover': {
          backgroundColor: lighten(colors.lightGrey, 0.8),
        },
      }}
    >
      <Stack key={service.label} sx={style}>
        <Box className="icon">{renderServiceIcon(service.slug)}</Box>
        <Spacer size={4} />
        <Typography fontSize={16} fontWeight={600}>
          {service.label}
        </Typography>
        <Spacer size={1} />
        <Typography
          fontSize={16}
          fontWeight={400}
          sx={{
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {service.description}
        </Typography>
        <Spacer size={4} />
        <Stack
          direction="row"
          spacing={2}
          justifyContent="start"
          alignItems="center"
        >
          <Button dark={dark} label="Learn more" variant="tertiary" />
        </Stack>
      </Stack>
    </Link>
  );
}
