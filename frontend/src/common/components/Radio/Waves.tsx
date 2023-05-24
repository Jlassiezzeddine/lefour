import Stack from '@mui/material/Stack';
import { keyframes, styled } from '@mui/material/styles';

const myKeyframe = keyframes`
    0% { height: 24px;  },
    50%  { height: 4px;  },
`;

type BarItem = { index: number; isPlaying: boolean };
const Bar = styled('div')(({ index, isPlaying }: BarItem) => ({
  width: '4px',
  height: isPlaying ? '24px' : '2px',
  backgroundColor: 'white',
  marginLeft: '2px',
  borderRadius: '4px',
  animation: isPlaying ? `${myKeyframe} .8s infinite ease-in-out` : '',
  animationDelay: `${index * 0.3}s`,
  transition: '.3s ease-in-out',
}));
const Waves = ({ isPlaying }: { isPlaying: boolean }) => {
  return (
    <Stack direction="row" alignItems="center" spacing={0.5}>
      {Array.from({ length: 5 }).map((item, index) => (
        <Bar key={index} index={index} isPlaying={isPlaying} />
      ))}
    </Stack>
  );
};

export default Waves;
