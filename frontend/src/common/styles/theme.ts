import { createTheme } from '@mui/material/styles';
import { colors } from './colors';

const BORDER_RADIUS = 2;
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      // small
      sm: 600,
      // medium
      md: 900,
      // large
      lg: 1200,
      // extra-large
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: colors.dark,
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Titillium Web"',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: BORDER_RADIUS,
          boxShadow: 'unset',
        },
        sizeLarge: {
          maxHeight: '56px',
          padding: '16px 22px',
        },
      },
    },
    MuiOutlinedInput: {
      defaultProps: {
        size: 'medium',
      },
      styleOverrides: {
        root: {
          borderRadius: BORDER_RADIUS,
        },
      },
    },
  },
});

export default theme;
