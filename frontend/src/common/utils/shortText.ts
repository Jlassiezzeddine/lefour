import { SxProps, Theme } from '@mui/material/styles';

export default function shortText(
  maxWidth: string | undefined = 'fit-content'
) {
  const shortTextStyle: SxProps<Theme> = {
    maxWidth,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  };
  return shortTextStyle;
}
