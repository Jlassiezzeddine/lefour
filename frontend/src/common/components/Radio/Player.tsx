import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import VolumeOff from '@mui/icons-material/VolumeOff';
import VolumeUp from '@mui/icons-material/VolumeUp';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { SxProps, Theme } from '@mui/material/styles';
import { colors } from '@styles/colors';
import React, { useRef, useState } from 'react';
import Waves from './Waves';

interface IProps {
  src?: string;
  autoPlay?: boolean;
}
const AudioPlayer = ({
  src = 'http://stream.zeno.fm/ntkummxxtkdvv',
  autoPlay = true,
}: IProps) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(autoPlay);
  const [volume, setVolume] = React.useState<number>(30);
  const audioPlayer = useRef<HTMLAudioElement>(null);

  const getVolumeIcon = (volume: number) => {
    switch (true) {
      case volume === 0:
        return <VolumeOff />;
      case volume <= 33 && volume !== 0:
        return <VolumeMuteIcon />;
      case volume > 33 && volume < 66:
        return <VolumeDownIcon />;
      default:
        return <VolumeUp />;
    }
  };
  const changeVolume = (newValue: number) => {
    setVolume(newValue as number);
    if (audioPlayer.current)
      audioPlayer.current.volume = (newValue as number) / 100;
  };

  const toggleMute = () => {
    if (audioPlayer.current) {
      audioPlayer.current.volume = 0;
    }
    setVolume(0);
  };

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current?.play();
    } else {
      audioPlayer.current?.pause();
    }
  };

  const style: SxProps<Theme> = {
    zIndex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '64px',
    backgroundColor: 'rgba(0,0,0,0.75)',
  };
  return (
    <Box sx={style}>
      <audio
        style={{ display: 'none' }}
        ref={audioPlayer}
        src={src}
        autoPlay={autoPlay}
        controls
      ></audio>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ height: '100%' }}
        paddingX={4}
      >
        <Stack direction="row" alignItems="center" width={200}>
          {isPlaying ? (
            <IconButton
              sx={{ color: '#fff' }}
              onClick={togglePlayPause}
              size="medium"
            >
              <PauseIcon fontSize="medium" />
            </IconButton>
          ) : (
            <IconButton
              sx={{ color: '#fff' }}
              onClick={togglePlayPause}
              size="medium"
            >
              <PlayArrowIcon fontSize="medium" />
            </IconButton>
          )}
          <Waves isPlaying={isPlaying} />
        </Stack>
        <Typography color={colors.light}>AFRICOLOGY</Typography>
        <Stack
          spacing={2}
          width={200}
          direction="row"
          sx={{ padding: '12px' }}
          alignItems="center"
        >
          <IconButton sx={{ color: '#fff' }} onClick={toggleMute}>
            {getVolumeIcon(volume)}
          </IconButton>
          <Slider
            size="small"
            aria-label="Volume"
            value={volume}
            onChange={(event, value) => changeVolume(value as number)}
            sx={{ color: colors.light }}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default AudioPlayer;
