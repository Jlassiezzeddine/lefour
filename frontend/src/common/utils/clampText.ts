import { SxProps, Theme } from '@mui/material/styles';

export default function clampText(lines: number) {
  const shortTextStyle: SxProps<Theme> = {
    display: '-webkit-box',
    WebkitLineClamp: lines,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  };
  return shortTextStyle;
}
