import Image from 'next/image';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { SxProps, Theme } from '@mui/material/styles';
import React, { useEffect, useRef, useState } from 'react';
import { IRelease, ReleaseDate } from 'src/common/types/Release';
import formatDate from 'src/common/utils/formatDate';
import { colors } from '@styles/colors';
import Typography from '@mui/material/Typography';
import ChannelIcon from './ChannelIcon';
import Link from '@components/shared/Atoms/Link';
import IconButton from '@mui/material/IconButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Spacer from '@components/shared/Atoms/Spacer';
import PauseIcon from '@mui/icons-material/Pause';

interface IProps {
  release: IRelease;
}

function ReleaseCard({ release }: IProps) {
  const getReleaseDate = (releaseDate: ReleaseDate) =>
    releaseDate.yearOnly
      ? new Date(releaseDate.date).getFullYear()
      : formatDate(releaseDate.date, undefined, {
          dateStyle: 'medium',
        });
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const releaseCardStyle: SxProps<Theme> = {
    aspectRatio: '1 / 1',
    padding: 4,
    borderRadius: '2px',
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      opacity: 0.4,
      backgroundColor: `${colors.dark}`,
      zIndex: -1,
    },
  };
  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current?.pause();
      console.log('[PLAYER] : pause()');
    } else {
      audioRef.current?.play();
      console.log('[PLAYER] : play()');
    }
    setIsPlaying((prev) => !prev);
  };
  const renderPlayerIcon = () => {
    return isPlaying ? <PauseIcon /> : <PlayArrowIcon />;
  };

  const endPlay = () => setIsPlaying(false);
  useEffect(() => {
    audioRef.current?.addEventListener('ended', endPlay);
    return () => window.removeEventListener('ended', endPlay);
  }, [audioRef]);
  return (
    <Box sx={releaseCardStyle}>
      <Image
        src={release.cover.url}
        alt={release.cover.alt}
        quality={100}
        layout="fill"
        objectFit="cover"
        style={{ zIndex: -2 }}
      />
      <Stack
        height="100%"
        justifyContent="space-between"
        sx={{ color: colors.light }}
      >
        <Stack direction="row" justifyContent="space-between">
          <Typography>{release.genre}</Typography>
          <Typography>{getReleaseDate(release.releaseDate)}</Typography>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <Box>
            {release.preview.url && (
              <>
                <audio ref={audioRef} src={release.preview.url}></audio>
                <IconButton
                  onClick={toggleAudio}
                  size="large"
                  sx={{
                    color: colors.light,
                    border: `1px solid ${colors.light}`,
                  }}
                >
                  {renderPlayerIcon()}
                </IconButton>
                <Spacer size={2} />
              </>
            )}
            <Typography>Title: {release.title}</Typography>
            {release.album && <Typography>Album: {release.album}</Typography>}

            <Stack direction="row" alignItems="center" spacing={2}>
              <Typography>Artist: {release.artist.name}</Typography>
            </Stack>
          </Box>
          <Stack spacing={1} zIndex={2}>
            {release.channels.map((el) => (
              <Link external key={el.id} path={el.url} label={''}>
                <ChannelIcon channel={el.name} />
              </Link>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}

export default ReleaseCard;
